import { objectType } from 'nexus'

export const City = objectType({
  name: 'City',
  description: 'Город',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('pagetitle')
    t.nonNull.string('name', {
      // deprecation: "",
      resolve: (_) => _.pagetitle,
    })
    t.nonNull.string('longtitle')
    t.string('uri')
    t.string('alias')
  },
})
