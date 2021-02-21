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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

/** Корневой раздел */
export interface RootType {
  __typename?: 'RootType';
  /** Страница сайта */
  siteContent?: Maybe<SiteContentType>;
  /** Список компаний с постраничностью */
  companiesList?: Maybe<CompaniesList>;
  /** Список компаний */
  companies?: Maybe<Array<Maybe<Company>>>;
  /** Компания */
  company?: Maybe<Company>;
  /** Список правил редиректа с постраничностью */
  redirectsList?: Maybe<RedirectsList>;
  /** Список правил редиректа */
  redirects?: Maybe<Array<Maybe<RedirectType>>>;
  /** Редиректы */
  redirect?: Maybe<RedirectType>;
  /** Список документов с постраничностью */
  resourcesList?: Maybe<ResourcesList>;
  /** Список документов */
  resources?: Maybe<Array<Maybe<ResourceType>>>;
  /** Документ */
  resource?: Maybe<ResourceType>;
  /** Рейтинги бань (с возможностью группировки по типам рейтингов и компаний) */
  ratingsList?: Maybe<RatingsList>;
  /** Список комментариев */
  ratings?: Maybe<Array<Maybe<RatingType>>>;
  /** Рейтинг (отдельный голос) */
  vote?: Maybe<RatingType>;
  /** Список комментариев с постраничностью */
  commentsList?: Maybe<CommentsList>;
  /** Список комментариев */
  comments?: Maybe<Array<Maybe<CommentType>>>;
  /** Комментарии */
  comment?: Maybe<CommentType>;
  /** Список пользователей с постраничностью */
  usersList?: Maybe<UsersList>;
  /** Список пользователей */
  users?: Maybe<Array<Maybe<UserType>>>;
  /** Пользователь */
  user?: Maybe<UserType>;
  /** WebSocket-соединения */
  ws_connections?: Maybe<Array<Maybe<WsConnectionType>>>;
  /** Поиск */
  search?: Maybe<Array<Maybe<SearchResultType>>>;
  /** Список результатов поисковых запросов с постраничностью */
  searchStatsList?: Maybe<SearchStatsList>;
  /** Список результатов поисковых запросов */
  searchStats?: Maybe<Array<Maybe<SearchStatType>>>;
  /** Статистика поиска */
  searchStat?: Maybe<SearchStatType>;
  /** Список внесенных изменний с постраничностью */
  editVersionsList?: Maybe<EditVersionsList>;
  /** Список результатов поисковых запросов */
  editVersions?: Maybe<Array<Maybe<EditVersionType>>>;
  /** История изменения объекта */
  editVersion?: Maybe<EditVersionType>;
}


/** Корневой раздел */
export type RootTypeSiteContentArgs = {
  component?: Maybe<Scalars['String']>;
  request: Scalars['JSON'];
  geo: Scalars['JSON'];
  pathname?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};


/** Корневой раздел */
export type RootTypeCompaniesListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<ResourcesSortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  excludeTemplates?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tag?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  resourceType?: Maybe<ResourceTypeEnum>;
  coords?: Maybe<SearchCoordsType>;
  center?: Maybe<InputCoordsType>;
};


