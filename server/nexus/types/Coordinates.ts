import { objectType } from 'nexus'

export const Coordinates = objectType({
  name: 'Coordinates',
  definition(t) {
    t.nonNull.float('lat')
    t.nonNull.float('lng')
  },
})
