import React, { useMemo } from 'react'
import {
  ResourcesDocument,
  ResourcesQueryVariables,
  useResourcesQuery,
  SortOrder,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { TopicsViewProps } from './View/interfaces'
import { NextSeo } from 'next-seo'

const getQueryParams = (
  query: ParsedUrlQuery
): ResourcesQueryVariables & { page: number } => {
  let skip: number | undefined

  const take = 10

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * take
  }

  return {
    page,
    skip,
    take,
    where: {
      template: {
        // in: [15, 28],
        equals: 28,
      },
    },
    orderBy: {
      createdon: SortOrder.DESC,
    },
    withContent: true,
    withCreatedBy: true,
  }
}

/**
 * Обзоры и отзывы о заведениях
 */
const ReviewPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { ...queryVariables } = useMemo(() => {
    return {
      ...getQueryParams(query),
    }
  }, [query])

  const response = useResourcesQuery({
    variables: queryVariables,
    onError: console.error,
  })

  // const { variables, loading } = response

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 1

  const topics = useMemo(() => {
    const topics: TopicsViewProps['topics'] = []

    response.data?.resources.map((n) => {
      if (n.__typename === 'Resource') {
        topics.push(n)
      }
    })

    return topics
  }, [response.data?.resources])

  return (
    <>
      <NextSeo
        title="Обзоры и отзывы"
        description="Обзоры и отзывы о банях и саунах"
      />

      <View
        // {...queryResult}
        // data={response}
        // count={0}
        // variables={variables}
        // page={page}
        // loading={loading}
        topics={topics}
        pagination={{
          limit: response.variables?.take || 0,
          page,
          total: response.data?.resourcesCount || 0,
        }}
      />
    </>
  )
}

ReviewPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: ResourcesDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...getQueryParams(context.query),
    },
  })

  return {}
}

export default ReviewPage
