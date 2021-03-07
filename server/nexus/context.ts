import { PrismaClient } from '@prisma/client'
import knex, { Knex } from 'knex'

export interface PrismaContext {
  prisma: PrismaClient
  knex: Knex
}

const prisma = new PrismaClient()

export const context: PrismaContext = {
  prisma: prisma,
  knex: knex({
    client: 'mysql',
    connection: process.env.DATABASE_URL,
  }),
}
