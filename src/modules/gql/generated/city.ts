/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CityFragment = { __typename?: 'City', id: number, pagetitle: string, longtitle: string, alias?: Types.Maybe<string>, uri?: Types.Maybe<string>, coords?: Types.Maybe<{ __typename?: 'Coordinates', lat: number, lng: number, zoom?: Types.Maybe<number> }> };

export const CityFragmentDoc = gql`
    fragment city on City {
  id
  pagetitle
  longtitle
  alias
  uri
  coords {
    lat
    lng
    zoom
  }
}
    `;