/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ResourceNoNestingFragment } from './resourceNoNesting';
import { UserFragment } from './user_';
import { CommentFragment } from './comment';
import { gql } from '@apollo/client';
import { ResourceNoNestingFragmentDoc } from './resourceNoNesting';
import { UserFragmentDoc } from './user_';
import { CommentFragmentDoc } from './comment';
export type ResourceFragment = (
  { __typename?: 'Resource', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, Comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
  & ResourceNoNestingFragment
);

export const ResourceFragmentDoc = gql`
    fragment resource on Resource {
  ...resourceNoNesting
  CreatedBy @include(if: $withCreatedBy) {
    ...user_
  }
  Comments {
    ...comment
  }
}
    ${ResourceNoNestingFragmentDoc}
${UserFragmentDoc}
${CommentFragmentDoc}`;