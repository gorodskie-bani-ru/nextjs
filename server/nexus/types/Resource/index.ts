// import { unionType } from 'nexus'

export * from './Company'
export * from './City'
export * from './Rating'
export * from './Resource'

// export const ResourceUnion = unionType({
//   name: 'ResourceUnion',
//   description: 'Компания, Город или иной ресурс',
//   definition(t) {
//     t.members('Resource', 'Company', 'City')
//   },
//   resolveType: (item) => {
//     if (item.template === 26) {
//       return 'City'
//     } else if (item.template === 27) {
//       return 'Company'
//     }
//     // Рейтинг заведений
//     // else if (item.template === 30) {
//     //   return 'Rating'
//     // }

//     return 'Resource'
//   },
// })
