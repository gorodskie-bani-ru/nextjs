import React, { useMemo } from 'react'
// import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
// import OldMainPage from 'src/components_old/Pages/MainPage'
import { Page } from '../_App/interfaces'
// import { GetStaticProps } from 'next'
// import { GetServerSideProps } from 'next'

// import PostList, {
//   ALL_POSTS_QUERY,
//   allPostsQueryVars,
// } from '../src/components/PostList'

// import { initializeApollo } from '../src/lib/apolloClient'

import {
  useCompaniesQuery,
  CompaniesDocument,
  CompaniesQuery,
  CompaniesQueryVariables,
} from 'src/modules/gql/generated'

import CompaniesView from '../Companies/View'
import { MainPageProps } from './interfaces'
import { getCompaniesVariables } from '../Cities/City'
import { useRouter } from 'next/router'

export const MainPage: Page<MainPageProps> = ({ city }): JSX.Element => {
  const router = useRouter()

  const { variables, page } = useMemo(() => {
    return getCompaniesVariables({
      city,
      query: router.query,
    })
  }, [city, router.query])

  const companiesResponse = useCompaniesQuery({
    variables,
  })

  return (
    <>
      <NextSeo
        title="Городские и общественные бани"
        description="Все Городские и общественные бани"
      />

      {/* <OldMainPage /> */}

      <CompaniesView
        companies={companiesResponse.data?.companies || []}
        city={city}
        pagination={{
          page,
          limit: companiesResponse.variables?.take || 0,
          total: 100,
        }}
      />
    </>
  )
}

MainPage.getInitialProps = async (appContext) => {
  const { apolloClient, cities, query } = appContext

  const moscow = cities.find((n) => n.id === 1197)

  await apolloClient.query<CompaniesQuery, CompaniesQueryVariables>({
    query: CompaniesDocument,
    variables: getCompaniesVariables({
      city: moscow,
      query,
    }).variables,
  })

  return {
    city: moscow,
  }
}

export default MainPage
