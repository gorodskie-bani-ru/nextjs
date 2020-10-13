/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ListCityFragment } from './ListCity';
import { gql } from '@apollo/client';
import { ListCityFragmentDoc } from './ListCity';
import * as Apollo from '@apollo/client';
export type CitiesQueryVariables = Types.Exact<{
  resourcesLimit?: Types.Maybe<Types.Scalars['Int']>;
  resourcesCoords?: Types.Maybe<Types.SearchCoordsType>;
  resourcesCenter?: Types.Maybe<Types.InputCoordsType>;
}>;


export type CitiesQuery = { __typename?: 'RootType', cities?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'ResourceType' }
    & ListCityFragment
  )>>> };


export const CitiesDocument = gql`
    query cities($resourcesLimit: Int = 3, $resourcesCoords: SearchCoordsType, $resourcesCenter: InputCoordsType) {
  cities: resources(limit: $resourcesLimit, coords: $resourcesCoords, center: $resourcesCenter, parent: 1296) {
    ...ListCity
  }
}
    ${ListCityFragmentDoc}`;

/**
 * __useCitiesQuery__
 *
 * To run a query within a React component, call `useCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCitiesQuery({
 *   variables: {
 *      resourcesLimit: // value for 'resourcesLimit'
 *      resourcesCoords: // value for 'resourcesCoords'
 *      resourcesCenter: // value for 'resourcesCenter'
 *   },
 * });
 */
export function useCitiesQuery(baseOptions?: Apollo.QueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
        return Apollo.useQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, baseOptions);
      }
export function useCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
          return Apollo.useLazyQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, baseOptions);
        }
export type CitiesQueryHookResult = ReturnType<typeof useCitiesQuery>;
export type CitiesLazyQueryHookResult = ReturnType<typeof useCitiesLazyQuery>;
export type CitiesQueryResult = Apollo.QueryResult<CitiesQuery, CitiesQueryVariables>;