import { objectType } from 'nexus'
import { coords } from './definitions/coords'

export const City = objectType({
  name: 'City',
  description: 'Город',

  definition(t) {
    t.implements('ResourceInterface')
    coords(t)
  },
})
