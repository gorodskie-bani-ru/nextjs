import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { Prisma } from '@prisma/client'
// import { companiesResolver } from '../resolvers/Resource'

export default (t: ObjectDefinitionBlock<'Query'>) => {
  // t.nonNull.list.nonNull.field('ratings', {
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
    alias: 'ratings',
    description: 'Рейтинги заведений',
    type: 'Rating',
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
              template: 30,
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
          published: true,
          createdby: true,
          createdon: true,
          template: true,
          searchable: true,
          content: true,
          editedby: true,
          editedon: true,
          TemplateVarValues: {
            select: {
              id: true,
              contentid: true,
              tmplvarid: true,
              value: true,
            },
          },
          // CreatedBy: {
          //   select: userSelect,
          // },
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
