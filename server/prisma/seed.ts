import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// const userData: Prisma.UserCreateInput[] = []

async function main() {
  // eslint-disable-next-line no-console
  console.log(`Start seeding ...`)
  // for (const u of userData) {
  //   const user = await prisma.user.create({
  //     data: u,
  //   })
  //   console.log(`Created user with id: ${user.id}`)
  // }
  // eslint-disable-next-line no-console
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
