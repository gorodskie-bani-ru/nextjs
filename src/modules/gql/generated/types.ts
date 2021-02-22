/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: globalThis.Date;
};

export interface Bani684SiteTmplvarContentvaluesListRelationFilter {
  every?: Maybe<Bani684SiteTmplvarContentvaluesWhereInput>;
  none?: Maybe<Bani684SiteTmplvarContentvaluesWhereInput>;
  some?: Maybe<Bani684SiteTmplvarContentvaluesWhereInput>;
}

export interface BoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

/** Город */
export interface City {
  __typename?: 'City';
  TemplateVarValues?: Maybe<Array<Bani684SiteTmplvarContentvalues>>;
  alias?: Maybe<Scalars['String']>;
  /** Координаты */
  coords?: Maybe<Coordinates>;
  id: Scalars['Int'];
  longtitle: Scalars['String'];
  pagetitle: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
}

/** Компания */
export interface Company {
  __typename?: 'Company';
  TemplateVarValues?: Maybe<Array<Bani684SiteTmplvarContentvalues>>;
  /** Адрес (без указания города) */
  address?: Maybe<Scalars['String']>;
  /** Комментарии к адресу */
  addressComments?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** Координаты */
  coords?: Maybe<Coordinates>;
  createdby: Scalars['Int'];
  createdon: Scalars['DateTime'];
  description: Scalars['String'];
  editedby: Scalars['Int'];
  editedon: Scalars['DateTime'];
  gallery: Array<GalleryImage>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  longtitle: Scalars['String'];
  pagetitle: Scalars['String'];
  /** Цены */
  prices?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  uri?: Maybe<Scalars['String']>;
  /** Рабочее время */
  workTime?: Maybe<Scalars['String']>;
}

export interface Coordinates {
  __typename?: 'Coordinates';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  /** Дефолтное знаяение приближенности карты. Используется в городах. */
  zoom?: Maybe<Scalars['Int']>;
}


export interface GalleryImage {
  __typename?: 'GalleryImage';
  description: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
}

export interface IntFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface NestedBoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

export interface NestedIntFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface NestedStringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface NestedStringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  /** Города */
  cities: Array<City>;
  /** Компании */
  companies: Array<Company>;
  /** Ресурсы */
  resources: Array<Resource>;
}


