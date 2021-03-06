/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { TopicCityFragment, TopicCompanyFragment, TopicRatingFragment, TopicResourceFragment, TopicReviewFragment, TopicTopicFragment } from './topic';
import { gql } from '@apollo/client';
import { TopicFragmentDoc } from './topic';
import * as Apollo from '@apollo/client';
export type TopicsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Bani684SiteContentWhereInput>;
  orderBy?: Types.Maybe<Array<Types.Bani684SiteContentOrderByInput> | Types.Bani684SiteContentOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  withContent?: Types.Maybe<Types.Scalars['Boolean']>;
  withCreatedBy?: Types.Maybe<Types.Scalars['Boolean']>;
}>;


export type TopicsQuery = { __typename?: 'Query', resourcesCount: number, topics: Array<(
    { __typename?: 'Topic' }
    & TopicTopicFragment
  )> };


export const TopicsDocument = gql`
    query topics($where: bani684_site_contentWhereInput, $orderBy: [bani684_site_contentOrderByInput!], $take: Int, $skip: Int, $withContent: Boolean = false, $withCreatedBy: Boolean = false) {
  topics(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ...topic
  }
  resourcesCount(where: $where)
}
    ${TopicFragmentDoc}`;

/**
 * __useTopicsQuery__
 *
 * To run a query within a React component, call `useTopicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicsQuery({
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
export function useTopicsQuery(baseOptions?: Apollo.QueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
        return Apollo.useQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, baseOptions);
      }
export function useTopicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopicsQuery, TopicsQueryVariables>) {
          return Apollo.useLazyQuery<TopicsQuery, TopicsQueryVariables>(TopicsDocument, baseOptions);
        }
export type TopicsQueryHookResult = ReturnType<typeof useTopicsQuery>;
export type TopicsLazyQueryHookResult = ReturnType<typeof useTopicsLazyQuery>;
export type TopicsQueryResult = Apollo.QueryResult<TopicsQuery, TopicsQueryVariables>;