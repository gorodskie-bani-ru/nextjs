/* eslint-disable */
// @ts-nocheck

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

export interface Bani684SiteContentListRelationFilter {
  every?: Maybe<Bani684SiteContentWhereInput>;
  none?: Maybe<Bani684SiteContentWhereInput>;
  some?: Maybe<Bani684SiteContentWhereInput>;
}

export interface Bani684SiteTmplvarContentvaluesListRelationFilter {
  every?: Maybe<Bani684SiteTmplvarContentvaluesWhereInput>;
  none?: Maybe<Bani684SiteTmplvarContentvaluesWhereInput>;
  some?: Maybe<Bani684SiteTmplvarContentvaluesWhereInput>;
}

export interface Bani684SocietyCommentsListRelationFilter {
  every?: Maybe<Bani684SocietyCommentsWhereInput>;
  none?: Maybe<Bani684SocietyCommentsWhereInput>;
  some?: Maybe<Bani684SocietyCommentsWhereInput>;
}

export interface Bani684SocietyVotesListRelationFilter {
  every?: Maybe<Bani684SocietyVotesWhereInput>;
  none?: Maybe<Bani684SocietyVotesWhereInput>;
  some?: Maybe<Bani684SocietyVotesWhereInput>;
}

export interface BoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

/** Город */
export interface City extends ResourceInterface {
  __typename?: 'City';
  /** Комментарии */
  Comments: Array<Comment>;
  CreatedBy?: Maybe<User>;
  TemplateVarValues?: Maybe<Array<Bani684SiteTmplvarContentvalues>>;
  alias?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** Координаты */
  coords?: Maybe<Coordinates>;
  createdby: Scalars['Int'];
  createdon: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  longtitle: Scalars['String'];
  pagetitle: Scalars['String'];
  published: Scalars['Boolean'];
  searchable: Scalars['Boolean'];
  template: Scalars['Int'];
  uri?: Maybe<Scalars['String']>;
}

/** Комментарий */
export interface Comment {
  __typename?: 'Comment';
  CreatedBy?: Maybe<User>;
  comments_count: Scalars['Int'];
  createdon?: Maybe<Scalars['DateTime']>;
  /** 0 || 1 */
  deleted?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** 0 || 1 */
  published?: Maybe<Scalars['String']>;
  raw_text?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
}

/** Сортировка по удаленности от координаты */
export interface CompaniesOrderByCoordsInput {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
}

export interface CompaniesOrderByInput {
  coords?: Maybe<CompaniesOrderByCoordsInput>;
}

/** Компания */
export interface Company extends ResourceInterface {
  __typename?: 'Company';
  /** Комментарии */
  Comments: Array<Comment>;
  CreatedBy?: Maybe<User>;
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
  gallery: Array<GalleryImage>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  longtitle: Scalars['String'];
  pagetitle: Scalars['String'];
  /** Цены */
  prices?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  /** Средний рейтинг */
  rating?: Maybe<VotesAvg>;
  searchable: Scalars['Boolean'];
  template: Scalars['Int'];
  uri?: Maybe<Scalars['String']>;
  /** Рабочее время */
  workTime?: Maybe<Scalars['String']>;
}

export interface Coordinates {
  __typename?: 'Coordinates';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  /** Дефолтное значение приближенности карты. Используется в городах. */
  zoom?: Maybe<Scalars['Int']>;
}


export interface DateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface FloatFilter {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
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

export interface IntNullableFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
}

export interface NestedBoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

