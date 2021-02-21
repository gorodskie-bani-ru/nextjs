import { PrismaClient } from '@prisma/client'

export interface PrismaContext {
  prisma: PrismaClient
}

const prisma = new PrismaClient()

export const context: PrismaContext = {
  prisma: prisma,
}
