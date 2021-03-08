/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type VotesByRatingQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type VotesByRatingQuery = { __typename?: 'Query', votesByRating: Array<{ __typename?: 'Votes', type?: Types.Maybe<number>, avg: { __typename?: 'VotesAvg', voteValueAvg: number } }> };


export const VotesByRatingDocument = gql`
    query votesByRating {
  votesByRating {
    type
    avg {
      voteValueAvg
    }
  }
}
    `;

/**
 * __useVotesByRatingQuery__
 *
 * To run a query within a React component, call `useVotesByRatingQuery` and pass it any options that fit your needs.
 * When your component renders, `useVotesByRatingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVotesByRatingQuery({
 *   variables: {
 *   },
 * });
 */
export function useVotesByRatingQuery(baseOptions?: Apollo.QueryHookOptions<VotesByRatingQuery, VotesByRatingQueryVariables>) {
        return Apollo.useQuery<VotesByRatingQuery, VotesByRatingQueryVariables>(VotesByRatingDocument, baseOptions);
      }
export function useVotesByRatingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VotesByRatingQuery, VotesByRatingQueryVariables>) {
          return Apollo.useLazyQuery<VotesByRatingQuery, VotesByRatingQueryVariables>(VotesByRatingDocument, baseOptions);
        }
export type VotesByRatingQueryHookResult = ReturnType<typeof useVotesByRatingQuery>;
export type VotesByRatingLazyQueryHookResult = ReturnType<typeof useVotesByRatingLazyQuery>;
export type VotesByRatingQueryResult = Apollo.QueryResult<VotesByRatingQuery, VotesByRatingQueryVariables>;