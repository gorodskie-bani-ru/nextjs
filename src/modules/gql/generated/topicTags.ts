/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TopicTagsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Bani684SocietyTopicTagsWhereInput>;
  orderBy?: Types.Maybe<Array<Types.Bani684SocietyTopicTagsOrderByInput> | Types.Bani684SocietyTopicTagsOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type TopicTagsQuery = { __typename?: 'Query', topicTags: Array<{ __typename?: 'TopicTag', tag: string }> };


export const TopicTagsDocument = gql`
    query topicTags($where: bani684_society_topic_tagsWhereInput, $orderBy: [bani684_society_topic_tagsOrderByInput!], $take: Int, $skip: Int) {
  topicTags(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    tag
  }
}
    `;

/**
 * __useTopicTagsQuery__
 *
 * To run a query within a React component, call `useTopicTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicTagsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useTopicTagsQuery(baseOptions?: Apollo.QueryHookOptions<TopicTagsQuery, TopicTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopicTagsQuery, TopicTagsQueryVariables>(TopicTagsDocument, options);
      }
export function useTopicTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopicTagsQuery, TopicTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopicTagsQuery, TopicTagsQueryVariables>(TopicTagsDocument, options);
        }
export type TopicTagsQueryHookResult = ReturnType<typeof useTopicTagsQuery>;
export type TopicTagsLazyQueryHookResult = ReturnType<typeof useTopicTagsLazyQuery>;
export type TopicTagsQueryResult = Apollo.QueryResult<TopicTagsQuery, TopicTagsQueryVariables>;