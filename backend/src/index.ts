import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

import authRoutes from './routes/auth';
import casesRoutes from './routes/cases';
import adminRoutes from './routes/admin';
import inventoryRoutes from './routes/inventory';
import userSettingsRoutes from './routes/userSettings';
import contractsRoutes from './routes/contracts';
import { startBotSimulator } from './services/botSimulator';
import { prisma } from './prisma';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  }
});

app.use(cors());
app.use(express.json());

// Pass io to express app
app.set('io', io);

app.use('/api/auth', authRoutes);
app.use('/api/cases', casesRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/settings', userSettingsRoutes);
app.use('/api/inventory', contractsRoutes); // Will map to /api/inventory/contract

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start bot simulator
startBotSimulator(io);

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
