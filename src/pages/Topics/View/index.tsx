import React, { useMemo } from 'react'
import Pagination from 'src/components/ui/Pagination'
import Title from 'src/components/ui/Title'
import Topic from 'src/components/ui/Topic'
import { TopicsViewProps } from './interfaces'
import { TopicsViewStyled } from './styles'

const TopicsView: React.FC<TopicsViewProps> = ({
  title,
  topics,
  pagination,
  ...other
}) => {
  return useMemo(() => {
    return (
      <TopicsViewStyled {...other}>
        <Title variant="h1">{title}</Title>

        {topics.map((n) => {
          return <Topic key={n.id} topic={n} withComments={false} />
        })}

        <Pagination {...pagination} />
      </TopicsViewStyled>
    )
  }, [other, title, topics, pagination])
}

export default TopicsView
