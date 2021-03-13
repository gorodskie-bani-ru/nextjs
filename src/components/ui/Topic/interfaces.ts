import {
  TopicReviewFragment,
  TopicTopicFragment,
} from 'src/modules/gql/generated'

export type TopicProps = {
  topic: TopicReviewFragment | TopicTopicFragment

  /**
   * Выводить ли комментарии
   */
  withComments: boolean
}
