/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { ResourceNoNestingCityFragment, ResourceNoNestingCompanyFragment, ResourceNoNestingRatingFragment, ResourceNoNestingResourceFragment, ResourceNoNestingReviewFragment, ResourceNoNestingTopicFragment } from './resourceNoNesting';
import { UserFragment } from './user_';
import { TopicReviewFragmentCityFragment, TopicReviewFragmentCompanyFragment, TopicReviewFragmentRatingFragment, TopicReviewFragmentResourceFragment, TopicReviewFragmentReviewFragment, TopicReviewFragmentTopicFragment } from './TopicReviewFragment';
import { CompanyFieldsFragment } from './CompanyFields';
import { CityFragment } from './city';
import { gql } from '@apollo/client';
import { ResourceNoNestingFragmentDoc } from './resourceNoNesting';
import { UserFragmentDoc } from './user_';
import { TopicReviewFragmentFragmentDoc } from './TopicReviewFragment';
import { CompanyFieldsFragmentDoc } from './CompanyFields';
import { CityFragmentDoc } from './city';
export type ResourceCityFragment = (
  { __typename?: 'City', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & CityFragment
  & ResourceNoNestingCityFragment
  & TopicReviewFragmentCityFragment
);

export type ResourceCompanyFragment = (
  { __typename?: 'Company', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & CompanyFieldsFragment
  & ResourceNoNestingCompanyFragment
  & TopicReviewFragmentCompanyFragment
);

export type ResourceRatingFragment = (
  { __typename?: 'Rating', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & ResourceNoNestingRatingFragment
  & TopicReviewFragmentRatingFragment
);

export type ResourceResourceFragment = (
  { __typename?: 'Resource', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & ResourceNoNestingResourceFragment
  & TopicReviewFragmentResourceFragment
);

export type ResourceReviewFragment = (
  { __typename?: 'Review', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & ResourceNoNestingReviewFragment
  & TopicReviewFragmentReviewFragment
);

export type ResourceTopicFragment = (
  { __typename?: 'Topic', CreatedBy?: Types.Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
  & ResourceNoNestingTopicFragment
  & TopicReviewFragmentTopicFragment
);

export type ResourceFragment = ResourceCityFragment | ResourceCompanyFragment | ResourceRatingFragment | ResourceResourceFragment | ResourceReviewFragment | ResourceTopicFragment;

export const ResourceFragmentDoc = gql`
    fragment resource on ResourceInterface {
  ...resourceNoNesting
  CreatedBy @include(if: $withCreatedBy) {
    ...user_
  }
  ...TopicReviewFragment
  ... on Company {
    ...CompanyFields
  }
  ... on City {
    ...city
  }
}
    ${ResourceNoNestingFragmentDoc}
${UserFragmentDoc}
${TopicReviewFragmentFragmentDoc}
${CompanyFieldsFragmentDoc}
${CityFragmentDoc}`;