import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.dropHistory.deleteMany();
  await prisma.inventory.deleteMany();
  await prisma.caseItem.deleteMany();
  await prisma.item.deleteMany();
  await prisma.case.deleteMany();

  // Create common skins
  const p250 = await prisma.item.create({
    data: { name: 'P250 | Sand Dune', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwjFU0OGvZqBSLPmUBnPelesn5-RrSXDlwRhx5TjSwtmocCifPwQpDpshReBfsxPrk4DhNu3jshue1dy8VcXxuA', price: 0.10, rarity: 'blue' }
  });
  
  const glock = await prisma.item.create({
    data: { name: 'Glock-18 | Fade', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1a7s2oaaBoH_yaCW-Ej-8u5bZvHnq1w0Vz62TUzNj4eCiVblMmXMAkROJeskLpkdXjMrzksVTAy9US8PY25So', price: 500.00, rarity: 'pink' }
  });

  const m4a1s = await prisma.item.create({
    data: { name: 'M4A1-S | Hyper Beast', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9JuPh5SjuMlxgmoCm6lob-KT-JbwF1WZEjR-YJskK9k9XiYePltAeNjYlAxSn5j34dvCZstb4LB6Ut-7qX0V8Xkv5_2A', price: 25.00, rarity: 'purple' }
  });

  const ak47 = await prisma.item.create({
    data: { name: 'AK-47 | Redline', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-RHGavzedxuPUnFniykEtzsWWBzoyuIiifaAchDZUjTOZe4RC_w4buM-6z7wzbgokUyzK-0H08hRGDMA', price: 15.50, rarity: 'pink' }
  });

  const awp = await prisma.item.create({
    data: { name: 'AWP | Asiimov', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6V-Kf2cGFidxOp_pewnF3nhxEt0sGnSzN76dH3GOg9xC8FyEORftRe-x9PuYurq71bW3d8UnjK-0H0YSTpMGQ', price: 60.00, rarity: 'red' }
  });

  const deagle = await prisma.item.create({
    data: { name: 'Desert Eagle | Printstream', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-DHG6e1f1iouRoQha_nBovp3OGmdeqInyVP1V0XsYlRbEI50a5wNyzZr605AyI3t5MmCSohylAuC89_a9cBoMY9UkV', price: 35.00, rarity: 'purple' }
  });

  const howl = await prisma.item.create({
    data: { name: 'M4A4 | Howl', image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afVSKP-EAm6extF6ueZhW2exwkl2tmTXwt39eCiUPQR2DMN4TOVetUK8xoLgM-K341eM2otDnC6okGoXufBz_TAB', price: 3500.00, rarity: 'gold' }
  });

  // Create Cases
  const case1 = await prisma.case.create({
    data: {
      name: 'CHROMA 3 CASE',
      image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHAVuKf7PaJucPLHW2TExb9z4OdvHirixEomtW7cyduvci2VZ1AiCsR2Q_lK7EdW_VBhrw',
      price: 2.00
    }
  });

  const case2 = await prisma.case.create({
    data: {
      name: 'GAMMA CASE',
      image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_frHEVtvP5bPZrd6XECmOSxe0v4bRoTnnjwBkitWrRm4yoeX3GagMnCZZ2FPlK7EcEv22BnQ',
      price: 5.00
    }
  });

  const case3 = await prisma.case.create({
    data: {
      name: 'SNAKEBITE CASE',
      image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3oVvvT4bfI4dvTLCGTCmLl16ec7TX_mk08k42iHwtqscy-WPVUmCZJ4R_lK7Ed8Q6OYtw',
      price: 15.00
    }
  });

  const case4 = await prisma.case.create({
    data: {
      name: 'BROKEN FANG CASE',
      image: 'https://community.akamai.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3UVu6P-MPQ0dKbCVzLGx7wgtbM6S3jhw0V25m-EnNj7JS7GaQ4nD8QiRflK7EfH0YGFHg',
      price: 50.00
    }
  });

  // Assign items to Case 1 (Cheap)
  await prisma.caseItem.createMany({
    data: [
      { caseId: case1.id, itemId: p250.id, chance: 0.8 }, 
      { caseId: case1.id, itemId: ak47.id, chance: 0.15 }, 
      { caseId: case1.id, itemId: awp.id, chance: 0.05 }, 
    ]
  });

  // Assign items to Case 2 (Medium)
  await prisma.caseItem.createMany({
    data: [
      { caseId: case2.id, itemId: deagle.id, chance: 0.60 }, 
      { caseId: case2.id, itemId: m4a1s.id, chance: 0.30 }, 
      { caseId: case2.id, itemId: awp.id, chance: 0.10 }, 
    ]
  });

  // Assign items to Case 3 (Expensive)
  await prisma.caseItem.createMany({
    data: [
      { caseId: case3.id, itemId: m4a1s.id, chance: 0.60 }, 
      { caseId: case3.id, itemId: glock.id, chance: 0.35 }, 
      { caseId: case3.id, itemId: howl.id, chance: 0.05 }, 
    ]
  });

  // Assign items to Case 4 (Whale)
  await prisma.caseItem.createMany({
    data: [
      { caseId: case4.id, itemId: glock.id, chance: 0.80 }, 
      { caseId: case4.id, itemId: howl.id, chance: 0.20 }, 
    ]
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
