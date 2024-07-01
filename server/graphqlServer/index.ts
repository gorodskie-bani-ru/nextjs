import { schema } from '../nexus'

import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { context, PrismaContext } from '../nexus/context'

export default new ApolloServer({
  schema,
  // Run GraphQL playground in dev mode only
  // playground: process.env.NODE_ENV === 'development',
  playground: true,
  formatError(error) {
    if (process.env.NODE_ENV !== 'development') {
      console.error('GraphQL Error', error)
      return new Error('Internal server error')
    }

    return error
  },
  context: async (_requestContext: ExpressContext): Promise<PrismaContext> => {
    return {
      ...context,
    }
  },
})
