import { objectType } from 'nexus'
import { coords } from './definitions/coords'

export const City = objectType({
  name: 'City',
  description: 'Город',

  definition(t) {
    t.implements('ResourceInterface')
    coords(t)
    //   t.nonNull.int('id')
    //   t.nonNull.string('pagetitle')
    //   t.nonNull.string('longtitle')
    //   t.nonNull.int('template')
    //   t.string('uri')
    //   t.string('alias')
    //   // t.field('coords', {
    //   //   type: 'Coordinates',
    //   // })

    // t.field('coords', {
    //   type: 'Coordinates',
    //   description: 'Координаты',
    //   // resolve: coordsResolver,
    // })

    //   t.list.nonNull.field('TemplateVarValues', {
    //     type: 'bani684_site_tmplvar_contentvalues',
    //   })
  },
})
