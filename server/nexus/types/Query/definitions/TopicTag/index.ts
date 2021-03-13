/* eslint-disable @typescript-eslint/camelcase */
import { Prisma } from '.prisma/client'
import { ObjectDefinitionBlock } from 'nexus/dist/blocks'

export const topicTags = (t: ObjectDefinitionBlock<'Query'>) => {
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
}
