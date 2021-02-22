/* eslint-disable @typescript-eslint/camelcase */

import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { companiesResolver } from '../resolvers/companiesResolver'
// import { NexusGenObjects } from 'server/nexus/generated/nexus'

export const companies = (t: ObjectDefinitionBlock<'Query'>) => {
  // t.nonNull.list.nonNull.field('companies', {
  //   // alias: 'companies',
  //   description: 'Компании',
  //   type: 'Company',
  //   // ordering: true,
  //   // filtering: true,
  //   args: {
  //     // where: 'bani684_site_contentWhereInput',
  //     take: 'Int',
  //     skip: 'Int',
  //   },

  t.crud.bani684SiteContents({
    alias: 'companies',
    description: 'Компании',
    type: 'Company',
    ordering: true,
    filtering: true,
    resolve: companiesResolver,
    // resolve(_, args, ctx) {
    //   const variables = args as Pick<
    //     Prisma.bani684_site_contentFindManyArgs,
    //     'where'
    //   >

    //   const { deleted = false, published = true, hidemenu = false } =
    //     variables.where || {}

    //   return ctx.prisma.bani684_site_content
    //     .findMany({
    //       ...variables,
    //       where: {
    //         AND: [
    //           {
    //             template: 27,
    //             deleted,
    //             published,
    //             hidemenu,
    //           },
    //           {
    //             ...variables.where,
    //           },
    //         ],
    //       },
    //       select: {
    //         id: true,
    //         pagetitle: true,
    //         longtitle: true,
    //         description: true,
    //         alias: true,
    //         uri: true,
    //         published: true,
    //         createdby: true,
    //         createdon: true,
    //         editedby: true,
    //         editedon: true,
    //         TemplateVarValues: {
    //           select: {
    //             id: true,
    //             contentid: true,
    //             tmplvarid: true,
    //             value: true,
    //           },
    //         },
    //       },
    //     })
    //     // .then((records) =>
    //     //   records.map((n) => {
    //     //     const { TemplateVarValues } = n

    //     //     /**
    //     //      * Координаты
    //     //      */
    //     //     // const coordsTV = TemplateVarValues.find(
    //     //     //   (tv) => tv.tmplvarid === 27
    //     //     // )

    //     //     // let coords: NexusGenObjects['Coordinates'] | null = null

    //     //     // if (coordsTV) {
    //     //     //   const arr = coordsTV.value.split(',')
    //     //     //   if (arr.length === 2) {
    //     //     //     const lat = parseFloat(arr[0])
    //     //     //     const lng = parseFloat(arr[1])

    //     //     //     if (isFinite(lat) && isFinite(lng)) {
    //     //     //       coords = {
    //     //     //         lat,
    //     //     //         lng,
    //     //     //       }
    //     //     //     }
    //     //     //   }
    //     //     // }

    //     //     /**
    //     //      * Картинка
    //     //      */
    //     //     const image = TemplateVarValues.find((tv) => tv.id === 3)?.value

    //     //     return {
    //     //       ...n,
    //     //       // coords,
    //     //       image,
    //     //     }
    //     //   })
    //     // )
    // },
  })
}
