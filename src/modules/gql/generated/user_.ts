/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type UserFragment = { __typename?: 'User', id: number, username?: Types.Maybe<string> };

export const UserFragmentDoc = gql`
    fragment user_ on User {
  id
  username
}
    `;