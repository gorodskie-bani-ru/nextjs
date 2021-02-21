import {
  // intArg,
  makeSchema,
  // nonNull,
  // objectType,
  // stringArg,
  // inputObjectType,
  // arg,
  // asNexusMethod,
  // enumType,
} from 'nexus'

// import { GraphQLDateTime } from 'graphql-iso-date'
import { nexusPrisma } from 'nexus-plugin-prisma'

// export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

// const Query = objectType({
//   name: 'Query',
//   definition(t) {
//     // t.nonNull.list.nonNull.field("resources", {
//     //   type: Resource,
//     //   resolve: (_, _args, ctx) => {

//     //     return ctx.prisma.bani684_site_content.findMany();
//     //   }
//     // });

//     t.crud.bani684SiteContents({
//       alias: "resources",
//       type: "Resource",
//       ordering: true,
//       filtering: true,
//     });
//   },
// })

// const Resource = objectType({
//   name: 'Resource',
//   sourceType: {
//     module: '@prisma/client',
//     export: "bani684_site_content",
//   },
//   definition(t) {
//     t.nonNull.int('id')
//     t.nonNull.string('pagetitle')
//     // t.nonNull.date("createdon")
//     // t.string("content")
//     // t.nonNull.string('email')
//     // t.nonNull.list.nonNull.field('posts', {
//     //   type: 'Post',
//     //   resolve: (parent, _, context) => {
//     //     return context.prisma.user
//     //       .findUnique({
//     //         where: { id: parent.id || undefined },
//     //       })
//     //       .posts()
//     //   },
//     // })
//   },
// })

export const schema = makeSchema({
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      atomicOperations: true,
      paginationStrategy: 'prisma',
    }),
  ],
  types: [
    // Query,
    // Resource,
    // DateTime,
  ],
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
})
