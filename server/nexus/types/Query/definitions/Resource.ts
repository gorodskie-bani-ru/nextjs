/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { ObjectDefinitionBlock } from 'nexus/dist/core'

export const resources = (t: ObjectDefinitionBlock<'Query'>) => {
  t.crud.bani684SiteContents({
    alias: 'resources',
    description: 'Ресурсы',
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
}

export const resourcesCount = (t: ObjectDefinitionBlock<'Query'>) => {
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
}
