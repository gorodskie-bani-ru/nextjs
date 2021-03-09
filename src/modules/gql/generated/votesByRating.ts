/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { RatingFragment } from './rating';
import { CompanyFieldsFragment } from './CompanyFields';
import { gql } from '@apollo/client';
import { RatingFragmentDoc } from './rating';
import { CompanyFieldsFragmentDoc } from './CompanyFields';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type VotesByRatingQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type VotesByRatingQuery = { __typename?: 'Query', ratings: Array<(
    { __typename?: 'Rating' }
    & RatingFragment
  )>, companies: Array<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> };


export const VotesByRatingDocument = gql`
    query votesByRating {
  ratings {
    ...rating
  }
  companies {
    ...CompanyFields
  }
}
    ${RatingFragmentDoc}
${CompanyFieldsFragmentDoc}`;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VotesByRatingQuery, VotesByRatingQueryVariables>(VotesByRatingDocument, options);
      }
export function useVotesByRatingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VotesByRatingQuery, VotesByRatingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VotesByRatingQuery, VotesByRatingQueryVariables>(VotesByRatingDocument, options);
        }
export type VotesByRatingQueryHookResult = ReturnType<typeof useVotesByRatingQuery>;
export type VotesByRatingLazyQueryHookResult = ReturnType<typeof useVotesByRatingLazyQuery>;
export type VotesByRatingQueryResult = Apollo.QueryResult<VotesByRatingQuery, VotesByRatingQueryVariables>;