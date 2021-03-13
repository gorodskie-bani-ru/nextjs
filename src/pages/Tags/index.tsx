import { NextSeo } from 'next-seo'
import React, { useMemo } from 'react'
import {
  SortOrder,
  TopicTagsQueryVariables,
  useTopicTagsQuery,
} from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import TagsPageView from './View'

const variables: TopicTagsQueryVariables = {
  orderBy: {
    tag: SortOrder.ASC,
  },
}

const TagsPage: Page = () => {
  const response = useTopicTagsQuery({
    variables,
  })

  return useMemo(() => {
    return (
      <>
        <NextSeo
          title="Теги"
          description="Все теги отзывов и обзоров общественных бань и саун"
        />

        <TagsPageView tags={response.data?.topicTags || []} />
      </>
    )
  }, [response.data?.topicTags])
}

export default TagsPage
