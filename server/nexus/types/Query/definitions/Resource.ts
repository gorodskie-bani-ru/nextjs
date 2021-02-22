/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { Prisma } from '@prisma/client'

export const resources = (t: ObjectDefinitionBlock<'Query'>) => {
  // t.crud.bani684SiteContents({
  //   alias: "tessss",
  //   type: "Resource",
  // })

  // t.nonNull.list.nonNull.field('resources', {
  //   // alias: 'companies',
  //   description: 'Компании',
  //   type: 'Resource',
  //   // ordering: true,
  //   // filtering: true,
  //   args: {
  //     // where: 'bani684_site_contentWhereInput',
  //     take: 'Int',
  //     skip: 'Int',
  //   },
  t.crud.bani684SiteContents({
    alias: 'resources',
    description: 'Ресурсы',
    type: 'Resource',
    ordering: true,
    filtering: true,
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_site_contentFindManyArgs,
        'where'
      >

      const { deleted = false, published = true, hidemenu = false } =
        variables.where || {}

      return ctx.prisma.bani684_site_content.findMany({
        ...variables,
        where: {
          AND: [
            {
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
          // editedby: true,
          // editedon: true,
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

// export const resourcesCount = (t: ObjectDefinitionBlock<'Query'>) => {
//   t.nonNull.field('resourcesCount', {
//     type: 'Int',
//     description: 'Количество всех ресурсов',
//     args: {
//       where: 'bani684_site_contentWhereInput',
//     },
//     async resolve(_, args, ctx) {
//       // @ts-ignore
//       return ctx.prisma.bani684_site_content.count(args)
//     },
//   })
// }
