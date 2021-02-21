/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-console */
import { objectType } from 'nexus'

import { Prisma } from '@prisma/client'
import { NexusGenObjects } from '../generated/nexus'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('companies', {
      // alias: 'companies',
      description: 'Компании',
      type: 'Company',
      // ordering: true,
      // filtering: true,
      args: {
        where: 'bani684_site_contentWhereInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(_, args, ctx) {
        const variables = args as Pick<
          Prisma.bani684_site_contentFindManyArgs,
          'where'
        >

        const { deleted = false, published = true, hidemenu = false } =
          variables.where || {}

        return ctx.prisma.bani684_site_content
          .findMany({
            ...variables,
            where: {
              AND: [
                {
                  template: 27,
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
            },
          })
          .then((records) =>
            records.map((n) => {
              const { TemplateVarValues } = n

              /**
               * Координаты
               */
              const coordsTV = TemplateVarValues.find(
                (tv) => tv.tmplvarid === 27
              )

              // console.log('TemplateVarValues', TemplateVarValues);
              console.log('coordsTV', coordsTV)

              let coords: NexusGenObjects['Coordinates'] | null = null

              if (coordsTV) {
                const arr = coordsTV.value.split(',')
                if (arr.length === 2) {
                  const lat = parseFloat(arr[0])
                  const lng = parseFloat(arr[1])

                  if (isFinite(lat) && isFinite(lng)) {
                    coords = {
                      lat,
                      lng,
                    }
                  }
                }
              }

              /**
               * Картинка
               */
              const image = TemplateVarValues.find((tv) => tv.id === 3)?.value

              return {
                ...n,
                coords,
                image,
              }
            })
          )
      },
    })

    t.nonNull.list.nonNull.field('cities', {
      // alias: 'companies',
      description: 'Города',
      type: 'City',
      // ordering: true,
      // filtering: true,
      args: {
        where: 'bani684_site_contentWhereInput',
        take: 'Int',
        skip: 'Int',
      },
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
                template: 27,
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
            // description: true,
            alias: true,
            uri: true,
            // published: true,
            // createdby: true,
            // createdon: true,
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

    t.crud.bani684SiteContents({
      alias: 'resources',
      description: 'Все ресурсы',
      type: 'Resource',
      ordering: true,
      filtering: true,
      // async resolve(_, _args, ctx) {

      //   const result = await ctx.prisma.bani684_site_content.findMany({
      //     take: 3,
      //     select: {
      //       id: true,
      //       pagetitle: true,
      //       // TemplateValues: {
      //       //   select: {
      //       //     id: true,
      //       //     contentid: true,
      //       //     tmplvarid: true,
      //       //     value: true,
      //       //   },
      //       // },
      //       // TemplateVarValues: {
      //       //   select: {
      //       //     id: true,
      //       //   },
      //       // },
      //     },
      //     where: {
      //       TemplateVarValues: {
      //         some: {},
      //       },
      //     },
      //   });

      //   // const result = await ctx.prisma.bani684_site_content.findMany(_args);

      //   console.log('result', JSON.stringify(result, undefined, 2));

      //   return result;
      // }
    })

    t.nonNull.field('resourcesCount', {
      type: 'Int',
      description: 'Количество всех ресурсов',
      args: {
        where: 'bani684_site_contentWhereInput',
      },
      async resolve(_, args, ctx) {
        // @ts-ignore
        return ctx.prisma.bani684_site_content.count(args)
      },
    })

    // t.crud.bani684SiteContents({
    //   alias: 'resources',
    //   type: 'Resource',
    //   ordering: true,
    //   filtering: true,
    //   resolve: async (_, _args, ctx) => {

    //     const result = await ctx.prisma.bani684_site_content.count();

    //     console.log("bani684ModxsiteCompaniess result", result);

    //     return [];
    //   },
    // })

    // t.crud.bani684ModxsiteCompanies({
    //   alias: 'company',
    //   type: 'Company',
    //   // ordering: true,
    //   // filtering: true,
    //   // resolve: async (_, _args, ctx) => {

    //   //   const result = await ctx.prisma.bani684_modxsite_companies.findMany();

    //   //   console.log("bani684ModxsiteCompaniess result", result);

    //   //   return [];
    //   // },
    // })

    // t.crud.bani684SiteContents({
    //   alias: 'companies',
    //   type: 'Resource',
    //   ordering: true,
    //   filtering: true,
    // })
  },
})
