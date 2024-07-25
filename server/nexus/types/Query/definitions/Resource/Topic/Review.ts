import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { Prisma } from '@prisma/client'
import { userSelect } from '../../User'
// import { companiesResolver } from '../resolvers/Resource'

export const reviews = (t: ObjectDefinitionBlock<'Query'>) => {
  t.crud.bani684SiteContents({
    alias: 'reviews',
    description: 'Обзоры заведений',
    type: 'Review',
    ordering: true,
    filtering: true,
    // resolve: companiesResolver,
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_site_contentFindManyArgs,
        'where'
      >

      const {
        deleted = false,
        published = true,
        hidemenu = false,
      } = variables.where || {}

      return ctx.prisma.bani684_site_content.findMany({
        ...variables,
        where: {
          AND: [
            {
              template: 28,
              deleted,
              published,
              hidemenu,
            },
            {
              ...variables.where,
            },
          ],
        },
        select: {
          id: true,
          pagetitle: true,
          longtitle: true,
          description: true,
          alias: true,
          uri: true,
          content: true,
          published: true,
          createdby: true,
          createdon: true,
          editedby: true,
          editedon: true,
          template: true,
          searchable: true,
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
    },
  })
}
