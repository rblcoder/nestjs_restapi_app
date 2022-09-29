// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Article 1' },
    update: {},
    create: {
      title: 'Article 1',
      body: 'Article body 1',
      description:
        "Article description 1",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "Article 2" },
    update: {},
    create: {
      title: "Article 2",
      body: 'Article body 2',
      description:
        'Article description 2',
      published: true,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });