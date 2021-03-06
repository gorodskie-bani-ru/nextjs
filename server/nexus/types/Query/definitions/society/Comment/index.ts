/* eslint-disable @typescript-eslint/camelcase */

import { arg, ObjectDefinitionBlock } from 'nexus/dist/core'
import { Prisma } from '@prisma/client'
import { userSelect } from '../../User'
// import { companiesResolver } from '../resolvers/Resource'

export const comments = (t: ObjectDefinitionBlock<'Query'>) => {
  const defaultWhere: Prisma.bani684_society_commentsFindManyArgs['where'] = {
    deleted: '0',
    published: '1',
  }

  t.nonNull.int('commentsCount', {
    description: 'Количество комментариев',
    args: {
      where: arg({
        type: 'bani684_society_commentsWhereInput',
      }),
    },
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_society_commentsCountArgs,
        'where'
      >

      return ctx.prisma.bani684_society_comments.count({
        ...variables,
        where: {
          ...defaultWhere,
          ...variables.where,
        },
      })
    },
  })

  t.crud.bani684SocietyCommentss({
    alias: 'comments',
    description: 'Комментарии',
    type: 'Comment',
    ordering: true,
    filtering: true,
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_society_commentsFindManyArgs,
        'where'
      >

      return ctx.prisma.bani684_society_comments.findMany({
        ...variables,
        where: {
          ...defaultWhere,
          ...variables.where,
        },
        select: {
          id: true,
          text: true,
          raw_text: true,
          createdon: true,
          published: true,
          deleted: true,
          comments_count: true,
          CreatedBy: {
            select: userSelect,
          },
        },
      })
    },
  })
}
