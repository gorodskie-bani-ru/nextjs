/* eslint-disable no-console */
import { objectType } from 'nexus'

export const UserAttributes = objectType({
  name: 'UserAttributes',
  description: 'Профиль пользователя',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_user_attributes',
  // },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('fullname')
  },
})

export const User = objectType({
  name: 'User',
  description: 'Пользователь',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_users',
  // },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.boolean('active')
    // t.nonNull.boolean('blocked')
    // t.nonNull.date('createdon')
    // t.string('email')
    t.string('username')
    // t.string('image')
    // t.boolean('sudo')

    t.field('Attributes', {
      type: 'UserAttributes',
      // resolve: (parent, _, context) => {
      //   return context.prisma.user
      //     .findUnique({
      //       where: { id: parent.id || undefined },
      //     })
      //     .posts()
      // },
    })

    t.string('fullname', {
      resolve(user) {
        return user.Attributes?.fullname || null
      },
    })
  },
})
