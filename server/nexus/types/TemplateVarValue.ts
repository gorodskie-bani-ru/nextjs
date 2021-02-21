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

export const TemplateVarValue = objectType({
  name: 'bani684_site_tmplvar_contentvalues',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
  definition(t) {
    t.nonNull.int('id')
  },
})

