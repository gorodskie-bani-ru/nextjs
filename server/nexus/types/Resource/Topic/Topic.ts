import { objectType } from 'nexus'

export const Topic = objectType({
  name: 'Topic',
  description: 'Топик',

  definition(t) {
    t.implements('ResourceInterface')

    t.list.nonNull.field('Tags', {
      type: 'TopicTag',
    })
  },
})
