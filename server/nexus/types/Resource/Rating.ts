import { objectType } from 'nexus'

export const Rating = objectType({
  name: 'Rating',
  description: 'Рейтинг заведений',

  definition(t) {
    t.implements('ResourceInterface')
  },
})

export const Votes = objectType({
  name: 'Votes',
  description: 'Сгруппированные голоса',
  definition(t) {
    t.int('type')
    t.nonNull.int('target_id')
    t.nonNull.field('Company', {
      type: 'Company',
    })

    t.nonNull.field('avg', {
      type: VotesAvg,
    })
  },
})

export const VotesAvg = objectType({
  description: 'Средние значения голосов',
  name: 'VotesAvg',
  definition(t) {
    t.nonNull.float('voteValueAvg')
  },
})
