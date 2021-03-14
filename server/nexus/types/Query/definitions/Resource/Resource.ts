/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { arg, list, nonNull, ObjectDefinitionBlock } from 'nexus/dist/core'
import { Prisma } from '@prisma/client'
import { userSelect } from '../User'

export const Resource = (t: ObjectDefinitionBlock<'Query'>) => {
  const defaultWhere: Prisma.bani684_site_contentFindManyArgs['where'] = {
    deleted: false,
    published: true,
    hidemenu: false,
  }

  // t.crud.bani684SiteContents({
  //   type: "Resource",
  //   alias: "contents",
  //   filtering: true,
  //   ordering: true,
  // });

  t.nonNull.int('resourcesCount', {
    description: 'Количество ресурсов',
    args: {
      where: arg({
        type: 'bani684_site_contentWhereInput',
      }),
    },
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_site_contentFindManyArgs,
        'where'
      >

      return ctx.prisma.bani684_site_content.count({
        ...variables,
        where: {
          ...defaultWhere,
          ...variables.where,
        },
      })
    },
  })

  t.nonNull.list.nonNull.field('resources', {
    description: 'Ресурсы',
    // type: 'ResourceUnion',
    type: 'ResourceInterface',
    args: {
      where: 'bani684_site_contentWhereInput',
      orderBy: list(nonNull('bani684_site_contentOrderByInput')),
      take: 'Int',
      skip: 'Int',
    },
    async resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_site_contentFindManyArgs,
        'where'
      >

      const result = await ctx.prisma.bani684_site_content.findMany({
        ...variables,
        where: {
          ...defaultWhere,
          ...variables.where,
        },
        select: {
          id: true,
          pagetitle: true,
          longtitle: true,
          description: true,
          alias: true,
          uri: true,
          published: true,
          createdby: true,
          createdon: true,
          template: true,
          searchable: true,
          content: true,
          editedby: true,
          editedon: true,
          properties: true,
          TemplateVarValues: {
            select: {
              id: true,
              contentid: true,
              tmplvarid: true,
              value: true,
            },
          },
          CreatedBy: {
            select: userSelect,
          },
          Tags: {
            distinct: ['tag'],
            select: {
              tag: true,
            },
          },
        },
      })
      return result
    },
  })
}
