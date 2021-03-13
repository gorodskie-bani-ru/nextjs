/* eslint-disable @typescript-eslint/camelcase */

// import { Prisma } from '@prisma/client'
import { bani684_site_content } from '.prisma/client'
import { bani684_site_tmplvar_contentvalues } from '@prisma/client'
import {
  arg,
  FieldResolver,
  inputObjectType,
  intArg,
  ObjectDefinitionBlock,
} from 'nexus/dist/core'
import { PrismaContext } from 'server/nexus/context'
import {
  // NexusGenArgTypes,
  NexusGenObjects,
} from 'server/nexus/generated/nexus'
import { TemplateVarIDs } from '../../../../constants'
import { coordsResolver } from '../../resolvers/coords'

// const companiesResolver: FieldResolver<'Query', 'companies'> = (
//   _,
//   args,
//   { prisma }
// ) => {
//   const variables = args as Pick<
//     Prisma.bani684_site_contentFindManyArgs,
//     'where'
//   >

//   const { deleted = false, published = true, hidemenu = false } =
//     variables.where || {}

//   const where: Prisma.bani684_site_contentFindManyArgs['where'] = {
//     AND: [
//       {
//         template: 27,
//         deleted,
//         published,
//         hidemenu,
//       },
//       {
//         ...variables.where,
//       },
//     ],
//   }

//   /**
//    * Получаем данные компаний
//    */
//   return prisma.bani684_site_content
//     .findMany({
//       ...variables,
//       where,
//       select: {
//         id: true,
//         pagetitle: true,
//         longtitle: true,
//         description: true,
//         alias: true,
//         uri: true,
//         content: true,
//         published: true,
//         createdby: true,
//         createdon: true,
//         editedby: true,
//         editedon: true,
//         template: true,
//         searchable: true,
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
//     .then((resources) => {
//       return resources.map((resource) => {
//         const image =
//           resource.TemplateVarValues?.find(
//             (n) => n.tmplvarid === TemplateVarIDs.image
//           )?.value || null

//         return {
//           ...resource,
//           image,
//         }
//       })
//     })
// }

// export const companies = (t: ObjectDefinitionBlock<'Query'>) => {
//   t.crud.bani684SiteContents({
//     alias: 'companies',
//     description: 'Компании',
//     type: 'Company',
//     ordering: true,
//     filtering: true,
//     resolve: companiesResolver,
//   })
// }

export type CompaniesResult = {
  company_id: NexusGenObjects['Company']['id']
  company_uri: NexusGenObjects['Company']['uri']
  company_pagetitle: NexusGenObjects['Company']['pagetitle']
  company_createdby: NexusGenObjects['Company']['createdby']
  company_createdon: NexusGenObjects['Company']['createdon']
  company_description: NexusGenObjects['Company']['description']
  company_longtitle: NexusGenObjects['Company']['longtitle']
  company_published: NexusGenObjects['Company']['published']
  company_searchable: NexusGenObjects['Company']['searchable']
  company_template: NexusGenObjects['Company']['template']
  company_image_id: number | undefined
  company_image: string | undefined
  company_gallery_id: number | undefined
  company_gallery: string | undefined
  company_coords_id: number | undefined
  company_coords: string | undefined
}

function companiesQuery(this: PrismaContext['knex']) {
  const query = this.from<bani684_site_content>(
    'bani684_site_content as company'
  ).where({
    template: 27,
    deleted: false,
    published: true,
    hidemenu: false,
  })

  return query
}

