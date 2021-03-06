/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentFragment } from './comment';
import { gql } from '@apollo/client';
import { CommentFragmentDoc } from './comment';
import * as Apollo from '@apollo/client';
export type CommentsQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Bani684SocietyCommentsWhereInput>;
  orderBy?: Types.Maybe<Array<Types.Bani684SocietyCommentsOrderByInput> | Types.Bani684SocietyCommentsOrderByInput>;
  take?: Types.Maybe<Types.Scalars['Int']>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type CommentsQuery = { __typename?: 'Query', commentsCount: number, comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> };


export const CommentsDocument = gql`
    query comments($where: bani684_society_commentsWhereInput, $orderBy: [bani684_society_commentsOrderByInput!], $take: Int, $skip: Int) {
  comments(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    ...comment
  }
  commentsCount(where: $where)
}
    ${CommentFragmentDoc}`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions?: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, baseOptions);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, baseOptions);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;