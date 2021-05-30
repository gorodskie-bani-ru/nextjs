import React, { useMemo } from 'react'
import {
  CommentsDocument,
  CommentsQuery,
  CommentsQueryVariables,
  SortOrder,
  useCommentsQuery,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'

const getQueryParams = (
  query: ParsedUrlQuery
): CommentsQueryVariables & { page: number } => {
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
    where: {},
    orderBy: {
      createdon: SortOrder.DESC,
    },
  }
}

const CommentsPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...variables } = useMemo(() => {
    return {
      ...getQueryParams(query),
    }
  }, [query])

  const response = useCommentsQuery({
    variables,
    onError: console.error,
  })

  return (
    <>
      <NextSeo title="Комментарии" description="Отзывы о банях и саунах" />

      <View
        // {...queryResult}
        // data={response}
        // count={0}
        // variables={variables}
        // page={page}
        // loading={loading}
        comments={response.data?.comments || []}
        pagination={{
          limit: response.variables?.take || 0,
          page,
          total: response.data?.commentsCount || 0,
        }}
      />
    </>
  )
}

CommentsPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  const result = await apolloClient.query<CommentsQuery>({
    query: CommentsDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables: {
      ...getQueryParams(context.query),
    },
  })

  return {
    statusCode: !result.data.comments.length ? 404 : undefined,
  }
}

export default CommentsPage
