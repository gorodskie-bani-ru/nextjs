/* eslint-disable @typescript-eslint/camelcase */
import { objectType } from 'nexus'
import { coordsResolver } from './Query/resolvers/coords'

export const Company = objectType({
  name: 'Company',
  description: 'Компания',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('pagetitle')
    t.nonNull.string('longtitle')
    t.nonNull.string('description')
    t.nonNull.int('createdby')
    t.nonNull.date('createdon')
    // t.nonNull.date("pubdate")
    // t.string('content')
    t.string('uri')
    t.string('alias')
    // t.nonNull.int("template")
    t.nonNull.boolean('published')
    // t.nonNull.date("publishedon")
    t.nonNull.int('editedby')
    t.nonNull.date('editedon')
    // t.nonNull.string("alias")
    t.string('image')
    // t.field('coords', {
    //   type: 'Coordinates',
    // })

    t.field('coords', {
      type: 'Coordinates',
      description: 'Координаты',
      resolve: coordsResolver,
    })

    // t.nonNull.string('email')
    t.list.nonNull.field('TemplateVarValues', {
      type: 'bani684_site_tmplvar_contentvalues',
    })
  },
})
