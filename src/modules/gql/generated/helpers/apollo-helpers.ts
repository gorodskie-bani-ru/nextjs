import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CityKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'coords' | 'createdby' | 'createdon' | 'description' | 'id' | 'longtitle' | 'pagetitle' | 'properties' | 'published' | 'searchable' | 'template' | 'uri' | CityKeySpecifier)[];
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
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type CompanyKeySpecifier = ('Comments' | 'CreatedBy' | 'Schedules' | 'TemplateVarValues' | 'address' | 'addressComments' | 'alias' | 'content' | 'coords' | 'createdby' | 'createdon' | 'description' | 'gallery' | 'id' | 'image' | 'longtitle' | 'metro' | 'pagetitle' | 'phones' | 'prices' | 'properties' | 'published' | 'rating' | 'searchable' | 'site' | 'template' | 'uri' | 'workTime' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Schedules?: FieldPolicy<any> | FieldReadFunction<any>,
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
	metro?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	phones?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	site?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type QueryKeySpecifier = ('cities' | 'comments' | 'commentsCount' | 'companies' | 'companiesCount' | 'ratings' | 'resources' | 'resourcesCount' | 'reviews' | 'topicTags' | 'topics' | 'user' | 'users' | 'usersCount' | 'votes' | 'votesByRating' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cities?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	companiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	ratings?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	topicTags?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	votesByRating?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RatingKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'longtitle' | 'pagetitle' | 'properties' | 'published' | 'searchable' | 'template' | 'uri' | RatingKeySpecifier)[];
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
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'longtitle' | 'pagetitle' | 'properties' | 'published' | 'searchable' | 'template' | 'uri' | ResourceKeySpecifier)[];
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
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceInterfaceKeySpecifier = ('Comments' | 'CreatedBy' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'longtitle' | 'pagetitle' | 'properties' | 'published' | 'searchable' | 'template' | 'uri' | ResourceInterfaceKeySpecifier)[];
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
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewKeySpecifier = ('Comments' | 'CreatedBy' | 'Tags' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'longtitle' | 'pagetitle' | 'properties' | 'published' | 'searchable' | 'template' | 'uri' | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduleKeySpecifier = ('end' | 'start' | ScheduleKeySpecifier)[];
export type ScheduleFieldPolicy = {
	end?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduleDataKeySpecifier = ('day' | 'hour' | 'minute' | 'month' | 'second' | 'weekDay' | 'year' | ScheduleDataKeySpecifier)[];
export type ScheduleDataFieldPolicy = {
	day?: FieldPolicy<any> | FieldReadFunction<any>,
	hour?: FieldPolicy<any> | FieldReadFunction<any>,
	minute?: FieldPolicy<any> | FieldReadFunction<any>,
	month?: FieldPolicy<any> | FieldReadFunction<any>,
	second?: FieldPolicy<any> | FieldReadFunction<any>,
	weekDay?: FieldPolicy<any> | FieldReadFunction<any>,
	year?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SchedulesKeySpecifier = ('Schedule' | 'ScheduleFamily' | 'ScheduleMen' | 'ScheduleWomen' | SchedulesKeySpecifier)[];
export type SchedulesFieldPolicy = {
	Schedule?: FieldPolicy<any> | FieldReadFunction<any>,
	ScheduleFamily?: FieldPolicy<any> | FieldReadFunction<any>,
	ScheduleMen?: FieldPolicy<any> | FieldReadFunction<any>,
	ScheduleWomen?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThreadKeySpecifier = ('id' | 'target_class' | ThreadKeySpecifier)[];
export type ThreadFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	target_class?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicKeySpecifier = ('Comments' | 'CreatedBy' | 'Tags' | 'TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'longtitle' | 'pagetitle' | 'properties' | 'published' | 'searchable' | 'template' | 'uri' | TopicKeySpecifier)[];
export type TopicFieldPolicy = {
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>,
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicTagKeySpecifier = ('tag' | TopicTagKeySpecifier)[];
export type TopicTagFieldPolicy = {
	tag?: FieldPolicy<any> | FieldReadFunction<any>
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
export type VoteKeySpecifier = ('CreatedBy' | 'Type' | 'id' | 'target_class' | 'target_id' | 'thread_id' | 'type' | 'user_id' | 'vote_date' | 'vote_direction' | 'vote_value' | VoteKeySpecifier)[];
export type VoteFieldPolicy = {
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Type?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	target_class?: FieldPolicy<any> | FieldReadFunction<any>,
	target_id?: FieldPolicy<any> | FieldReadFunction<any>,
	thread_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>,
	vote_date?: FieldPolicy<any> | FieldReadFunction<any>,
	vote_direction?: FieldPolicy<any> | FieldReadFunction<any>,
	vote_value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotesKeySpecifier = ('Company' | 'avg' | 'target_id' | 'type' | VotesKeySpecifier)[];
export type VotesFieldPolicy = {
	Company?: FieldPolicy<any> | FieldReadFunction<any>,
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	target_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotesAvgKeySpecifier = ('voteValueAvg' | VotesAvgKeySpecifier)[];
export type VotesAvgFieldPolicy = {
	voteValueAvg?: FieldPolicy<any> | FieldReadFunction<any>
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
	Schedule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduleKeySpecifier | (() => undefined | ScheduleKeySpecifier),
		fields?: ScheduleFieldPolicy,
	},
	ScheduleData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduleDataKeySpecifier | (() => undefined | ScheduleDataKeySpecifier),
		fields?: ScheduleDataFieldPolicy,
	},
	Schedules?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SchedulesKeySpecifier | (() => undefined | SchedulesKeySpecifier),
		fields?: SchedulesFieldPolicy,
	},
	Thread?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThreadKeySpecifier | (() => undefined | ThreadKeySpecifier),
		fields?: ThreadFieldPolicy,
	},
	Topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicKeySpecifier | (() => undefined | TopicKeySpecifier),
		fields?: TopicFieldPolicy,
	},
	TopicTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicTagKeySpecifier | (() => undefined | TopicTagKeySpecifier),
		fields?: TopicTagFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserAttributesKeySpecifier | (() => undefined | UserAttributesKeySpecifier),
		fields?: UserAttributesFieldPolicy,
	},
	Vote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteKeySpecifier | (() => undefined | VoteKeySpecifier),
		fields?: VoteFieldPolicy,
	},
	Votes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotesKeySpecifier | (() => undefined | VotesKeySpecifier),
		fields?: VotesFieldPolicy,
	},
	VotesAvg?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotesAvgKeySpecifier | (() => undefined | VotesAvgKeySpecifier),
		fields?: VotesAvgFieldPolicy,
	},
	bani684_site_tmplvar_contentvalues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | bani684_site_tmplvar_contentvaluesKeySpecifier | (() => undefined | bani684_site_tmplvar_contentvaluesKeySpecifier),
		fields?: bani684_site_tmplvar_contentvaluesFieldPolicy,
	}
};