import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { comments } from './Comment'

export const society = (t: ObjectDefinitionBlock<'Query'>) => {
  comments(t)
}
