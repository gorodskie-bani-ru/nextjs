import { extendType } from 'nexus'

export const Rating = extendType({
  type: 'Resource',
  definition(t) {
    t.boolean('foot')
  },
})
