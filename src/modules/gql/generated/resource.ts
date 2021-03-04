/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { CompanyFieldsFragment } from './CompanyFields';
import { CityFragment } from './city';
import { gql } from '@apollo/client';
import { CompanyFieldsFragmentDoc } from './CompanyFields';
import { CityFragmentDoc } from './city';
export type ResourceCityFragment = (
  { __typename?: 'City' }
  & CityFragment
);

export type ResourceCompanyFragment = (
  { __typename?: 'Company' }
  & CompanyFieldsFragment
);

export type ResourceResourceFragment = { __typename?: 'Resource', id: number, pagetitle: string, uri?: Types.Maybe<string> };

export type ResourceFragment = ResourceCityFragment | ResourceCompanyFragment | ResourceResourceFragment;

export const ResourceFragmentDoc = gql`
    fragment resource on ResourceUnion {
  ... on Resource {
    id
    pagetitle
    uri
  }
  ... on Company {
    ...CompanyFields
  }
  ... on City {
    ...city
  }
}
    ${CompanyFieldsFragmentDoc}
${CityFragmentDoc}`;