import { objectType } from 'nexus'
import { coordsResolver } from './Query/resolvers/coords'

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
    // t.field('coords', {
    //   type: 'Coordinates',
    // })

    t.field('coords', {
      type: 'Coordinates',
      description: 'Координаты',
      resolve: coordsResolver,
    })

    t.nonNull.list.nonNull.field('TemplateVarValues', {
      type: 'bani684_site_tmplvar_contentvalues',
    })
  },
})
