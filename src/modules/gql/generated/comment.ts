/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentNoNestingFragment } from './commentNoNesting';
import { UserFragment } from './user_';
import { gql } from '@apollo/client';
import { CommentNoNestingFragmentDoc } from './commentNoNesting';
import { UserFragmentDoc } from './user_';
export type CommentFragment = (
  { __typename?: 'Comment', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & CommentNoNestingFragment
);

export const CommentFragmentDoc = gql`
    fragment comment on Comment {
  ...commentNoNesting
  CreatedBy {
    ...user_
  }
}
    ${CommentNoNestingFragmentDoc}
${UserFragmentDoc}`;