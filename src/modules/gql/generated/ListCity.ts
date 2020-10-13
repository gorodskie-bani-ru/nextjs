/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type ListCityFragment = { __typename?: 'ResourceType', id?: Types.Maybe<number>, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, alias?: Types.Maybe<string>, uri?: Types.Maybe<string>, image?: Types.Maybe<string>, parent?: Types.Maybe<number>, coords?: Types.Maybe<{ __typename?: 'coordsType', lat?: Types.Maybe<number>, lng?: Types.Maybe<number>, zoom?: Types.Maybe<number> }>, imageFormats?: Types.Maybe<{ __typename?: 'Images', marker_thumb?: Types.Maybe<string> }> };

export const ListCityFragmentDoc = gql`
    fragment ListCity on ResourceType {
  id
  name
  longtitle
  alias
  uri
  coords {
    lat
    lng
    zoom
  }
  image
  imageFormats {
    marker_thumb
  }
  parent
}
    `;