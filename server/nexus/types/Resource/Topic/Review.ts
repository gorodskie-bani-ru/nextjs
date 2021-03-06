import { objectType } from 'nexus'

export const Review = objectType({
  name: 'Review',
  description: 'Отзыв о заведении',

  definition(t) {
    t.implements('ResourceInterface')
  },
})
