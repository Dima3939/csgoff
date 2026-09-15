import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, AuthRequest } from '../middlewares/auth';

const router = Router();

// POST /api/inventory/contract
router.post('/contract', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const { inventoryIds } = req.body; // array of Inventory IDs
    
    if (!Array.isArray(inventoryIds) || inventoryIds.length !== 10) {
      return res.status(400).json({ error: 'EXACTLY 10 ITEMS REQUIRED FOR CONTRACT' });
    }

    const result = await prisma.$transaction(async (tx) => {
      // Fetch the 10 items
      const invItems = await tx.inventory.findMany({
        where: {
          id: { in: inventoryIds },
          userId: req.user!.id
        },
        include: { item: true }
      });

      if (invItems.length !== 10) {
        throw new Error('ONE OR MORE ITEMS NOT FOUND IN YOUR INVENTORY');
      }

      // Calculate total value
      const totalValue = invItems.reduce((sum, inv) => sum + inv.item.price, 0);
      
      // Target value is between 1.1x and 2.5x of the AVERAGE price of the 10 items.
      // Wait, standard CSGO tradeup takes 10 items, gives 1 item of the next tier.
      // In value terms: 10 items of $1 = $10 total. The output is usually worth around $10.
      // So let's aim for an item worth roughly the totalValue (0.9x to 1.5x).
      const minTarget = totalValue * 0.9;
      const maxTarget = totalValue * 2.0;

      // Find possible items in the DB
      const possibleItems = await tx.item.findMany({
        where: {
          price: {
            gte: minTarget,
            lte: maxTarget
          }
        }
      });

      let wonItem;
      if (possibleItems.length > 0) {
        // Pick random from possible
        wonItem = possibleItems[Math.floor(Math.random() * possibleItems.length)];
      } else {
        // If no items in range, just find the item closest to totalValue
        const allItems = await tx.item.findMany();
        wonItem = allItems.reduce((prev, curr) => {
          return Math.abs(curr.price - totalValue) < Math.abs(prev.price - totalValue) ? curr : prev;
        });
      }

      // Burn the 10 items
      await tx.inventory.deleteMany({
        where: { id: { in: inventoryIds } }
      });

      // Give the new item
      const newInv = await tx.inventory.create({
        data: {
          userId: req.user!.id,
          itemId: wonItem.id
        },
        include: { item: true }
      });

      return newInv.item;
    });

    res.json({ item: result });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
