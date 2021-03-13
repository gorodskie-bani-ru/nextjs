import React, { useMemo } from 'react'
import Tags from 'src/components/ui/Tags'
import Title from 'src/components/ui/Title'
import { TagsPageViewProps } from './interfaces'

const TagsPageView: React.FC<TagsPageViewProps> = ({ tags }) => {
  return useMemo(() => {
    return (
      <>
        <Title variant="h1">Все теги</Title>

        <Tags tags={tags} />
      </>
    )
  }, [tags])
}

export default TagsPageView
