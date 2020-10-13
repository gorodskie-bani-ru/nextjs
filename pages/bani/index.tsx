import CompaniesPage from 'src/pages/Companies' // getServerSideProps,

// import { GetServerSideProps } from "next";
// import { initializeApollo } from 'src/lib/apolloClient';
// import { CitiesDocument } from 'src/modules/gql/generated';

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const { skip, first } = context.query

//   // console.log('getServerSideProps');

//   const apolloClient = initializeApollo()

//   await apolloClient.query({
//     query: CitiesDocument,
//     variables: {},
//   })

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   }
// }

// export {
//   getServerSideProps,
// }

export default CompaniesPage
