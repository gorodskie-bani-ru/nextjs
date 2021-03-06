/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type ResourceNoNestingFragment = { __typename?: 'Resource', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, template: number, content?: Types.Maybe<string> };

export const ResourceNoNestingFragmentDoc = gql`
    fragment resourceNoNesting on Resource {
  id
  pagetitle
  uri
  createdon
  template
  content @include(if: $withContent)
}
    `;