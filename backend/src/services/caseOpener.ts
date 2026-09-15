import { prisma } from '../prisma';

export const openCase = async (userId: number, caseId: number) => {
  return await prisma.$transaction(async (tx) => {
    // 1. Get user and case
    const user = await tx.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    const box = await tx.case.findUnique({ 
      where: { id: caseId },
      include: { items: { include: { item: true } } }
    });
    if (!box) throw new Error('Case not found');
    if (box.items.length === 0) throw new Error('Case is empty');

    // 2. Check balance
    if (user.balance < box.price) throw new Error('Insufficient balance');

    // 3. Deduct balance
    await tx.user.update({
      where: { id: user.id },
      data: { balance: user.balance - box.price }
    });

    // 4. RNG Logic
    const random = Math.random();
    let cumulative = 0;
    let selectedItem = box.items[0].item; // fallback

    for (const caseItem of box.items) {
      cumulative += caseItem.chance;
      if (random <= cumulative) {
        selectedItem = caseItem.item;
        break;
      }
    }

    // 5. Add item to user inventory
    await tx.inventory.create({
      data: {
        userId: user.id,
        itemId: selectedItem.id
      }
    });

    // 6. Record drop history
    const drop = await tx.dropHistory.create({
      data: {
        userId: user.id,
        caseId: box.id,
        itemId: selectedItem.id
      },
      include: {
        user: true,
        case: true,
        item: true
      }
    });

    return drop;
  });
};
