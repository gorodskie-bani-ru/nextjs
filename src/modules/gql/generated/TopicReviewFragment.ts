/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CommentFragment } from './comment';
import { gql } from '@apollo/client';
import { CommentFragmentDoc } from './comment';
export type TopicReviewFragmentCityFragment = { __typename?: 'City' };

export type TopicReviewFragmentCompanyFragment = { __typename?: 'Company' };

export type TopicReviewFragmentRatingFragment = { __typename?: 'Rating' };

export type TopicReviewFragmentResourceFragment = { __typename?: 'Resource' };

export type TopicReviewFragmentReviewFragment = { __typename?: 'Review', Comments?: Types.Maybe<Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )>>, Tags?: Types.Maybe<Array<{ __typename?: 'TopicTag', tag: string }>> };

export type TopicReviewFragmentTopicFragment = { __typename?: 'Topic', Comments?: Types.Maybe<Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )>>, Tags?: Types.Maybe<Array<{ __typename?: 'TopicTag', tag: string }>> };

export type TopicReviewFragmentFragment = TopicReviewFragmentCityFragment | TopicReviewFragmentCompanyFragment | TopicReviewFragmentRatingFragment | TopicReviewFragmentResourceFragment | TopicReviewFragmentReviewFragment | TopicReviewFragmentTopicFragment;

export const TopicReviewFragmentFragmentDoc = gql`
    fragment TopicReviewFragment on ResourceInterface {
  ... on Topic {
    Comments @include(if: $withComments) {
      ...comment
    }
    Tags {
      tag
    }
  }
  ... on Review {
    Comments @include(if: $withComments) {
      ...comment
    }
    Tags {
      tag
    }
  }
}
    ${CommentFragmentDoc}`;