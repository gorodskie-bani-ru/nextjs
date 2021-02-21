import { objectType } from 'nexus'

// alias
// city_id
// city
// city_uri
// template
//
// publishedon
// pubdate
// createdby
// editedby
// editedon
// mapIcon
// image

export const Company = objectType({
  name: 'Company',
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
    t.field('coords', {
      type: 'Coordinates',
    })

    // t.nonNull.string('email')
    // t.nonNull.list.nonNull.field('TemplateVarValues', {
    //   type: 'bani684_site_tmplvar_contentvalues',
    //   // resolve: (parent, _, context) => {
    //   //   return context.prisma.user
    //   //     .findUnique({
    //   //       where: { id: parent.id || undefined },
    //   //     })
    //   //     .posts()
    //   // },
    // })
  },
})
