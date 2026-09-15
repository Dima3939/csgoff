import { Router } from 'express';
import { requireAuth, AuthRequest } from '../middlewares/auth';
import { prisma } from '../prisma';

const router = Router();

// Save Trade URL
router.post('/trade-url', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const { tradeUrl } = req.body;
    
    // Basic validation (e.g. https://steamcommunity.com/tradeoffer/new/?partner=...)
    if (!tradeUrl || !tradeUrl.includes('steamcommunity.com/tradeoffer/new')) {
      return res.status(400).json({ error: 'Invalid Steam Trade URL' });
    }

    const user = await prisma.user.update({
      where: { id: req.user!.id },
      data: { tradeUrl }
    });

    res.json({ message: 'Trade URL updated successfully', tradeUrl: user.tradeUrl });
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
});

// Mock Steam Link (Simulating a successful Steam OAuth return)
router.post('/mock-link-steam', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const fakeSteamId = '76561198' + Math.floor(Math.random() * 100000000);
    
    const user = await prisma.user.update({
      where: { id: req.user!.id },
      data: { steamId: fakeSteamId }
    });

    res.json({ message: 'Steam Account Linked (Mock)', steamId: user.steamId });
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
});

export default router;
