import { prisma } from '../prisma';

export const startBotSimulator = (io: any) => {
  setInterval(async () => {
    try {
      const cases = await prisma.case.findMany({
        include: { items: { include: { item: true } } }
      });
      
      if (cases.length === 0) return;
      
      const randomCase = cases[Math.floor(Math.random() * cases.length)];
      if (randomCase.items.length === 0) return;

      const random = Math.random();
      let cumulative = 0;
      let selectedItem = randomCase.items[0].item;

      for (const caseItem of randomCase.items) {
        cumulative += caseItem.chance;
        if (random <= cumulative) {
          selectedItem = caseItem.item;
          break;
        }
      }

      const botNames = ['John', 'xXx_Sniper_xXx', 'Gabe', 'S1mple', 'NaVi_Fan'];
      const botName = botNames[Math.floor(Math.random() * botNames.length)];

      const drop = await prisma.dropHistory.create({
        data: {
          botName: botName,
          caseId: randomCase.id,
          itemId: selectedItem.id
        },
        include: {
          case: true,
          item: true
        }
      });

      io.emit('live-drop', {
        id: drop.id,
        user: botName,
        case: drop.case.name,
        item: drop.item,
      });

    } catch (e) {
      console.error('Bot simulator error:', e);
    }
  }, 15000); // simulate drop every 15 seconds
};
