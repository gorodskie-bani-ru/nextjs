/* eslint-disable @typescript-eslint/camelcase */
import { Prisma } from '@prisma/client'
import { arg, ObjectDefinitionBlock } from 'nexus/dist/core'

const select = {
  id: true,
  active: true,
  username: true,
  sudo: true,
  createdon: true,
  Attributes: true,
}

export default (t: ObjectDefinitionBlock<'Query'>) => {
  // t.field('me', {
  //   description: 'Текущий пользователь',
  //   type: 'User',
  //   resolve(_parent, _args, _ctx) {
  //     return null
  //   },
  // })

  t.nonNull.int('usersCount', {
    description: 'Количество пользователей',
    args: {
      where: arg({
        type: 'bani684_usersWhereInput',
      }),
    },
    resolve(_, args, ctx) {
      return ctx.prisma.bani684_users.count(
        args as Pick<Prisma.bani684_usersCountArgs, 'where'>
      )
    },
  })

  t.crud.bani684Users({
    type: 'User',
    alias: 'user',
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_usersFindUniqueArgs,
        'where'
      >

      return ctx.prisma.bani684_users.findUnique({
        ...variables,
        select,
      })
    },
  })

  t.crud.bani684Userss({
    type: 'User',
    alias: 'users',
    filtering: true,
    ordering: true,
    resolve(_, args, ctx) {
      const variables = args as Pick<Prisma.bani684_usersFindManyArgs, 'where'>

      return ctx.prisma.bani684_users.findMany({
        ...variables,
        select,
      })
      // .then((users) => {

      //   return users.map((user) => {

      //     return {
      //       ...user,
      //       createdon: new Date(user.createdon * 1000),
      //     }
      //   })
      // })
    },
  })
}
