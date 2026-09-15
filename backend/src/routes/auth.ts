import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] }
    });

    if (existing) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      }
    });

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user.id, username: user.username, role: user.role, balance: user.balance } });
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
});

import { requireAuth, AuthRequest } from '../middlewares/auth';

router.post('/topup', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const amount = parseFloat(req.body.amount);
    if (isNaN(amount) || amount <= 0) return res.status(400).json({ error: 'Invalid amount' });

    const user = await prisma.user.update({
      where: { id: req.user!.id },
      data: { balance: { increment: amount } }
    });

    res.json({ balance: user.balance });
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
});

router.get('/me', requireAuth, async (req: AuthRequest, res: any) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ 
      id: user.id, 
      username: user.username, 
      role: user.role, 
      balance: user.balance,
      steamId: user.steamId,
      tradeUrl: user.tradeUrl
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal error' });
  }
});

export default router;
