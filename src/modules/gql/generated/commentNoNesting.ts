/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CommentNoNestingFragment = { __typename?: 'Comment', id: number, text?: Types.Maybe<string>, raw_text?: Types.Maybe<string>, createdon?: Types.Maybe<globalThis.Date>, published?: Types.Maybe<string>, deleted?: Types.Maybe<string>, comments_count: number };

export const CommentNoNestingFragmentDoc = gql`
    fragment commentNoNesting on Comment {
  id
  text
  raw_text
  createdon
  published
  deleted
  comments_count
}
    `;