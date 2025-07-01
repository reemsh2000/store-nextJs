import { prisma } from '@/db/prisma';

async function main() {
  try {
    const products = await prisma.product.findMany();
    console.log("✅ Products:", products);
  } catch (err) {
    console.error("❌ Prisma query failed:", err);
  }
}

main();