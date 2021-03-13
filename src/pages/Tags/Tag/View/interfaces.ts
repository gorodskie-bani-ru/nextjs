import { TopicTag } from 'src/modules/gql/generated'
import { TopicsViewProps } from 'src/pages/Topics/View/interfaces'

export type TagPageViewProps = {
  tag: TopicTag
} & TopicsViewProps
