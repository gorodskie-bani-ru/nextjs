/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { ResourceNoNestingCityFragment, ResourceNoNestingCompanyFragment, ResourceNoNestingRatingFragment, ResourceNoNestingResourceFragment, ResourceNoNestingReviewFragment, ResourceNoNestingTopicFragment } from './resourceNoNesting';
import { UserFragment } from './user_';
import { CommentFragment } from './comment';
import { gql } from '@apollo/client';
import { ResourceNoNestingFragmentDoc } from './resourceNoNesting';
import { UserFragmentDoc } from './user_';
import { CommentFragmentDoc } from './comment';
export type ResourceCityFragment = (
  { __typename?: 'City', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, Comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
  & ResourceNoNestingCityFragment
);

export type ResourceCompanyFragment = (
  { __typename?: 'Company', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, Comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
  & ResourceNoNestingCompanyFragment
);

export type ResourceRatingFragment = (
  { __typename?: 'Rating', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, Comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
  & ResourceNoNestingRatingFragment
);

export type ResourceResourceFragment = (
  { __typename?: 'Resource', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, Comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
  & ResourceNoNestingResourceFragment
);

export type ResourceReviewFragment = (
  { __typename?: 'Review', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, Comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
  & ResourceNoNestingReviewFragment
);

export type ResourceTopicFragment = (
  { __typename?: 'Topic', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )>, Comments: Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
  & ResourceNoNestingTopicFragment
);

export type ResourceFragment = ResourceCityFragment | ResourceCompanyFragment | ResourceRatingFragment | ResourceResourceFragment | ResourceReviewFragment | ResourceTopicFragment;

export const ResourceFragmentDoc = gql`
    fragment resource on ResourceInterface {
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