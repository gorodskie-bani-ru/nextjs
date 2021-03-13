/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type TopicReviewFragmentCityFragment = { __typename?: 'City' };

export type TopicReviewFragmentCompanyFragment = { __typename?: 'Company' };

export type TopicReviewFragmentRatingFragment = { __typename?: 'Rating' };

export type TopicReviewFragmentResourceFragment = { __typename?: 'Resource' };

export type TopicReviewFragmentReviewFragment = { __typename?: 'Review', Tags?: Types.Maybe<Array<{ __typename?: 'TopicTag', tag: string }>> };

export type TopicReviewFragmentTopicFragment = { __typename?: 'Topic', Tags?: Types.Maybe<Array<{ __typename?: 'TopicTag', tag: string }>> };

export type TopicReviewFragmentFragment = TopicReviewFragmentCityFragment | TopicReviewFragmentCompanyFragment | TopicReviewFragmentRatingFragment | TopicReviewFragmentResourceFragment | TopicReviewFragmentReviewFragment | TopicReviewFragmentTopicFragment;

export const TopicReviewFragmentFragmentDoc = gql`
    fragment TopicReviewFragment on ResourceInterface {
  ... on Topic {
    Tags {
      tag
    }
  }
  ... on Review {
    Tags {
      tag
    }
  }
}
    `;