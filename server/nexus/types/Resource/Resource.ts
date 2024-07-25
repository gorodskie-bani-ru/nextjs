import { objectType } from 'nexus'

export const Resource = objectType({
  name: 'Resource',
  definition(t) {
    t.implements('ResourceInterface')
  },
})
