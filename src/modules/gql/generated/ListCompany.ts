/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CompanyFieldsFragment } from './CompanyFields';
import { gql } from '@apollo/client';
import { CompanyFieldsFragmentDoc } from './CompanyFields';
export type ListCompanyFragment = (
  { __typename?: 'Company', ratingAvg?: Types.Maybe<{ __typename?: 'RatingType', rating?: Types.Maybe<number>, max_vote?: Types.Maybe<number>, min_vote?: Types.Maybe<number>, type?: Types.Maybe<number>, target_id?: Types.Maybe<number>, quantity?: Types.Maybe<number>, quantity_voters?: Types.Maybe<number>, voted_companies?: Types.Maybe<string>, voted_users?: Types.Maybe<string>, voter?: Types.Maybe<number> }> }
  & CompanyFieldsFragment
);

export const ListCompanyFragmentDoc = gql`
    fragment ListCompany on Company {
  ...CompanyFields
  ratingAvg {
    rating
    max_vote
    min_vote
    type
    target_id
    quantity
    quantity_voters
    voted_companies
    voted_users
    voter
  }
}
    ${CompanyFieldsFragmentDoc}`;