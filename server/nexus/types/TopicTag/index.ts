import { objectType } from 'nexus'

export const TopicTag = objectType({
  name: 'TopicTag',
  definition(t) {
    t.nonNull.string('tag')
  },
})
