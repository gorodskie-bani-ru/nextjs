import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { reviews } from './Review'
import { topics } from './Topic'

export default (t: ObjectDefinitionBlock<'Query'>) => {
  topics(t)
  reviews(t)
}
