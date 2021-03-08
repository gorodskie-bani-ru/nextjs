import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { Resource } from './Resource'
import { companies } from './Company'
import { cities } from './City'
import ratings from './Rating'
import topics from './Topic'

export const resources = (t: ObjectDefinitionBlock<'Query'>) => {
  companies(t)
  cities(t)
  ratings(t)
  Resource(t)
  topics(t)
}
