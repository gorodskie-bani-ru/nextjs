import { objectType } from 'nexus'

export const Rating = objectType({
  name: 'Rating',
  description: 'Рейтинг заведений',

  definition(t) {
    t.implements('ResourceInterface')
  },
})
