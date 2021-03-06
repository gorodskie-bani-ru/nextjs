/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ResourceFragment } from './resource';
import { CompanyFieldsFragment } from './CompanyFields';
import { CityFragment } from './city';
import { gql } from '@apollo/client';
import { ResourceFragmentDoc } from './resource';
import { CompanyFieldsFragmentDoc } from './CompanyFields';
import { CityFragmentDoc } from './city';
import * as Apollo from '@apollo/client';
export type ResourcesQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Bani684SiteContentWhereInput>;
  orderBy?: Types.Maybe<Array<Types.Bani684SiteContentOrderByInput> | Types.Bani684SiteContentOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  withContent?: Types.Maybe<Types.Scalars['Boolean']>;
  withCreatedBy?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type ResourcesQuery = { __typename?: 'Query', resourcesCount: number, resources: Array<(
    { __typename?: 'City' }
    & CityFragment
  ) | (
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  ) | { __typename?: 'Rating' } | (
    { __typename?: 'Resource' }
    & ResourceFragment
  )> };


export const ResourcesDocument = gql`
    query resources($where: bani684_site_contentWhereInput, $orderBy: [bani684_site_contentOrderByInput!], $take: Int, $skip: Int, $withContent: Boolean = false, $withCreatedBy: Boolean = false) {
  resources(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ... on Resource {
      ...resource
    }
    ... on Company {
      ...CompanyFields
    }
    ... on City {
      ...city
    }
  }
  resourcesCount(where: $where)
}
    ${ResourceFragmentDoc}
${CompanyFieldsFragmentDoc}
${CityFragmentDoc}`;

/**
 * __useResourcesQuery__
 *
 * To run a query within a React component, call `useResourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useResourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResourcesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      withContent: // value for 'withContent'
 *      withCreatedBy: // value for 'withCreatedBy'
 *   },
 * });
 */
export function useResourcesQuery(baseOptions?: Apollo.QueryHookOptions<ResourcesQuery, ResourcesQueryVariables>) {
        return Apollo.useQuery<ResourcesQuery, ResourcesQueryVariables>(ResourcesDocument, baseOptions);
      }
export function useResourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResourcesQuery, ResourcesQueryVariables>) {
          return Apollo.useLazyQuery<ResourcesQuery, ResourcesQueryVariables>(ResourcesDocument, baseOptions);
        }
export type ResourcesQueryHookResult = ReturnType<typeof useResourcesQuery>;
export type ResourcesLazyQueryHookResult = ReturnType<typeof useResourcesLazyQuery>;
export type ResourcesQueryResult = Apollo.QueryResult<ResourcesQuery, ResourcesQueryVariables>;