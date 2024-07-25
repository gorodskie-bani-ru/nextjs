import { objectType } from 'nexus'
import { resources } from './definitions/Resource'
import userDefinitions from './definitions/User'
import { society } from './definitions/society'
// import { topicTags } from './definitions/TopicTag'

export const Query = objectType({
  name: 'Query',
  definition(t) {
    resources(t)
    userDefinitions(t)
    society(t)
    // topicTags(t)
  },
})
