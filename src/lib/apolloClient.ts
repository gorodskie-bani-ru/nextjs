import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  // NormalizedCacheObject,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { concatPagination } from '@apollo/client/utilities'
import URI from 'urijs'
import fetch from 'cross-fetch'
import { ApolloClientNormolized } from './interfaces'

import chalk from 'chalk'
import Debug from 'debug'
const debug = Debug('apolloClient')

let apolloClient: ApolloClientNormolized

function createApolloClient() {
  const uri = new URI()

  const origin = uri.origin()

  let endpoint

  if (origin) {
    endpoint = `${origin}/api/`
  } else {
    /**
     * ToDo: fix for vercel.com
     */

    // const os = require('os')

    // const hostname = os.hostname()

    // const PORT = process.env.PORT || 3000

    // origin = `http://${hostname}:${PORT}`
    endpoint =
      process.env.API_ENDPOINT ||
      'https://nextjs-graphql-with-prisma-simple.vercel.app/api'
  }

  const errorLink = onError((error) => {
    const { graphQLErrors, networkError } = error

    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )

    if (networkError) {
      console.error(`[Network error]: ${networkError}`)
    }
  })

  const httpLink = new HttpLink({
    fetch,
    uri: endpoint, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: errorLink.concat(httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initializeApollo(initialState?: any) {
  // debug('initializeApollo')

  debug(chalk.red('initializeApollo'))

  const _apolloClient = apolloClient ?? createApolloClient()
  // const _apolloClient = createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') {
    return _apolloClient
  }

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(initialState: any) {
  // console.log('useApollo');

  debug(chalk.green('useApollo'))

  return useMemo(() => initializeApollo(initialState), [initialState])
}

// export function useApollo(initialState: any, initialStore?: ApolloClientNormolized) {

//   // console.log('useApollo');

//   debug(chalk.green('useApollo'))

//   /**
//    * На стороне сервера по умолчанию аполло-клиент создается при каждом обращении.
//    * Это нам не очень подходит, так как сложно создать общий кэш всех запросов на выходе,
//    * да и с производительностью похуже.
//    * При этом надо учитывать, что клиент должен быть уникальный на каждый запрос к серверу.
//    * Поэтому мы передаем готовый клиент из главного App.
//    * Надо будет все внимательно оттестировать, но по идее все должно работать норм.
//    */
//   // const store = useMemo(() => initialStore || initializeApollo(initialState), [initialState, initialStore])
//   const store = useMemo(() => initializeApollo(initialState), [initialState, initialStore])

//   return store
// }