const companiesResolver: FieldResolver<'Query', 'companies'> = (
  _,
  args,
  ctx
) => {
  const { knex } = ctx

  const { take: limit, skip } = args

  const orderByCoords = args.orderBy?.coords

  // const variables = args as Pick<
  //   Prisma.bani684_site_contentFindManyArgs,
  //   'where'
  // >

  // const { deleted = false, published = true, hidemenu = false } =
  //   variables.where || {}

  /**
   * Получаем данные компаний
   */
  const query = knex.from<CompaniesResult>(function (this: typeof ctx.knex) {
    const q2 = companiesQuery
      .call(this)
      /**
       * Картинка компании
       */
      .leftJoin<bani684_site_tmplvar_contentvalues>(
        'bani684_site_tmplvar_contentvalues as tvs_image',
        {
          'tvs_image.tmplvarid': TemplateVarIDs.image,
          'tvs_image.contentid': 'company.id',
        }
      )
      .select('tvs_image.id as company_image_id')
      .select('tvs_image.value as company_image')

      /**
       * Галерея компании
       */
      .leftJoin<bani684_site_tmplvar_contentvalues>(
        'bani684_site_tmplvar_contentvalues as tvs_gallery',
        {
          'tvs_gallery.tmplvarid': TemplateVarIDs.gallery,
          'tvs_gallery.contentid': 'company.id',
        }
      )
      .select('tvs_gallery.id as company_gallery_id')
      .select('tvs_gallery.value as company_gallery')

      /**
       * Координаты
       */
      .leftJoin<bani684_site_tmplvar_contentvalues>(
        'bani684_site_tmplvar_contentvalues as tvs_coords',
        {
          'tvs_coords.tmplvarid': TemplateVarIDs.coords,
          'tvs_coords.contentid': 'company.id',
        }
      )
      .select('tvs_coords.id as company_coords_id')
      .select('tvs_coords.value as company_coords')

      .select({
        company_id: 'company.id',
        company_uri: 'company.uri',
        company_pagetitle: 'company.pagetitle',
        company_createdby: 'company.createdby',
        company_createdon: 'company.createdon',
        company_description: 'company.description',
        company_longtitle: 'company.longtitle',
        company_published: 'company.published',
        company_searchable: 'company.searchable',
        company_template: 'company.template',
      })

      .as('t')
    /**
     * Если сортировка по координатам, то берем компании только с координатами
     */
    // if (args.orderBy?.coords) {
    //   query.whereNotNull('tvs_coords.id')
    // }

    return q2
  })

  // if (limit) {
  //   query.limit(limit)
  // }

  // if (skip) {
  //   query.offset(skip)
  // }

  // console.log('query.toQuery()\n', query.toQuery())

  return query.then((r) => {
    // console.log("r.length", r.length);

    let companies = r.map((n): NexusGenObjects['Company'] => {
      const {
        // type,
        // target_id,
        // voteValueAvg,
        // voteValueAvg,

        company_id,
        company_uri,
        company_pagetitle,
        company_createdby,
        company_createdon,
        company_published,
        company_searchable,
        company_template,
        company_description,
        company_longtitle,
        company_image_id,
        company_image,
        company_gallery_id,
        company_gallery,
        company_coords_id,
        company_coords,
      } = n

      const TemplateVarValues: NexusGenObjects['Company']['TemplateVarValues'] = []

      if (company_image_id && company_image) {
        TemplateVarValues.push({
          id: company_image_id,
          tmplvarid: TemplateVarIDs.image,
          value: company_image,
          contentid: company_id,
        })
      }

      if (company_gallery_id && company_gallery) {
        TemplateVarValues.push({
          id: company_gallery_id,
          tmplvarid: TemplateVarIDs.gallery,
          value: company_gallery,
          contentid: company_id,
        })
      }

      if (company_coords_id && company_coords) {
        TemplateVarValues.push({
          id: company_coords_id,
          tmplvarid: TemplateVarIDs.coords,
          value: company_coords,
          contentid: company_id,
        })
      }

      return {
        id: company_id,
        uri: company_uri,
        pagetitle: company_pagetitle,
        createdby: company_createdby,
        createdon: company_createdon,
        published: company_published,
        searchable: company_searchable,
        template: company_template,
        description: company_description,
        longtitle: company_longtitle,
        // image: company_image,
        TemplateVarValues,
        // type,
        // target_id,
        // avg: {
        //   voteValueAvg,
        // },
        // Company: {
        // },
      }
    })

    // TODO Надо перенести координаты в отдельные колонки, чтобы можно было
    // сортировать на уровне SQL
    /**
     * Сортировка по координатам
     */
    if (orderByCoords) {
      const { lat, lng } = orderByCoords

      companies = companies.sort((a, b) => {
        const aCoords = coordsResolver(a)
        const bCoords = coordsResolver(b)

        if (!aCoords || !bCoords) {
          return -1
        }

        const { lat: aLat, lng: aLng } = aCoords

        const { lat: bLat, lng: bLng } = bCoords

        const aLatDiff = Math.abs(lat - aLat)
        const aLngDiff = Math.abs(lng - aLng)

        const bLatDiff = Math.abs(lat - bLat)
        const bLngDiff = Math.abs(lng - bLng)

        const aDiff = Math.sqrt(aLatDiff * aLatDiff + aLngDiff * aLngDiff)

        const bDiff = Math.sqrt(bLatDiff * bLatDiff + bLngDiff * bLngDiff)

        if (aDiff > bDiff) {
          return 1
        } else if (bDiff > aDiff) {
          return -1
        }

        return 0
      })
    }

    // TODO так как сортировка сейчас на уровне JS выполняется, лимиты тоже пока придется здесь делать
    if (skip) {
      companies = companies.slice(skip)
    }

    if (limit) {
      companies = companies.slice(0, limit)
    }

    return companies
  })
}

const CompaniesOrderByCoordsInput = inputObjectType({
  name: 'CompaniesOrderByCoordsInput',
  description: 'Сортировка по удаленности от координаты',
  definition(t) {
    t.nonNull.float('lat')
    t.nonNull.float('lng')
  },
})

const CompaniesOrderByInput = inputObjectType({
  name: 'CompaniesOrderByInput',
  definition(t) {
    t.field('coords', {
      type: CompaniesOrderByCoordsInput,
    })
  },
})

export const companies = (t: ObjectDefinitionBlock<'Query'>) => {
  t.nonNull.list.nonNull.field('companies', {
    description: 'Компании',
    type: 'Company',
    args: {
      take: intArg(),
      skip: intArg(),
      orderBy: arg({
        type: CompaniesOrderByInput,
      }),
    },
    resolve: companiesResolver,
  })

  t.nonNull.int('companiesCount', {
    description: 'Подсчет количества компаний',
    resolve: async (_, _args, ctx) => {
      const query = ctx.knex.from(function (this: typeof ctx.knex) {
        return companiesQuery.call(this).count({ count: '*' }).as('t')
      })

      return await query.then((r) => {
        const count = r[0]?.count

        return typeof count === 'number'
          ? count
          : (count && parseInt(count)) || 0
      })
    },
  })
}
