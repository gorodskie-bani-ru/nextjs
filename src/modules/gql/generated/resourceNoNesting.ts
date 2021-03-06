/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type ResourceNoNestingCityFragment = { __typename?: 'City', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, template: number, content?: Types.Maybe<string> };

export type ResourceNoNestingCompanyFragment = { __typename?: 'Company', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, template: number, content?: Types.Maybe<string> };

export type ResourceNoNestingRatingFragment = { __typename?: 'Rating', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, template: number, content?: Types.Maybe<string> };

export type ResourceNoNestingResourceFragment = { __typename?: 'Resource', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, template: number, content?: Types.Maybe<string> };

export type ResourceNoNestingReviewFragment = { __typename?: 'Review', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, template: number, content?: Types.Maybe<string> };

export type ResourceNoNestingTopicFragment = { __typename?: 'Topic', id: number, pagetitle: string, uri?: Types.Maybe<string>, createdon: globalThis.Date, template: number, content?: Types.Maybe<string> };

export type ResourceNoNestingFragment = ResourceNoNestingCityFragment | ResourceNoNestingCompanyFragment | ResourceNoNestingRatingFragment | ResourceNoNestingResourceFragment | ResourceNoNestingReviewFragment | ResourceNoNestingTopicFragment;

export const ResourceNoNestingFragmentDoc = gql`
    fragment resourceNoNesting on ResourceInterface {
  id
  pagetitle
  uri
  createdon
  template
  content @include(if: $withContent)
}
    `;