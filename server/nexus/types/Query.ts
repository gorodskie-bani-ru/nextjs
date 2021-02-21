import { objectType } from 'nexus'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    // t.nonNull.list.nonNull.field("resources", {
    //   type: Resource,
    //   resolve: (_, _args, ctx) => {

    //     return ctx.prisma.bani684_site_content.findMany();
    //   }
    // });

    t.crud.bani684SiteContents({
      alias: 'resources',
      type: 'Resource',
      ordering: true,
      filtering: true,
    })

    // t.crud.bani684SiteContent({
    //   type: ""
    // });
  },
})
