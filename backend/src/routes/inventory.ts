import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, AuthRequest } from '../middlewares/auth';

const router = Router();

// Get user inventory
router.get('/', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const items = await prisma.inventory.findMany({
      where: { userId: req.user!.id },
      include: { item: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Sell an item
router.post('/:id/sell', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const invId = Number(req.params.id);
    
    const result = await prisma.$transaction(async (tx) => {
      // Find inventory item
      const inv = await tx.inventory.findUnique({
        where: { id: invId },
        include: { item: true }
      });

      if (!inv) throw new Error('Item not found');
      if (inv.userId !== req.user!.id) throw new Error('Not your item');

      // Add balance
      const sellPrice = inv.item.price;
      const updatedUser = await tx.user.update({
        where: { id: req.user!.id },
        data: { balance: { increment: sellPrice } }
      });

      // Delete from inventory
      await tx.inventory.delete({ where: { id: invId } });

      return { balance: updatedUser.balance, soldPrice: sellPrice };
    });

    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
