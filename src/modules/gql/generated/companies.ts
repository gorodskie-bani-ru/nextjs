/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CompanyFragment } from './Company_';
import { gql } from '@apollo/client';
import { CompanyFragmentDoc } from './Company_';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CompaniesQueryVariables = Types.Exact<{
  skip?: Types.Maybe<Types.Scalars['Int']>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  orderBy?: Types.Maybe<Types.CompaniesOrderByInput>;
  withContent?: Types.Maybe<Types.Scalars['Boolean']>;
  withComments?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type CompaniesQuery = { __typename?: 'Query', companiesCount: number, companies: Array<(
    { __typename?: 'Company' }
    & CompanyFragment
  )> };


export const CompaniesDocument = gql`
    query companies($skip: Int, $take: Int, $orderBy: CompaniesOrderByInput, $withContent: Boolean = false, $withComments: Boolean = false) {
  companiesCount
  companies(skip: $skip, take: $take, orderBy: $orderBy) {
    ...Company_
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *      withContent: // value for 'withContent'
 *      withComments: // value for 'withComments'
 *   },
 * });
 */
export function useCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, options);
      }
export function useCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, options);
        }
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<typeof useCompaniesLazyQuery>;
export type CompaniesQueryResult = Apollo.QueryResult<CompaniesQuery, CompaniesQueryVariables>;