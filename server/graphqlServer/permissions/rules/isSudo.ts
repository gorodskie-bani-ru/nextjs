import { rule } from 'graphql-shield'
import { PrismaContext } from '../../../nexus/context'

/**
 * Авторизованный пользователь является sudo
 */
export const isSudo = rule()((_parent, _args, _ctx: PrismaContext) => {
  return false
})
