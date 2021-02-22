// import { useRouter } from 'next/router'
import Head from 'next/head'
import OldMainPage from 'src/components/Pages/MainPage'
import { Page } from '../_App/interfaces'
// import { GetStaticProps } from 'next'
// import { GetServerSideProps } from 'next'

// import PostList, {
//   ALL_POSTS_QUERY,
//   allPostsQueryVars,
// } from '../src/components/PostList'

// import { initializeApollo } from '../src/lib/apolloClient'

export const MainPage: Page = (): JSX.Element => {
  // const router = useRouter()

  // const {
  //   // query: { skip, first },
  // } = router

  return (
    <>
      <Head>
        <title>Бани Москвы | Городские и общественные бани</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Все Городские и общественные бани" />
      </Head>

      <OldMainPage />
    </>
  )
}

// MainPage.getInitialProps = () => {

//   return {
//     statusCode: 404,
//   }
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { skip, first } = context.query

//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: ALL_POSTS_QUERY,
//     variables: {
//       ...allPostsQueryVars,
//       skip:
//         skip && typeof skip === 'string'
//           ? parseInt(skip)
//           : allPostsQueryVars.skip,
//       first:
//         first && typeof first === 'string'
//           ? parseInt(first)
//           : allPostsQueryVars.first,
//     },
//   })

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   }
// }

export default MainPage
