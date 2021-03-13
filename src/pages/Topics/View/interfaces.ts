import { PaginationProps } from 'src/components/ui/Pagination'
import { TopicProps } from 'src/components/ui/Topic/interfaces'

export type TopicsViewProps = {
  title: string

  topics: TopicProps['topic'][]

  pagination: PaginationProps
}
