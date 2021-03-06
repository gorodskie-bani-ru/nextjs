import React, { useMemo } from 'react'
import Pagination from 'src/components/ui/Pagination'
import Topic from 'src/components/ui/Topic'
import { TopicsViewProps } from './interfaces'
import { TopicsViewStyled } from './styles'

const TopicsView: React.FC<TopicsViewProps> = ({
  topics,
  pagination,
  ...other
}) => {
  return useMemo(() => {
    return (
      <TopicsViewStyled {...other}>
        {topics.map((n) => {
          return <Topic key={n.id} topic={n} />
        })}

        <Pagination {...pagination} />
      </TopicsViewStyled>
    )
  }, [other, topics, pagination])
}

export default TopicsView
