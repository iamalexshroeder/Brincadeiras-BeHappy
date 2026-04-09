const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function run() {
  try {
    console.log('Iniciando reset de XP...');
    const result = await p.user.updateMany({
      data: { xp: 0, streak_weeks: 0 }
    });
    console.log('Usuários resetados:', result.count);
    
    await p.xPTransaction.deleteMany({});
    console.log('Transações deletadas.');
    
    await p.notification.deleteMany({});
    console.log('Notificações deletadas.');
    
  } catch (e) {
    console.error('Erro:', e);
  } finally {
    await p.$disconnect();
  }
}

run();
