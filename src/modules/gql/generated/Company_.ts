/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ListCompanyFragment } from './ListCompany';
import { gql } from '@apollo/client';
import { ListCompanyFragmentDoc } from './ListCompany';
export type CompanyFragment = (
  { __typename?: 'Company', content?: Types.Maybe<string> }
  & ListCompanyFragment
);

export const CompanyFragmentDoc = gql`
    fragment Company_ on Company {
  ...ListCompany
  content @include(if: $withContent)
}
    ${ListCompanyFragmentDoc}`;