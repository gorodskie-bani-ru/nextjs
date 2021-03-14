import { NextSeo } from 'next-seo'
import React, { useMemo } from 'react'
import {
  SortOrder,
  TopicTag,
  TopicTagsDocument,
  TopicTagsQuery,
  TopicTagsQueryVariables,
  // useTopicTagsQuery,
} from 'src/modules/gql/generated'
import { Page, PageProps } from '../_App/interfaces'
import TagsPageView from './View'

const variables: TopicTagsQueryVariables = {
  orderBy: {
    tag: SortOrder.ASC,
  },
}

type TagsPageProps = PageProps & {
  tags: TopicTag[]
}

const TagsPage: Page<TagsPageProps> = ({ tags }) => {
  // const response = useTopicTagsQuery({
  //   variables,
  // })

  return useMemo(() => {
    return (
      <>
        <NextSeo
          title="Теги"
          description="Все теги отзывов и обзоров общественных бань и саун"
        />

        <TagsPageView tags={tags} />
      </>
    )
  }, [tags])
}

TagsPage.getInitialProps = async ({ apolloClient }) => {
  const tags: TagsPageProps['tags'] = (
    await apolloClient.query<TopicTagsQuery, TopicTagsQueryVariables>({
      query: TopicTagsDocument,
      variables,
    })
  ).data.topicTags

  return {
    tags,
    statusCode: !tags.length ? 404 : undefined,
  }
}

export default TagsPage
