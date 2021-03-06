/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import { CompanyFieldsFragment } from './CompanyFields';
import { gql } from '@apollo/client';
import { CompanyFieldsFragmentDoc } from './CompanyFields';
export type ListCompanyFragment = (
  { __typename?: 'Company' }
  & CompanyFieldsFragment
);

export const ListCompanyFragmentDoc = gql`
    fragment ListCompany on Company {
  ...CompanyFields
}
    ${CompanyFieldsFragmentDoc}`;