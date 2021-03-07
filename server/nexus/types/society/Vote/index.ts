import { objectType } from 'nexus'

export const Vote = objectType({
  name: 'Vote',
  description: 'Оценка',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.int('target_id')
    t.nonNull.string('target_class')
    t.int('thread_id')
    t.nonNull.string('vote_direction', {
      description: '1 || - || 0',
    })
    t.nonNull.float('vote_value', {
      description: 'Значение оценки',
    })
    t.nonNull.date('vote_date')
    t.int('type')
    t.field('Type', {
      type: 'Rating',
    })
    t.nonNull.int('user_id')
    t.field('CreatedBy', {
      type: 'User',
    })
  },
})
