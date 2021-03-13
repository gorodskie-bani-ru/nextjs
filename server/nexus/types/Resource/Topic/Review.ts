import { objectType } from 'nexus'

export const Review = objectType({
  name: 'Review',
  description: 'Отзыв о заведении',

  definition(t) {
    t.implements('ResourceInterface')

    t.list.nonNull.field('Tags', {
      type: 'TopicTag',
    })
  },
})
