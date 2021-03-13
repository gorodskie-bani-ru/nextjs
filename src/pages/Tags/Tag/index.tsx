import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useMemo } from 'react'
import {
  SortOrder,
  ResourcesQueryVariables,
  TopicTagsDocument,
  TopicTagsQuery,
  TopicTagsQueryVariables,
  useResourcesQuery,
  TopicTag,
  ResourcesDocument,
  ResourcesQuery,
} from 'src/modules/gql/generated'
import { TopicsViewProps } from 'src/pages/Topics/View/interfaces'
import { Page } from '../../_App/interfaces'
import { TagPageProps } from './interfaces'
import TagPageView from './View'

const getQueryParams = (
  query: ParsedUrlQuery,
  tag: TopicTag
): {
  page: number
  variables: ResourcesQueryVariables
} => {
  let skip: number | undefined

  const take = 2

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * take
  }

  return {
    page,
    variables: {
      skip,
      take,
      where: {
        Tags: {
          some: {
            tag: {
              equals: tag.tag,
            },
          },
        },
      },
      orderBy: {
        createdon: SortOrder.DESC,
      },
      withContent: true,
      withCreatedBy: true,
    },
  }
}

const TagPage: Page<TagPageProps> = ({ tag }) => {
  const router = useRouter()

  const { page, variables } = getQueryParams(router.query, tag)

  const response = useResourcesQuery({
    variables,
  })

  const topics = useMemo(() => {
    const topics: TopicsViewProps['topics'] = []

    response.data?.resources.map((n) => {
      if (n.__typename === 'Topic' || n.__typename === 'Review') {
        topics.push(n)
      }
    })

    return topics
  }, [response.data?.resources])

  return useMemo(() => {
    const title = `Все публикации с тегом "${tag.tag}"`

    return (
      <>
        <NextSeo
          title={title}
          description={`Все новости, отзывы и обзоры общественных бань и саун по тегу "${tag.tag}"`}
        />

        <TagPageView
          tag={tag}
          title={title}
          topics={topics}
          pagination={{
            page,
            limit: response.variables?.take || 0,
            total: response.data?.resourcesCount || 0,
          }}
        />
      </>
    )
  }, [
    page,
    response.data?.resourcesCount,
    response.variables?.take,
    tag,
    topics,
  ])
}

TagPage.getInitialProps = async ({ apolloClient, query }) => {
  const tagName = (typeof query.tag === 'string' && query.tag) || ''

  const tagResult = await apolloClient.query<
    TopicTagsQuery,
    TopicTagsQueryVariables
  >({
    query: TopicTagsDocument,
    variables: {
      take: 1,
      where: {
        tag: {
          equals: tagName,
        },
      },
    },
  })

  const tag = tagResult.data.topicTags[0]

  if (tag) {
    const { variables } = getQueryParams(query, tag)

    await apolloClient.query<ResourcesQuery, ResourcesQueryVariables>({
      query: ResourcesDocument,
      variables,
    })
  }

  return {
    tag,
    statusCode: !tag ? 404 : undefined,
  }
}

export default TagPage
