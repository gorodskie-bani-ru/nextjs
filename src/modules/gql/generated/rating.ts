/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type RatingFragment = { __typename?: 'Rating', id: number, pagetitle: string, uri?: Types.Maybe<string>, alias?: Types.Maybe<string> };

export const RatingFragmentDoc = gql`
    fragment rating on Rating {
  id
  pagetitle
  uri
  alias
}
    `;