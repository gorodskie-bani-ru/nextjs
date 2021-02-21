/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ListCompanyFragment } from './ListCompany';
import { gql } from '@apollo/client';
import { ListCompanyFragmentDoc } from './ListCompany';
import * as Apollo from '@apollo/client';
export type CompaniesQueryVariables = Types.Exact<{
  companiesLimit?: Types.Maybe<Types.Scalars['Int']>;
  companyIds?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Int']>> | Types.Maybe<Types.Scalars['Int']>>;
  companiesSearchQuery?: Types.Maybe<Types.Scalars['String']>;
  companiesCoords?: Types.Maybe<Types.SearchCoordsType>;
  companiesCenter?: Types.Maybe<Types.InputCoordsType>;
}>;


export type CompaniesQuery = { __typename?: 'RootType', companiesList?: Types.Maybe<{ __typename?: 'companiesList', count?: Types.Maybe<number>, total?: Types.Maybe<number>, limit?: Types.Maybe<number>, page?: Types.Maybe<number>, object?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Company' }
      & ListCompanyFragment
    )>>> }> };


export const CompaniesDocument = gql`
    query companies($companiesLimit: Int = 2, $companyIds: [Int], $companiesSearchQuery: String, $companiesCoords: SearchCoordsType, $companiesCenter: InputCoordsType) {
  companiesList(
    limit: $companiesLimit
    ids: $companyIds
    search: $companiesSearchQuery
    coords: $companiesCoords
    center: $companiesCenter
  ) {
    count
    total
    limit
    page
    object {
      ...ListCompany
    }
  }
}
    ${ListCompanyFragmentDoc}`;

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
 *      companiesLimit: // value for 'companiesLimit'
 *      companyIds: // value for 'companyIds'
 *      companiesSearchQuery: // value for 'companiesSearchQuery'
 *      companiesCoords: // value for 'companiesCoords'
 *      companiesCenter: // value for 'companiesCenter'
 *   },
 * });
 */
export function useCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
        return Apollo.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
      }
export function useCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
          return Apollo.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, baseOptions);
        }
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<typeof useCompaniesLazyQuery>;
export type CompaniesQueryResult = Apollo.QueryResult<CompaniesQuery, CompaniesQueryVariables>;