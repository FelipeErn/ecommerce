// backend/prisma/seed.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const category = await prisma.category.create({
    data: {
      name: 'Eletrônicos',
    },
  })

  await prisma.product.create({
    data: {
      name: 'Fone de Ouvido Bluetooth',
      description: 'Qualidade de som excelente',
      price: 199.90,
      stock: 100,
      imageUrl: 'https://via.placeholder.com/150',
      categoryId: category.id,
    },
  })
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
