/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-console */
import { objectType, } from 'nexus'

import { Prisma } from '@prisma/client';



export const Query = objectType({
  name: 'Query',
  definition(t) {

    t.crud.bani684SiteContents({
      alias: 'companies',
      description: "Все компании",
      type: 'Company',
      ordering: true,
      filtering: true,
      resolve(_, args, ctx) {

        const variables = args as Pick<Prisma.bani684_site_contentFindManyArgs, "where">

        variables

        // return [
        //   {
        //     id,
        //   },
        // ];

        // const select = {
        //   // select: {
        //   id: true,
        //   pagetitle: true,
        //   longtitle: true,
        //   // TemplateVarValues: {
        //   //   select: {
        //   //     id: true,
        //   //     contentid: true,
        //   //     tmplvarid: true,
        //   //     value: true,
        //   //   },
        //   // },
        //   // },
        // } as Readonly<NonNullable<Prisma.bani684_site_contentFindManyArgs["select"]>>

        // // Object.assign(variables, { ...args });

        // // const select = {
        // //   id: true,
        // //   pagetitle: true,
        // //   longtitle: true,
        // // }

        // select
 
        // return ctx.prisma.bani684_site_content.findMany({
        //   ...variables,
        //   select: {
        //     id: true,
        //     pagetitle: true,
        //     longtitle: true,
        //   },
        // });
 
        return ctx.prisma.bani684_site_content.findMany({
          ...variables,
          select: {
            id: true,
            pagetitle: true,
            longtitle: true,
          },
        });

        // return ctx.prisma.bani684_site_content.findMany({
        //   select: {
        //     id: true,
        //     pagetitle: true,
        //     longtitle: true,
        //   },
        // });


        // const variables : NexusGenArgTypes["Query"]["companies"] = {
        //   ...args,
        // }


        // const result = await ctx.prisma.bani684_site_content.findMany(variables);
        // // const result = await ctx.prisma.bani684_site_content.findMany({
        // //   // take: 3,
        // //   select: {
        // //     id: true,
        // //     pagetitle: true,
        // //     // TemplateValues: {
        // //     //   select: {
        // //     //     id: true,
        // //     //     contentid: true,
        // //     //     tmplvarid: true,
        // //     //     value: true,
        // //     //   },
        // //     // },
        // //     // TemplateVarValues: {
        // //     //   select: {
        // //     //     id: true,
        // //     //   },
        // //     // },
        // //   },
        // //   // where: {
        // //   //   TemplateVarValues: {
        // //   //     some: {},
        // //   //   },
        // //   // },
        // //   ...args,
        // // });

        // // const result = await ctx.prisma.bani684_site_content.findMany(_args);


        // console.log('result', JSON.stringify(result, undefined, 2));

        // return result;
      }
    })

    t.crud.bani684SiteContents({
      alias: 'resources',
      description: "Все ресурсы",
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

    t.nonNull.field("resourcesCount", {
      type: "Int",
      description: "Количество всех ресурсов",
      args: {
        where: "bani684_site_contentWhereInput"
      },
      async resolve(_, args, ctx) {
        // @ts-ignore
        return ctx.prisma.bani684_site_content.count(args);
      }
    });


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
