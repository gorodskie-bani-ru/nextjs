import { TopicTag } from 'src/modules/gql/generated'
import { PageProps } from 'src/pages/_App/interfaces'

export type TagPageProps = {
  tag: TopicTag
} & PageProps
