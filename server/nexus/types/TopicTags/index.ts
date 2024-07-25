import { Prisma } from '.prisma/client'
import { extendType } from 'nexus'

export const topicTagsExtendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bani684SocietyTopicTagss({
      alias: 'topicTags',
      type: 'TopicTag',
      filtering: true,
      ordering: true,
      resolve: async (_, args, ctx) => {
        const variables = args as Prisma.bani684_society_topic_tagsFindManyArgs

        const result = await ctx.prisma.bani684_society_topic_tags.findMany({
          ...variables,
          distinct: ['tag'],
          select: {
            tag: true,
          },
        })

        return result
      },
    })
  },
})
