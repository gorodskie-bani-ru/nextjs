/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CompanyFieldsFragment = { __typename?: 'Company', id?: Types.Maybe<number>, name?: Types.Maybe<string>, longtitle?: Types.Maybe<string>, alias?: Types.Maybe<string>, uri?: Types.Maybe<string>, city_id?: Types.Maybe<number>, city?: Types.Maybe<string>, city_uri?: Types.Maybe<string>, template?: Types.Maybe<number>, published?: Types.Maybe<boolean>, publishedon?: Types.Maybe<number>, pubdate?: Types.Maybe<string>, createdon?: Types.Maybe<number>, createdby?: Types.Maybe<number>, editedby?: Types.Maybe<number>, editedon?: Types.Maybe<number>, mapIcon?: Types.Maybe<string>, image?: Types.Maybe<string>, errors?: Types.Maybe<any>, _isDirty?: Types.Maybe<any>, coords?: Types.Maybe<{ __typename?: 'coordsType', lat?: Types.Maybe<number>, lng?: Types.Maybe<number> }> };

export const CompanyFieldsFragmentDoc = gql`
    fragment CompanyFields on Company {
  id
  name
  longtitle
  alias
  uri
  city_id
  city
  city_uri
  template
  published
  publishedon
  pubdate
  createdon
  createdby
  editedby
  editedon
  mapIcon
  image
  coords {
    lat
    lng
  }
  errors
  _isDirty
}
    `;