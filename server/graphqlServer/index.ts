// import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'

import { schema } from '../nexus/schema'

import { ApolloServer, ExpressContext } from 'apollo-server-express'
import { context, PrismaContext } from '../nexus/context'

export default new ApolloServer({
  schema,
  // Run GraphQL playground in dev mode only
  playground: process.env.NODE_ENV === 'development',
  context: async (_requestContext: ExpressContext): Promise<PrismaContext> => {
    // let viewer: LandingViewerQuery | undefined

    // const headers: string[][] = []

    // /**
    //  * Заголовки нужны, чтобы было понятно что за сайт
    //  */
    // Object.entries(requestContext.req.headers).map((n) => {
    //   if (
    //     typeof n[1] === 'string' &&
    //     // && !["host", "origin", "referer"].includes(n[0])

    //     /**
    //      * Если эндпоинт на https, то передача заголовка host приводит к 405 ошибке
    //      */
    //     !['host'].includes(n[0])
    //   ) {
    //     headers.push([n[0], n[1]])
    //   }
    // })

    // if (
    //   requestContext.req.headers.host &&
    //   !requestContext.req.headers['x-procraft-referer']
    // ) {
    //   headers.push([
    //     'x-procraft-referer',
    //     process.env.SITE_URL ||
    //       `${requestContext.req.protocol || 'http'}://${
    //         requestContext.req.headers.host
    //       }`,
    //   ])
    // }

    // /**
    //  * Если есть токен, пытаемся получить текущего пользователя
    //  */
    // if (requestContext.req.headers.authorization) {
    //   // console.log('ctx.req.headers', ctx.req.headers);

    //   // const headers = Object.entries(ctx.req.headers);

    //   // console.log('headers', headers);

    //   // viewer = await context.facadePrivateClient
    //   viewer = await context.landingPrivateClient
    //     .request(LandingViewerDocument, {}, headers)
    //     .catch((error: Error) => {
    //       console.error('facadePrivateClient error', error)
    //     })

    //   // console.log('viewer', viewer);

    //   // ctx.res.status(401);

    //   // return ctx.res.end();
    // }

    return {
      // requestContext,
      // viewer,
      // headers,
      ...context,
    }
  },
})
