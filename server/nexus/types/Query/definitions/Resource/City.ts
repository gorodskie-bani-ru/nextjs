import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { Prisma } from '@prisma/client'
// import { companiesResolver } from '../resolvers/Resource'

export const cities = (t: ObjectDefinitionBlock<'Query'>) => {
  // t.nonNull.list.nonNull.field('cities', {
  //   description: 'Города',
  //   type: 'City',
  //   // ordering: true,
  //   // filtering: true,
  //   args: {
  //     // where: 'bani684_site_contentWhereInput',
  //     take: 'Int',
  //     skip: 'Int',
  //   },

  t.crud.bani684SiteContents({
    alias: 'cities',
    description: 'Города',
    type: 'City',
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
              template: 26,
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
        },
        // orderBy: {
        //   pagetitle: "asc",
        // },
      })
      // .then((records) =>
      //   records.map((n) => {
      //     const { TemplateVarValues } = n

      //     return {
      //       ...n,
      //     }
      //   })
      // )
    },
  })
}
