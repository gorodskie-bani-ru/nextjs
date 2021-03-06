import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { companies } from './Company'
import { cities } from './City'
import resources from './Resource'

export default (t: ObjectDefinitionBlock<'Query'>) => {
  companies(t)
  cities(t)
  resources(t)
}
