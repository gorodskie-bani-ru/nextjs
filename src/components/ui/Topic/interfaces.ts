import { ResourceFragment } from 'src/modules/gql/generated'

export type TopicProps = {
  topic: ResourceFragment

  /**
   * Выводить ли комментарии
   */
  withComments: boolean
}
