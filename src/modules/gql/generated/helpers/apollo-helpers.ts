import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type RootTypeKeySpecifier = ('siteContent' | 'companiesList' | 'companies' | 'company' | 'redirectsList' | 'redirects' | 'redirect' | 'resourcesList' | 'resources' | 'resource' | 'ratingsList' | 'ratings' | 'vote' | 'commentsList' | 'comments' | 'comment' | 'usersList' | 'users' | 'user' | 'ws_connections' | 'search' | 'searchStatsList' | 'searchStats' | 'searchStat' | 'editVersionsList' | 'editVersions' | 'editVersion' | RootTypeKeySpecifier)[];
export type RootTypeFieldPolicy = {
	siteContent?: FieldPolicy<any> | FieldReadFunction<any>,
	companiesList?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	redirectsList?: FieldPolicy<any> | FieldReadFunction<any>,
	redirects?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesList?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingsList?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	vote?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsList?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	usersList?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	ws_connections?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	searchStatsList?: FieldPolicy<any> | FieldReadFunction<any>,
	searchStats?: FieldPolicy<any> | FieldReadFunction<any>,
	searchStat?: FieldPolicy<any> | FieldReadFunction<any>,
	editVersionsList?: FieldPolicy<any> | FieldReadFunction<any>,
	editVersions?: FieldPolicy<any> | FieldReadFunction<any>,
	editVersion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SiteContentTypeKeySpecifier = ('id' | 'status' | 'title' | 'description' | 'keywords' | 'robots' | 'content' | 'state' | 'user' | '_errors' | '_isDirty' | SiteContentTypeKeySpecifier)[];
export type SiteContentTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	robots?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	_isDirty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type companiesListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | companiesListKeySpecifier)[];
export type companiesListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('id' | 'name' | 'pagetitle' | 'longtitle' | 'description' | 'content' | 'alias' | 'template' | 'parent' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'publishedon' | 'pubdate' | 'published' | 'prices' | 'uri' | 'mapIcon' | 'image' | 'imageFormats' | 'city_id' | 'city' | 'city_uri' | 'tvs' | 'gallery' | 'schedule' | 'schedule_men' | 'schedule_women' | 'schedule_family' | 'coords' | 'votes' | 'ratingsByType' | 'comments' | 'ratings' | 'ratingAvg' | 'topics' | 'editVersions' | 'errors' | '_isDirty' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	editedby?: FieldPolicy<any> | FieldReadFunction<any>,
	editedon?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedon?: FieldPolicy<any> | FieldReadFunction<any>,
	pubdate?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	mapIcon?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageFormats?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	city_uri?: FieldPolicy<any> | FieldReadFunction<any>,
	tvs?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	schedule?: FieldPolicy<any> | FieldReadFunction<any>,
	schedule_men?: FieldPolicy<any> | FieldReadFunction<any>,
	schedule_women?: FieldPolicy<any> | FieldReadFunction<any>,
	schedule_family?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingsByType?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingAvg?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	editVersions?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	_isDirty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEditorStateTypeKeySpecifier = ('blocks' | 'entityMap' | CommentEditorStateTypeKeySpecifier)[];
export type CommentEditorStateTypeFieldPolicy = {
	blocks?: FieldPolicy<any> | FieldReadFunction<any>,
	entityMap?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditorStateBlockTypeKeySpecifier = ('data' | 'depth' | 'entityRanges' | 'inlineStyleRanges' | 'key' | 'text' | 'type' | EditorStateBlockTypeKeySpecifier)[];
export type EditorStateBlockTypeFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	depth?: FieldPolicy<any> | FieldReadFunction<any>,
	entityRanges?: FieldPolicy<any> | FieldReadFunction<any>,
	inlineStyleRanges?: FieldPolicy<any> | FieldReadFunction<any>,
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditorEntityDefaultTypeKeySpecifier = ('data' | 'mutability' | 'type' | EditorEntityDefaultTypeKeySpecifier)[];
export type EditorEntityDefaultTypeFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	mutability?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditorStateEntityDataTypeKeySpecifier = ('gallery' | 'target' | 'title' | 'url' | 'company_id' | 'src' | '_map' | EditorStateEntityDataTypeKeySpecifier)[];
export type EditorStateEntityDataTypeFieldPolicy = {
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	company_id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	_map?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentGalleryTypeKeySpecifier = ('image' | 'imageFormats' | CommentGalleryTypeKeySpecifier)[];
export type CommentGalleryTypeFieldPolicy = {
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageFormats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImagesKeySpecifier = ('original' | 'thumb' | 'marker_thumb' | 'slider_thumb' | 'slider_dot_thumb' | 'small' | 'middle' | 'big' | ImagesKeySpecifier)[];
export type ImagesFieldPolicy = {
	original?: FieldPolicy<any> | FieldReadFunction<any>,
	thumb?: FieldPolicy<any> | FieldReadFunction<any>,
	marker_thumb?: FieldPolicy<any> | FieldReadFunction<any>,
	slider_thumb?: FieldPolicy<any> | FieldReadFunction<any>,
	slider_dot_thumb?: FieldPolicy<any> | FieldReadFunction<any>,
	small?: FieldPolicy<any> | FieldReadFunction<any>,
	middle?: FieldPolicy<any> | FieldReadFunction<any>,
	big?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditorEntityGalleryTypeKeySpecifier = ('mutability' | 'type' | 'data' | EditorEntityGalleryTypeKeySpecifier)[];
export type EditorEntityGalleryTypeFieldPolicy = {
	mutability?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditorEntityLinkTypeKeySpecifier = ('mutability' | 'type' | 'data' | EditorEntityLinkTypeKeySpecifier)[];
export type EditorEntityLinkTypeFieldPolicy = {
	mutability?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditorEntityCompanyTypeKeySpecifier = ('mutability' | 'type' | 'data' | EditorEntityCompanyTypeKeySpecifier)[];
export type EditorEntityCompanyTypeFieldPolicy = {
	mutability?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditorEntityImageTypeKeySpecifier = ('mutability' | 'type' | 'data' | EditorEntityImageTypeKeySpecifier)[];
export type EditorEntityImageTypeFieldPolicy = {
	mutability?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomEditorEntityCompanyTypeKeySpecifier = ('mutability' | 'type' | 'data' | CustomEditorEntityCompanyTypeKeySpecifier)[];
export type CustomEditorEntityCompanyTypeFieldPolicy = {
	mutability?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomEditorStateEntityDataTypeKeySpecifier = ('target' | 'title' | 'url' | 'company_id' | 'Company' | 'src' | '_map' | CustomEditorStateEntityDataTypeKeySpecifier)[];
export type CustomEditorStateEntityDataTypeFieldPolicy = {
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	company_id?: FieldPolicy<any> | FieldReadFunction<any>,
	Company?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	_map?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTSvTypeKeySpecifier = ('address' | 'site' | 'facility_type' | 'phones' | 'work_time' | 'prices' | 'metro' | 'approved' | ResourceTSvTypeKeySpecifier)[];
export type ResourceTSvTypeFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	site?: FieldPolicy<any> | FieldReadFunction<any>,
	facility_type?: FieldPolicy<any> | FieldReadFunction<any>,
	phones?: FieldPolicy<any> | FieldReadFunction<any>,
	work_time?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	metro?: FieldPolicy<any> | FieldReadFunction<any>,
	approved?: FieldPolicy<any> | FieldReadFunction<any>
};
export type galleryTypeKeySpecifier = ('image' | 'imageFormats' | galleryTypeKeySpecifier)[];
export type galleryTypeFieldPolicy = {
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageFormats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduleDayTypeKeySpecifier = ('start' | 'end' | ScheduleDayTypeKeySpecifier)[];
export type ScheduleDayTypeFieldPolicy = {
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	end?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduleDayRangeTypeKeySpecifier = ('year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'weekDay' | ScheduleDayRangeTypeKeySpecifier)[];
export type ScheduleDayRangeTypeFieldPolicy = {
	year?: FieldPolicy<any> | FieldReadFunction<any>,
	month?: FieldPolicy<any> | FieldReadFunction<any>,
	day?: FieldPolicy<any> | FieldReadFunction<any>,
	hour?: FieldPolicy<any> | FieldReadFunction<any>,
	minute?: FieldPolicy<any> | FieldReadFunction<any>,
	second?: FieldPolicy<any> | FieldReadFunction<any>,
	weekDay?: FieldPolicy<any> | FieldReadFunction<any>
};
export type coordsTypeKeySpecifier = ('lat' | 'lng' | 'zoom' | coordsTypeKeySpecifier)[];
export type coordsTypeFieldPolicy = {
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>,
	zoom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingTypeKeySpecifier = ('id' | 'rating' | 'max_vote' | 'min_vote' | 'type' | 'target_id' | 'target_class' | 'quantity' | 'quantity_voters' | 'voted_companies' | 'voted_users' | 'voter' | 'voters' | 'Company' | 'companies' | 'Type' | RatingTypeKeySpecifier)[];
export type RatingTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	max_vote?: FieldPolicy<any> | FieldReadFunction<any>,
	min_vote?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	target_id?: FieldPolicy<any> | FieldReadFunction<any>,
	target_class?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity_voters?: FieldPolicy<any> | FieldReadFunction<any>,
	voted_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	voted_users?: FieldPolicy<any> | FieldReadFunction<any>,
	voter?: FieldPolicy<any> | FieldReadFunction<any>,
	voters?: FieldPolicy<any> | FieldReadFunction<any>,
	Company?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	Type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTypeKeySpecifier = ('id' | 'username' | 'fullname' | 'email' | 'image' | 'imageFormats' | 'active' | 'blocked' | 'sudo' | 'delegate' | 'createdon' | 'offer' | 'offer_date' | 'contract_date' | 'createdby' | 'comments' | 'notices' | '_Dirty' | UserTypeKeySpecifier)[];
export type UserTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	imageFormats?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	delegate?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	offer?: FieldPolicy<any> | FieldReadFunction<any>,
	offer_date?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_date?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	notices?: FieldPolicy<any> | FieldReadFunction<any>,
	_Dirty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTypeKeySpecifier = ('id' | 'thread_id' | 'target_id' | 'target_class' | 'text' | 'author_username' | 'author_fullname' | 'author_avatar' | 'parent' | 'published' | 'deleted' | 'createdby' | 'resource_id' | 'createdon' | 'createdonFormatted' | 'Author' | 'Resource' | 'Company' | '_errors' | '_Dirty' | CommentTypeKeySpecifier)[];
export type CommentTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	target_id?: FieldPolicy<any> | FieldReadFunction<any>,
	target_class?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	author_username?: FieldPolicy<any> | FieldReadFunction<any>,
	author_fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	author_avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	resource_id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	createdonFormatted?: FieldPolicy<any> | FieldReadFunction<any>,
	Author?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	Company?: FieldPolicy<any> | FieldReadFunction<any>,
	_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	_Dirty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTypeKeySpecifier = ('id' | 'name' | 'pagetitle' | 'longtitle' | 'description' | 'summary' | 'introtext' | 'short_text' | 'content' | 'editor_content' | 'plainText' | 'alias' | 'uri' | 'createdby' | 'image' | 'tags' | 'imageFormats' | 'city_id' | 'city' | 'parent' | 'template' | 'deleted' | 'hidemenu' | 'searchable' | 'createdon' | 'published' | 'publishedon' | 'pubdate' | 'tvs' | 'gallery' | 'coords' | 'votes' | 'ratingsByType' | 'comments' | 'ratings' | 'ratingAvg' | 'Author' | '_errors' | '_isDirty' | ResourceTypeKeySpecifier)[];
export type ResourceTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	introtext?: FieldPolicy<any> | FieldReadFunction<any>,
	short_text?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	editor_content?: FieldPolicy<any> | FieldReadFunction<any>,
	plainText?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	imageFormats?: FieldPolicy<any> | FieldReadFunction<any>,
	city_id?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidemenu?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedon?: FieldPolicy<any> | FieldReadFunction<any>,
	pubdate?: FieldPolicy<any> | FieldReadFunction<any>,
	tvs?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingsByType?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingAvg?: FieldPolicy<any> | FieldReadFunction<any>,
	Author?: FieldPolicy<any> | FieldReadFunction<any>,
	_errors?: FieldPolicy<any> | FieldReadFunction<any>,
	_isDirty?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserNoticeTypeKeySpecifier = ('id' | 'type' | 'comment' | 'active' | UserNoticeTypeKeySpecifier)[];
export type UserNoticeTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditVersionTypeKeySpecifier = ('id' | 'target_id' | 'data' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'status' | 'message' | 'errors' | 'CreatedBy' | 'EditedBy' | 'Company' | EditVersionTypeKeySpecifier)[];
export type EditVersionTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	target_id?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	editedby?: FieldPolicy<any> | FieldReadFunction<any>,
	editedon?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	EditedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Company?: FieldPolicy<any> | FieldReadFunction<any>
};
export type redirectsListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | redirectsListKeySpecifier)[];
export type redirectsListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RedirectTypeKeySpecifier = ('id' | 'uri' | 'redirect_uri' | 'resource_id' | RedirectTypeKeySpecifier)[];
export type RedirectTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	redirect_uri?: FieldPolicy<any> | FieldReadFunction<any>,
	resource_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type resourcesListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | resourcesListKeySpecifier)[];
export type resourcesListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingsListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | RatingsListKeySpecifier)[];
export type RatingsListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type commentsListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | commentsListKeySpecifier)[];
export type commentsListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type usersListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | usersListKeySpecifier)[];
export type usersListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WsConnectionTypeKeySpecifier = ('id' | 'status' | 'query' | 'user' | 'coords' | 'sendWsUserMessageTypeNotice' | WsConnectionTypeKeySpecifier)[];
export type WsConnectionTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	sendWsUserMessageTypeNotice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WebsocketUpgradeReqKeySpecifier = ('uid' | WebsocketUpgradeReqKeySpecifier)[];
export type WebsocketUpgradeReqFieldPolicy = {
	uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WsMessageTypeKeySpecifier = ('type' | 'text' | 'message_id' | WsMessageTypeKeySpecifier)[];
export type WsMessageTypeFieldPolicy = {
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	message_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type searchStatsListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | searchStatsListKeySpecifier)[];
export type searchStatsListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchStatTypeKeySpecifier = ('id' | 'query' | 'finded' | 'date' | SearchStatTypeKeySpecifier)[];
export type SearchStatTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	query?: FieldPolicy<any> | FieldReadFunction<any>,
	finded?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type editVersionsListKeySpecifier = ('success' | 'message' | 'count' | 'total' | 'limit' | 'page' | 'object' | editVersionsListKeySpecifier)[];
export type editVersionsListFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	object?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('clearCache' | 'addCompany' | 'addCompanyGalleryImage' | 'updateCompany' | 'logCoords' | 'saveSearchStat' | 'addTopic' | 'addComment' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	clearCache?: FieldPolicy<any> | FieldReadFunction<any>,
	addCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	addCompanyGalleryImage?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	logCoords?: FieldPolicy<any> | FieldReadFunction<any>,
	saveSearchStat?: FieldPolicy<any> | FieldReadFunction<any>,
	addTopic?: FieldPolicy<any> | FieldReadFunction<any>,
	addComment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	RootType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootTypeKeySpecifier | (() => undefined | RootTypeKeySpecifier),
		fields?: RootTypeFieldPolicy,
	},
	SiteContentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SiteContentTypeKeySpecifier | (() => undefined | SiteContentTypeKeySpecifier),
		fields?: SiteContentTypeFieldPolicy,
	},
	companiesList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | companiesListKeySpecifier | (() => undefined | companiesListKeySpecifier),
		fields?: companiesListFieldPolicy,
	},
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	CommentEditorStateType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEditorStateTypeKeySpecifier | (() => undefined | CommentEditorStateTypeKeySpecifier),
		fields?: CommentEditorStateTypeFieldPolicy,
	},
	EditorStateBlockType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditorStateBlockTypeKeySpecifier | (() => undefined | EditorStateBlockTypeKeySpecifier),
		fields?: EditorStateBlockTypeFieldPolicy,
	},
	EditorEntityDefaultType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditorEntityDefaultTypeKeySpecifier | (() => undefined | EditorEntityDefaultTypeKeySpecifier),
		fields?: EditorEntityDefaultTypeFieldPolicy,
	},
	EditorStateEntityDataType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditorStateEntityDataTypeKeySpecifier | (() => undefined | EditorStateEntityDataTypeKeySpecifier),
		fields?: EditorStateEntityDataTypeFieldPolicy,
	},
	CommentGalleryType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentGalleryTypeKeySpecifier | (() => undefined | CommentGalleryTypeKeySpecifier),
		fields?: CommentGalleryTypeFieldPolicy,
	},
	Images?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImagesKeySpecifier | (() => undefined | ImagesKeySpecifier),
		fields?: ImagesFieldPolicy,
	},
	EditorEntityGalleryType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditorEntityGalleryTypeKeySpecifier | (() => undefined | EditorEntityGalleryTypeKeySpecifier),
		fields?: EditorEntityGalleryTypeFieldPolicy,
	},
	EditorEntityLinkType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditorEntityLinkTypeKeySpecifier | (() => undefined | EditorEntityLinkTypeKeySpecifier),
		fields?: EditorEntityLinkTypeFieldPolicy,
	},
	EditorEntityCompanyType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditorEntityCompanyTypeKeySpecifier | (() => undefined | EditorEntityCompanyTypeKeySpecifier),
		fields?: EditorEntityCompanyTypeFieldPolicy,
	},
	EditorEntityImageType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditorEntityImageTypeKeySpecifier | (() => undefined | EditorEntityImageTypeKeySpecifier),
		fields?: EditorEntityImageTypeFieldPolicy,
	},
	CustomEditorEntityCompanyType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomEditorEntityCompanyTypeKeySpecifier | (() => undefined | CustomEditorEntityCompanyTypeKeySpecifier),
		fields?: CustomEditorEntityCompanyTypeFieldPolicy,
	},
	CustomEditorStateEntityDataType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomEditorStateEntityDataTypeKeySpecifier | (() => undefined | CustomEditorStateEntityDataTypeKeySpecifier),
		fields?: CustomEditorStateEntityDataTypeFieldPolicy,
	},
	ResourceTSvType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTSvTypeKeySpecifier | (() => undefined | ResourceTSvTypeKeySpecifier),
		fields?: ResourceTSvTypeFieldPolicy,
	},
	galleryType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | galleryTypeKeySpecifier | (() => undefined | galleryTypeKeySpecifier),
		fields?: galleryTypeFieldPolicy,
	},
	ScheduleDayType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduleDayTypeKeySpecifier | (() => undefined | ScheduleDayTypeKeySpecifier),
		fields?: ScheduleDayTypeFieldPolicy,
	},
	ScheduleDayRangeType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduleDayRangeTypeKeySpecifier | (() => undefined | ScheduleDayRangeTypeKeySpecifier),
		fields?: ScheduleDayRangeTypeFieldPolicy,
	},
	coordsType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | coordsTypeKeySpecifier | (() => undefined | coordsTypeKeySpecifier),
		fields?: coordsTypeFieldPolicy,
	},
	RatingType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingTypeKeySpecifier | (() => undefined | RatingTypeKeySpecifier),
		fields?: RatingTypeFieldPolicy,
	},
	UserType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTypeKeySpecifier | (() => undefined | UserTypeKeySpecifier),
		fields?: UserTypeFieldPolicy,
	},
	CommentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTypeKeySpecifier | (() => undefined | CommentTypeKeySpecifier),
		fields?: CommentTypeFieldPolicy,
	},
	ResourceType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTypeKeySpecifier | (() => undefined | ResourceTypeKeySpecifier),
		fields?: ResourceTypeFieldPolicy,
	},
	UserNoticeType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserNoticeTypeKeySpecifier | (() => undefined | UserNoticeTypeKeySpecifier),
		fields?: UserNoticeTypeFieldPolicy,
	},
	EditVersionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditVersionTypeKeySpecifier | (() => undefined | EditVersionTypeKeySpecifier),
		fields?: EditVersionTypeFieldPolicy,
	},
	redirectsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | redirectsListKeySpecifier | (() => undefined | redirectsListKeySpecifier),
		fields?: redirectsListFieldPolicy,
	},
	RedirectType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RedirectTypeKeySpecifier | (() => undefined | RedirectTypeKeySpecifier),
		fields?: RedirectTypeFieldPolicy,
	},
	resourcesList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | resourcesListKeySpecifier | (() => undefined | resourcesListKeySpecifier),
		fields?: resourcesListFieldPolicy,
	},
	RatingsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingsListKeySpecifier | (() => undefined | RatingsListKeySpecifier),
		fields?: RatingsListFieldPolicy,
	},
	commentsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | commentsListKeySpecifier | (() => undefined | commentsListKeySpecifier),
		fields?: commentsListFieldPolicy,
	},
	usersList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | usersListKeySpecifier | (() => undefined | usersListKeySpecifier),
		fields?: usersListFieldPolicy,
	},
	WsConnectionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WsConnectionTypeKeySpecifier | (() => undefined | WsConnectionTypeKeySpecifier),
		fields?: WsConnectionTypeFieldPolicy,
	},
	WebsocketUpgradeReq?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WebsocketUpgradeReqKeySpecifier | (() => undefined | WebsocketUpgradeReqKeySpecifier),
		fields?: WebsocketUpgradeReqFieldPolicy,
	},
	WsMessageType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WsMessageTypeKeySpecifier | (() => undefined | WsMessageTypeKeySpecifier),
		fields?: WsMessageTypeFieldPolicy,
	},
	searchStatsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | searchStatsListKeySpecifier | (() => undefined | searchStatsListKeySpecifier),
		fields?: searchStatsListFieldPolicy,
	},
	SearchStatType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchStatTypeKeySpecifier | (() => undefined | SearchStatTypeKeySpecifier),
		fields?: SearchStatTypeFieldPolicy,
	},
	editVersionsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | editVersionsListKeySpecifier | (() => undefined | editVersionsListKeySpecifier),
		fields?: editVersionsListFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	}
};