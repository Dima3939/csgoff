import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, AuthRequest } from '../middlewares/auth';

const router = Router();

// Middleware to check if admin
const requireAdmin = async (req: AuthRequest, res: any, next: any) => {
  const dbUser = await prisma.user.findUnique({ where: { id: req.user!.id } });
  if (dbUser?.role !== 'admin') {
    return res.status(403).json({ error: 'FORBIDDEN: ADMIN ONLY' });
  }
  next();
};

router.get('/stats', requireAuth, requireAdmin, async (req, res: any) => {
  try {
    const totalUsers = await prisma.user.count();
    const totalCasesOpened = await prisma.dropHistory.count();
    
    // Total profit (just a fake calc for now: sum of all case prices opened minus some payout)
    // Realistically, profit is topups minus withdrawals, but we don't track topups yet.
    const allUsers = await prisma.user.findMany();
    const totalUserBalance = allUsers.reduce((s, u) => s + u.balance, 0);

    res.json({
      totalUsers,
      totalCasesOpened,
      totalUserBalance
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load stats' });
  }
});

router.get('/users', requireAuth, requireAdmin, async (req, res: any) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, username: true, role: true, balance: true, steamId: true, createdAt: true }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed' });
  }
});

router.post('/cases', requireAuth, requireAdmin, async (req, res: any) => {
  try {
    const { name, image, price, items } = req.body;
    // items should be array of { itemId: number, chance: number }

    if (!name || !image || !price || !items || items.length === 0) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newCase = await prisma.$transaction(async (tx) => {
      const c = await tx.case.create({
        data: { name, image, price: Number(price) }
      });

      const caseItems = items.map((i: any) => ({
        caseId: c.id,
        itemId: Number(i.itemId),
        chance: Number(i.chance)
      }));

      await tx.caseItem.createMany({ data: caseItems });

      return c;
    });

    res.json(newCase);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Also need a route to get all items to select from
router.get('/items', requireAuth, requireAdmin, async (req, res: any) => {
  try {
    const items = await prisma.item.findMany();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed' });
  }
});

export default router;