/** Корневой раздел */
export type RootTypeCompaniesArgs = {
  template?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  excludeTemplates?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tag?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  resourceType?: Maybe<ResourceTypeEnum>;
  coords?: Maybe<SearchCoordsType>;
  center?: Maybe<InputCoordsType>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<ResourcesSortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeCompanyArgs = {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


/** Корневой раздел */
export type RootTypeRedirectsListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeRedirectsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeRedirectArgs = {
  id: Scalars['Int'];
};


/** Корневой раздел */
export type RootTypeResourcesListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<ResourcesSortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  excludeTemplates?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tag?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  resourceType?: Maybe<ResourceTypeEnum>;
  coords?: Maybe<SearchCoordsType>;
  center?: Maybe<InputCoordsType>;
};


/** Корневой раздел */
export type RootTypeResourcesArgs = {
  template?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  excludeTemplates?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tag?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  resourceType?: Maybe<ResourceTypeEnum>;
  coords?: Maybe<SearchCoordsType>;
  center?: Maybe<InputCoordsType>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<ResourcesSortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeResourceArgs = {
  id?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  resourceType?: Maybe<ResourceTypeEnum>;
  tag?: Maybe<Scalars['String']>;
};


/** Корневой раздел */
export type RootTypeRatingsListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<RatingsSortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  resource_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RatingGroupbyEnum>;
};


/** Корневой раздел */
export type RootTypeRatingsArgs = {
  resource_id?: Maybe<Scalars['Int']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<RatingsSortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RatingGroupbyEnum>;
};


/** Корневой раздел */
export type RootTypeVoteArgs = {
  id: Scalars['Int'];
};


/** Корневой раздел */
export type RootTypeCommentsListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  resource_id?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  createdby?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeCommentsArgs = {
  resource_id?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  createdby?: Maybe<Scalars['Int']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeCommentArgs = {
  id?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeUsersListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  delegatesOnly?: Maybe<Scalars['Boolean']>;
  myOnly?: Maybe<Scalars['Boolean']>;
};


/** Корневой раздел */
export type RootTypeUsersArgs = {
  delegatesOnly?: Maybe<Scalars['Boolean']>;
  myOnly?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeUserArgs = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  ownProfile?: Maybe<Scalars['Boolean']>;
};


/** Корневой раздел */
export type RootTypeWsConnectionsArgs = {
  user?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeSearchArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeSearchStatsListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeSearchStatsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeSearchStatArgs = {
  id?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeEditVersionsListArgs = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  companyId?: Maybe<Scalars['Int']>;
  createdby?: Maybe<Scalars['Int']>;
  editedby?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeEditVersionsArgs = {
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  companyId?: Maybe<Scalars['Int']>;
  createdby?: Maybe<Scalars['Int']>;
  editedby?: Maybe<Scalars['Int']>;
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludeIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  sort?: Maybe<Array<Maybe<SortBy>>>;
  limit: Scalars['Int'];
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


/** Корневой раздел */
export type RootTypeEditVersionArgs = {
  id?: Maybe<Scalars['Int']>;
};


/** Страница сайта */
export interface SiteContentType {
  __typename?: 'SiteContentType';
  id?: Maybe<Scalars['Int']>;
  /** Статус ответа */
  status?: Maybe<Scalars['Int']>;
  /** Заголовок страницы */
  title?: Maybe<Scalars['String']>;
  /** Описание */
  description?: Maybe<Scalars['String']>;
  /** Ключевые слова */
  keywords?: Maybe<Scalars['String']>;
  /** follow/nofollow */
  robots?: Maybe<Scalars['String']>;
  /** Конечный HTML страницы */
  content?: Maybe<Scalars['String']>;
  /** Данные состояний */
  state?: Maybe<Scalars['JSON']>;
  /** Текущий пользователь */
  user?: Maybe<Scalars['JSON']>;
  /** Ошибки после попытки сохранения */
  _errors?: Maybe<Scalars['JSON']>;
  /** Массив измененных данных */
  _isDirty?: Maybe<Scalars['JSON']>;
}

export interface ResourcesSortBy {
  /** Способ сортировки */
  by?: Maybe<ResourcesSortByValues>;
  /** Порядок сортировки */
  dir?: Maybe<SortType>;
}

export enum ResourcesSortByValues {
  /** По ID */
  ID = 'id',
  /** По наименованию */
  NAME = 'name',
  /** По дате создания */
  CREATEDON = 'createdon',
  /** В случайном порядке */
  RAND = 'rand'
}

export enum SortType {
  /** В прямом порядке */
  ASC = 'asc',
  /** В обратном порядке */
  DESC = 'desc'
}

/** Типы ресурсов */
export enum ResourceTypeEnum {
  /** Топик */
  TOPIC = 'topic',
  /** Обзор заведения */
  OBZOR = 'obzor',
  /** Компания */
  COMPANY = 'company'
}

/** Поиск объектов в заданном радиусе */
export interface SearchCoordsType {
  center?: Maybe<InputCoordsType>;
  /** Радиус в километрах */
  radius?: Maybe<Scalars['Float']>;
}

export interface InputCoordsType {
  /** Широта */
  lat?: Maybe<Scalars['Float']>;
  /** Долгота */
  lng?: Maybe<Scalars['Float']>;
  /** Зум */
  zoom?: Maybe<Scalars['Int']>;
}

export interface CompaniesList {
  __typename?: 'companiesList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<Company>>>;
}

export interface Company {
  __typename?: 'Company';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pagetitle?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  /** ID автора и владельца компании */
  createdby?: Maybe<Scalars['Int']>;
  /** Дата создания в секундах */
  createdon?: Maybe<Scalars['Int']>;
  /** Кем отредактировано */
  editedby?: Maybe<Scalars['Int']>;
  /** Дата редактирования в секундах */
  editedon?: Maybe<Scalars['Int']>;
  /** Дата публикации в секундах */
  publishedon?: Maybe<Scalars['Int']>;
  /** Дата публикации */
  pubdate?: Maybe<Scalars['String']>;
  /** Флаг, что компания опубликована */
  published?: Maybe<Scalars['Boolean']>;
  /** Цены */
  prices?: Maybe<CommentEditorStateType>;
  uri?: Maybe<Scalars['String']>;
  /** Иконка для карты */
  mapIcon?: Maybe<Scalars['String']>;
  /** Картинка */
  image?: Maybe<Scalars['String']>;
  imageFormats?: Maybe<Images>;
  city_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  city_uri?: Maybe<Scalars['String']>;
  tvs?: Maybe<ResourceTSvType>;
  gallery?: Maybe<Array<Maybe<GalleryType>>>;
  /** Расписание */
  schedule?: Maybe<Array<Maybe<ScheduleDayType>>>;
  /** Мужские дни */
  schedule_men?: Maybe<Array<Maybe<ScheduleDayType>>>;
  /** Женские дни */
  schedule_women?: Maybe<Array<Maybe<ScheduleDayType>>>;
  /** Семейные дни */
  schedule_family?: Maybe<Array<Maybe<ScheduleDayType>>>;
  coords?: Maybe<CoordsType>;
  /** Все голоса по компании */
  votes?: Maybe<Array<Maybe<RatingType>>>;
  /** Рейтинг по типам */
  ratingsByType?: Maybe<Array<Maybe<RatingType>>>;
  /** Комментарии */
  comments?: Maybe<Array<Maybe<CommentType>>>;
  /** Рейтинги бань (с возможностью группировки по типам рейтингов и компаний) */
  ratings?: Maybe<Array<Maybe<RatingType>>>;
  /** Суммарный рейтинг */
  ratingAvg?: Maybe<RatingType>;
  /** Топики компании */
  topics?: Maybe<Array<Maybe<ResourceType>>>;
  /** Версии изменения */
  editVersions?: Maybe<Array<Maybe<EditVersionType>>>;
  /** Ошибки после попытки сохранения */
  errors?: Maybe<Scalars['JSON']>;
  /** Измененные данные */
  _isDirty?: Maybe<Scalars['JSON']>;
}


export type CompanyCommentsArgs = {
  sort?: Maybe<Array<Maybe<SortBy>>>;
};

/** Состояние редактора */
export interface CommentEditorStateType {
  __typename?: 'CommentEditorStateType';
  blocks?: Maybe<Array<Maybe<EditorStateBlockType>>>;
  entityMap?: Maybe<Array<Maybe<EditorEntityType>>>;
}

/** Контентный блок */
export interface EditorStateBlockType {
  __typename?: 'EditorStateBlockType';
  data?: Maybe<Scalars['JSON']>;
  depth?: Maybe<Scalars['Int']>;
  entityRanges?: Maybe<Scalars['JSON']>;
  inlineStyleRanges?: Maybe<Scalars['JSON']>;
  key?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export type EditorEntityType = EditorEntityDefaultType | EditorEntityGalleryType | EditorEntityLinkType | EditorEntityCompanyType | EditorEntityImageType | CustomEditorEntityCompanyType;

export interface EditorEntityDefaultType {
  __typename?: 'EditorEntityDefaultType';
  data?: Maybe<EditorStateEntityDataType>;
  mutability?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['JSON']>;
}

export interface EditorStateEntityDataType {
  __typename?: 'EditorStateEntityDataType';
  gallery?: Maybe<Array<Maybe<CommentGalleryType>>>;
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** ID компании */
  company_id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  _map?: Maybe<Scalars['JSON']>;
}

export interface CommentGalleryType {
  __typename?: 'CommentGalleryType';
  image?: Maybe<Scalars['String']>;
  imageFormats?: Maybe<Images>;
}

export interface Images {
  __typename?: 'Images';
  original?: Maybe<Scalars['String']>;
  thumb?: Maybe<Scalars['String']>;
  marker_thumb?: Maybe<Scalars['String']>;
  slider_thumb?: Maybe<Scalars['String']>;
  /** Для навигации в слайдере */
  slider_dot_thumb?: Maybe<Scalars['String']>;
  small?: Maybe<Scalars['String']>;
  middle?: Maybe<Scalars['String']>;
  big?: Maybe<Scalars['String']>;
}

/** Галерея */
export interface EditorEntityGalleryType {
  __typename?: 'EditorEntityGalleryType';
  mutability?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['JSON']>;
  data?: Maybe<EditorStateEntityDataType>;
}

/** Ссылка */
export interface EditorEntityLinkType {
  __typename?: 'EditorEntityLinkType';
  mutability?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['JSON']>;
  data?: Maybe<EditorStateEntityDataType>;
}

/** Компания */
export interface EditorEntityCompanyType {
  __typename?: 'EditorEntityCompanyType';
  mutability?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['JSON']>;
  data?: Maybe<EditorStateEntityDataType>;
}

/** Картинка */
export interface EditorEntityImageType {
  __typename?: 'EditorEntityImageType';
  mutability?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['JSON']>;
  data?: Maybe<EditorStateEntityDataType>;
}

/** Компания */
export interface CustomEditorEntityCompanyType {
  __typename?: 'CustomEditorEntityCompanyType';
  mutability?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['JSON']>;
  data?: Maybe<CustomEditorStateEntityDataType>;
}

export interface CustomEditorStateEntityDataType {
  __typename?: 'CustomEditorStateEntityDataType';
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** ID компании */
  company_id?: Maybe<Scalars['Int']>;
  Company?: Maybe<Company>;
  src?: Maybe<Scalars['String']>;
  _map?: Maybe<Scalars['JSON']>;
}

export interface ResourceTSvType {
  __typename?: 'ResourceTSvType';
  /** Адрес */
  address?: Maybe<Scalars['String']>;
  /** Веб-сайт */
  site?: Maybe<Scalars['String']>;
  /** Тип заведения */
  facility_type?: Maybe<Scalars['String']>;
  /** Телефон */
  phones?: Maybe<Scalars['String']>;
  /** Рабочее время */
  work_time?: Maybe<Scalars['String']>;
  /** Цены */
  prices?: Maybe<Scalars['String']>;
  /** Метро */
  metro?: Maybe<Scalars['String']>;
  /** Одобренный */
  approved?: Maybe<Scalars['Boolean']>;
}

export interface GalleryType {
  __typename?: 'galleryType';
  image?: Maybe<Scalars['String']>;
  imageFormats?: Maybe<Images>;
}

export interface ScheduleDayType {
  __typename?: 'ScheduleDayType';
  /** Диапазон С и По */
  start?: Maybe<ScheduleDayRangeType>;
  /** Диапазон С и По */
  end?: Maybe<ScheduleDayRangeType>;
}

/** Диапазон С и По */
export interface ScheduleDayRangeType {
  __typename?: 'ScheduleDayRangeType';
  /** Год */
  year: Scalars['Int'];
  /** Месяц */
  month: Scalars['Int'];
  /** День */
  day: Scalars['Int'];
  /** Час */
  hour: Scalars['Int'];
  /** Минута */
  minute: Scalars['Int'];
  /** Секунда */
  second: Scalars['Int'];
  /** Порядковый день недели */
  weekDay: Scalars['Int'];
}

/** Координаты */
export interface CoordsType {
  __typename?: 'coordsType';
  /** Широта */
  lat?: Maybe<Scalars['Float']>;
  /** Долгота */
  lng?: Maybe<Scalars['Float']>;
  /** Зум */
  zoom?: Maybe<Scalars['Int']>;
}

/** Рейтинги бань (с возможностью группировки по типам рейтингов и компаний) */
export interface RatingType {
  __typename?: 'RatingType';
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Float']>;
  max_vote?: Maybe<Scalars['Float']>;
  min_vote?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Int']>;
  /** ID цели */
  target_id?: Maybe<Scalars['Int']>;
  /** Класс целевого объекта */
  target_class?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  /** Количество проголосовавши людей */
  quantity_voters?: Maybe<Scalars['Int']>;
  voted_companies?: Maybe<Scalars['String']>;
  voted_users?: Maybe<Scalars['String']>;
  /** Проголосовавший пользователь */
  voter?: Maybe<Scalars['Int']>;
  voters?: Maybe<Array<Maybe<UserType>>>;
  /** Компания, за которую проголосовали */
  Company?: Maybe<Company>;
  companies?: Maybe<Array<Maybe<Company>>>;
  /** Тип рейтинга */
  Type?: Maybe<ResourceType>;
}

/** Пользователь */
export interface UserType {
  __typename?: 'UserType';
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imageFormats?: Maybe<Images>;
  active?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  sudo?: Maybe<Scalars['Boolean']>;
  /** Флаг того, что пользователь - представитель компании. */
  delegate?: Maybe<Scalars['Boolean']>;
  /** Дата регистрации пользователя */
  createdon?: Maybe<Scalars['Int']>;
  /** Коммерческое предложение */
  offer?: Maybe<Scalars['String']>;
  /** Дата отправки коммерческого предложения */
  offer_date?: Maybe<Scalars['Int']>;
  /** Дата заключения сделки */
  contract_date?: Maybe<Scalars['Int']>;
  /** Кем создана учетка пользователя */
  createdby?: Maybe<Scalars['Int']>;
  /** Комментарии */
  comments?: Maybe<Array<Maybe<CommentType>>>;
  /** Список настроек уведомлений */
  notices?: Maybe<Array<Maybe<UserNoticeType>>>;
  /** Флаг того, что объект изменен */
  _Dirty?: Maybe<Scalars['Boolean']>;
}

/** Комментарии */
export interface CommentType {
  __typename?: 'CommentType';
  id?: Maybe<Scalars['Int']>;
  thread_id?: Maybe<Scalars['String']>;
  /** ID цели */
  target_id?: Maybe<Scalars['Int']>;
  /** Класс целевого объекта */
  target_class?: Maybe<Scalars['String']>;
  /** Текст комментария */
  text?: Maybe<CommentEditorStateType>;
  author_username?: Maybe<Scalars['String']>;
  author_fullname?: Maybe<Scalars['String']>;
  author_avatar?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Int']>;
  /** ID автора комментария */
  createdby?: Maybe<Scalars['Int']>;
  /** ID ресурса */
  resource_id?: Maybe<Scalars['Int']>;
  /** Время создания комментария в секундах */
  createdon?: Maybe<Scalars['String']>;
  createdonFormatted?: Maybe<Scalars['String']>;
  /** Пользователь */
  Author?: Maybe<UserType>;
  Resource?: Maybe<ResourceType>;
  Company?: Maybe<Company>;
  /** Ошибки после попытки сохранения */
  _errors?: Maybe<Scalars['JSON']>;
  /** Массив измененных данных */
  _Dirty?: Maybe<Scalars['JSON']>;
}

export interface ResourceType {
  __typename?: 'ResourceType';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pagetitle?: Maybe<Scalars['String']>;
  longtitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  introtext?: Maybe<Scalars['String']>;
  short_text?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  /** Содержимое редактора */
  editor_content?: Maybe<CommentEditorStateType>;
  /** Чистый текст документа */
  plainText?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  /** ID автора ресурса */
  createdby?: Maybe<Scalars['Int']>;
  /** Картинка */
  image?: Maybe<Scalars['String']>;
  /** Теги */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  imageFormats?: Maybe<Images>;
  city_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  /** ID родительского документа */
  parent?: Maybe<Scalars['Int']>;
  /** ID шаблона */
  template?: Maybe<Scalars['Int']>;
  /** Флаг, что документ удален */
  deleted?: Maybe<Scalars['Boolean']>;
  /** Флаг, что документ скрывается в меню */
  hidemenu?: Maybe<Scalars['Boolean']>;
  /** Флаг, что документ индексируемый */
  searchable?: Maybe<Scalars['Boolean']>;
  /** Дата создания в секундах */
  createdon?: Maybe<Scalars['Int']>;
  /** Флаг, что документ опубликован */
  published?: Maybe<Scalars['Boolean']>;
  /** Дата публикации в секундах */
  publishedon?: Maybe<Scalars['Int']>;
  /** Дата публикации */
  pubdate?: Maybe<Scalars['String']>;
  tvs?: Maybe<ResourceTSvType>;
  gallery?: Maybe<Array<Maybe<GalleryType>>>;
  coords?: Maybe<CoordsType>;
  /** Все голоса по документу */
  votes?: Maybe<Array<Maybe<RatingType>>>;
  /** Рейтинг по типам */
  ratingsByType?: Maybe<Array<Maybe<RatingType>>>;
  /** Комментарии */
  comments?: Maybe<Array<Maybe<CommentType>>>;
  /** Рейтинги бань (с возможностью группировки по типам рейтингов и компаний) */
  ratings?: Maybe<Array<Maybe<RatingType>>>;
  /** Суммарный рейтинг */
  ratingAvg?: Maybe<RatingType>;
  /** Пользователь */
  Author?: Maybe<UserType>;
  /** Ошибки после попытки сохранения */
  _errors?: Maybe<Scalars['JSON']>;
  /** Массив измененных данных */
  _isDirty?: Maybe<Scalars['JSON']>;
}


export type ResourceTypeCommentsArgs = {
  sort?: Maybe<Array<Maybe<SortBy>>>;
};

export interface SortBy {
  /** Способ сортировки */
  by?: Maybe<SortByValues>;
  /** Порядок сортировки */
  dir?: Maybe<SortType>;
}

export enum SortByValues {
  /** По ID */
  ID = 'id',
  /** В случайном порядке */
  RAND = 'rand'
}

export interface UserNoticeType {
  __typename?: 'UserNoticeType';
  /** ID уведомления */
  id: Scalars['Int'];
  /** Название уведомления */
  type: Scalars['String'];
  /** Комментарий к названию уведомления */
  comment: Scalars['String'];
  /** Флаг активности настройки */
  active: Scalars['Boolean'];
}

/** История изменения объекта */
export interface EditVersionType {
  __typename?: 'EditVersionType';
  /** Идентификатор поля */
  id?: Maybe<Scalars['Int']>;
  /** Идентификатор изменного объекта */
  target_id?: Maybe<Scalars['Int']>;
  /** Изменнные данные */
  data?: Maybe<Scalars['JSON']>;
  /** Кто внес изменения */
  createdby?: Maybe<Scalars['Int']>;
  /** Дата изменения */
  createdon?: Maybe<Scalars['Int']>;
  /** Кто редактировал */
  editedby?: Maybe<Scalars['Int']>;
  /** Дата редактирования */
  editedon?: Maybe<Scalars['Int']>;
  /** Статус изменения. 0 - Новый. 1 - Подтвержден. 2 - Отменен */
  status?: Maybe<Scalars['String']>;
  /** Серверное сообщение */
  message?: Maybe<Scalars['String']>;
  /** Ошибки после попытки сохранения */
  errors?: Maybe<Scalars['JSON']>;
  /** Автор изменений */
  CreatedBy?: Maybe<UserType>;
  /** Редактор изменений */
  EditedBy?: Maybe<UserType>;
  /** Компания, для которой выполнены изменения */
  Company?: Maybe<Company>;
}

export interface RedirectsList {
  __typename?: 'redirectsList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<RedirectType>>>;
}

/** Редиректы */
export interface RedirectType {
  __typename?: 'RedirectType';
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** УРЛ, для которого настроено правило */
  uri?: Maybe<Scalars['String']>;
  /** УРЛ, куда должен быть выполнен редирект */
  redirect_uri?: Maybe<Scalars['String']>;
  /** ID Документа, для которого настроено правило */
  resource_id?: Maybe<Scalars['Int']>;
}

export interface ResourcesList {
  __typename?: 'resourcesList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<ResourceType>>>;
}

export interface RatingsSortBy {
  /** Способ сортировки */
  by?: Maybe<RatingsSortByValues>;
  /** Порядок сортировки */
  dir?: Maybe<SortType>;
}

export enum RatingsSortByValues {
  /** По ID */
  ID = 'id',
  /** По рейтингу */
  RATING = 'rating',
  /** По типу рейтинга */
  TYPE = 'type',
  /** По компании */
  COMPANY = 'company',
  /** В случайном порядке */
  RAND = 'rand'
}

/** Способ группировки рейтингов */
export enum RatingGroupbyEnum {
  /** Сгруппировать по компаниям (общий рейтинг) */
  COMPANY = 'company',
  /** Сгруппировать по типам рейтингов (по каким рейтингам сколько голосов всего и по количеству компаний) */
  RATING_TYPE = 'rating_type',
  /** Сгруппировать по компаниям и типам рейтингов (средний балл на каждую компанию по типу рейтинга) */
  COMPANY_AND_RATING_TYPE = 'company_and_rating_type'
}

export interface RatingsList {
  __typename?: 'RatingsList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<RatingType>>>;
}

export interface CommentsList {
  __typename?: 'commentsList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<CommentType>>>;
}

export interface UsersList {
  __typename?: 'usersList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<UserType>>>;
}

export interface WsConnectionType {
  __typename?: 'WsConnectionType';
  id?: Maybe<Scalars['ID']>;
  /** Находится онлайн */
  status?: Maybe<Scalars['String']>;
  query?: Maybe<WebsocketUpgradeReq>;
  user?: Maybe<UserType>;
  /** Координаты */
  coords?: Maybe<CoordsType>;
  sendWsUserMessageTypeNotice?: Maybe<WsMessageType>;
}


export type WsConnectionTypeSendWsUserMessageTypeNoticeArgs = {
  type: Scalars['String'];
  message_id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export interface WebsocketUpgradeReq {
  __typename?: 'WebsocketUpgradeReq';
  uid?: Maybe<Scalars['Int']>;
}

/** Веб-сокет сообщение */
export interface WsMessageType {
  __typename?: 'WsMessageType';
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  message_id?: Maybe<Scalars['Int']>;
}

/** Результат поиска */
export type SearchResultType = Company;

export interface SearchStatsList {
  __typename?: 'searchStatsList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<SearchStatType>>>;
}

/** Статистика поиска */
export interface SearchStatType {
  __typename?: 'SearchStatType';
  id?: Maybe<Scalars['Int']>;
  /** Поисковый запрос */
  query?: Maybe<Scalars['String']>;
  /** Количество найденных заведений */
  finded?: Maybe<Scalars['Int']>;
  /** Дата запроса */
  date?: Maybe<Scalars['Int']>;
}

export interface EditVersionsList {
  __typename?: 'editVersionsList';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  object?: Maybe<Array<Maybe<EditVersionType>>>;
}

export interface Mutation {
  __typename?: 'Mutation';
  /** Сброс кеша */
  clearCache?: Maybe<Scalars['Boolean']>;
  /** Добавление нового заведения */
  addCompany?: Maybe<Company>;
  /** Добавление картинки в галерею заведения */
  addCompanyGalleryImage?: Maybe<Company>;
  /** Сохранение измененных данных компании */
  updateCompany?: Maybe<EditVersionType>;
  /** Логирование координат */
  logCoords?: Maybe<WsConnectionType>;
  /** Сохранение статистики поиска */
  saveSearchStat?: Maybe<SearchStatType>;
  /** Добавление нового топика */
  addTopic?: Maybe<ResourceType>;
  /** Добавление нового комментария */
  addComment?: Maybe<CommentType>;
}


export type MutationAddCompanyGalleryImageArgs = {
  id: Scalars['Int'];
  image: Scalars['String'];
};


export type MutationUpdateCompanyArgs = {
  target_id: Scalars['Int'];
  data: Scalars['JSON'];
};


export type MutationLogCoordsArgs = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};


export type MutationSaveSearchStatArgs = {
  query: Scalars['String'];
  finded: Scalars['Int'];
};


export type MutationAddCommentArgs = {
  target_id: Scalars['Int'];
  target_class: Scalars['String'];
  parent?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};
