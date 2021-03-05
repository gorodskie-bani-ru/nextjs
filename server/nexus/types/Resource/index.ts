import { objectType, unionType } from 'nexus'

export * from './Company'
export * from './City'

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

export const ResourceUnion = unionType({
  name: 'ResourceUnion',
  description: 'Компания, Город или иной ресурс',
  definition(t) {
    t.members('Resource', 'Company', 'City')
  },
  // resolveType: (item) => item.name,
  resolveType: (item) => {
    if (item.template === 26) {
      return 'City'
    } else if (item.template === 27) {
      return 'Company'
    }

    return 'Resource'
  },
})

export const Resource = objectType({
  name: 'Resource',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('pagetitle')
    t.nonNull.string('longtitle')
    t.nonNull.string('description')
    t.nonNull.date('createdon')
    // t.nonNull.date("publishedon")
    // t.nonNull.date("pubdate")
    t.string('content')
    t.string('uri')
    t.string('alias')
    t.nonNull.int('template')
    t.nonNull.boolean('published')
    t.nonNull.int('createdby')
    t.nonNull.boolean('searchable')
    // t.nonNull.int("editedby")
    // t.nonNull.date("editedon")

    // t.nonNull.string('email')
    t.list.nonNull.field('TemplateVarValues', {
      type: 'bani684_site_tmplvar_contentvalues',
      // resolve: (parent, _, context) => {
      //   return context.prisma.user
      //     .findUnique({
      //       where: { id: parent.id || undefined },
      //     })
      //     .posts()
      // },
    })
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

// export const Comment = extendType({
//   type: "Resource",
//   definition(){

//   }
// });