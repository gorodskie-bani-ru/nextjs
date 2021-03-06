import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CityKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'coords' | 'createdby' | 'createdon' | 'description' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'published' | 'searchable' | 'template' | 'uri' | CityKeySpecifier)[];
export type CityFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('CreatedBy' | 'comments_count' | 'createdon' | 'deleted' | 'id' | 'published' | 'raw_text' | 'text' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	comments_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	raw_text?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'address' | 'addressComments' | 'alias' | 'content' | 'coords' | 'createdby' | 'createdon' | 'description' | 'gallery' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'prices' | 'published' | 'searchable' | 'template' | 'uri' | 'workTime' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	addressComments?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	workTime?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoordinatesKeySpecifier = ('lat' | 'lng' | 'zoom' | CoordinatesKeySpecifier)[];
export type CoordinatesFieldPolicy = {
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>,
	zoom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GalleryImageKeySpecifier = ('description' | 'image' | 'title' | GalleryImageKeySpecifier)[];
export type GalleryImageFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('cities' | 'comments' | 'commentsCount' | 'companies' | 'ratings' | 'resources' | 'resourcesCount' | 'reviews' | 'topics' | 'user' | 'users' | 'usersCount' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cities?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'published' | 'searchable' | 'template' | 'uri' | RatingKeySpecifier)[];
export type RatingFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'published' | 'searchable' | 'template' | 'uri' | ResourceKeySpecifier)[];
export type ResourceFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceInterfaceKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'published' | 'searchable' | 'template' | 'uri' | ResourceInterfaceKeySpecifier)[];
export type ResourceInterfaceFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'published' | 'searchable' | 'template' | 'uri' | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadKeySpecifier = ('id' | 'target_class' | ThreadKeySpecifier)[];
export type ThreadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	target_class?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'published' | 'searchable' | 'template' | 'uri' | TopicKeySpecifier)[];
export type TopicFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('Attributes' | 'active' | 'createdon' | 'email' | 'fullname' | 'id' | 'image' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	Attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserAttributesKeySpecifier = ('fullname' | 'id' | 'photo' | UserAttributesKeySpecifier)[];
export type UserAttributesFieldPolicy = {
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type bani684_site_tmplvar_contentvaluesKeySpecifier = ('contentid' | 'id' | 'tmplvarid' | 'value' | bani684_site_tmplvar_contentvaluesKeySpecifier)[];
export type bani684_site_tmplvar_contentvaluesFieldPolicy = {
	contentid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tmplvarid?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	City?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CityKeySpecifier | (() => undefined | CityKeySpecifier),
		fields?: CityFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	Coordinates?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoordinatesKeySpecifier | (() => undefined | CoordinatesKeySpecifier),
		fields?: CoordinatesFieldPolicy,
	},
	GalleryImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GalleryImageKeySpecifier | (() => undefined | GalleryImageKeySpecifier),
		fields?: GalleryImageFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Rating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RatingKeySpecifier | (() => undefined | RatingKeySpecifier),
		fields?: RatingFieldPolicy,
	},
	Resource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		fields?: ResourceFieldPolicy,
	},
	ResourceInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceInterfaceKeySpecifier | (() => undefined | ResourceInterfaceKeySpecifier),
		fields?: ResourceInterfaceFieldPolicy,
	},
	Review?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier),
		fields?: ReviewFieldPolicy,
	},
	Thread?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadKeySpecifier | (() => undefined | ThreadKeySpecifier),
		fields?: ThreadFieldPolicy,
	},
	Topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicKeySpecifier | (() => undefined | TopicKeySpecifier),
		fields?: TopicFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAttributesKeySpecifier | (() => undefined | UserAttributesKeySpecifier),
		fields?: UserAttributesFieldPolicy,
	},
	bani684_site_tmplvar_contentvalues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | bani684_site_tmplvar_contentvaluesKeySpecifier | (() => undefined | bani684_site_tmplvar_contentvaluesKeySpecifier),
		fields?: bani684_site_tmplvar_contentvaluesFieldPolicy,
	}
};