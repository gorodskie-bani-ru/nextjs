import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { comments } from './Comment'
import { votes } from './Vote'

export const society = (t: ObjectDefinitionBlock<'Query'>) => {
  comments(t)
  votes(t)
}
