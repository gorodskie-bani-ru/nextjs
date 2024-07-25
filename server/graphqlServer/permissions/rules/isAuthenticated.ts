import { rule } from 'graphql-shield'
import { PrismaContext } from '../../../nexus/context'

/**
 * Пользователь авторизован
 */
export const isAuthenticated = rule()((_parent, _args, _ctx: PrismaContext) => {
  return false
})
