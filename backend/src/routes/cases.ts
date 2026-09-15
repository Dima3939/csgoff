import { Router } from 'express';
import { prisma } from '../prisma';
import { requireAuth, AuthRequest } from '../middlewares/auth';
import { openCase } from '../services/caseOpener';

const router = Router();

router.get('/', async (req, res) => {
  const cases = await prisma.case.findMany({
    include: { items: { include: { item: true } } }
  });
  res.json(cases);
});

router.post('/:id/open', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const userId = req.user!.id;
    const caseId = parseInt(req.params.id);
    const drop = await openCase(userId, caseId);
    
    // req.app.get('io').emit('live-drop', drop) -> we will do this in the index.js or pass io
    const io = req.app.get('io');
    if (io) {
      io.emit('live-drop', {
        id: drop.id,
        user: drop.user?.username,
        case: drop.case.name,
        item: drop.item,
      });
    }

    res.json(drop);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
