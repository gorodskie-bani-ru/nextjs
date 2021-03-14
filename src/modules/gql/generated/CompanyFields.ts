/* eslint-disable */
// @ts-nocheck

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { ShedulesFragment } from './shedules';
import { gql } from '@apollo/client';
import { ShedulesFragmentDoc } from './shedules';
export type CompanyFieldsFragment = { __typename?: 'Company', id: number, pagetitle: string, longtitle: string, alias?: Types.Maybe<string>, uri?: Types.Maybe<string>, template: number, published: boolean, searchable: boolean, createdon: globalThis.Date, createdby: number, image?: Types.Maybe<string>, address?: Types.Maybe<string>, phones?: Types.Maybe<string>, workTime?: Types.Maybe<string>, prices?: Types.Maybe<string>, metro?: Types.Maybe<string>, coords?: Types.Maybe<{ __typename?: 'Coordinates', lat: number, lng: number }>, gallery: Array<{ __typename?: 'GalleryImage', image: string, title: string, description: string }>, Schedules?: Types.Maybe<(
    { __typename?: 'Schedules' }
    & ShedulesFragment
  )> };

export const CompanyFieldsFragmentDoc = gql`
    fragment CompanyFields on Company {
  id
  pagetitle
  longtitle
  alias
  uri
  template
  published
  searchable
  createdon
  createdby
  image
  coords {
    lat
    lng
  }
  address
  phones
  workTime
  prices
  metro
  gallery {
    image
    title
    description
  }
  Schedules {
    ...shedules
  }
}
    ${ShedulesFragmentDoc}`;