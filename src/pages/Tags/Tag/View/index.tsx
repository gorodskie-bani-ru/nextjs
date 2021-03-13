import React, { useMemo } from 'react'
import TopicsView from 'src/pages/Topics/View'
import { TagPageViewProps } from './interfaces'

const TagPageView: React.FC<TagPageViewProps> = ({
  topics,
  title,
  pagination,
}) => {
  return useMemo(() => {
    return (
      <>
        <TopicsView title={title} topics={topics} pagination={pagination} />
      </>
    )
  }, [pagination, title, topics])
}

export default TagPageView
