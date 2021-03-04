/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { objectType } from 'nexus'
import { companies } from './definitions/Company'
import { cities } from './definitions/City'
import {
  resources,
  // resourcesCount,
} from './definitions/Resource'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    companies(t)
    cities(t)
    resources(t)
    // resourcesCount(t)

    // t.nonNull.list.field("resources", {
    //   type: "ResourceUnion",
    //   resolve: () => {

    //     return [];
    //   }
    // })

    // t.crud.bani684SiteContents({
    //   alias: 'resources',
    //   type: ResourceUnion,
    //   ordering: true,
    //   filtering: true,
    //   resolve: async (_, _args, ctx) => {

    //     // const result = await ctx.prisma.bani684_site_content.count();

    //     // console.log("bani684ModxsiteCompaniess result", result);

    //     return [];
    //   },
    // })

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
