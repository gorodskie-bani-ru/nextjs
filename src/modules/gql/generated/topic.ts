/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { ResourceCityFragment, ResourceCompanyFragment, ResourceRatingFragment, ResourceResourceFragment, ResourceReviewFragment, ResourceTopicFragment } from './resource';
import { gql } from '@apollo/client';
import { ResourceFragmentDoc } from './resource';
export type TopicCityFragment = (
  { __typename?: 'City' }
  & ResourceCityFragment
);

export type TopicCompanyFragment = (
  { __typename?: 'Company' }
  & ResourceCompanyFragment
);

export type TopicRatingFragment = (
  { __typename?: 'Rating' }
  & ResourceRatingFragment
);

export type TopicResourceFragment = (
  { __typename?: 'Resource' }
  & ResourceResourceFragment
);

export type TopicReviewFragment = (
  { __typename?: 'Review' }
  & ResourceReviewFragment
);

export type TopicTopicFragment = (
  { __typename?: 'Topic' }
  & ResourceTopicFragment
);

export type TopicFragment = TopicCityFragment | TopicCompanyFragment | TopicRatingFragment | TopicResourceFragment | TopicReviewFragment | TopicTopicFragment;

export const TopicFragmentDoc = gql`
    fragment topic on ResourceInterface {
  ...resource
}
    ${ResourceFragmentDoc}`;