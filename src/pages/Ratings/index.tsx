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
      parent: {
        equals: 1349,
      },
    },
    orderBy: {
      menuindex: SortOrder.ASC,
    },
    withContent: true,
    withCreatedBy: true,
  }
}

/**
 * Топики
 */
const RatingsPage: Page = () => {
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

  response

  return (
    <>
      <NextSeo
        title="Рейтинги бань и саун"
        description="Оценки по критериям Парилка, Интерьер..."
      />

      <View />
    </>
  )
}

RatingsPage.getInitialProps = async (context) => {
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

export default RatingsPage
