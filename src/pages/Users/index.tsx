import React, { useMemo } from 'react'
import {
  UsersDocument,
  UsersQueryVariables,
  useUsersQuery,
} from 'src/modules/gql/generated'

import View from './View'

import { Page } from '../_App/interfaces'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { NextSeo } from 'next-seo'

const getQueryParams = (
  query: ParsedUrlQuery
): UsersQueryVariables & { page: number } => {
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
      active: {
        equals: true,
      },
      Attributes: {
        blocked: {
          equals: false,
        },
      },
    },
  }
}

const UsersPage: Page = () => {
  const router = useRouter()

  const { query } = router

  const { page, ...variables } = useMemo(() => {
    return {
      ...getQueryParams(query),
    }
  }, [query])

  const response = useUsersQuery({
    variables,
    onError: console.error,
  })

  return (
    <>
      <NextSeo title="Пользователи" description="Все пользователи" />

      <View
        // {...queryResult}
        // data={response}
        // count={0}
        // variables={variables}
        // page={page}
        // loading={loading}
        users={response.data?.users || []}
        pagination={{
          limit: response.variables?.take || 0,
          page,
          total: response.data?.usersCount || 0,
        }}
      />
    </>
  )
}

UsersPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: UsersDocument,

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

export default UsersPage
