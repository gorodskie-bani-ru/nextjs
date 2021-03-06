import { objectType } from 'nexus'

// export const ThreadTarget = unionType({
//   name: 'ThreadTarget',
//   description: 'Целевой объект обсуждения',
//   definition(t) {
//     t.members('Resource', 'Comment')
//   },
//   resolveType: (item) => {
//     // if (item.target_class === "modResource") {
//     //   return 'Resource'
//     // } else if (item.target_class === "SocietyComment") {
//     //   return 'Comment'
//     // }

//     return "Comment"
//   },
// })

export const Thread = objectType({
  name: 'Thread',
  description: 'Диалоговая ветвь',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('target_class')
  },
})
