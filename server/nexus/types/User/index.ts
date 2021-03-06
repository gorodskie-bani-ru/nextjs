import { objectType } from 'nexus'
import { imageResolver } from '../Query/resolvers/image'

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
    t.nonNull.string('photo')
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
    t.nonNull.date('createdon')
    t.string('email', {
      resolve() {
        return null
      },
    })
    t.string('username')
    t.string('image', {
      description: 'Аватар',
      resolve(user) {
        const image = user.Attributes?.photo || 'anonymous.jpg'

        return imageResolver(image)

        // return image.startsWith('lazy/')
        //   ? `assets/images/${image}`
        //   : `assets/society/uploads/images/${image}`
      },
    })
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