export interface NestedDateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedFloatFilter {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
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

export interface NestedIntNullableFilter {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
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
  /** Комментарии */
  comments: Array<Comment>;
  /** Количество комментариев */
  commentsCount: Scalars['Int'];
  /** Компании */
  companies: Array<Company>;
  /** Подсчет количества компаний */
  companiesCount: Scalars['Int'];
  /** Рейтинги заведений */
  ratings: Array<Rating>;
  /** Ресурсы */
  resources: Array<ResourceInterface>;
  /** Количество ресурсов */
  resourcesCount: Scalars['Int'];
  /** Обзоры заведений */
  reviews: Array<Review>;
  /** Новости */
  topics: Array<Topic>;
  user?: Maybe<User>;
  users: Array<User>;
  /** Количество пользователей */
  usersCount: Scalars['Int'];
  /** Оценки */
  votes: Array<Vote>;
  /** Средние значения по голосам */
  votesByRating: Array<Votes>;
}


export type QueryCitiesArgs = {
  cursor?: Maybe<Bani684SiteContentWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryCommentsArgs = {
  cursor?: Maybe<Bani684SocietyCommentsWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SocietyCommentsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SocietyCommentsWhereInput>;
};


export type QueryCommentsCountArgs = {
  where?: Maybe<Bani684SocietyCommentsWhereInput>;
};


export type QueryCompaniesArgs = {
  orderBy?: Maybe<CompaniesOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryRatingsArgs = {
  cursor?: Maybe<Bani684SiteContentWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryResourcesArgs = {
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryResourcesCountArgs = {
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryReviewsArgs = {
  cursor?: Maybe<Bani684SiteContentWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryTopicsArgs = {
  cursor?: Maybe<Bani684SiteContentWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SiteContentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SiteContentWhereInput>;
};


export type QueryUserArgs = {
  where: Bani684UsersWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<Bani684UsersWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684UsersOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684UsersWhereInput>;
};


export type QueryUsersCountArgs = {
  where?: Maybe<Bani684UsersWhereInput>;
};


export type QueryVotesArgs = {
  cursor?: Maybe<Bani684SocietyVotesWhereUniqueInput>;
  orderBy?: Maybe<Array<Bani684SocietyVotesOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<Bani684SocietyVotesWhereInput>;
};

/** Рейтинг заведений */
export interface Rating extends ResourceInterface {
  __typename?: 'Rating';
  /** Комментарии */
  Comments: Array<Comment>;
  CreatedBy?: Maybe<User>;
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
  searchable: Scalars['Boolean'];
  template: Scalars['Int'];
  uri?: Maybe<Scalars['String']>;
}

export interface Resource extends ResourceInterface {
  __typename?: 'Resource';
  /** Комментарии */
  Comments: Array<Comment>;
  CreatedBy?: Maybe<User>;
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
  searchable: Scalars['Boolean'];
  template: Scalars['Int'];
  uri?: Maybe<Scalars['String']>;
}

export type ResourceInterface = {
  /** Комментарии */
  Comments: Array<Comment>;
  CreatedBy?: Maybe<User>;
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
  searchable: Scalars['Boolean'];
  template: Scalars['Int'];
  uri?: Maybe<Scalars['String']>;
};

/** Отзыв о заведении */
export interface Review extends ResourceInterface {
  __typename?: 'Review';
  /** Комментарии */
  Comments: Array<Comment>;
  CreatedBy?: Maybe<User>;
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
  searchable: Scalars['Boolean'];
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

/** Диалоговая ветвь */
export interface Thread {
  __typename?: 'Thread';
  id: Scalars['Int'];
  target_class: Scalars['String'];
}

/** Топик */
export interface Topic extends ResourceInterface {
  __typename?: 'Topic';
  /** Комментарии */
  Comments: Array<Comment>;
  CreatedBy?: Maybe<User>;
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
  searchable: Scalars['Boolean'];
  template: Scalars['Int'];
  uri?: Maybe<Scalars['String']>;
}

/** Пользователь */
export interface User {
  __typename?: 'User';
  Attributes?: Maybe<UserAttributes>;
  active: Scalars['Boolean'];
  createdon: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Аватар */
  image?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

/** Профиль пользователя */
export interface UserAttributes {
  __typename?: 'UserAttributes';
  fullname: Scalars['String'];
  id: Scalars['Int'];
  photo: Scalars['String'];
}

/** Оценка */
export interface Vote {
  __typename?: 'Vote';
  CreatedBy?: Maybe<User>;
  Type?: Maybe<Rating>;
  id: Scalars['Int'];
  target_class: Scalars['String'];
  target_id: Scalars['Int'];
  thread_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  user_id: Scalars['Int'];
  vote_date: Scalars['DateTime'];
  /** 1 || - || 0 */
  vote_direction: Scalars['String'];
  /** Значение оценки */
  vote_value: Scalars['Float'];
}

/** Сгруппированные голоса */
export interface Votes {
  __typename?: 'Votes';
  Company: Company;
  avg: VotesAvg;
  target_id: Scalars['Int'];
  type?: Maybe<Scalars['Int']>;
}

/** Средние значения голосов */
export interface VotesAvg {
  __typename?: 'VotesAvg';
  voteValueAvg: Scalars['Float'];
}

export interface Bani684SiteContentOrderByInput {
  CreatedBy?: Maybe<Bani684UsersOrderByInput>;
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
  CreatedBy?: Maybe<Bani684UsersWhereInput>;
  NOT?: Maybe<Array<Bani684SiteContentWhereInput>>;
  OR?: Maybe<Array<Bani684SiteContentWhereInput>>;
  TemplateVarValues?: Maybe<Bani684SiteTmplvarContentvaluesListRelationFilter>;
  Votes?: Maybe<Bani684SocietyVotesListRelationFilter>;
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

export interface Bani684SocietyCommentsOrderByInput {
  CreatedBy?: Maybe<Bani684UsersOrderByInput>;
  comments_count?: Maybe<SortOrder>;
  createdby?: Maybe<SortOrder>;
  createdon?: Maybe<SortOrder>;
  deleted?: Maybe<SortOrder>;
  deletedby?: Maybe<SortOrder>;
  deletedon?: Maybe<SortOrder>;
  editedby?: Maybe<SortOrder>;
  editedon?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  ip?: Maybe<SortOrder>;
  parent?: Maybe<SortOrder>;
  properties?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  raw_text?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  thread_id?: Maybe<SortOrder>;
}

export interface Bani684SocietyCommentsWhereInput {
  AND?: Maybe<Array<Bani684SocietyCommentsWhereInput>>;
  CreatedBy?: Maybe<Bani684UsersWhereInput>;
  NOT?: Maybe<Array<Bani684SocietyCommentsWhereInput>>;
  OR?: Maybe<Array<Bani684SocietyCommentsWhereInput>>;
  comments_count?: Maybe<IntFilter>;
  createdby?: Maybe<IntFilter>;
  createdon?: Maybe<DateTimeNullableFilter>;
  deleted?: Maybe<StringFilter>;
  deletedby?: Maybe<IntNullableFilter>;
  deletedon?: Maybe<DateTimeNullableFilter>;
  editedby?: Maybe<IntNullableFilter>;
  editedon?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  ip?: Maybe<StringFilter>;
  parent?: Maybe<IntNullableFilter>;
  properties?: Maybe<StringNullableFilter>;
  published?: Maybe<StringFilter>;
  raw_text?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  thread_id?: Maybe<IntNullableFilter>;
}

export interface Bani684SocietyCommentsWhereUniqueInput {
  id?: Maybe<Scalars['Int']>;
}

export interface Bani684SocietyVotesOrderByInput {
  CreatedBy?: Maybe<Bani684UsersOrderByInput>;
  Type?: Maybe<Bani684SiteContentOrderByInput>;
  id?: Maybe<SortOrder>;
  target_class?: Maybe<SortOrder>;
  target_id?: Maybe<SortOrder>;
  thread_id?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  user_id?: Maybe<SortOrder>;
  vote_date?: Maybe<SortOrder>;
  vote_direction?: Maybe<SortOrder>;
  vote_value?: Maybe<SortOrder>;
}

export interface Bani684SocietyVotesTargetIdCompoundUniqueInput {
  target_class: Scalars['String'];
  target_id: Scalars['Int'];
  type: Scalars['Int'];
  user_id: Scalars['Int'];
}

export interface Bani684SocietyVotesThreadIdCompoundUniqueInput {
  thread_id: Scalars['Int'];
  type: Scalars['Int'];
  user_id: Scalars['Int'];
}

export interface Bani684SocietyVotesWhereInput {
  AND?: Maybe<Array<Bani684SocietyVotesWhereInput>>;
  CreatedBy?: Maybe<Bani684UsersWhereInput>;
  NOT?: Maybe<Array<Bani684SocietyVotesWhereInput>>;
  OR?: Maybe<Array<Bani684SocietyVotesWhereInput>>;
  Type?: Maybe<Bani684SiteContentWhereInput>;
  id?: Maybe<IntFilter>;
  target_class?: Maybe<StringFilter>;
  target_id?: Maybe<IntFilter>;
  thread_id?: Maybe<IntNullableFilter>;
  type?: Maybe<IntNullableFilter>;
  user_id?: Maybe<IntFilter>;
  vote_date?: Maybe<DateTimeFilter>;
  vote_direction?: Maybe<StringFilter>;
  vote_value?: Maybe<FloatFilter>;
}

export interface Bani684SocietyVotesWhereUniqueInput {
  id?: Maybe<Scalars['Int']>;
  target_id?: Maybe<Bani684SocietyVotesTargetIdCompoundUniqueInput>;
  thread_id?: Maybe<Bani684SocietyVotesThreadIdCompoundUniqueInput>;
}

export interface Bani684UserAttributesOrderByInput {
  address?: Maybe<SortOrder>;
  blocked?: Maybe<SortOrder>;
  blockedafter?: Maybe<SortOrder>;
  blockeduntil?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  comment?: Maybe<SortOrder>;
  country?: Maybe<SortOrder>;
  dob?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  extended?: Maybe<SortOrder>;
  failedlogincount?: Maybe<SortOrder>;
  fax?: Maybe<SortOrder>;
  fullname?: Maybe<SortOrder>;
  gender?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  internalKey?: Maybe<SortOrder>;
  lastlogin?: Maybe<SortOrder>;
  logincount?: Maybe<SortOrder>;
  mobilephone?: Maybe<SortOrder>;
  phone?: Maybe<SortOrder>;
  photo?: Maybe<SortOrder>;
  sessionid?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  thislogin?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
  zip?: Maybe<SortOrder>;
}

export interface Bani684UserAttributesWhereInput {
  AND?: Maybe<Array<Bani684UserAttributesWhereInput>>;
  NOT?: Maybe<Array<Bani684UserAttributesWhereInput>>;
  OR?: Maybe<Array<Bani684UserAttributesWhereInput>>;
  User?: Maybe<Bani684UsersWhereInput>;
  address?: Maybe<StringFilter>;
  blocked?: Maybe<BoolFilter>;
  blockedafter?: Maybe<IntFilter>;
  blockeduntil?: Maybe<IntFilter>;
  city?: Maybe<StringFilter>;
  comment?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  dob?: Maybe<IntFilter>;
  email?: Maybe<StringFilter>;
  extended?: Maybe<StringNullableFilter>;
  failedlogincount?: Maybe<IntFilter>;
  fax?: Maybe<StringFilter>;
  fullname?: Maybe<StringFilter>;
  gender?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  internalKey?: Maybe<IntFilter>;
  lastlogin?: Maybe<IntFilter>;
  logincount?: Maybe<IntFilter>;
  mobilephone?: Maybe<StringFilter>;
  phone?: Maybe<StringFilter>;
  photo?: Maybe<StringFilter>;
  sessionid?: Maybe<StringFilter>;
  state?: Maybe<StringFilter>;
  thislogin?: Maybe<IntFilter>;
  website?: Maybe<StringFilter>;
  zip?: Maybe<StringFilter>;
}

export interface Bani684UsersOrderByInput {
  Attributes?: Maybe<Bani684UserAttributesOrderByInput>;
  active?: Maybe<SortOrder>;
  cachepwd?: Maybe<SortOrder>;
  class_key?: Maybe<SortOrder>;
  contract_date?: Maybe<SortOrder>;
  createdby?: Maybe<SortOrder>;
  createdon?: Maybe<SortOrder>;
  delegate?: Maybe<SortOrder>;
  hash_class?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  offer?: Maybe<SortOrder>;
  offer_date?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  primary_group?: Maybe<SortOrder>;
  remote_data?: Maybe<SortOrder>;
  remote_key?: Maybe<SortOrder>;
  salt?: Maybe<SortOrder>;
  session_stale?: Maybe<SortOrder>;
  sudo?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
}

export interface Bani684UsersWhereInput {
  AND?: Maybe<Array<Bani684UsersWhereInput>>;
  Attributes?: Maybe<Bani684UserAttributesWhereInput>;
  NOT?: Maybe<Array<Bani684UsersWhereInput>>;
  OR?: Maybe<Array<Bani684UsersWhereInput>>;
  Resources?: Maybe<Bani684SiteContentListRelationFilter>;
  active?: Maybe<BoolFilter>;
  bani684_society_comments?: Maybe<Bani684SocietyCommentsListRelationFilter>;
  bani684_society_votes?: Maybe<Bani684SocietyVotesListRelationFilter>;
  cachepwd?: Maybe<StringFilter>;
  class_key?: Maybe<StringFilter>;
  contract_date?: Maybe<IntNullableFilter>;
  createdby?: Maybe<IntNullableFilter>;
  createdon?: Maybe<IntFilter>;
  delegate?: Maybe<StringNullableFilter>;
  hash_class?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  offer?: Maybe<StringNullableFilter>;
  offer_date?: Maybe<IntNullableFilter>;
  password?: Maybe<StringFilter>;
  primary_group?: Maybe<IntFilter>;
  remote_data?: Maybe<StringNullableFilter>;
  remote_key?: Maybe<StringNullableFilter>;
  salt?: Maybe<StringFilter>;
  session_stale?: Maybe<StringNullableFilter>;
  sudo?: Maybe<BoolFilter>;
  username?: Maybe<StringFilter>;
}

export interface Bani684UsersWhereUniqueInput {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
}
