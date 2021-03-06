/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { UserFragment } from './user_';
import { gql } from '@apollo/client';
import { UserFragmentDoc } from './user_';
export type ResourceFragment = { __typename?: 'Resource', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, content?: Types.Maybe<string>, CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> };

export const ResourceFragmentDoc = gql`
    fragment resource on Resource {
  id
  pagetitle
  uri
  createdon
  content @include(if: $withContent)
  CreatedBy @include(if: $withCreatedBy) {
    ...user_
  }
}
    ${UserFragmentDoc}`;