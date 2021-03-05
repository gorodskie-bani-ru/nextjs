import { ObjectDefinitionBlock } from 'nexus/dist/core'

export default (t: ObjectDefinitionBlock<'Query'>) => {
  t.field('me', {
    description: 'Текущий пользователь',
    type: 'User',
    resolve(_parent, _args, _ctx) {
      return null
    },
  })

  t.crud.bani684Users({
    type: 'User',
    alias: 'user',
  })

  t.crud.bani684Userss({
    type: 'User',
    alias: 'users',
    filtering: true,
    ordering: true,
  })
}
