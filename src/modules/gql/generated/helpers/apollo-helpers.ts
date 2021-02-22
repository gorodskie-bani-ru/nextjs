import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CityKeySpecifier = ('TemplateVarValues' | 'alias' | 'coords' | 'id' | 'longtitle' | 'pagetitle' | 'uri' | CityKeySpecifier)[];
export type CityFieldPolicy = {
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('TemplateVarValues' | 'address' | 'addressComments' | 'alias' | 'content' | 'coords' | 'createdby' | 'createdon' | 'description' | 'editedby' | 'editedon' | 'gallery' | 'id' | 'image' | 'longtitle' | 'pagetitle' | 'prices' | 'published' | 'uri' | 'workTime' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	addressComments?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	editedby?: FieldPolicy<any> | FieldReadFunction<any>,
	editedon?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	prices?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type QueryKeySpecifier = ('cities' | 'companies' | 'resources' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cities?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('TemplateVarValues' | 'alias' | 'content' | 'createdby' | 'createdon' | 'description' | 'id' | 'longtitle' | 'pagetitle' | 'published' | 'template' | 'uri' | ResourceKeySpecifier)[];
export type ResourceFieldPolicy = {
	TemplateVarValues?: FieldPolicy<any> | FieldReadFunction<any>,
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
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
	Resource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		fields?: ResourceFieldPolicy,
	},
	bani684_site_tmplvar_contentvalues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | bani684_site_tmplvar_contentvaluesKeySpecifier | (() => undefined | bani684_site_tmplvar_contentvaluesKeySpecifier),
		fields?: bani684_site_tmplvar_contentvaluesFieldPolicy,
	}
};