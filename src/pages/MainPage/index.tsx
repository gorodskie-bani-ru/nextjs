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
  CompaniesQueryVariables,
} from 'src/modules/gql/generated'

import CompaniesView from '../Companies/View'

const variables: CompaniesQueryVariables = {
  take: 12,
}

export const MainPage: Page = (): JSX.Element => {
  // const router = useRouter()

  // const {
  //   // query: { skip, first },
  // } = router

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

      <CompaniesView componies={companiesResponse.data?.companies || []} />
    </>
  )
}

MainPage.getInitialProps = async (appContext) => {
  const { apolloClient } = appContext

  await apolloClient.query({
    query: CompaniesDocument,
    variables,
  })

  return {}
}

export default MainPage
