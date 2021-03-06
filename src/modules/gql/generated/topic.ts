/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ResourceCityFragment, ResourceCompanyFragment, ResourceRatingFragment, ResourceResourceFragment, ResourceReviewFragment, ResourceTopicFragment } from './resource';
import { gql } from '@apollo/client';
import { ResourceFragmentDoc } from './resource';
export type TopicCityFragment = (
  { __typename?: 'City', id: number, pagetitle: string }
  & ResourceCityFragment
);

export type TopicCompanyFragment = (
  { __typename?: 'Company', id: number, pagetitle: string }
  & ResourceCompanyFragment
);

export type TopicRatingFragment = (
  { __typename?: 'Rating', id: number, pagetitle: string }
  & ResourceRatingFragment
);

export type TopicResourceFragment = (
  { __typename?: 'Resource', id: number, pagetitle: string }
  & ResourceResourceFragment
);

export type TopicReviewFragment = (
  { __typename?: 'Review', id: number, pagetitle: string }
  & ResourceReviewFragment
);

export type TopicTopicFragment = (
  { __typename?: 'Topic', id: number, pagetitle: string }
  & ResourceTopicFragment
);

export type TopicFragment = TopicCityFragment | TopicCompanyFragment | TopicRatingFragment | TopicResourceFragment | TopicReviewFragment | TopicTopicFragment;

export const TopicFragmentDoc = gql`
    fragment topic on ResourceInterface {
  id
  pagetitle
  ...resource
}
    ${ResourceFragmentDoc}`;