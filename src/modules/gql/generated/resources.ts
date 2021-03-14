/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ResourceCityFragment, ResourceCompanyFragment, ResourceRatingFragment, ResourceResourceFragment, ResourceReviewFragment, ResourceTopicFragment } from './resource';
import { gql } from '@apollo/client';
import { ResourceFragmentDoc } from './resource';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ResourcesQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Bani684SiteContentWhereInput>;
  orderBy?: Types.Maybe<Array<Types.Bani684SiteContentOrderByInput> | Types.Bani684SiteContentOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  withContent?: Types.Maybe<Types.Scalars['Boolean']>;
  withCreatedBy?: Types.Maybe<Types.Scalars['Boolean']>;
  withComments?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type ResourcesQuery = { __typename?: 'Query', resourcesCount: number, resources: Array<(
    { __typename?: 'City' }
    & ResourceCityFragment
  ) | (
    { __typename?: 'Company' }
    & ResourceCompanyFragment
  ) | (
    { __typename?: 'Rating' }
    & ResourceRatingFragment
  ) | (
    { __typename?: 'Resource' }
    & ResourceResourceFragment
  ) | (
    { __typename?: 'Review' }
    & ResourceReviewFragment
  ) | (
    { __typename?: 'Topic' }
    & ResourceTopicFragment
  )> };


export const ResourcesDocument = gql`
    query resources($where: bani684_site_contentWhereInput, $orderBy: [bani684_site_contentOrderByInput!], $take: Int, $skip: Int, $withContent: Boolean = false, $withCreatedBy: Boolean = false, $withComments: Boolean = false) {
  resources(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ...resource
  }
  resourcesCount(where: $where)
}
    ${ResourceFragmentDoc}`;

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
 *      withComments: // value for 'withComments'
 *   },
 * });
 */
export function useResourcesQuery(baseOptions?: Apollo.QueryHookOptions<ResourcesQuery, ResourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ResourcesQuery, ResourcesQueryVariables>(ResourcesDocument, options);
      }
export function useResourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResourcesQuery, ResourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ResourcesQuery, ResourcesQueryVariables>(ResourcesDocument, options);
        }
export type ResourcesQueryHookResult = ReturnType<typeof useResourcesQuery>;
export type ResourcesLazyQueryHookResult = ReturnType<typeof useResourcesLazyQuery>;
export type ResourcesQueryResult = Apollo.QueryResult<ResourcesQuery, ResourcesQueryVariables>;