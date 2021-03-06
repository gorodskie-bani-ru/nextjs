import { objectType } from 'nexus'

export const Comment = objectType({
  name: 'Comment',
  description: 'Комментарий',
  definition(t) {
    t.nonNull.int('id')

    t.string('text')
    t.string('raw_text')
    t.date('createdon')
    t.string('published', {
      description: '0 || 1',
    })
    t.string('deleted', {
      description: '0 || 1',
    })
    t.nonNull.int('comments_count')
    t.field('CreatedBy', {
      type: 'User',
    })
  },
})
