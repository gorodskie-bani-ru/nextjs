import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { companies } from './Company'
import { cities } from './City'
import ratings from './Rating'
import resources from './Resource'
import topics from './Topic'

export default (t: ObjectDefinitionBlock<'Query'>) => {
  companies(t)
  cities(t)
  ratings(t)
  resources(t)
  topics(t)
}
