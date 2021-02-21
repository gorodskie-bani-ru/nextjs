import {
  // intArg,
  makeSchema,
  // nonNull,
  // objectType,
  // stringArg,
  // inputObjectType,
  // arg,
  asNexusMethod,
  // enumType,
} from 'nexus'

import './fix/pluralize'

import { GraphQLDateTime } from 'graphql-iso-date'
import { nexusPrisma } from 'nexus-plugin-prisma'

import * as types from './types'

export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

export const schema = makeSchema({
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  shouldExitAfterGenerateArtifacts: process.env.NODE_ENV !== 'development',
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      // atomicOperations: true,

      /**
       * Это обязательно, иначе в аргументах будет first, который призма теперь не знает
       */
      paginationStrategy: 'prisma',

      outputs: {
        typegen: __dirname + '/generated/nexusPrisma.ts',
      },
    }),
  ],
  types: {
    ...types,
    // Query,
    // Resource,
    DateTime,
  },
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'PrismaContext',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
  prettierConfig:
    process.env.NODE_ENV === 'development'
      ? require.resolve(process.cwd() + '/.prettierrc')
      : undefined,
})
