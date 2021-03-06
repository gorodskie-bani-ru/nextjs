import { objectType } from 'nexus'

export const Topic = objectType({
  name: 'Topic',
  description: 'Топик',

  definition(t) {
    t.implements('ResourceInterface')
  },
})
