import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Criando um usuário de teste
  const user = await prisma.user.upsert({
    where: { email: "teste@email.com" }, // email é único
    update: {},
    create: {
      name: "Usuário Teste",
      email: "teste@email.com",
      phone: "11999999999",
    },
  });

  // Criando um torneio de exemplo
  const tournament = await prisma.tournament.create({
    data: {
      name: "Torneio Green Life 2025",
      date: new Date("2025-05-20"),
      time: "18:00",
      rules: "Regras oficiais da FIVB, partidas de 21 pontos.",
      fee: 50.0,
    },
  });

  // Inscrição do usuário no torneio
  await prisma.tournamentRegistration.create({
    data: {
      userId: user.id,
      tournamentId: tournament.id,
      trainingTime: "2 anos",
    },
  });

  console.log("Seed concluído!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
