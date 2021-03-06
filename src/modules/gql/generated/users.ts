/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserFragment } from './user_';
import { gql } from '@apollo/client';
import { UserFragmentDoc } from './user_';
import * as Apollo from '@apollo/client';
export type UsersQueryVariables = Types.Exact<{
  where?: Types.Maybe<Types.Bani684UsersWhereInput>;
  orderBy?: Types.Maybe<Array<Types.Bani684UsersOrderByInput> | Types.Bani684UsersOrderByInput>;
  skip?: Types.Maybe<Types.Scalars['Int']>;
  take?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type UsersQuery = { __typename?: 'Query', usersCount: number, users: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> };


export const UsersDocument = gql`
    query users($where: bani684_usersWhereInput, $orderBy: [bani684_usersOrderByInput!], $skip: Int, $take: Int) {
  users(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    ...user_
  }
  usersCount(where: $where)
}
    ${UserFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;