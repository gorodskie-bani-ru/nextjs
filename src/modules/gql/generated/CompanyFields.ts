/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
export type CompanyFieldsFragment = { __typename?: 'Company', id: number, pagetitle: string, longtitle: string, alias?: Types.Maybe<string>, uri?: Types.Maybe<string>, template: number, published: boolean, searchable: boolean, createdon: globalThis.Date, createdby: number, image?: Types.Maybe<string>, address?: Types.Maybe<string>, workTime?: Types.Maybe<string>, prices?: Types.Maybe<string>, coords?: Types.Maybe<{ __typename?: 'Coordinates', lat: number, lng: number }>, gallery: Array<{ __typename?: 'GalleryImage', image: string, title: string, description: string }> };

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
  workTime
  prices
  gallery {
    image
    title
    description
  }
}
    `;