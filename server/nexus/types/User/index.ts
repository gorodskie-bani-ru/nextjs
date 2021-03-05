import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  description: 'Пользователь',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.boolean('active')
    // t.nonNull.boolean('blocked')
    // t.nonNull.date('createdon')
    // t.string('email')
    t.string('username')
    // t.string('fullname')
    // t.string('image')
    t.boolean('sudo')
  },
})
