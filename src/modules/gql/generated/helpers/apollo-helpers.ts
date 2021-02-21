import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CompanyKeySpecifier = ('alias' | 'coords' | 'createdby' | 'createdon' | 'description' | 'editedby' | 'editedon' | 'id' | 'image' | 'longtitle' | 'name' | 'pagetitle' | 'published' | 'uri' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	alias?: FieldPolicy<any> | FieldReadFunction<any>,
	coords?: FieldPolicy<any> | FieldReadFunction<any>,
	createdby?: FieldPolicy<any> | FieldReadFunction<any>,
	createdon?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	editedby?: FieldPolicy<any> | FieldReadFunction<any>,
	editedon?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pagetitle?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoordinatesKeySpecifier = ('lat' | 'lng' | CoordinatesKeySpecifier)[];
export type CoordinatesFieldPolicy = {
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('companies' | 'resources' | 'resourcesCount' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('id' | 'longtitle' | 'name' | ResourceKeySpecifier)[];
export type ResourceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type bani684_site_tmplvar_contentvaluesKeySpecifier = ('id' | bani684_site_tmplvar_contentvaluesKeySpecifier)[];
export type bani684_site_tmplvar_contentvaluesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	Coordinates?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoordinatesKeySpecifier | (() => undefined | CoordinatesKeySpecifier),
		fields?: CoordinatesFieldPolicy,
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