import { TopicFragment } from 'src/modules/gql/generated'

export type TopicProps = {
  topic: TopicFragment

  /**
   * Выводить ли комментарии
   */
  withComments: boolean
}