export type QueryCitiesArgs = {
  cursor?: Maybe<Bani684SiteContentWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryCompaniesArgs = {
  cursor?: Maybe<Bani684SiteContentWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryResourcesArgs = {
  cursor?: Maybe<Bani684SiteContentWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};

export interface Resource {
  __typename?: 'Resource';
  TemplateVarValues?: Maybe<Array<Bani684SiteTmplvarContentvalues>>;
  alias?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createdby: Scalars['Int'];
  createdon: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  longtitle: Scalars['String'];
  pagetitle: Scalars['String'];
  published: Scalars['Boolean'];
  template: Scalars['Int'];
  uri?: Maybe<Scalars['String']>;
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export interface StringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface StringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface Bani684SiteContentOrderByInput {
  alias?: Maybe<SortOrder>;
  cacheable?: Maybe<SortOrder>;
  class_key?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  contentType?: Maybe<SortOrder>;
  content_dispo?: Maybe<SortOrder>;
  content_type?: Maybe<SortOrder>;
  context_key?: Maybe<SortOrder>;
  createdby?: Maybe<SortOrder>;
  createdon?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  deletedby?: Maybe<SortOrder>;
  deletedon?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  donthit?: Maybe<SortOrder>;
  editedby?: Maybe<SortOrder>;
  editedon?: Maybe<SortOrder>;
  hide_children_in_tree?: Maybe<SortOrder>;
  hidemenu?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  introtext?: Maybe<SortOrder>;
  isfolder?: Maybe<SortOrder>;
  link_attributes?: Maybe<SortOrder>;
  longtitle?: Maybe<SortOrder>;
  menuindex?: Maybe<SortOrder>;
  menutitle?: Maybe<SortOrder>;
  pagetitle?: Maybe<SortOrder>;
  parent?: Maybe<SortOrder>;
  privatemgr?: Maybe<SortOrder>;
  privateweb?: Maybe<SortOrder>;
  properties?: Maybe<SortOrder>;
  pub_date?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  publishedby?: Maybe<SortOrder>;
  publishedon?: Maybe<SortOrder>;
  richtext?: Maybe<SortOrder>;
  searchable?: Maybe<SortOrder>;
  show_in_tree?: Maybe<SortOrder>;
  template?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  unpub_date?: Maybe<SortOrder>;
  uri?: Maybe<SortOrder>;
  uri_override?: Maybe<SortOrder>;
}

export interface Bani684SiteContentWhereInput {
  AND?: Maybe<Array<Bani684SiteContentWhereInput>>;
  NOT?: Maybe<Array<Bani684SiteContentWhereInput>>;
  OR?: Maybe<Array<Bani684SiteContentWhereInput>>;
  TemplateVarValues?: Maybe<Bani684SiteTmplvarContentvaluesListRelationFilter>;
  alias?: Maybe<StringNullableFilter>;
  cacheable?: Maybe<BoolFilter>;
  class_key?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  contentType?: Maybe<StringFilter>;
  content_dispo?: Maybe<BoolFilter>;
  content_type?: Maybe<IntFilter>;
  context_key?: Maybe<StringFilter>;
  createdby?: Maybe<IntFilter>;
  createdon?: Maybe<IntFilter>;
  deleted?: Maybe<BoolFilter>;
  deletedby?: Maybe<IntFilter>;
  deletedon?: Maybe<IntFilter>;
  description?: Maybe<StringFilter>;
  donthit?: Maybe<BoolFilter>;
  editedby?: Maybe<IntFilter>;
  editedon?: Maybe<IntFilter>;
  hide_children_in_tree?: Maybe<BoolFilter>;
  hidemenu?: Maybe<BoolFilter>;
  id?: Maybe<IntFilter>;
  introtext?: Maybe<StringNullableFilter>;
  isfolder?: Maybe<BoolFilter>;
  link_attributes?: Maybe<StringFilter>;
  longtitle?: Maybe<StringFilter>;
  menuindex?: Maybe<IntFilter>;
  menutitle?: Maybe<StringFilter>;
  pagetitle?: Maybe<StringFilter>;
  parent?: Maybe<IntFilter>;
  privatemgr?: Maybe<BoolFilter>;
  privateweb?: Maybe<BoolFilter>;
  properties?: Maybe<StringNullableFilter>;
  pub_date?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
  publishedby?: Maybe<IntFilter>;
  publishedon?: Maybe<IntFilter>;
  richtext?: Maybe<BoolFilter>;
  searchable?: Maybe<BoolFilter>;
  show_in_tree?: Maybe<BoolFilter>;
  template?: Maybe<IntFilter>;
  type?: Maybe<StringFilter>;
  unpub_date?: Maybe<IntFilter>;
  uri?: Maybe<StringNullableFilter>;
  uri_override?: Maybe<BoolFilter>;
}

export interface Bani684SiteContentWhereUniqueInput {
  id?: Maybe<Scalars['Int']>;
}

export interface Bani684SiteTmplvarContentvalues {
  __typename?: 'bani684_site_tmplvar_contentvalues';
  contentid: Scalars['Int'];
  id: Scalars['Int'];
  tmplvarid: Scalars['Int'];
  value: Scalars['String'];
}

export interface Bani684SiteTmplvarContentvaluesWhereInput {
  AND?: Maybe<Array<Bani684SiteTmplvarContentvaluesWhereInput>>;
  NOT?: Maybe<Array<Bani684SiteTmplvarContentvaluesWhereInput>>;
  OR?: Maybe<Array<Bani684SiteTmplvarContentvaluesWhereInput>>;
  Resource?: Maybe<Bani684SiteContentWhereInput>;
  contentid?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  tmplvarid?: Maybe<IntFilter>;
  value?: Maybe<StringFilter>;
}
