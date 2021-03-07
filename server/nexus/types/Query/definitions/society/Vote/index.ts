/* eslint-disable @typescript-eslint/camelcase */
import { Prisma } from '@prisma/client'
import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { userSelect } from '../../User'

export const votes = (t: ObjectDefinitionBlock<'Query'>) => {
  t.crud.bani684SocietyVotess({
    type: 'Vote',
    alias: 'votes',
    description: 'Оценки',
    filtering: true,
    ordering: true,
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_society_votesFindManyArgs,
        'where'
      >

      return ctx.prisma.bani684_society_votes.findMany({
        ...variables,
        select: {
          id: true,
          target_class: true,
          target_id: true,
          thread_id: true,
          type: true,
          user_id: true,
          vote_date: true,
          vote_direction: true,
          vote_value: true,
          Type: true,
          CreatedBy: {
            select: userSelect,
          },
        },
      })
    },
  })
}
