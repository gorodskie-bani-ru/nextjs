import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime' | 'Decimal'

// Prisma model type definitions
interface PrismaModels {
  bani684_access_actiondom: Prisma.bani684_access_actiondom
  bani684_access_actions: Prisma.bani684_access_actions
  bani684_access_category: Prisma.bani684_access_category
  bani684_access_context: Prisma.bani684_access_context
  bani684_access_elements: Prisma.bani684_access_elements
  bani684_access_media_source: Prisma.bani684_access_media_source
  bani684_access_menus: Prisma.bani684_access_menus
  bani684_access_namespace: Prisma.bani684_access_namespace
  bani684_access_permissions: Prisma.bani684_access_permissions
  bani684_access_policies: Prisma.bani684_access_policies
  bani684_access_policy_templates: Prisma.bani684_access_policy_templates
  bani684_access_policy_template_groups: Prisma.bani684_access_policy_template_groups
  bani684_access_resources: Prisma.bani684_access_resources
  bani684_access_resource_groups: Prisma.bani684_access_resource_groups
  bani684_access_templatevars: Prisma.bani684_access_templatevars
  bani684_actiondom: Prisma.bani684_actiondom
  bani684_actions: Prisma.bani684_actions
  bani684_actions_fields: Prisma.bani684_actions_fields
  bani684_active_users: Prisma.bani684_active_users
  bani684_categories: Prisma.bani684_categories
  bani684_categories_closure: Prisma.bani684_categories_closure
  bani684_class_map: Prisma.bani684_class_map
  bani684_cmpgenerator: Prisma.bani684_cmpgenerator
  bani684_content_type: Prisma.bani684_content_type
  bani684_context: Prisma.bani684_context
  bani684_context_resource: Prisma.bani684_context_resource
  bani684_context_setting: Prisma.bani684_context_setting
  bani684_dashboard: Prisma.bani684_dashboard
  bani684_dashboard_widget: Prisma.bani684_dashboard_widget
  bani684_dashboard_widget_placement: Prisma.bani684_dashboard_widget_placement
  bani684_documentgroup_names: Prisma.bani684_documentgroup_names
  bani684_document_groups: Prisma.bani684_document_groups
  bani684_edit_versions: Prisma.bani684_edit_versions
  bani684_element_property_sets: Prisma.bani684_element_property_sets
  bani684_extension_packages: Prisma.bani684_extension_packages
  bani684_fc_profiles: Prisma.bani684_fc_profiles
  bani684_fc_profiles_usergroups: Prisma.bani684_fc_profiles_usergroups
  bani684_fc_sets: Prisma.bani684_fc_sets
  bani684_gallery_albums: Prisma.bani684_gallery_albums
  bani684_gallery_album_contexts: Prisma.bani684_gallery_album_contexts
  bani684_gallery_album_items: Prisma.bani684_gallery_album_items
  bani684_gallery_items: Prisma.bani684_gallery_items
  bani684_gallery_tags: Prisma.bani684_gallery_tags
  bani684_lexicon_entries: Prisma.bani684_lexicon_entries
  bani684_manager_log: Prisma.bani684_manager_log
  bani684_media_sources: Prisma.bani684_media_sources
  bani684_media_sources_contexts: Prisma.bani684_media_sources_contexts
  bani684_media_sources_elements: Prisma.bani684_media_sources_elements
  bani684_membergroup_names: Prisma.bani684_membergroup_names
  bani684_membergroup_template: Prisma.bani684_membergroup_template
  bani684_member_groups: Prisma.bani684_member_groups
  bani684_menus: Prisma.bani684_menus
  bani684_migx_configs: Prisma.bani684_migx_configs
  bani684_migx_config_elements: Prisma.bani684_migx_config_elements
  bani684_migx_elements: Prisma.bani684_migx_elements
  bani684_migx_formtabs: Prisma.bani684_migx_formtabs
  bani684_migx_formtab_fields: Prisma.bani684_migx_formtab_fields
  bani684_modhybridauth_providers: Prisma.bani684_modhybridauth_providers
  bani684_modhybridauth_user_profile: Prisma.bani684_modhybridauth_user_profile
  bani684_modsearch_indexes: Prisma.bani684_modsearch_indexes
  bani684_modxsdk_package: Prisma.bani684_modxsdk_package
  bani684_modxsdk_packagesource: Prisma.bani684_modxsdk_packagesource
  bani684_modxsdk_package_vehicle: Prisma.bani684_modxsdk_package_vehicle
  bani684_modxsdk_project: Prisma.bani684_modxsdk_project
  bani684_modxsdk_project_package: Prisma.bani684_modxsdk_project_package
  bani684_modxsdk_vehicle: Prisma.bani684_modxsdk_vehicle
  bani684_modxsite_cities: Prisma.bani684_modxsite_cities
  bani684_modxsite_companies: Prisma.bani684_modxsite_companies
  bani684_modxsite_countries: Prisma.bani684_modxsite_countries
  bani684_monitor_requests: Prisma.bani684_monitor_requests
  bani684_monitor_request_items: Prisma.bani684_monitor_request_items
  bani684_namespaces: Prisma.bani684_namespaces
  bani684_packman_profile: Prisma.bani684_packman_profile
  bani684_property_set: Prisma.bani684_property_set
  bani684_redirects: Prisma.bani684_redirects
  bani684_register_messages: Prisma.bani684_register_messages
  bani684_register_queues: Prisma.bani684_register_queues
  bani684_register_topics: Prisma.bani684_register_topics
  bani684_search_stat: Prisma.bani684_search_stat
  bani684_session: Prisma.bani684_session
  bani684_site_content: Prisma.bani684_site_content
  bani684_site_htmlsnippets: Prisma.bani684_site_htmlsnippets
  bani684_site_plugins: Prisma.bani684_site_plugins
  bani684_site_plugin_events: Prisma.bani684_site_plugin_events
  bani684_site_snippets: Prisma.bani684_site_snippets
  bani684_site_templates: Prisma.bani684_site_templates
  bani684_site_tmplvars: Prisma.bani684_site_tmplvars
  bani684_site_tmplvar_access: Prisma.bani684_site_tmplvar_access
  bani684_site_tmplvar_contentvalues: Prisma.bani684_site_tmplvar_contentvalues
  bani684_site_tmplvar_templates: Prisma.bani684_site_tmplvar_templates
  bani684_society_blog_attributes: Prisma.bani684_society_blog_attributes
  bani684_society_blog_topic: Prisma.bani684_society_blog_topic
  bani684_society_comments: Prisma.bani684_society_comments
  bani684_society_email_messages: Prisma.bani684_society_email_messages
  bani684_society_notice_types: Prisma.bani684_society_notice_types
  bani684_society_notice_users: Prisma.bani684_society_notice_users
  bani684_society_subscribers: Prisma.bani684_society_subscribers
  bani684_society_threads: Prisma.bani684_society_threads
  bani684_society_topic_attributes: Prisma.bani684_society_topic_attributes
  bani684_society_topic_tags: Prisma.bani684_society_topic_tags
  bani684_society_user_attributes: Prisma.bani684_society_user_attributes
  bani684_society_votes: Prisma.bani684_society_votes
  bani684_system_eventnames: Prisma.bani684_system_eventnames
  bani684_system_settings: Prisma.bani684_system_settings
  bani684_transport_packages: Prisma.bani684_transport_packages
  bani684_transport_providers: Prisma.bani684_transport_providers
  bani684_users: Prisma.bani684_users
  bani684_user_attributes: Prisma.bani684_user_attributes
  bani684_user_group_roles: Prisma.bani684_user_group_roles
  bani684_user_group_settings: Prisma.bani684_user_group_settings
  bani684_user_messages: Prisma.bani684_user_messages
  bani684_user_settings: Prisma.bani684_user_settings
  bani684_versionx_chunk: Prisma.bani684_versionx_chunk
  bani684_versionx_plugin: Prisma.bani684_versionx_plugin
  bani684_versionx_resource: Prisma.bani684_versionx_resource
  bani684_versionx_snippet: Prisma.bani684_versionx_snippet
  bani684_versionx_template: Prisma.bani684_versionx_template
  bani684_versionx_templatevar: Prisma.bani684_versionx_templatevar
  bani684_visitors: Prisma.bani684_visitors
  bani684_workspaces: Prisma.bani684_workspaces
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    bani684AccessActiondoms: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
    }
    bani684AccessActionss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
    }
    bani684AccessCategories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
    }
    bani684AccessContexts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
    }
    bani684AccessElementss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
    }
    bani684AccessMediaSources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
    }
    bani684AccessMenuss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy'
    }
    bani684AccessNamespaces: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
    }
    bani684AccessPermissionss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'template' | 'name' | 'description' | 'value'
      ordering: 'id' | 'template' | 'name' | 'description' | 'value'
    }
    bani684AccessPoliciess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'parent' | 'template' | 'class' | 'data' | 'lexicon'
      ordering: 'id' | 'name' | 'description' | 'parent' | 'template' | 'class' | 'data' | 'lexicon'
    }
    bani684AccessPolicyTemplatess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'template_group' | 'name' | 'description' | 'lexicon'
      ordering: 'id' | 'template_group' | 'name' | 'description' | 'lexicon'
    }
    bani684AccessPolicyTemplateGroupss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description'
      ordering: 'id' | 'name' | 'description'
    }
    bani684AccessResourcess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
    }
    bani684AccessResourceGroupss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
    }
    bani684AccessTemplatevarss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
      ordering: 'id' | 'target' | 'principal_class' | 'principal' | 'authority' | 'policy' | 'context_key'
    }
    bani684Actiondoms: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'set' | 'action' | 'name' | 'description' | 'xtype' | 'container' | 'rule' | 'value' | 'constraint' | 'constraint_field' | 'constraint_class' | 'active' | 'for_parent' | 'rank'
      ordering: 'id' | 'set' | 'action' | 'name' | 'description' | 'xtype' | 'container' | 'rule' | 'value' | 'constraint' | 'constraint_field' | 'constraint_class' | 'active' | 'for_parent' | 'rank'
    }
    bani684Actionss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'namespace' | 'controller' | 'haslayout' | 'lang_topics' | 'assets' | 'help_url'
      ordering: 'id' | 'namespace' | 'controller' | 'haslayout' | 'lang_topics' | 'assets' | 'help_url'
    }
    bani684ActionsFieldss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'action' | 'name' | 'type' | 'tab' | 'form' | 'other' | 'rank'
      ordering: 'id' | 'action' | 'name' | 'type' | 'tab' | 'form' | 'other' | 'rank'
    }
    bani684ActiveUserss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'internalKey' | 'username' | 'lasthit' | 'id' | 'action' | 'ip'
      ordering: 'internalKey' | 'username' | 'lasthit' | 'id' | 'action' | 'ip'
    }
    bani684Categoriess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'parent' | 'category' | 'rank'
      ordering: 'id' | 'parent' | 'category' | 'rank'
    }
    bani684CategoriesClosures: {
      filtering: 'AND' | 'OR' | 'NOT' | 'ancestor' | 'descendant' | 'depth'
      ordering: 'ancestor' | 'descendant' | 'depth'
    }
    bani684ClassMaps: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'class' | 'parent_class' | 'name_field' | 'path' | 'lexicon'
      ordering: 'id' | 'class' | 'parent_class' | 'name_field' | 'path' | 'lexicon'
    }
    bani684Cmpgenerators: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'package' | 'database' | 'tables' | 'table_prefix' | 'build_scheme' | 'build_package' | 'create_date' | 'last_ran'
      ordering: 'id' | 'package' | 'database' | 'tables' | 'table_prefix' | 'build_scheme' | 'build_package' | 'create_date' | 'last_ran'
    }
    bani684ContentTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'mime_type' | 'file_extensions' | 'headers' | 'binary'
      ordering: 'id' | 'name' | 'description' | 'mime_type' | 'file_extensions' | 'headers' | 'binary'
    }
    bani684Contexts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'key' | 'description' | 'rank' | 'name'
      ordering: 'key' | 'description' | 'rank' | 'name'
    }
    bani684ContextResources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'context_key' | 'resource'
      ordering: 'context_key' | 'resource'
    }
    bani684ContextSettings: {
      filtering: 'AND' | 'OR' | 'NOT' | 'context_key' | 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
      ordering: 'context_key' | 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
    }
    bani684Dashboards: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'hide_trees'
      ordering: 'id' | 'name' | 'description' | 'hide_trees'
    }
    bani684DashboardWidgets: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'type' | 'content' | 'namespace' | 'lexicon' | 'size'
      ordering: 'id' | 'name' | 'description' | 'type' | 'content' | 'namespace' | 'lexicon' | 'size'
    }
    bani684DashboardWidgetPlacements: {
      filtering: 'AND' | 'OR' | 'NOT' | 'dashboard' | 'widget' | 'rank'
      ordering: 'dashboard' | 'widget' | 'rank'
    }
    bani684DocumentgroupNamess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'private_memgroup' | 'private_webgroup'
      ordering: 'id' | 'name' | 'private_memgroup' | 'private_webgroup'
    }
    bani684DocumentGroupss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'document_group' | 'document'
      ordering: 'id' | 'document_group' | 'document'
    }
    bani684EditVersionss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target_id' | 'data' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'status'
      ordering: 'id' | 'target_id' | 'data' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'status'
    }
    bani684ElementPropertySetss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'element' | 'element_class' | 'property_set'
      ordering: 'element' | 'element_class' | 'property_set'
    }
    bani684ExtensionPackagess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'namespace' | 'name' | 'path' | 'table_prefix' | 'service_class' | 'service_name' | 'created_at' | 'updated_at'
      ordering: 'id' | 'namespace' | 'name' | 'path' | 'table_prefix' | 'service_class' | 'service_name' | 'created_at' | 'updated_at'
    }
    bani684FcProfiless: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'active' | 'rank'
      ordering: 'id' | 'name' | 'description' | 'active' | 'rank'
    }
    bani684FcProfilesUsergroupss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'usergroup' | 'profile'
      ordering: 'usergroup' | 'profile'
    }
    bani684FcSetss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'profile' | 'action' | 'description' | 'active' | 'template' | 'constraint' | 'constraint_field' | 'constraint_class'
      ordering: 'id' | 'profile' | 'action' | 'description' | 'active' | 'template' | 'constraint' | 'constraint_field' | 'constraint_class'
    }
    bani684GalleryAlbumss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'parent' | 'name' | 'year' | 'description' | 'createdon' | 'createdby' | 'rank' | 'active' | 'prominent' | 'watermark' | 'cover_filename'
      ordering: 'id' | 'parent' | 'name' | 'year' | 'description' | 'createdon' | 'createdby' | 'rank' | 'active' | 'prominent' | 'watermark' | 'cover_filename'
    }
    bani684GalleryAlbumContextss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'album' | 'context_key'
      ordering: 'id' | 'album' | 'context_key'
    }
    bani684GalleryAlbumItemss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'item' | 'album' | 'rank'
      ordering: 'id' | 'item' | 'album' | 'rank'
    }
    bani684GalleryItemss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'filename' | 'description' | 'mediatype' | 'url' | 'createdon' | 'createdby' | 'active' | 'duration' | 'streamer' | 'watermark_pos'
      ordering: 'id' | 'name' | 'filename' | 'description' | 'mediatype' | 'url' | 'createdon' | 'createdby' | 'active' | 'duration' | 'streamer' | 'watermark_pos'
    }
    bani684GalleryTagss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'item' | 'tag'
      ordering: 'id' | 'item' | 'tag'
    }
    bani684LexiconEntriess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'value' | 'topic' | 'namespace' | 'language' | 'createdon' | 'editedon'
      ordering: 'id' | 'name' | 'value' | 'topic' | 'namespace' | 'language' | 'createdon' | 'editedon'
    }
    bani684ManagerLogs: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user' | 'occurred' | 'action' | 'classKey' | 'item'
      ordering: 'id' | 'user' | 'occurred' | 'action' | 'classKey' | 'item'
    }
    bani684MediaSourcess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'class_key' | 'properties' | 'is_stream'
      ordering: 'id' | 'name' | 'description' | 'class_key' | 'properties' | 'is_stream'
    }
    bani684MediaSourcesContextss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'source' | 'context_key'
      ordering: 'source' | 'context_key'
    }
    bani684MediaSourcesElementss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'source' | 'object_class' | 'object' | 'context_key'
      ordering: 'source' | 'object_class' | 'object' | 'context_key'
    }
    bani684MembergroupNamess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'parent' | 'rank' | 'dashboard'
      ordering: 'id' | 'name' | 'description' | 'parent' | 'rank' | 'dashboard'
    }
    bani684MembergroupTemplates: {
      filtering: 'AND' | 'OR' | 'NOT' | 'group' | 'template'
      ordering: 'group' | 'template'
    }
    bani684MemberGroupss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user_group' | 'member' | 'role' | 'rank'
      ordering: 'id' | 'user_group' | 'member' | 'role' | 'rank'
    }
    bani684Menuss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'text' | 'parent' | 'action' | 'description' | 'icon' | 'menuindex' | 'params' | 'handler' | 'permissions' | 'namespace'
      ordering: 'text' | 'parent' | 'action' | 'description' | 'icon' | 'menuindex' | 'params' | 'handler' | 'permissions' | 'namespace'
    }
    bani684MigxConfigss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'formtabs' | 'contextmenus' | 'actionbuttons' | 'columnbuttons' | 'filters' | 'extended' | 'columns' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'published' | 'publishedon' | 'publishedby'
      ordering: 'id' | 'name' | 'formtabs' | 'contextmenus' | 'actionbuttons' | 'columnbuttons' | 'filters' | 'extended' | 'columns' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'published' | 'publishedon' | 'publishedby'
    }
    bani684MigxConfigElementss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'config_id' | 'element_id' | 'rank' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'published' | 'publishedon' | 'publishedby'
      ordering: 'id' | 'config_id' | 'element_id' | 'rank' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'published' | 'publishedon' | 'publishedby'
    }
    bani684MigxElementss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'type' | 'content' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'published' | 'publishedon' | 'publishedby'
      ordering: 'id' | 'type' | 'content' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'published' | 'publishedon' | 'publishedby'
    }
    bani684MigxFormtabss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'config_id' | 'caption' | 'pos' | 'print_before_tabs' | 'extended'
      ordering: 'id' | 'config_id' | 'caption' | 'pos' | 'print_before_tabs' | 'extended'
    }
    bani684MigxFormtabFieldss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'config_id' | 'formtab_id' | 'field' | 'caption' | 'description' | 'pos' | 'description_is_code' | 'inputTV' | 'inputTVtype' | 'validation' | 'configs' | 'restrictive_condition' | 'display' | 'sourceFrom' | 'sources' | 'inputOptionValues' | 'default' | 'extended'
      ordering: 'id' | 'config_id' | 'formtab_id' | 'field' | 'caption' | 'description' | 'pos' | 'description_is_code' | 'inputTV' | 'inputTVtype' | 'validation' | 'configs' | 'restrictive_condition' | 'display' | 'sourceFrom' | 'sources' | 'inputOptionValues' | 'default' | 'extended'
    }
    bani684ModhybridauthProviderss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'keys' | 'scope' | 'enabled' | 'class_key'
      ordering: 'id' | 'name' | 'keys' | 'scope' | 'enabled' | 'class_key'
    }
    bani684ModhybridauthUserProfiles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'internalKey' | 'identifier' | 'provider' | 'profileURL' | 'webSiteURL' | 'photoURL' | 'displayName' | 'description' | 'firstName' | 'lastName' | 'gender' | 'language' | 'age' | 'birthDay' | 'birthMonth' | 'birthYear' | 'email' | 'emailVerified' | 'phone' | 'address' | 'country' | 'region' | 'city' | 'zip' | 'createdon' | 'extended'
      ordering: 'id' | 'internalKey' | 'identifier' | 'provider' | 'profileURL' | 'webSiteURL' | 'photoURL' | 'displayName' | 'description' | 'firstName' | 'lastName' | 'gender' | 'language' | 'age' | 'birthDay' | 'birthMonth' | 'birthYear' | 'email' | 'emailVerified' | 'phone' | 'address' | 'country' | 'region' | 'city' | 'zip' | 'createdon' | 'extended'
    }
    bani684ModsearchIndexess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'resource_id' | 'lemma'
      ordering: 'resource_id' | 'lemma'
    }
    bani684ModxsdkPackages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'version_major' | 'version_minor' | 'version_patch' | 'version_type'
      ordering: 'id' | 'name' | 'version_major' | 'version_minor' | 'version_patch' | 'version_type'
    }
    bani684ModxsdkPackagesources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'packageid' | 'sourceid'
      ordering: 'packageid' | 'sourceid'
    }
    bani684ModxsdkPackageVehicles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'packageid' | 'vehicleid'
      ordering: 'packageid' | 'vehicleid'
    }
    bani684ModxsdkProjects: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description'
      ordering: 'id' | 'name' | 'description'
    }
    bani684ModxsdkProjectPackages: {
      filtering: 'AND' | 'OR' | 'NOT' | 'projectid' | 'packageid'
      ordering: 'projectid' | 'packageid'
    }
    bani684ModxsdkVehicles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name'
      ordering: 'id' | 'name'
    }
    bani684ModxsiteCitiess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'city' | 'country_id' | 'rank' | 'link' | 'domain' | 'big'
      ordering: 'id' | 'city' | 'country_id' | 'rank' | 'link' | 'domain' | 'big'
    }
    bani684ModxsiteCompaniess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'country_id' | 'city_id' | 'address' | 'website' | 'email' | 'phone' | 'main_modx_version' | 'employees' | 'works' | 'foundation_date' | 'resource_id' | 'blog_id' | 'owner' | 'use_owr_techs' | 'createdby' | 'createdon' | 'editedby' | 'editedon'
      ordering: 'id' | 'name' | 'country_id' | 'city_id' | 'address' | 'website' | 'email' | 'phone' | 'main_modx_version' | 'employees' | 'works' | 'foundation_date' | 'resource_id' | 'blog_id' | 'owner' | 'use_owr_techs' | 'createdby' | 'createdon' | 'editedby' | 'editedon'
    }
    bani684ModxsiteCountriess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'country' | 'rank'
      ordering: 'id' | 'country' | 'rank'
    }
    bani684MonitorRequestss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'parent' | 'path' | 'site_url' | 'url' | 'context_key' | 'resource_id' | 'http_status' | 'uuid' | 'user_id' | 'ip' | 'date' | 'from_cache' | 'phptemplates_non_cached' | 'time' | 'php_memory' | 'db_queries' | 'db_queries_time' | 'php_error' | 'php_error_info' | 'referer' | 'user_agent'
      ordering: 'id' | 'parent' | 'path' | 'site_url' | 'url' | 'context_key' | 'resource_id' | 'http_status' | 'uuid' | 'user_id' | 'ip' | 'date' | 'from_cache' | 'phptemplates_non_cached' | 'time' | 'php_memory' | 'db_queries' | 'db_queries_time' | 'php_error' | 'php_error_info' | 'referer' | 'user_agent'
    }
    bani684MonitorRequestItemss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'request_id' | 'parent' | 'type' | 'name' | 'properties' | 'time' | 'php_memory' | 'db_queries' | 'db_queries_time'
      ordering: 'id' | 'request_id' | 'parent' | 'type' | 'name' | 'properties' | 'time' | 'php_memory' | 'db_queries' | 'db_queries_time'
    }
    bani684Namespacess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'name' | 'path' | 'assets_path'
      ordering: 'name' | 'path' | 'assets_path'
    }
    bani684PackmanProfiles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'data'
      ordering: 'id' | 'name' | 'description' | 'data'
    }
    bani684PropertySets: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'category' | 'description' | 'properties'
      ordering: 'id' | 'name' | 'category' | 'description' | 'properties'
    }
    bani684Redirectss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'uri' | 'resource_id'
      ordering: 'id' | 'uri' | 'resource_id'
    }
    bani684RegisterMessagess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'topic' | 'id' | 'created' | 'valid' | 'accessed' | 'accesses' | 'expires' | 'payload' | 'kill'
      ordering: 'topic' | 'id' | 'created' | 'valid' | 'accessed' | 'accesses' | 'expires' | 'payload' | 'kill'
    }
    bani684RegisterQueuess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'options'
      ordering: 'id' | 'name' | 'options'
    }
    bani684RegisterTopicss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'queue' | 'name' | 'created' | 'updated' | 'options'
      ordering: 'id' | 'queue' | 'name' | 'created' | 'updated' | 'options'
    }
    bani684SearchStats: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'query' | 'finded' | 'date'
      ordering: 'id' | 'query' | 'finded' | 'date'
    }
    bani684Sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'access' | 'data'
      ordering: 'id' | 'access' | 'data'
    }
    bani684SiteContents: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'type' | 'contentType' | 'pagetitle' | 'longtitle' | 'description' | 'alias' | 'link_attributes' | 'published' | 'pub_date' | 'unpub_date' | 'parent' | 'isfolder' | 'introtext' | 'content' | 'richtext' | 'template' | 'menuindex' | 'searchable' | 'cacheable' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'publishedon' | 'publishedby' | 'menutitle' | 'donthit' | 'privateweb' | 'privatemgr' | 'content_dispo' | 'hidemenu' | 'class_key' | 'context_key' | 'content_type' | 'uri' | 'uri_override' | 'hide_children_in_tree' | 'show_in_tree' | 'properties' | 'TemplateVarValues'
      ordering: 'id' | 'type' | 'contentType' | 'pagetitle' | 'longtitle' | 'description' | 'alias' | 'link_attributes' | 'published' | 'pub_date' | 'unpub_date' | 'parent' | 'isfolder' | 'introtext' | 'content' | 'richtext' | 'template' | 'menuindex' | 'searchable' | 'cacheable' | 'createdby' | 'createdon' | 'editedby' | 'editedon' | 'deleted' | 'deletedon' | 'deletedby' | 'publishedon' | 'publishedby' | 'menutitle' | 'donthit' | 'privateweb' | 'privatemgr' | 'content_dispo' | 'hidemenu' | 'class_key' | 'context_key' | 'content_type' | 'uri' | 'uri_override' | 'hide_children_in_tree' | 'show_in_tree' | 'properties'
    }
    bani684SiteHtmlsnippetss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'source' | 'property_preprocess' | 'name' | 'description' | 'editor_type' | 'category' | 'cache_type' | 'snippet' | 'locked' | 'properties' | 'static' | 'static_file'
      ordering: 'id' | 'source' | 'property_preprocess' | 'name' | 'description' | 'editor_type' | 'category' | 'cache_type' | 'snippet' | 'locked' | 'properties' | 'static' | 'static_file'
    }
    bani684SitePluginss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'source' | 'property_preprocess' | 'name' | 'description' | 'editor_type' | 'category' | 'cache_type' | 'plugincode' | 'locked' | 'properties' | 'disabled' | 'moduleguid' | 'static' | 'static_file'
      ordering: 'id' | 'source' | 'property_preprocess' | 'name' | 'description' | 'editor_type' | 'category' | 'cache_type' | 'plugincode' | 'locked' | 'properties' | 'disabled' | 'moduleguid' | 'static' | 'static_file'
    }
    bani684SitePluginEventss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'pluginid' | 'event' | 'priority' | 'propertyset'
      ordering: 'pluginid' | 'event' | 'priority' | 'propertyset'
    }
    bani684SiteSnippetss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'source' | 'property_preprocess' | 'name' | 'description' | 'editor_type' | 'category' | 'cache_type' | 'snippet' | 'locked' | 'properties' | 'moduleguid' | 'static' | 'static_file'
      ordering: 'id' | 'source' | 'property_preprocess' | 'name' | 'description' | 'editor_type' | 'category' | 'cache_type' | 'snippet' | 'locked' | 'properties' | 'moduleguid' | 'static' | 'static_file'
    }
    bani684SiteTemplatess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'source' | 'property_preprocess' | 'templatename' | 'description' | 'editor_type' | 'category' | 'icon' | 'template_type' | 'content' | 'locked' | 'properties' | 'static' | 'static_file'
      ordering: 'id' | 'source' | 'property_preprocess' | 'templatename' | 'description' | 'editor_type' | 'category' | 'icon' | 'template_type' | 'content' | 'locked' | 'properties' | 'static' | 'static_file'
    }
    bani684SiteTmplvarss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'source' | 'property_preprocess' | 'type' | 'name' | 'caption' | 'description' | 'editor_type' | 'category' | 'locked' | 'elements' | 'rank' | 'display' | 'default_text' | 'properties' | 'input_properties' | 'output_properties' | 'static' | 'static_file'
      ordering: 'id' | 'source' | 'property_preprocess' | 'type' | 'name' | 'caption' | 'description' | 'editor_type' | 'category' | 'locked' | 'elements' | 'rank' | 'display' | 'default_text' | 'properties' | 'input_properties' | 'output_properties' | 'static' | 'static_file'
    }
    bani684SiteTmplvarAccesses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'tmplvarid' | 'documentgroup'
      ordering: 'id' | 'tmplvarid' | 'documentgroup'
    }
    bani684SiteTmplvarContentvaluess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'tmplvarid' | 'contentid' | 'value' | 'Resource'
      ordering: 'id' | 'tmplvarid' | 'contentid' | 'value' | 'Resource'
    }
    bani684SiteTmplvarTemplatess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'tmplvarid' | 'templateid' | 'rank'
      ordering: 'tmplvarid' | 'templateid' | 'rank'
    }
    bani684SocietyBlogAttributess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'resourceid' | 'content_hash'
      ordering: 'id' | 'resourceid' | 'content_hash'
    }
    bani684SocietyBlogTopics: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'blogid' | 'topicid' | 'rank'
      ordering: 'id' | 'blogid' | 'topicid' | 'rank'
    }
    bani684SocietyCommentss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'thread_id' | 'parent' | 'text' | 'raw_text' | 'ip' | 'createdon' | 'createdby' | 'editedon' | 'editedby' | 'published' | 'deleted' | 'deletedon' | 'deletedby' | 'comments_count' | 'properties'
      ordering: 'id' | 'thread_id' | 'parent' | 'text' | 'raw_text' | 'ip' | 'createdon' | 'createdby' | 'editedon' | 'editedby' | 'published' | 'deleted' | 'deletedon' | 'deletedby' | 'comments_count' | 'properties'
    }
    bani684SocietyEmailMessagess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'user_id' | 'subject' | 'message' | 'date' | 'status'
      ordering: 'id' | 'user_id' | 'subject' | 'message' | 'date' | 'status'
    }
    bani684SocietyNoticeTypess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'type' | 'comment' | 'rank' | 'target'
      ordering: 'id' | 'type' | 'comment' | 'rank' | 'target'
    }
    bani684SocietyNoticeUserss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'notice_id' | 'user_id' | 'active'
      ordering: 'id' | 'notice_id' | 'user_id' | 'active'
    }
    bani684SocietySubscriberss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'userid' | 'subscriberid' | 'rank'
      ordering: 'userid' | 'subscriberid' | 'rank'
    }
    bani684SocietyThreadss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target_id' | 'target_class' | 'comments_count' | 'createdon' | 'editedon' | 'views' | 'rating' | 'positive_votes' | 'negative_votes' | 'neutral_votes'
      ordering: 'id' | 'target_id' | 'target_class' | 'comments_count' | 'createdon' | 'editedon' | 'views' | 'rating' | 'positive_votes' | 'negative_votes' | 'neutral_votes'
    }
    bani684SocietyTopicAttributess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'resourceid' | 'content_hash' | 'short_text' | 'raw_content' | 'topic_tags'
      ordering: 'id' | 'resourceid' | 'content_hash' | 'short_text' | 'raw_content' | 'topic_tags'
    }
    bani684SocietyTopicTagss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'topic_id' | 'tag' | 'active'
      ordering: 'id' | 'topic_id' | 'tag' | 'active'
    }
    bani684SocietyUserAttributess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'internalKey' | 'createdon'
      ordering: 'id' | 'internalKey' | 'createdon'
    }
    bani684SocietyVotess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'target_id' | 'target_class' | 'type' | 'thread_id' | 'user_id' | 'vote_direction' | 'vote_value' | 'vote_date'
      ordering: 'id' | 'target_id' | 'target_class' | 'type' | 'thread_id' | 'user_id' | 'vote_direction' | 'vote_value' | 'vote_date'
    }
    bani684SystemEventnamess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'name' | 'service' | 'groupname'
      ordering: 'name' | 'service' | 'groupname'
    }
    bani684SystemSettingss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
      ordering: 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
    }
    bani684TransportPackagess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'signature' | 'created' | 'updated' | 'installed' | 'state' | 'workspace' | 'provider' | 'disabled' | 'source' | 'manifest' | 'attributes' | 'package_name' | 'metadata' | 'version_major' | 'version_minor' | 'version_patch' | 'release' | 'release_index'
      ordering: 'signature' | 'created' | 'updated' | 'installed' | 'state' | 'workspace' | 'provider' | 'disabled' | 'source' | 'manifest' | 'attributes' | 'package_name' | 'metadata' | 'version_major' | 'version_minor' | 'version_patch' | 'release' | 'release_index'
    }
    bani684TransportProviderss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'service_url' | 'username' | 'api_key' | 'created' | 'updated' | 'active' | 'priority' | 'properties'
      ordering: 'id' | 'name' | 'description' | 'service_url' | 'username' | 'api_key' | 'created' | 'updated' | 'active' | 'priority' | 'properties'
    }
    bani684Userss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'password' | 'cachepwd' | 'class_key' | 'active' | 'remote_key' | 'remote_data' | 'hash_class' | 'salt' | 'primary_group' | 'session_stale' | 'sudo' | 'createdon' | 'delegate' | 'offer' | 'offer_date' | 'contract_date' | 'createdby'
      ordering: 'id' | 'username' | 'password' | 'cachepwd' | 'class_key' | 'active' | 'remote_key' | 'remote_data' | 'hash_class' | 'salt' | 'primary_group' | 'session_stale' | 'sudo' | 'createdon' | 'delegate' | 'offer' | 'offer_date' | 'contract_date' | 'createdby'
    }
    bani684UserAttributess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'internalKey' | 'fullname' | 'email' | 'phone' | 'mobilephone' | 'blocked' | 'blockeduntil' | 'blockedafter' | 'logincount' | 'lastlogin' | 'thislogin' | 'failedlogincount' | 'sessionid' | 'dob' | 'gender' | 'address' | 'country' | 'city' | 'state' | 'zip' | 'fax' | 'photo' | 'comment' | 'website' | 'extended'
      ordering: 'id' | 'internalKey' | 'fullname' | 'email' | 'phone' | 'mobilephone' | 'blocked' | 'blockeduntil' | 'blockedafter' | 'logincount' | 'lastlogin' | 'thislogin' | 'failedlogincount' | 'sessionid' | 'dob' | 'gender' | 'address' | 'country' | 'city' | 'state' | 'zip' | 'fax' | 'photo' | 'comment' | 'website' | 'extended'
    }
    bani684UserGroupRoless: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'description' | 'authority'
      ordering: 'id' | 'name' | 'description' | 'authority'
    }
    bani684UserGroupSettingss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'group' | 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
      ordering: 'group' | 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
    }
    bani684UserMessagess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'type' | 'subject' | 'message' | 'sender' | 'recipient' | 'private' | 'date_sent' | 'read'
      ordering: 'id' | 'type' | 'subject' | 'message' | 'sender' | 'recipient' | 'private' | 'date_sent' | 'read'
    }
    bani684UserSettingss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'user' | 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
      ordering: 'user' | 'key' | 'value' | 'xtype' | 'namespace' | 'area' | 'editedon'
    }
    bani684VersionxChunks: {
      filtering: 'AND' | 'OR' | 'NOT' | 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'name' | 'description' | 'category' | 'snippet' | 'locked' | 'properties'
      ordering: 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'name' | 'description' | 'category' | 'snippet' | 'locked' | 'properties'
    }
    bani684VersionxPlugins: {
      filtering: 'AND' | 'OR' | 'NOT' | 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'name' | 'description' | 'category' | 'plugincode' | 'locked' | 'properties' | 'disabled'
      ordering: 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'name' | 'description' | 'category' | 'plugincode' | 'locked' | 'properties' | 'disabled'
    }
    bani684VersionxResources: {
      filtering: 'AND' | 'OR' | 'NOT' | 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'title' | 'context_key' | 'class' | 'content' | 'fields' | 'tvs'
      ordering: 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'title' | 'context_key' | 'class' | 'content' | 'fields' | 'tvs'
    }
    bani684VersionxSnippets: {
      filtering: 'AND' | 'OR' | 'NOT' | 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'name' | 'description' | 'category' | 'snippet' | 'locked' | 'properties'
      ordering: 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'name' | 'description' | 'category' | 'snippet' | 'locked' | 'properties'
    }
    bani684VersionxTemplates: {
      filtering: 'AND' | 'OR' | 'NOT' | 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'templatename' | 'description' | 'category' | 'content' | 'locked' | 'properties'
      ordering: 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'templatename' | 'description' | 'category' | 'content' | 'locked' | 'properties'
    }
    bani684VersionxTemplatevars: {
      filtering: 'AND' | 'OR' | 'NOT' | 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'type' | 'name' | 'caption' | 'description' | 'category' | 'locked' | 'rank' | 'display' | 'default_text' | 'properties' | 'input_properties' | 'output_properties'
      ordering: 'version_id' | 'content_id' | 'saved' | 'user' | 'mode' | 'marked' | 'type' | 'name' | 'caption' | 'description' | 'category' | 'locked' | 'rank' | 'display' | 'default_text' | 'properties' | 'input_properties' | 'output_properties'
    }
    bani684Visitorss: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'date' | 'url' | 'referer' | 'userAgent' | 'user_id' | 'ip' | 'status' | 'cookie'
      ordering: 'id' | 'date' | 'url' | 'referer' | 'userAgent' | 'user_id' | 'ip' | 'status' | 'cookie'
    }
    bani684Workspacess: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'path' | 'created' | 'active' | 'attributes'
      ordering: 'id' | 'name' | 'path' | 'created' | 'active' | 'attributes'
    }
  },
  bani684_access_actiondom: {

  }
  bani684_access_actions: {

  }
  bani684_access_category: {

  }
  bani684_access_context: {

  }
  bani684_access_elements: {

  }
  bani684_access_media_source: {

  }
  bani684_access_menus: {

  }
  bani684_access_namespace: {

  }
  bani684_access_permissions: {

  }
  bani684_access_policies: {

  }
  bani684_access_policy_templates: {

  }
  bani684_access_policy_template_groups: {

  }
  bani684_access_resources: {

  }
  bani684_access_resource_groups: {

  }
  bani684_access_templatevars: {

  }
  bani684_actiondom: {

  }
  bani684_actions: {

  }
  bani684_actions_fields: {

  }
  bani684_active_users: {

  }
  bani684_categories: {

  }
  bani684_categories_closure: {

  }
  bani684_class_map: {

  }
  bani684_cmpgenerator: {

  }
  bani684_content_type: {

  }
  bani684_context: {

  }
  bani684_context_resource: {

  }
  bani684_context_setting: {

  }
  bani684_dashboard: {

  }
  bani684_dashboard_widget: {

  }
  bani684_dashboard_widget_placement: {

  }
  bani684_documentgroup_names: {

  }
  bani684_document_groups: {

  }
  bani684_edit_versions: {

  }
  bani684_element_property_sets: {

  }
  bani684_extension_packages: {

  }
  bani684_fc_profiles: {

  }
  bani684_fc_profiles_usergroups: {

  }
  bani684_fc_sets: {

  }
  bani684_gallery_albums: {

  }
  bani684_gallery_album_contexts: {

  }
  bani684_gallery_album_items: {

  }
  bani684_gallery_items: {

  }
  bani684_gallery_tags: {

  }
  bani684_lexicon_entries: {

  }
  bani684_manager_log: {

  }
  bani684_media_sources: {

  }
  bani684_media_sources_contexts: {

  }
  bani684_media_sources_elements: {

  }
  bani684_membergroup_names: {

  }
  bani684_membergroup_template: {

  }
  bani684_member_groups: {

  }
  bani684_menus: {

  }
  bani684_migx_configs: {

  }
  bani684_migx_config_elements: {

  }
  bani684_migx_elements: {

  }
  bani684_migx_formtabs: {

  }
  bani684_migx_formtab_fields: {

  }
  bani684_modhybridauth_providers: {

  }
  bani684_modhybridauth_user_profile: {

  }
  bani684_modsearch_indexes: {

  }
  bani684_modxsdk_package: {

  }
  bani684_modxsdk_packagesource: {

  }
  bani684_modxsdk_package_vehicle: {

  }
  bani684_modxsdk_project: {

  }
  bani684_modxsdk_project_package: {

  }
  bani684_modxsdk_vehicle: {

  }
  bani684_modxsite_cities: {

  }
  bani684_modxsite_companies: {

  }
  bani684_modxsite_countries: {

  }
  bani684_monitor_requests: {

  }
  bani684_monitor_request_items: {

  }
  bani684_namespaces: {

  }
  bani684_packman_profile: {

  }
  bani684_property_set: {

  }
  bani684_redirects: {

  }
  bani684_register_messages: {

  }
  bani684_register_queues: {

  }
  bani684_register_topics: {

  }
  bani684_search_stat: {

  }
  bani684_session: {

  }
  bani684_site_content: {
    TemplateVarValues: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'tmplvarid' | 'contentid' | 'value' | 'Resource'
      ordering: 'id' | 'tmplvarid' | 'contentid' | 'value' | 'Resource'
    }
  }
  bani684_site_htmlsnippets: {

  }
  bani684_site_plugins: {

  }
  bani684_site_plugin_events: {

  }
  bani684_site_snippets: {

  }
  bani684_site_templates: {

  }
  bani684_site_tmplvars: {

  }
  bani684_site_tmplvar_access: {

  }
  bani684_site_tmplvar_contentvalues: {

  }
  bani684_site_tmplvar_templates: {

  }
  bani684_society_blog_attributes: {

  }
  bani684_society_blog_topic: {

  }
  bani684_society_comments: {

  }
  bani684_society_email_messages: {

  }
  bani684_society_notice_types: {

  }
  bani684_society_notice_users: {

  }
  bani684_society_subscribers: {

  }
  bani684_society_threads: {

  }
  bani684_society_topic_attributes: {

  }
  bani684_society_topic_tags: {

  }
  bani684_society_user_attributes: {

  }
  bani684_society_votes: {

  }
  bani684_system_eventnames: {

  }
  bani684_system_settings: {

  }
  bani684_transport_packages: {

  }
  bani684_transport_providers: {

  }
  bani684_users: {

  }
  bani684_user_attributes: {

  }
  bani684_user_group_roles: {

  }
  bani684_user_group_settings: {

  }
  bani684_user_messages: {

  }
  bani684_user_settings: {

  }
  bani684_versionx_chunk: {

  }
  bani684_versionx_plugin: {

  }
  bani684_versionx_resource: {

  }
  bani684_versionx_snippet: {

  }
  bani684_versionx_template: {

  }
  bani684_versionx_templatevar: {

  }
  bani684_visitors: {

  }
  bani684_workspaces: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    bani684AccessActiondom: 'bani684_access_actiondom'
    bani684AccessActiondoms: 'bani684_access_actiondom'
    bani684AccessActions: 'bani684_access_actions'
    bani684AccessActionss: 'bani684_access_actions'
    bani684AccessCategory: 'bani684_access_category'
    bani684AccessCategories: 'bani684_access_category'
    bani684AccessContext: 'bani684_access_context'
    bani684AccessContexts: 'bani684_access_context'
    bani684AccessElements: 'bani684_access_elements'
    bani684AccessElementss: 'bani684_access_elements'
    bani684AccessMediaSource: 'bani684_access_media_source'
    bani684AccessMediaSources: 'bani684_access_media_source'
    bani684AccessMenus: 'bani684_access_menus'
    bani684AccessMenuss: 'bani684_access_menus'
    bani684AccessNamespace: 'bani684_access_namespace'
    bani684AccessNamespaces: 'bani684_access_namespace'
    bani684AccessPermissions: 'bani684_access_permissions'
    bani684AccessPermissionss: 'bani684_access_permissions'
    bani684AccessPolicies: 'bani684_access_policies'
    bani684AccessPoliciess: 'bani684_access_policies'
    bani684AccessPolicyTemplates: 'bani684_access_policy_templates'
    bani684AccessPolicyTemplatess: 'bani684_access_policy_templates'
    bani684AccessPolicyTemplateGroups: 'bani684_access_policy_template_groups'
    bani684AccessPolicyTemplateGroupss: 'bani684_access_policy_template_groups'
    bani684AccessResources: 'bani684_access_resources'
    bani684AccessResourcess: 'bani684_access_resources'
    bani684AccessResourceGroups: 'bani684_access_resource_groups'
    bani684AccessResourceGroupss: 'bani684_access_resource_groups'
    bani684AccessTemplatevars: 'bani684_access_templatevars'
    bani684AccessTemplatevarss: 'bani684_access_templatevars'
    bani684Actiondom: 'bani684_actiondom'
    bani684Actiondoms: 'bani684_actiondom'
    bani684Actions: 'bani684_actions'
    bani684Actionss: 'bani684_actions'
    bani684ActionsFields: 'bani684_actions_fields'
    bani684ActionsFieldss: 'bani684_actions_fields'
    bani684ActiveUsers: 'bani684_active_users'
    bani684ActiveUserss: 'bani684_active_users'
    bani684Categories: 'bani684_categories'
    bani684Categoriess: 'bani684_categories'
    bani684CategoriesClosure: 'bani684_categories_closure'
    bani684CategoriesClosures: 'bani684_categories_closure'
    bani684ClassMap: 'bani684_class_map'
    bani684ClassMaps: 'bani684_class_map'
    bani684Cmpgenerator: 'bani684_cmpgenerator'
    bani684Cmpgenerators: 'bani684_cmpgenerator'
    bani684ContentType: 'bani684_content_type'
    bani684ContentTypes: 'bani684_content_type'
    bani684Context: 'bani684_context'
    bani684Contexts: 'bani684_context'
    bani684ContextResource: 'bani684_context_resource'
    bani684ContextResources: 'bani684_context_resource'
    bani684ContextSetting: 'bani684_context_setting'
    bani684ContextSettings: 'bani684_context_setting'
    bani684Dashboard: 'bani684_dashboard'
    bani684Dashboards: 'bani684_dashboard'
    bani684DashboardWidget: 'bani684_dashboard_widget'
    bani684DashboardWidgets: 'bani684_dashboard_widget'
    bani684DashboardWidgetPlacement: 'bani684_dashboard_widget_placement'
    bani684DashboardWidgetPlacements: 'bani684_dashboard_widget_placement'
    bani684DocumentgroupNames: 'bani684_documentgroup_names'
    bani684DocumentgroupNamess: 'bani684_documentgroup_names'
    bani684DocumentGroups: 'bani684_document_groups'
    bani684DocumentGroupss: 'bani684_document_groups'
    bani684EditVersions: 'bani684_edit_versions'
    bani684EditVersionss: 'bani684_edit_versions'
    bani684ElementPropertySets: 'bani684_element_property_sets'
    bani684ElementPropertySetss: 'bani684_element_property_sets'
    bani684ExtensionPackages: 'bani684_extension_packages'
    bani684ExtensionPackagess: 'bani684_extension_packages'
    bani684FcProfiles: 'bani684_fc_profiles'
    bani684FcProfiless: 'bani684_fc_profiles'
    bani684FcProfilesUsergroups: 'bani684_fc_profiles_usergroups'
    bani684FcProfilesUsergroupss: 'bani684_fc_profiles_usergroups'
    bani684FcSets: 'bani684_fc_sets'
    bani684FcSetss: 'bani684_fc_sets'
    bani684GalleryAlbums: 'bani684_gallery_albums'
    bani684GalleryAlbumss: 'bani684_gallery_albums'
    bani684GalleryAlbumContexts: 'bani684_gallery_album_contexts'
    bani684GalleryAlbumContextss: 'bani684_gallery_album_contexts'
    bani684GalleryAlbumItems: 'bani684_gallery_album_items'
    bani684GalleryAlbumItemss: 'bani684_gallery_album_items'
    bani684GalleryItems: 'bani684_gallery_items'
    bani684GalleryItemss: 'bani684_gallery_items'
    bani684GalleryTags: 'bani684_gallery_tags'
    bani684GalleryTagss: 'bani684_gallery_tags'
    bani684LexiconEntries: 'bani684_lexicon_entries'
    bani684LexiconEntriess: 'bani684_lexicon_entries'
    bani684ManagerLog: 'bani684_manager_log'
    bani684ManagerLogs: 'bani684_manager_log'
    bani684MediaSources: 'bani684_media_sources'
    bani684MediaSourcess: 'bani684_media_sources'
    bani684MediaSourcesContexts: 'bani684_media_sources_contexts'
    bani684MediaSourcesContextss: 'bani684_media_sources_contexts'
    bani684MediaSourcesElements: 'bani684_media_sources_elements'
    bani684MediaSourcesElementss: 'bani684_media_sources_elements'
    bani684MembergroupNames: 'bani684_membergroup_names'
    bani684MembergroupNamess: 'bani684_membergroup_names'
    bani684MembergroupTemplate: 'bani684_membergroup_template'
    bani684MembergroupTemplates: 'bani684_membergroup_template'
    bani684MemberGroups: 'bani684_member_groups'
    bani684MemberGroupss: 'bani684_member_groups'
    bani684Menus: 'bani684_menus'
    bani684Menuss: 'bani684_menus'
    bani684MigxConfigs: 'bani684_migx_configs'
    bani684MigxConfigss: 'bani684_migx_configs'
    bani684MigxConfigElements: 'bani684_migx_config_elements'
    bani684MigxConfigElementss: 'bani684_migx_config_elements'
    bani684MigxElements: 'bani684_migx_elements'
    bani684MigxElementss: 'bani684_migx_elements'
    bani684MigxFormtabs: 'bani684_migx_formtabs'
    bani684MigxFormtabss: 'bani684_migx_formtabs'
    bani684MigxFormtabFields: 'bani684_migx_formtab_fields'
    bani684MigxFormtabFieldss: 'bani684_migx_formtab_fields'
    bani684ModhybridauthProviders: 'bani684_modhybridauth_providers'
    bani684ModhybridauthProviderss: 'bani684_modhybridauth_providers'
    bani684ModhybridauthUserProfile: 'bani684_modhybridauth_user_profile'
    bani684ModhybridauthUserProfiles: 'bani684_modhybridauth_user_profile'
    bani684ModsearchIndexes: 'bani684_modsearch_indexes'
    bani684ModsearchIndexess: 'bani684_modsearch_indexes'
    bani684ModxsdkPackage: 'bani684_modxsdk_package'
    bani684ModxsdkPackages: 'bani684_modxsdk_package'
    bani684ModxsdkPackagesource: 'bani684_modxsdk_packagesource'
    bani684ModxsdkPackagesources: 'bani684_modxsdk_packagesource'
    bani684ModxsdkPackageVehicle: 'bani684_modxsdk_package_vehicle'
    bani684ModxsdkPackageVehicles: 'bani684_modxsdk_package_vehicle'
    bani684ModxsdkProject: 'bani684_modxsdk_project'
    bani684ModxsdkProjects: 'bani684_modxsdk_project'
    bani684ModxsdkProjectPackage: 'bani684_modxsdk_project_package'
    bani684ModxsdkProjectPackages: 'bani684_modxsdk_project_package'
    bani684ModxsdkVehicle: 'bani684_modxsdk_vehicle'
    bani684ModxsdkVehicles: 'bani684_modxsdk_vehicle'
    bani684ModxsiteCities: 'bani684_modxsite_cities'
    bani684ModxsiteCitiess: 'bani684_modxsite_cities'
    bani684ModxsiteCompanies: 'bani684_modxsite_companies'
    bani684ModxsiteCompaniess: 'bani684_modxsite_companies'
    bani684ModxsiteCountries: 'bani684_modxsite_countries'
    bani684ModxsiteCountriess: 'bani684_modxsite_countries'
    bani684MonitorRequests: 'bani684_monitor_requests'
    bani684MonitorRequestss: 'bani684_monitor_requests'
    bani684MonitorRequestItems: 'bani684_monitor_request_items'
    bani684MonitorRequestItemss: 'bani684_monitor_request_items'
    bani684Namespaces: 'bani684_namespaces'
    bani684Namespacess: 'bani684_namespaces'
    bani684PackmanProfile: 'bani684_packman_profile'
    bani684PackmanProfiles: 'bani684_packman_profile'
    bani684PropertySet: 'bani684_property_set'
    bani684PropertySets: 'bani684_property_set'
    bani684Redirects: 'bani684_redirects'
    bani684Redirectss: 'bani684_redirects'
    bani684RegisterMessages: 'bani684_register_messages'
    bani684RegisterMessagess: 'bani684_register_messages'
    bani684RegisterQueues: 'bani684_register_queues'
    bani684RegisterQueuess: 'bani684_register_queues'
    bani684RegisterTopics: 'bani684_register_topics'
    bani684RegisterTopicss: 'bani684_register_topics'
    bani684SearchStat: 'bani684_search_stat'
    bani684SearchStats: 'bani684_search_stat'
    bani684Session: 'bani684_session'
    bani684Sessions: 'bani684_session'
    bani684SiteContent: 'bani684_site_content'
    bani684SiteContents: 'bani684_site_content'
    bani684SiteHtmlsnippets: 'bani684_site_htmlsnippets'
    bani684SiteHtmlsnippetss: 'bani684_site_htmlsnippets'
    bani684SitePlugins: 'bani684_site_plugins'
    bani684SitePluginss: 'bani684_site_plugins'
    bani684SitePluginEvents: 'bani684_site_plugin_events'
    bani684SitePluginEventss: 'bani684_site_plugin_events'
    bani684SiteSnippets: 'bani684_site_snippets'
    bani684SiteSnippetss: 'bani684_site_snippets'
    bani684SiteTemplates: 'bani684_site_templates'
    bani684SiteTemplatess: 'bani684_site_templates'
    bani684SiteTmplvars: 'bani684_site_tmplvars'
    bani684SiteTmplvarss: 'bani684_site_tmplvars'
    bani684SiteTmplvarAccess: 'bani684_site_tmplvar_access'
    bani684SiteTmplvarAccesses: 'bani684_site_tmplvar_access'
    bani684SiteTmplvarContentvalues: 'bani684_site_tmplvar_contentvalues'
    bani684SiteTmplvarContentvaluess: 'bani684_site_tmplvar_contentvalues'
    bani684SiteTmplvarTemplates: 'bani684_site_tmplvar_templates'
    bani684SiteTmplvarTemplatess: 'bani684_site_tmplvar_templates'
    bani684SocietyBlogAttributes: 'bani684_society_blog_attributes'
    bani684SocietyBlogAttributess: 'bani684_society_blog_attributes'
    bani684SocietyBlogTopic: 'bani684_society_blog_topic'
    bani684SocietyBlogTopics: 'bani684_society_blog_topic'
    bani684SocietyComments: 'bani684_society_comments'
    bani684SocietyCommentss: 'bani684_society_comments'
    bani684SocietyEmailMessages: 'bani684_society_email_messages'
    bani684SocietyEmailMessagess: 'bani684_society_email_messages'
    bani684SocietyNoticeTypes: 'bani684_society_notice_types'
    bani684SocietyNoticeTypess: 'bani684_society_notice_types'
    bani684SocietyNoticeUsers: 'bani684_society_notice_users'
    bani684SocietyNoticeUserss: 'bani684_society_notice_users'
    bani684SocietySubscribers: 'bani684_society_subscribers'
    bani684SocietySubscriberss: 'bani684_society_subscribers'
    bani684SocietyThreads: 'bani684_society_threads'
    bani684SocietyThreadss: 'bani684_society_threads'
    bani684SocietyTopicAttributes: 'bani684_society_topic_attributes'
    bani684SocietyTopicAttributess: 'bani684_society_topic_attributes'
    bani684SocietyTopicTags: 'bani684_society_topic_tags'
    bani684SocietyTopicTagss: 'bani684_society_topic_tags'
    bani684SocietyUserAttributes: 'bani684_society_user_attributes'
    bani684SocietyUserAttributess: 'bani684_society_user_attributes'
    bani684SocietyVotes: 'bani684_society_votes'
    bani684SocietyVotess: 'bani684_society_votes'
    bani684SystemEventnames: 'bani684_system_eventnames'
    bani684SystemEventnamess: 'bani684_system_eventnames'
    bani684SystemSettings: 'bani684_system_settings'
    bani684SystemSettingss: 'bani684_system_settings'
    bani684TransportPackages: 'bani684_transport_packages'
    bani684TransportPackagess: 'bani684_transport_packages'
    bani684TransportProviders: 'bani684_transport_providers'
    bani684TransportProviderss: 'bani684_transport_providers'
    bani684Users: 'bani684_users'
    bani684Userss: 'bani684_users'
    bani684UserAttributes: 'bani684_user_attributes'
    bani684UserAttributess: 'bani684_user_attributes'
    bani684UserGroupRoles: 'bani684_user_group_roles'
    bani684UserGroupRoless: 'bani684_user_group_roles'
    bani684UserGroupSettings: 'bani684_user_group_settings'
    bani684UserGroupSettingss: 'bani684_user_group_settings'
    bani684UserMessages: 'bani684_user_messages'
    bani684UserMessagess: 'bani684_user_messages'
    bani684UserSettings: 'bani684_user_settings'
    bani684UserSettingss: 'bani684_user_settings'
    bani684VersionxChunk: 'bani684_versionx_chunk'
    bani684VersionxChunks: 'bani684_versionx_chunk'
    bani684VersionxPlugin: 'bani684_versionx_plugin'
    bani684VersionxPlugins: 'bani684_versionx_plugin'
    bani684VersionxResource: 'bani684_versionx_resource'
    bani684VersionxResources: 'bani684_versionx_resource'
    bani684VersionxSnippet: 'bani684_versionx_snippet'
    bani684VersionxSnippets: 'bani684_versionx_snippet'
    bani684VersionxTemplate: 'bani684_versionx_template'
    bani684VersionxTemplates: 'bani684_versionx_template'
    bani684VersionxTemplatevar: 'bani684_versionx_templatevar'
    bani684VersionxTemplatevars: 'bani684_versionx_templatevar'
    bani684Visitors: 'bani684_visitors'
    bani684Visitorss: 'bani684_visitors'
    bani684Workspaces: 'bani684_workspaces'
    bani684Workspacess: 'bani684_workspaces'
  },
  Mutation: {
    createOnebani684_access_actiondom: 'bani684_access_actiondom'
    updateOnebani684_access_actiondom: 'bani684_access_actiondom'
    updateManybani684_access_actiondom: 'AffectedRowsOutput'
    deleteOnebani684_access_actiondom: 'bani684_access_actiondom'
    deleteManybani684_access_actiondom: 'AffectedRowsOutput'
    upsertOnebani684_access_actiondom: 'bani684_access_actiondom'
    createOnebani684_access_actions: 'bani684_access_actions'
    updateOnebani684_access_actions: 'bani684_access_actions'
    updateManybani684_access_actions: 'AffectedRowsOutput'
    deleteOnebani684_access_actions: 'bani684_access_actions'
    deleteManybani684_access_actions: 'AffectedRowsOutput'
    upsertOnebani684_access_actions: 'bani684_access_actions'
    createOnebani684_access_category: 'bani684_access_category'
    updateOnebani684_access_category: 'bani684_access_category'
    updateManybani684_access_category: 'AffectedRowsOutput'
    deleteOnebani684_access_category: 'bani684_access_category'
    deleteManybani684_access_category: 'AffectedRowsOutput'
    upsertOnebani684_access_category: 'bani684_access_category'
    createOnebani684_access_context: 'bani684_access_context'
    updateOnebani684_access_context: 'bani684_access_context'
    updateManybani684_access_context: 'AffectedRowsOutput'
    deleteOnebani684_access_context: 'bani684_access_context'
    deleteManybani684_access_context: 'AffectedRowsOutput'
    upsertOnebani684_access_context: 'bani684_access_context'
    createOnebani684_access_elements: 'bani684_access_elements'
    updateOnebani684_access_elements: 'bani684_access_elements'
    updateManybani684_access_elements: 'AffectedRowsOutput'
    deleteOnebani684_access_elements: 'bani684_access_elements'
    deleteManybani684_access_elements: 'AffectedRowsOutput'
    upsertOnebani684_access_elements: 'bani684_access_elements'
    createOnebani684_access_media_source: 'bani684_access_media_source'
    updateOnebani684_access_media_source: 'bani684_access_media_source'
    updateManybani684_access_media_source: 'AffectedRowsOutput'
    deleteOnebani684_access_media_source: 'bani684_access_media_source'
    deleteManybani684_access_media_source: 'AffectedRowsOutput'
    upsertOnebani684_access_media_source: 'bani684_access_media_source'
    createOnebani684_access_menus: 'bani684_access_menus'
    updateOnebani684_access_menus: 'bani684_access_menus'
    updateManybani684_access_menus: 'AffectedRowsOutput'
    deleteOnebani684_access_menus: 'bani684_access_menus'
    deleteManybani684_access_menus: 'AffectedRowsOutput'
    upsertOnebani684_access_menus: 'bani684_access_menus'
    createOnebani684_access_namespace: 'bani684_access_namespace'
    updateOnebani684_access_namespace: 'bani684_access_namespace'
    updateManybani684_access_namespace: 'AffectedRowsOutput'
    deleteOnebani684_access_namespace: 'bani684_access_namespace'
    deleteManybani684_access_namespace: 'AffectedRowsOutput'
    upsertOnebani684_access_namespace: 'bani684_access_namespace'
    createOnebani684_access_permissions: 'bani684_access_permissions'
    updateOnebani684_access_permissions: 'bani684_access_permissions'
    updateManybani684_access_permissions: 'AffectedRowsOutput'
    deleteOnebani684_access_permissions: 'bani684_access_permissions'
    deleteManybani684_access_permissions: 'AffectedRowsOutput'
    upsertOnebani684_access_permissions: 'bani684_access_permissions'
    createOnebani684_access_policies: 'bani684_access_policies'
    updateOnebani684_access_policies: 'bani684_access_policies'
    updateManybani684_access_policies: 'AffectedRowsOutput'
    deleteOnebani684_access_policies: 'bani684_access_policies'
    deleteManybani684_access_policies: 'AffectedRowsOutput'
    upsertOnebani684_access_policies: 'bani684_access_policies'
    createOnebani684_access_policy_templates: 'bani684_access_policy_templates'
    updateOnebani684_access_policy_templates: 'bani684_access_policy_templates'
    updateManybani684_access_policy_templates: 'AffectedRowsOutput'
    deleteOnebani684_access_policy_templates: 'bani684_access_policy_templates'
    deleteManybani684_access_policy_templates: 'AffectedRowsOutput'
    upsertOnebani684_access_policy_templates: 'bani684_access_policy_templates'
    createOnebani684_access_policy_template_groups: 'bani684_access_policy_template_groups'
    updateOnebani684_access_policy_template_groups: 'bani684_access_policy_template_groups'
    updateManybani684_access_policy_template_groups: 'AffectedRowsOutput'
    deleteOnebani684_access_policy_template_groups: 'bani684_access_policy_template_groups'
    deleteManybani684_access_policy_template_groups: 'AffectedRowsOutput'
    upsertOnebani684_access_policy_template_groups: 'bani684_access_policy_template_groups'
    createOnebani684_access_resources: 'bani684_access_resources'
    updateOnebani684_access_resources: 'bani684_access_resources'
    updateManybani684_access_resources: 'AffectedRowsOutput'
    deleteOnebani684_access_resources: 'bani684_access_resources'
    deleteManybani684_access_resources: 'AffectedRowsOutput'
    upsertOnebani684_access_resources: 'bani684_access_resources'
    createOnebani684_access_resource_groups: 'bani684_access_resource_groups'
    updateOnebani684_access_resource_groups: 'bani684_access_resource_groups'
    updateManybani684_access_resource_groups: 'AffectedRowsOutput'
    deleteOnebani684_access_resource_groups: 'bani684_access_resource_groups'
    deleteManybani684_access_resource_groups: 'AffectedRowsOutput'
    upsertOnebani684_access_resource_groups: 'bani684_access_resource_groups'
    createOnebani684_access_templatevars: 'bani684_access_templatevars'
    updateOnebani684_access_templatevars: 'bani684_access_templatevars'
    updateManybani684_access_templatevars: 'AffectedRowsOutput'
    deleteOnebani684_access_templatevars: 'bani684_access_templatevars'
    deleteManybani684_access_templatevars: 'AffectedRowsOutput'
    upsertOnebani684_access_templatevars: 'bani684_access_templatevars'
    createOnebani684_actiondom: 'bani684_actiondom'
    updateOnebani684_actiondom: 'bani684_actiondom'
    updateManybani684_actiondom: 'AffectedRowsOutput'
    deleteOnebani684_actiondom: 'bani684_actiondom'
    deleteManybani684_actiondom: 'AffectedRowsOutput'
    upsertOnebani684_actiondom: 'bani684_actiondom'
    createOnebani684_actions: 'bani684_actions'
    updateOnebani684_actions: 'bani684_actions'
    updateManybani684_actions: 'AffectedRowsOutput'
    deleteOnebani684_actions: 'bani684_actions'
    deleteManybani684_actions: 'AffectedRowsOutput'
    upsertOnebani684_actions: 'bani684_actions'
    createOnebani684_actions_fields: 'bani684_actions_fields'
    updateOnebani684_actions_fields: 'bani684_actions_fields'
    updateManybani684_actions_fields: 'AffectedRowsOutput'
    deleteOnebani684_actions_fields: 'bani684_actions_fields'
    deleteManybani684_actions_fields: 'AffectedRowsOutput'
    upsertOnebani684_actions_fields: 'bani684_actions_fields'
    createOnebani684_active_users: 'bani684_active_users'
    updateOnebani684_active_users: 'bani684_active_users'
    updateManybani684_active_users: 'AffectedRowsOutput'
    deleteOnebani684_active_users: 'bani684_active_users'
    deleteManybani684_active_users: 'AffectedRowsOutput'
    upsertOnebani684_active_users: 'bani684_active_users'
    createOnebani684_categories: 'bani684_categories'
    updateOnebani684_categories: 'bani684_categories'
    updateManybani684_categories: 'AffectedRowsOutput'
    deleteOnebani684_categories: 'bani684_categories'
    deleteManybani684_categories: 'AffectedRowsOutput'
    upsertOnebani684_categories: 'bani684_categories'
    createOnebani684_categories_closure: 'bani684_categories_closure'
    updateOnebani684_categories_closure: 'bani684_categories_closure'
    updateManybani684_categories_closure: 'AffectedRowsOutput'
    deleteOnebani684_categories_closure: 'bani684_categories_closure'
    deleteManybani684_categories_closure: 'AffectedRowsOutput'
    upsertOnebani684_categories_closure: 'bani684_categories_closure'
    createOnebani684_class_map: 'bani684_class_map'
    updateOnebani684_class_map: 'bani684_class_map'
    updateManybani684_class_map: 'AffectedRowsOutput'
    deleteOnebani684_class_map: 'bani684_class_map'
    deleteManybani684_class_map: 'AffectedRowsOutput'
    upsertOnebani684_class_map: 'bani684_class_map'
    createOnebani684_cmpgenerator: 'bani684_cmpgenerator'
    updateOnebani684_cmpgenerator: 'bani684_cmpgenerator'
    updateManybani684_cmpgenerator: 'AffectedRowsOutput'
    deleteOnebani684_cmpgenerator: 'bani684_cmpgenerator'
    deleteManybani684_cmpgenerator: 'AffectedRowsOutput'
    upsertOnebani684_cmpgenerator: 'bani684_cmpgenerator'
    createOnebani684_content_type: 'bani684_content_type'
    updateOnebani684_content_type: 'bani684_content_type'
    updateManybani684_content_type: 'AffectedRowsOutput'
    deleteOnebani684_content_type: 'bani684_content_type'
    deleteManybani684_content_type: 'AffectedRowsOutput'
    upsertOnebani684_content_type: 'bani684_content_type'
    createOnebani684_context: 'bani684_context'
    updateOnebani684_context: 'bani684_context'
    updateManybani684_context: 'AffectedRowsOutput'
    deleteOnebani684_context: 'bani684_context'
    deleteManybani684_context: 'AffectedRowsOutput'
    upsertOnebani684_context: 'bani684_context'
    createOnebani684_context_resource: 'bani684_context_resource'
    updateOnebani684_context_resource: 'bani684_context_resource'
    updateManybani684_context_resource: 'AffectedRowsOutput'
    deleteOnebani684_context_resource: 'bani684_context_resource'
    deleteManybani684_context_resource: 'AffectedRowsOutput'
    upsertOnebani684_context_resource: 'bani684_context_resource'
    createOnebani684_context_setting: 'bani684_context_setting'
    updateOnebani684_context_setting: 'bani684_context_setting'
    updateManybani684_context_setting: 'AffectedRowsOutput'
    deleteOnebani684_context_setting: 'bani684_context_setting'
    deleteManybani684_context_setting: 'AffectedRowsOutput'
    upsertOnebani684_context_setting: 'bani684_context_setting'
    createOnebani684_dashboard: 'bani684_dashboard'
    updateOnebani684_dashboard: 'bani684_dashboard'
    updateManybani684_dashboard: 'AffectedRowsOutput'
    deleteOnebani684_dashboard: 'bani684_dashboard'
    deleteManybani684_dashboard: 'AffectedRowsOutput'
    upsertOnebani684_dashboard: 'bani684_dashboard'
    createOnebani684_dashboard_widget: 'bani684_dashboard_widget'
    updateOnebani684_dashboard_widget: 'bani684_dashboard_widget'
    updateManybani684_dashboard_widget: 'AffectedRowsOutput'
    deleteOnebani684_dashboard_widget: 'bani684_dashboard_widget'
    deleteManybani684_dashboard_widget: 'AffectedRowsOutput'
    upsertOnebani684_dashboard_widget: 'bani684_dashboard_widget'
    createOnebani684_dashboard_widget_placement: 'bani684_dashboard_widget_placement'
    updateOnebani684_dashboard_widget_placement: 'bani684_dashboard_widget_placement'
    updateManybani684_dashboard_widget_placement: 'AffectedRowsOutput'
    deleteOnebani684_dashboard_widget_placement: 'bani684_dashboard_widget_placement'
    deleteManybani684_dashboard_widget_placement: 'AffectedRowsOutput'
    upsertOnebani684_dashboard_widget_placement: 'bani684_dashboard_widget_placement'
    createOnebani684_documentgroup_names: 'bani684_documentgroup_names'
    updateOnebani684_documentgroup_names: 'bani684_documentgroup_names'
    updateManybani684_documentgroup_names: 'AffectedRowsOutput'
    deleteOnebani684_documentgroup_names: 'bani684_documentgroup_names'
    deleteManybani684_documentgroup_names: 'AffectedRowsOutput'
    upsertOnebani684_documentgroup_names: 'bani684_documentgroup_names'
    createOnebani684_document_groups: 'bani684_document_groups'
    updateOnebani684_document_groups: 'bani684_document_groups'
    updateManybani684_document_groups: 'AffectedRowsOutput'
    deleteOnebani684_document_groups: 'bani684_document_groups'
    deleteManybani684_document_groups: 'AffectedRowsOutput'
    upsertOnebani684_document_groups: 'bani684_document_groups'
    createOnebani684_edit_versions: 'bani684_edit_versions'
    updateOnebani684_edit_versions: 'bani684_edit_versions'
    updateManybani684_edit_versions: 'AffectedRowsOutput'
    deleteOnebani684_edit_versions: 'bani684_edit_versions'
    deleteManybani684_edit_versions: 'AffectedRowsOutput'
    upsertOnebani684_edit_versions: 'bani684_edit_versions'
    createOnebani684_element_property_sets: 'bani684_element_property_sets'
    updateOnebani684_element_property_sets: 'bani684_element_property_sets'
    updateManybani684_element_property_sets: 'AffectedRowsOutput'
    deleteOnebani684_element_property_sets: 'bani684_element_property_sets'
    deleteManybani684_element_property_sets: 'AffectedRowsOutput'
    upsertOnebani684_element_property_sets: 'bani684_element_property_sets'
    createOnebani684_extension_packages: 'bani684_extension_packages'
    updateOnebani684_extension_packages: 'bani684_extension_packages'
    updateManybani684_extension_packages: 'AffectedRowsOutput'
    deleteOnebani684_extension_packages: 'bani684_extension_packages'
    deleteManybani684_extension_packages: 'AffectedRowsOutput'
    upsertOnebani684_extension_packages: 'bani684_extension_packages'
    createOnebani684_fc_profiles: 'bani684_fc_profiles'
    updateOnebani684_fc_profiles: 'bani684_fc_profiles'
    updateManybani684_fc_profiles: 'AffectedRowsOutput'
    deleteOnebani684_fc_profiles: 'bani684_fc_profiles'
    deleteManybani684_fc_profiles: 'AffectedRowsOutput'
    upsertOnebani684_fc_profiles: 'bani684_fc_profiles'
    createOnebani684_fc_profiles_usergroups: 'bani684_fc_profiles_usergroups'
    updateOnebani684_fc_profiles_usergroups: 'bani684_fc_profiles_usergroups'
    updateManybani684_fc_profiles_usergroups: 'AffectedRowsOutput'
    deleteOnebani684_fc_profiles_usergroups: 'bani684_fc_profiles_usergroups'
    deleteManybani684_fc_profiles_usergroups: 'AffectedRowsOutput'
    upsertOnebani684_fc_profiles_usergroups: 'bani684_fc_profiles_usergroups'
    createOnebani684_fc_sets: 'bani684_fc_sets'
    updateOnebani684_fc_sets: 'bani684_fc_sets'
    updateManybani684_fc_sets: 'AffectedRowsOutput'
    deleteOnebani684_fc_sets: 'bani684_fc_sets'
    deleteManybani684_fc_sets: 'AffectedRowsOutput'
    upsertOnebani684_fc_sets: 'bani684_fc_sets'
    createOnebani684_gallery_albums: 'bani684_gallery_albums'
    updateOnebani684_gallery_albums: 'bani684_gallery_albums'
    updateManybani684_gallery_albums: 'AffectedRowsOutput'
    deleteOnebani684_gallery_albums: 'bani684_gallery_albums'
    deleteManybani684_gallery_albums: 'AffectedRowsOutput'
    upsertOnebani684_gallery_albums: 'bani684_gallery_albums'
    createOnebani684_gallery_album_contexts: 'bani684_gallery_album_contexts'
    updateOnebani684_gallery_album_contexts: 'bani684_gallery_album_contexts'
    updateManybani684_gallery_album_contexts: 'AffectedRowsOutput'
    deleteOnebani684_gallery_album_contexts: 'bani684_gallery_album_contexts'
    deleteManybani684_gallery_album_contexts: 'AffectedRowsOutput'
    upsertOnebani684_gallery_album_contexts: 'bani684_gallery_album_contexts'
    createOnebani684_gallery_album_items: 'bani684_gallery_album_items'
    updateOnebani684_gallery_album_items: 'bani684_gallery_album_items'
    updateManybani684_gallery_album_items: 'AffectedRowsOutput'
    deleteOnebani684_gallery_album_items: 'bani684_gallery_album_items'
    deleteManybani684_gallery_album_items: 'AffectedRowsOutput'
    upsertOnebani684_gallery_album_items: 'bani684_gallery_album_items'
    createOnebani684_gallery_items: 'bani684_gallery_items'
    updateOnebani684_gallery_items: 'bani684_gallery_items'
    updateManybani684_gallery_items: 'AffectedRowsOutput'
    deleteOnebani684_gallery_items: 'bani684_gallery_items'
    deleteManybani684_gallery_items: 'AffectedRowsOutput'
    upsertOnebani684_gallery_items: 'bani684_gallery_items'
    createOnebani684_gallery_tags: 'bani684_gallery_tags'
    updateOnebani684_gallery_tags: 'bani684_gallery_tags'
    updateManybani684_gallery_tags: 'AffectedRowsOutput'
    deleteOnebani684_gallery_tags: 'bani684_gallery_tags'
    deleteManybani684_gallery_tags: 'AffectedRowsOutput'
    upsertOnebani684_gallery_tags: 'bani684_gallery_tags'
    createOnebani684_lexicon_entries: 'bani684_lexicon_entries'
    updateOnebani684_lexicon_entries: 'bani684_lexicon_entries'
    updateManybani684_lexicon_entries: 'AffectedRowsOutput'
    deleteOnebani684_lexicon_entries: 'bani684_lexicon_entries'
    deleteManybani684_lexicon_entries: 'AffectedRowsOutput'
    upsertOnebani684_lexicon_entries: 'bani684_lexicon_entries'
    createOnebani684_manager_log: 'bani684_manager_log'
    updateOnebani684_manager_log: 'bani684_manager_log'
    updateManybani684_manager_log: 'AffectedRowsOutput'
    deleteOnebani684_manager_log: 'bani684_manager_log'
    deleteManybani684_manager_log: 'AffectedRowsOutput'
    upsertOnebani684_manager_log: 'bani684_manager_log'
    createOnebani684_media_sources: 'bani684_media_sources'
    updateOnebani684_media_sources: 'bani684_media_sources'
    updateManybani684_media_sources: 'AffectedRowsOutput'
    deleteOnebani684_media_sources: 'bani684_media_sources'
    deleteManybani684_media_sources: 'AffectedRowsOutput'
    upsertOnebani684_media_sources: 'bani684_media_sources'
    createOnebani684_media_sources_contexts: 'bani684_media_sources_contexts'
    updateOnebani684_media_sources_contexts: 'bani684_media_sources_contexts'
    updateManybani684_media_sources_contexts: 'AffectedRowsOutput'
    deleteOnebani684_media_sources_contexts: 'bani684_media_sources_contexts'
    deleteManybani684_media_sources_contexts: 'AffectedRowsOutput'
    upsertOnebani684_media_sources_contexts: 'bani684_media_sources_contexts'
    createOnebani684_media_sources_elements: 'bani684_media_sources_elements'
    updateOnebani684_media_sources_elements: 'bani684_media_sources_elements'
    updateManybani684_media_sources_elements: 'AffectedRowsOutput'
    deleteOnebani684_media_sources_elements: 'bani684_media_sources_elements'
    deleteManybani684_media_sources_elements: 'AffectedRowsOutput'
    upsertOnebani684_media_sources_elements: 'bani684_media_sources_elements'
    createOnebani684_membergroup_names: 'bani684_membergroup_names'
    updateOnebani684_membergroup_names: 'bani684_membergroup_names'
    updateManybani684_membergroup_names: 'AffectedRowsOutput'
    deleteOnebani684_membergroup_names: 'bani684_membergroup_names'
    deleteManybani684_membergroup_names: 'AffectedRowsOutput'
    upsertOnebani684_membergroup_names: 'bani684_membergroup_names'
    createOnebani684_membergroup_template: 'bani684_membergroup_template'
    updateOnebani684_membergroup_template: 'bani684_membergroup_template'
    updateManybani684_membergroup_template: 'AffectedRowsOutput'
    deleteOnebani684_membergroup_template: 'bani684_membergroup_template'
    deleteManybani684_membergroup_template: 'AffectedRowsOutput'
    upsertOnebani684_membergroup_template: 'bani684_membergroup_template'
    createOnebani684_member_groups: 'bani684_member_groups'
    updateOnebani684_member_groups: 'bani684_member_groups'
    updateManybani684_member_groups: 'AffectedRowsOutput'
    deleteOnebani684_member_groups: 'bani684_member_groups'
    deleteManybani684_member_groups: 'AffectedRowsOutput'
    upsertOnebani684_member_groups: 'bani684_member_groups'
    createOnebani684_menus: 'bani684_menus'
    updateOnebani684_menus: 'bani684_menus'
    updateManybani684_menus: 'AffectedRowsOutput'
    deleteOnebani684_menus: 'bani684_menus'
    deleteManybani684_menus: 'AffectedRowsOutput'
    upsertOnebani684_menus: 'bani684_menus'
    createOnebani684_migx_configs: 'bani684_migx_configs'
    updateOnebani684_migx_configs: 'bani684_migx_configs'
    updateManybani684_migx_configs: 'AffectedRowsOutput'
    deleteOnebani684_migx_configs: 'bani684_migx_configs'
    deleteManybani684_migx_configs: 'AffectedRowsOutput'
    upsertOnebani684_migx_configs: 'bani684_migx_configs'
    createOnebani684_migx_config_elements: 'bani684_migx_config_elements'
    updateOnebani684_migx_config_elements: 'bani684_migx_config_elements'
    updateManybani684_migx_config_elements: 'AffectedRowsOutput'
    deleteOnebani684_migx_config_elements: 'bani684_migx_config_elements'
    deleteManybani684_migx_config_elements: 'AffectedRowsOutput'
    upsertOnebani684_migx_config_elements: 'bani684_migx_config_elements'
    createOnebani684_migx_elements: 'bani684_migx_elements'
    updateOnebani684_migx_elements: 'bani684_migx_elements'
    updateManybani684_migx_elements: 'AffectedRowsOutput'
    deleteOnebani684_migx_elements: 'bani684_migx_elements'
    deleteManybani684_migx_elements: 'AffectedRowsOutput'
    upsertOnebani684_migx_elements: 'bani684_migx_elements'
    createOnebani684_migx_formtabs: 'bani684_migx_formtabs'
    updateOnebani684_migx_formtabs: 'bani684_migx_formtabs'
    updateManybani684_migx_formtabs: 'AffectedRowsOutput'
    deleteOnebani684_migx_formtabs: 'bani684_migx_formtabs'
    deleteManybani684_migx_formtabs: 'AffectedRowsOutput'
    upsertOnebani684_migx_formtabs: 'bani684_migx_formtabs'
    createOnebani684_migx_formtab_fields: 'bani684_migx_formtab_fields'
    updateOnebani684_migx_formtab_fields: 'bani684_migx_formtab_fields'
    updateManybani684_migx_formtab_fields: 'AffectedRowsOutput'
    deleteOnebani684_migx_formtab_fields: 'bani684_migx_formtab_fields'
    deleteManybani684_migx_formtab_fields: 'AffectedRowsOutput'
    upsertOnebani684_migx_formtab_fields: 'bani684_migx_formtab_fields'
    createOnebani684_modhybridauth_providers: 'bani684_modhybridauth_providers'
    updateOnebani684_modhybridauth_providers: 'bani684_modhybridauth_providers'
    updateManybani684_modhybridauth_providers: 'AffectedRowsOutput'
    deleteOnebani684_modhybridauth_providers: 'bani684_modhybridauth_providers'
    deleteManybani684_modhybridauth_providers: 'AffectedRowsOutput'
    upsertOnebani684_modhybridauth_providers: 'bani684_modhybridauth_providers'
    createOnebani684_modhybridauth_user_profile: 'bani684_modhybridauth_user_profile'
    updateOnebani684_modhybridauth_user_profile: 'bani684_modhybridauth_user_profile'
    updateManybani684_modhybridauth_user_profile: 'AffectedRowsOutput'
    deleteOnebani684_modhybridauth_user_profile: 'bani684_modhybridauth_user_profile'
    deleteManybani684_modhybridauth_user_profile: 'AffectedRowsOutput'
    upsertOnebani684_modhybridauth_user_profile: 'bani684_modhybridauth_user_profile'
    createOnebani684_modsearch_indexes: 'bani684_modsearch_indexes'
    updateOnebani684_modsearch_indexes: 'bani684_modsearch_indexes'
    updateManybani684_modsearch_indexes: 'AffectedRowsOutput'
    deleteOnebani684_modsearch_indexes: 'bani684_modsearch_indexes'
    deleteManybani684_modsearch_indexes: 'AffectedRowsOutput'
    upsertOnebani684_modsearch_indexes: 'bani684_modsearch_indexes'
    createOnebani684_modxsdk_package: 'bani684_modxsdk_package'
    updateOnebani684_modxsdk_package: 'bani684_modxsdk_package'
    updateManybani684_modxsdk_package: 'AffectedRowsOutput'
    deleteOnebani684_modxsdk_package: 'bani684_modxsdk_package'
    deleteManybani684_modxsdk_package: 'AffectedRowsOutput'
    upsertOnebani684_modxsdk_package: 'bani684_modxsdk_package'
    createOnebani684_modxsdk_packagesource: 'bani684_modxsdk_packagesource'
    updateOnebani684_modxsdk_packagesource: 'bani684_modxsdk_packagesource'
    updateManybani684_modxsdk_packagesource: 'AffectedRowsOutput'
    deleteOnebani684_modxsdk_packagesource: 'bani684_modxsdk_packagesource'
    deleteManybani684_modxsdk_packagesource: 'AffectedRowsOutput'
    upsertOnebani684_modxsdk_packagesource: 'bani684_modxsdk_packagesource'
    createOnebani684_modxsdk_package_vehicle: 'bani684_modxsdk_package_vehicle'
    updateOnebani684_modxsdk_package_vehicle: 'bani684_modxsdk_package_vehicle'
    updateManybani684_modxsdk_package_vehicle: 'AffectedRowsOutput'
    deleteOnebani684_modxsdk_package_vehicle: 'bani684_modxsdk_package_vehicle'
    deleteManybani684_modxsdk_package_vehicle: 'AffectedRowsOutput'
    upsertOnebani684_modxsdk_package_vehicle: 'bani684_modxsdk_package_vehicle'
    createOnebani684_modxsdk_project: 'bani684_modxsdk_project'
    updateOnebani684_modxsdk_project: 'bani684_modxsdk_project'
    updateManybani684_modxsdk_project: 'AffectedRowsOutput'
    deleteOnebani684_modxsdk_project: 'bani684_modxsdk_project'
    deleteManybani684_modxsdk_project: 'AffectedRowsOutput'
    upsertOnebani684_modxsdk_project: 'bani684_modxsdk_project'
    createOnebani684_modxsdk_project_package: 'bani684_modxsdk_project_package'
    updateOnebani684_modxsdk_project_package: 'bani684_modxsdk_project_package'
    updateManybani684_modxsdk_project_package: 'AffectedRowsOutput'
    deleteOnebani684_modxsdk_project_package: 'bani684_modxsdk_project_package'
    deleteManybani684_modxsdk_project_package: 'AffectedRowsOutput'
    upsertOnebani684_modxsdk_project_package: 'bani684_modxsdk_project_package'
    createOnebani684_modxsdk_vehicle: 'bani684_modxsdk_vehicle'
    updateOnebani684_modxsdk_vehicle: 'bani684_modxsdk_vehicle'
    updateManybani684_modxsdk_vehicle: 'AffectedRowsOutput'
    deleteOnebani684_modxsdk_vehicle: 'bani684_modxsdk_vehicle'
    deleteManybani684_modxsdk_vehicle: 'AffectedRowsOutput'
    upsertOnebani684_modxsdk_vehicle: 'bani684_modxsdk_vehicle'
    createOnebani684_modxsite_cities: 'bani684_modxsite_cities'
    updateOnebani684_modxsite_cities: 'bani684_modxsite_cities'
    updateManybani684_modxsite_cities: 'AffectedRowsOutput'
    deleteOnebani684_modxsite_cities: 'bani684_modxsite_cities'
    deleteManybani684_modxsite_cities: 'AffectedRowsOutput'
    upsertOnebani684_modxsite_cities: 'bani684_modxsite_cities'
    createOnebani684_modxsite_companies: 'bani684_modxsite_companies'
    updateOnebani684_modxsite_companies: 'bani684_modxsite_companies'
    updateManybani684_modxsite_companies: 'AffectedRowsOutput'
    deleteOnebani684_modxsite_companies: 'bani684_modxsite_companies'
    deleteManybani684_modxsite_companies: 'AffectedRowsOutput'
    upsertOnebani684_modxsite_companies: 'bani684_modxsite_companies'
    createOnebani684_modxsite_countries: 'bani684_modxsite_countries'
    updateOnebani684_modxsite_countries: 'bani684_modxsite_countries'
    updateManybani684_modxsite_countries: 'AffectedRowsOutput'
    deleteOnebani684_modxsite_countries: 'bani684_modxsite_countries'
    deleteManybani684_modxsite_countries: 'AffectedRowsOutput'
    upsertOnebani684_modxsite_countries: 'bani684_modxsite_countries'
    createOnebani684_monitor_requests: 'bani684_monitor_requests'
    updateOnebani684_monitor_requests: 'bani684_monitor_requests'
    updateManybani684_monitor_requests: 'AffectedRowsOutput'
    deleteOnebani684_monitor_requests: 'bani684_monitor_requests'
    deleteManybani684_monitor_requests: 'AffectedRowsOutput'
    upsertOnebani684_monitor_requests: 'bani684_monitor_requests'
    createOnebani684_monitor_request_items: 'bani684_monitor_request_items'
    updateOnebani684_monitor_request_items: 'bani684_monitor_request_items'
    updateManybani684_monitor_request_items: 'AffectedRowsOutput'
    deleteOnebani684_monitor_request_items: 'bani684_monitor_request_items'
    deleteManybani684_monitor_request_items: 'AffectedRowsOutput'
    upsertOnebani684_monitor_request_items: 'bani684_monitor_request_items'
    createOnebani684_namespaces: 'bani684_namespaces'
    updateOnebani684_namespaces: 'bani684_namespaces'
    updateManybani684_namespaces: 'AffectedRowsOutput'
    deleteOnebani684_namespaces: 'bani684_namespaces'
    deleteManybani684_namespaces: 'AffectedRowsOutput'
    upsertOnebani684_namespaces: 'bani684_namespaces'
    createOnebani684_packman_profile: 'bani684_packman_profile'
    updateOnebani684_packman_profile: 'bani684_packman_profile'
    updateManybani684_packman_profile: 'AffectedRowsOutput'
    deleteOnebani684_packman_profile: 'bani684_packman_profile'
    deleteManybani684_packman_profile: 'AffectedRowsOutput'
    upsertOnebani684_packman_profile: 'bani684_packman_profile'
    createOnebani684_property_set: 'bani684_property_set'
    updateOnebani684_property_set: 'bani684_property_set'
    updateManybani684_property_set: 'AffectedRowsOutput'
    deleteOnebani684_property_set: 'bani684_property_set'
    deleteManybani684_property_set: 'AffectedRowsOutput'
    upsertOnebani684_property_set: 'bani684_property_set'
    createOnebani684_redirects: 'bani684_redirects'
    updateOnebani684_redirects: 'bani684_redirects'
    updateManybani684_redirects: 'AffectedRowsOutput'
    deleteOnebani684_redirects: 'bani684_redirects'
    deleteManybani684_redirects: 'AffectedRowsOutput'
    upsertOnebani684_redirects: 'bani684_redirects'
    createOnebani684_register_messages: 'bani684_register_messages'
    updateOnebani684_register_messages: 'bani684_register_messages'
    updateManybani684_register_messages: 'AffectedRowsOutput'
    deleteOnebani684_register_messages: 'bani684_register_messages'
    deleteManybani684_register_messages: 'AffectedRowsOutput'
    upsertOnebani684_register_messages: 'bani684_register_messages'
    createOnebani684_register_queues: 'bani684_register_queues'
    updateOnebani684_register_queues: 'bani684_register_queues'
    updateManybani684_register_queues: 'AffectedRowsOutput'
    deleteOnebani684_register_queues: 'bani684_register_queues'
    deleteManybani684_register_queues: 'AffectedRowsOutput'
    upsertOnebani684_register_queues: 'bani684_register_queues'
    createOnebani684_register_topics: 'bani684_register_topics'
    updateOnebani684_register_topics: 'bani684_register_topics'
    updateManybani684_register_topics: 'AffectedRowsOutput'
    deleteOnebani684_register_topics: 'bani684_register_topics'
    deleteManybani684_register_topics: 'AffectedRowsOutput'
    upsertOnebani684_register_topics: 'bani684_register_topics'
    createOnebani684_search_stat: 'bani684_search_stat'
    updateOnebani684_search_stat: 'bani684_search_stat'
    updateManybani684_search_stat: 'AffectedRowsOutput'
    deleteOnebani684_search_stat: 'bani684_search_stat'
    deleteManybani684_search_stat: 'AffectedRowsOutput'
    upsertOnebani684_search_stat: 'bani684_search_stat'
    createOnebani684_session: 'bani684_session'
    updateOnebani684_session: 'bani684_session'
    updateManybani684_session: 'AffectedRowsOutput'
    deleteOnebani684_session: 'bani684_session'
    deleteManybani684_session: 'AffectedRowsOutput'
    upsertOnebani684_session: 'bani684_session'
    createOnebani684_site_content: 'bani684_site_content'
    updateOnebani684_site_content: 'bani684_site_content'
    updateManybani684_site_content: 'AffectedRowsOutput'
    deleteOnebani684_site_content: 'bani684_site_content'
    deleteManybani684_site_content: 'AffectedRowsOutput'
    upsertOnebani684_site_content: 'bani684_site_content'
    createOnebani684_site_htmlsnippets: 'bani684_site_htmlsnippets'
    updateOnebani684_site_htmlsnippets: 'bani684_site_htmlsnippets'
    updateManybani684_site_htmlsnippets: 'AffectedRowsOutput'
    deleteOnebani684_site_htmlsnippets: 'bani684_site_htmlsnippets'
    deleteManybani684_site_htmlsnippets: 'AffectedRowsOutput'
    upsertOnebani684_site_htmlsnippets: 'bani684_site_htmlsnippets'
    createOnebani684_site_plugins: 'bani684_site_plugins'
    updateOnebani684_site_plugins: 'bani684_site_plugins'
    updateManybani684_site_plugins: 'AffectedRowsOutput'
    deleteOnebani684_site_plugins: 'bani684_site_plugins'
    deleteManybani684_site_plugins: 'AffectedRowsOutput'
    upsertOnebani684_site_plugins: 'bani684_site_plugins'
    createOnebani684_site_plugin_events: 'bani684_site_plugin_events'
    updateOnebani684_site_plugin_events: 'bani684_site_plugin_events'
    updateManybani684_site_plugin_events: 'AffectedRowsOutput'
    deleteOnebani684_site_plugin_events: 'bani684_site_plugin_events'
    deleteManybani684_site_plugin_events: 'AffectedRowsOutput'
    upsertOnebani684_site_plugin_events: 'bani684_site_plugin_events'
    createOnebani684_site_snippets: 'bani684_site_snippets'
    updateOnebani684_site_snippets: 'bani684_site_snippets'
    updateManybani684_site_snippets: 'AffectedRowsOutput'
    deleteOnebani684_site_snippets: 'bani684_site_snippets'
    deleteManybani684_site_snippets: 'AffectedRowsOutput'
    upsertOnebani684_site_snippets: 'bani684_site_snippets'
    createOnebani684_site_templates: 'bani684_site_templates'
    updateOnebani684_site_templates: 'bani684_site_templates'
    updateManybani684_site_templates: 'AffectedRowsOutput'
    deleteOnebani684_site_templates: 'bani684_site_templates'
    deleteManybani684_site_templates: 'AffectedRowsOutput'
    upsertOnebani684_site_templates: 'bani684_site_templates'
    createOnebani684_site_tmplvars: 'bani684_site_tmplvars'
    updateOnebani684_site_tmplvars: 'bani684_site_tmplvars'
    updateManybani684_site_tmplvars: 'AffectedRowsOutput'
    deleteOnebani684_site_tmplvars: 'bani684_site_tmplvars'
    deleteManybani684_site_tmplvars: 'AffectedRowsOutput'
    upsertOnebani684_site_tmplvars: 'bani684_site_tmplvars'
    createOnebani684_site_tmplvar_access: 'bani684_site_tmplvar_access'
    updateOnebani684_site_tmplvar_access: 'bani684_site_tmplvar_access'
    updateManybani684_site_tmplvar_access: 'AffectedRowsOutput'
    deleteOnebani684_site_tmplvar_access: 'bani684_site_tmplvar_access'
    deleteManybani684_site_tmplvar_access: 'AffectedRowsOutput'
    upsertOnebani684_site_tmplvar_access: 'bani684_site_tmplvar_access'
    createOnebani684_site_tmplvar_contentvalues: 'bani684_site_tmplvar_contentvalues'
    updateOnebani684_site_tmplvar_contentvalues: 'bani684_site_tmplvar_contentvalues'
    updateManybani684_site_tmplvar_contentvalues: 'AffectedRowsOutput'
    deleteOnebani684_site_tmplvar_contentvalues: 'bani684_site_tmplvar_contentvalues'
    deleteManybani684_site_tmplvar_contentvalues: 'AffectedRowsOutput'
    upsertOnebani684_site_tmplvar_contentvalues: 'bani684_site_tmplvar_contentvalues'
    createOnebani684_site_tmplvar_templates: 'bani684_site_tmplvar_templates'
    updateOnebani684_site_tmplvar_templates: 'bani684_site_tmplvar_templates'
    updateManybani684_site_tmplvar_templates: 'AffectedRowsOutput'
    deleteOnebani684_site_tmplvar_templates: 'bani684_site_tmplvar_templates'
    deleteManybani684_site_tmplvar_templates: 'AffectedRowsOutput'
    upsertOnebani684_site_tmplvar_templates: 'bani684_site_tmplvar_templates'
    createOnebani684_society_blog_attributes: 'bani684_society_blog_attributes'
    updateOnebani684_society_blog_attributes: 'bani684_society_blog_attributes'
    updateManybani684_society_blog_attributes: 'AffectedRowsOutput'
    deleteOnebani684_society_blog_attributes: 'bani684_society_blog_attributes'
    deleteManybani684_society_blog_attributes: 'AffectedRowsOutput'
    upsertOnebani684_society_blog_attributes: 'bani684_society_blog_attributes'
    createOnebani684_society_blog_topic: 'bani684_society_blog_topic'
    updateOnebani684_society_blog_topic: 'bani684_society_blog_topic'
    updateManybani684_society_blog_topic: 'AffectedRowsOutput'
    deleteOnebani684_society_blog_topic: 'bani684_society_blog_topic'
    deleteManybani684_society_blog_topic: 'AffectedRowsOutput'
    upsertOnebani684_society_blog_topic: 'bani684_society_blog_topic'
    createOnebani684_society_comments: 'bani684_society_comments'
    updateOnebani684_society_comments: 'bani684_society_comments'
    updateManybani684_society_comments: 'AffectedRowsOutput'
    deleteOnebani684_society_comments: 'bani684_society_comments'
    deleteManybani684_society_comments: 'AffectedRowsOutput'
    upsertOnebani684_society_comments: 'bani684_society_comments'
    createOnebani684_society_email_messages: 'bani684_society_email_messages'
    updateOnebani684_society_email_messages: 'bani684_society_email_messages'
    updateManybani684_society_email_messages: 'AffectedRowsOutput'
    deleteOnebani684_society_email_messages: 'bani684_society_email_messages'
    deleteManybani684_society_email_messages: 'AffectedRowsOutput'
    upsertOnebani684_society_email_messages: 'bani684_society_email_messages'
    createOnebani684_society_notice_types: 'bani684_society_notice_types'
    updateOnebani684_society_notice_types: 'bani684_society_notice_types'
    updateManybani684_society_notice_types: 'AffectedRowsOutput'
    deleteOnebani684_society_notice_types: 'bani684_society_notice_types'
    deleteManybani684_society_notice_types: 'AffectedRowsOutput'
    upsertOnebani684_society_notice_types: 'bani684_society_notice_types'
    createOnebani684_society_notice_users: 'bani684_society_notice_users'
    updateOnebani684_society_notice_users: 'bani684_society_notice_users'
    updateManybani684_society_notice_users: 'AffectedRowsOutput'
    deleteOnebani684_society_notice_users: 'bani684_society_notice_users'
    deleteManybani684_society_notice_users: 'AffectedRowsOutput'
    upsertOnebani684_society_notice_users: 'bani684_society_notice_users'
    createOnebani684_society_subscribers: 'bani684_society_subscribers'
    updateOnebani684_society_subscribers: 'bani684_society_subscribers'
    updateManybani684_society_subscribers: 'AffectedRowsOutput'
    deleteOnebani684_society_subscribers: 'bani684_society_subscribers'
    deleteManybani684_society_subscribers: 'AffectedRowsOutput'
    upsertOnebani684_society_subscribers: 'bani684_society_subscribers'
    createOnebani684_society_threads: 'bani684_society_threads'
    updateOnebani684_society_threads: 'bani684_society_threads'
    updateManybani684_society_threads: 'AffectedRowsOutput'
    deleteOnebani684_society_threads: 'bani684_society_threads'
    deleteManybani684_society_threads: 'AffectedRowsOutput'
    upsertOnebani684_society_threads: 'bani684_society_threads'
    createOnebani684_society_topic_attributes: 'bani684_society_topic_attributes'
    updateOnebani684_society_topic_attributes: 'bani684_society_topic_attributes'
    updateManybani684_society_topic_attributes: 'AffectedRowsOutput'
    deleteOnebani684_society_topic_attributes: 'bani684_society_topic_attributes'
    deleteManybani684_society_topic_attributes: 'AffectedRowsOutput'
    upsertOnebani684_society_topic_attributes: 'bani684_society_topic_attributes'
    createOnebani684_society_topic_tags: 'bani684_society_topic_tags'
    updateOnebani684_society_topic_tags: 'bani684_society_topic_tags'
    updateManybani684_society_topic_tags: 'AffectedRowsOutput'
    deleteOnebani684_society_topic_tags: 'bani684_society_topic_tags'
    deleteManybani684_society_topic_tags: 'AffectedRowsOutput'
    upsertOnebani684_society_topic_tags: 'bani684_society_topic_tags'
    createOnebani684_society_user_attributes: 'bani684_society_user_attributes'
    updateOnebani684_society_user_attributes: 'bani684_society_user_attributes'
    updateManybani684_society_user_attributes: 'AffectedRowsOutput'
    deleteOnebani684_society_user_attributes: 'bani684_society_user_attributes'
    deleteManybani684_society_user_attributes: 'AffectedRowsOutput'
    upsertOnebani684_society_user_attributes: 'bani684_society_user_attributes'
    createOnebani684_society_votes: 'bani684_society_votes'
    updateOnebani684_society_votes: 'bani684_society_votes'
    updateManybani684_society_votes: 'AffectedRowsOutput'
    deleteOnebani684_society_votes: 'bani684_society_votes'
    deleteManybani684_society_votes: 'AffectedRowsOutput'
    upsertOnebani684_society_votes: 'bani684_society_votes'
    createOnebani684_system_eventnames: 'bani684_system_eventnames'
    updateOnebani684_system_eventnames: 'bani684_system_eventnames'
    updateManybani684_system_eventnames: 'AffectedRowsOutput'
    deleteOnebani684_system_eventnames: 'bani684_system_eventnames'
    deleteManybani684_system_eventnames: 'AffectedRowsOutput'
    upsertOnebani684_system_eventnames: 'bani684_system_eventnames'
    createOnebani684_system_settings: 'bani684_system_settings'
    updateOnebani684_system_settings: 'bani684_system_settings'
    updateManybani684_system_settings: 'AffectedRowsOutput'
    deleteOnebani684_system_settings: 'bani684_system_settings'
    deleteManybani684_system_settings: 'AffectedRowsOutput'
    upsertOnebani684_system_settings: 'bani684_system_settings'
    createOnebani684_transport_packages: 'bani684_transport_packages'
    updateOnebani684_transport_packages: 'bani684_transport_packages'
    updateManybani684_transport_packages: 'AffectedRowsOutput'
    deleteOnebani684_transport_packages: 'bani684_transport_packages'
    deleteManybani684_transport_packages: 'AffectedRowsOutput'
    upsertOnebani684_transport_packages: 'bani684_transport_packages'
    createOnebani684_transport_providers: 'bani684_transport_providers'
    updateOnebani684_transport_providers: 'bani684_transport_providers'
    updateManybani684_transport_providers: 'AffectedRowsOutput'
    deleteOnebani684_transport_providers: 'bani684_transport_providers'
    deleteManybani684_transport_providers: 'AffectedRowsOutput'
    upsertOnebani684_transport_providers: 'bani684_transport_providers'
    createOnebani684_users: 'bani684_users'
    updateOnebani684_users: 'bani684_users'
    updateManybani684_users: 'AffectedRowsOutput'
    deleteOnebani684_users: 'bani684_users'
    deleteManybani684_users: 'AffectedRowsOutput'
    upsertOnebani684_users: 'bani684_users'
    createOnebani684_user_attributes: 'bani684_user_attributes'
    updateOnebani684_user_attributes: 'bani684_user_attributes'
    updateManybani684_user_attributes: 'AffectedRowsOutput'
    deleteOnebani684_user_attributes: 'bani684_user_attributes'
    deleteManybani684_user_attributes: 'AffectedRowsOutput'
    upsertOnebani684_user_attributes: 'bani684_user_attributes'
    createOnebani684_user_group_roles: 'bani684_user_group_roles'
    updateOnebani684_user_group_roles: 'bani684_user_group_roles'
    updateManybani684_user_group_roles: 'AffectedRowsOutput'
    deleteOnebani684_user_group_roles: 'bani684_user_group_roles'
    deleteManybani684_user_group_roles: 'AffectedRowsOutput'
    upsertOnebani684_user_group_roles: 'bani684_user_group_roles'
    createOnebani684_user_group_settings: 'bani684_user_group_settings'
    updateOnebani684_user_group_settings: 'bani684_user_group_settings'
    updateManybani684_user_group_settings: 'AffectedRowsOutput'
    deleteOnebani684_user_group_settings: 'bani684_user_group_settings'
    deleteManybani684_user_group_settings: 'AffectedRowsOutput'
    upsertOnebani684_user_group_settings: 'bani684_user_group_settings'
    createOnebani684_user_messages: 'bani684_user_messages'
    updateOnebani684_user_messages: 'bani684_user_messages'
    updateManybani684_user_messages: 'AffectedRowsOutput'
    deleteOnebani684_user_messages: 'bani684_user_messages'
    deleteManybani684_user_messages: 'AffectedRowsOutput'
    upsertOnebani684_user_messages: 'bani684_user_messages'
    createOnebani684_user_settings: 'bani684_user_settings'
    updateOnebani684_user_settings: 'bani684_user_settings'
    updateManybani684_user_settings: 'AffectedRowsOutput'
    deleteOnebani684_user_settings: 'bani684_user_settings'
    deleteManybani684_user_settings: 'AffectedRowsOutput'
    upsertOnebani684_user_settings: 'bani684_user_settings'
    createOnebani684_versionx_chunk: 'bani684_versionx_chunk'
    updateOnebani684_versionx_chunk: 'bani684_versionx_chunk'
    updateManybani684_versionx_chunk: 'AffectedRowsOutput'
    deleteOnebani684_versionx_chunk: 'bani684_versionx_chunk'
    deleteManybani684_versionx_chunk: 'AffectedRowsOutput'
    upsertOnebani684_versionx_chunk: 'bani684_versionx_chunk'
    createOnebani684_versionx_plugin: 'bani684_versionx_plugin'
    updateOnebani684_versionx_plugin: 'bani684_versionx_plugin'
    updateManybani684_versionx_plugin: 'AffectedRowsOutput'
    deleteOnebani684_versionx_plugin: 'bani684_versionx_plugin'
    deleteManybani684_versionx_plugin: 'AffectedRowsOutput'
    upsertOnebani684_versionx_plugin: 'bani684_versionx_plugin'
    createOnebani684_versionx_resource: 'bani684_versionx_resource'
    updateOnebani684_versionx_resource: 'bani684_versionx_resource'
    updateManybani684_versionx_resource: 'AffectedRowsOutput'
    deleteOnebani684_versionx_resource: 'bani684_versionx_resource'
    deleteManybani684_versionx_resource: 'AffectedRowsOutput'
    upsertOnebani684_versionx_resource: 'bani684_versionx_resource'
    createOnebani684_versionx_snippet: 'bani684_versionx_snippet'
    updateOnebani684_versionx_snippet: 'bani684_versionx_snippet'
    updateManybani684_versionx_snippet: 'AffectedRowsOutput'
    deleteOnebani684_versionx_snippet: 'bani684_versionx_snippet'
    deleteManybani684_versionx_snippet: 'AffectedRowsOutput'
    upsertOnebani684_versionx_snippet: 'bani684_versionx_snippet'
    createOnebani684_versionx_template: 'bani684_versionx_template'
    updateOnebani684_versionx_template: 'bani684_versionx_template'
    updateManybani684_versionx_template: 'AffectedRowsOutput'
    deleteOnebani684_versionx_template: 'bani684_versionx_template'
    deleteManybani684_versionx_template: 'AffectedRowsOutput'
    upsertOnebani684_versionx_template: 'bani684_versionx_template'
    createOnebani684_versionx_templatevar: 'bani684_versionx_templatevar'
    updateOnebani684_versionx_templatevar: 'bani684_versionx_templatevar'
    updateManybani684_versionx_templatevar: 'AffectedRowsOutput'
    deleteOnebani684_versionx_templatevar: 'bani684_versionx_templatevar'
    deleteManybani684_versionx_templatevar: 'AffectedRowsOutput'
    upsertOnebani684_versionx_templatevar: 'bani684_versionx_templatevar'
    createOnebani684_visitors: 'bani684_visitors'
    updateOnebani684_visitors: 'bani684_visitors'
    updateManybani684_visitors: 'AffectedRowsOutput'
    deleteOnebani684_visitors: 'bani684_visitors'
    deleteManybani684_visitors: 'AffectedRowsOutput'
    upsertOnebani684_visitors: 'bani684_visitors'
    createOnebani684_workspaces: 'bani684_workspaces'
    updateOnebani684_workspaces: 'bani684_workspaces'
    updateManybani684_workspaces: 'AffectedRowsOutput'
    deleteOnebani684_workspaces: 'bani684_workspaces'
    deleteManybani684_workspaces: 'AffectedRowsOutput'
    upsertOnebani684_workspaces: 'bani684_workspaces'
  },
  bani684_access_actiondom: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
  }
  bani684_access_actions: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
  }
  bani684_access_category: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
    context_key: 'String'
  }
  bani684_access_context: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
  }
  bani684_access_elements: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
    context_key: 'String'
  }
  bani684_access_media_source: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
    context_key: 'String'
  }
  bani684_access_menus: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
  }
  bani684_access_namespace: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
    context_key: 'String'
  }
  bani684_access_permissions: {
    id: 'Int'
    template: 'Int'
    name: 'String'
    description: 'String'
    value: 'Boolean'
  }
  bani684_access_policies: {
    id: 'Int'
    name: 'String'
    description: 'String'
    parent: 'Int'
    template: 'Int'
    class: 'String'
    data: 'String'
    lexicon: 'String'
  }
  bani684_access_policy_templates: {
    id: 'Int'
    template_group: 'Int'
    name: 'String'
    description: 'String'
    lexicon: 'String'
  }
  bani684_access_policy_template_groups: {
    id: 'Int'
    name: 'String'
    description: 'String'
  }
  bani684_access_resources: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
    context_key: 'String'
  }
  bani684_access_resource_groups: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
    context_key: 'String'
  }
  bani684_access_templatevars: {
    id: 'Int'
    target: 'String'
    principal_class: 'String'
    principal: 'Int'
    authority: 'Int'
    policy: 'Int'
    context_key: 'String'
  }
  bani684_actiondom: {
    id: 'Int'
    set: 'Int'
    action: 'String'
    name: 'String'
    description: 'String'
    xtype: 'String'
    container: 'String'
    rule: 'String'
    value: 'String'
    constraint: 'String'
    constraint_field: 'String'
    constraint_class: 'String'
    active: 'Boolean'
    for_parent: 'Boolean'
    rank: 'Int'
  }
  bani684_actions: {
    id: 'Int'
    namespace: 'String'
    controller: 'String'
    haslayout: 'Boolean'
    lang_topics: 'String'
    assets: 'String'
    help_url: 'String'
  }
  bani684_actions_fields: {
    id: 'Int'
    action: 'String'
    name: 'String'
    type: 'String'
    tab: 'String'
    form: 'String'
    other: 'String'
    rank: 'Int'
  }
  bani684_active_users: {
    internalKey: 'Int'
    username: 'String'
    lasthit: 'Int'
    id: 'Int'
    action: 'String'
    ip: 'String'
  }
  bani684_categories: {
    id: 'Int'
    parent: 'Int'
    category: 'String'
    rank: 'Int'
  }
  bani684_categories_closure: {
    ancestor: 'Int'
    descendant: 'Int'
    depth: 'Int'
  }
  bani684_class_map: {
    id: 'Int'
    class: 'String'
    parent_class: 'String'
    name_field: 'String'
    path: 'String'
    lexicon: 'String'
  }
  bani684_cmpgenerator: {
    id: 'Int'
    package: 'String'
    database: 'String'
    tables: 'String'
    table_prefix: 'String'
    build_scheme: 'Int'
    build_package: 'Int'
    create_date: 'DateTime'
    last_ran: 'DateTime'
  }
  bani684_content_type: {
    id: 'Int'
    name: 'String'
    description: 'String'
    mime_type: 'String'
    file_extensions: 'String'
    headers: 'String'
    binary: 'Boolean'
  }
  bani684_context: {
    key: 'String'
    description: 'String'
    rank: 'Int'
    name: 'String'
  }
  bani684_context_resource: {
    context_key: 'String'
    resource: 'Int'
  }
  bani684_context_setting: {
    context_key: 'String'
    key: 'String'
    value: 'String'
    xtype: 'String'
    namespace: 'String'
    area: 'String'
    editedon: 'DateTime'
  }
  bani684_dashboard: {
    id: 'Int'
    name: 'String'
    description: 'String'
    hide_trees: 'Boolean'
  }
  bani684_dashboard_widget: {
    id: 'Int'
    name: 'String'
    description: 'String'
    type: 'String'
    content: 'String'
    namespace: 'String'
    lexicon: 'String'
    size: 'String'
  }
  bani684_dashboard_widget_placement: {
    dashboard: 'Int'
    widget: 'Int'
    rank: 'Int'
  }
  bani684_documentgroup_names: {
    id: 'Int'
    name: 'String'
    private_memgroup: 'Boolean'
    private_webgroup: 'Boolean'
  }
  bani684_document_groups: {
    id: 'Int'
    document_group: 'Int'
    document: 'Int'
  }
  bani684_edit_versions: {
    id: 'Int'
    target_id: 'Int'
    data: 'String'
    createdby: 'Int'
    createdon: 'DateTime'
    editedby: 'Int'
    editedon: 'DateTime'
    status: 'String'
  }
  bani684_element_property_sets: {
    element: 'Int'
    element_class: 'String'
    property_set: 'Int'
  }
  bani684_extension_packages: {
    id: 'Int'
    namespace: 'String'
    name: 'String'
    path: 'String'
    table_prefix: 'String'
    service_class: 'String'
    service_name: 'String'
    created_at: 'DateTime'
    updated_at: 'DateTime'
  }
  bani684_fc_profiles: {
    id: 'Int'
    name: 'String'
    description: 'String'
    active: 'Boolean'
    rank: 'Int'
  }
  bani684_fc_profiles_usergroups: {
    usergroup: 'Int'
    profile: 'Int'
  }
  bani684_fc_sets: {
    id: 'Int'
    profile: 'Int'
    action: 'String'
    description: 'String'
    active: 'Boolean'
    template: 'Int'
    constraint: 'String'
    constraint_field: 'String'
    constraint_class: 'String'
  }
  bani684_gallery_albums: {
    id: 'Int'
    parent: 'Int'
    name: 'String'
    year: 'String'
    description: 'String'
    createdon: 'DateTime'
    createdby: 'Int'
    rank: 'Int'
    active: 'Boolean'
    prominent: 'Boolean'
    watermark: 'String'
    cover_filename: 'String'
  }
  bani684_gallery_album_contexts: {
    id: 'Int'
    album: 'Int'
    context_key: 'String'
  }
  bani684_gallery_album_items: {
    id: 'Int'
    item: 'Int'
    album: 'Int'
    rank: 'Int'
  }
  bani684_gallery_items: {
    id: 'Int'
    name: 'String'
    filename: 'String'
    description: 'String'
    mediatype: 'String'
    url: 'String'
    createdon: 'DateTime'
    createdby: 'Int'
    active: 'Boolean'
    duration: 'String'
    streamer: 'String'
    watermark_pos: 'String'
  }
  bani684_gallery_tags: {
    id: 'Int'
    item: 'Int'
    tag: 'String'
  }
  bani684_lexicon_entries: {
    id: 'Int'
    name: 'String'
    value: 'String'
    topic: 'String'
    namespace: 'String'
    language: 'String'
    createdon: 'DateTime'
    editedon: 'DateTime'
  }
  bani684_manager_log: {
    id: 'Int'
    user: 'Int'
    occurred: 'DateTime'
    action: 'String'
    classKey: 'String'
    item: 'String'
  }
  bani684_media_sources: {
    id: 'Int'
    name: 'String'
    description: 'String'
    class_key: 'String'
    properties: 'String'
    is_stream: 'Boolean'
  }
  bani684_media_sources_contexts: {
    source: 'Int'
    context_key: 'String'
  }
  bani684_media_sources_elements: {
    source: 'Int'
    object_class: 'String'
    object: 'Int'
    context_key: 'String'
  }
  bani684_membergroup_names: {
    id: 'Int'
    name: 'String'
    description: 'String'
    parent: 'Int'
    rank: 'Int'
    dashboard: 'Int'
  }
  bani684_membergroup_template: {
    group: 'Int'
    template: 'String'
  }
  bani684_member_groups: {
    id: 'Int'
    user_group: 'Int'
    member: 'Int'
    role: 'Int'
    rank: 'Int'
  }
  bani684_menus: {
    text: 'String'
    parent: 'String'
    action: 'String'
    description: 'String'
    icon: 'String'
    menuindex: 'Int'
    params: 'String'
    handler: 'String'
    permissions: 'String'
    namespace: 'String'
  }
  bani684_migx_configs: {
    id: 'Int'
    name: 'String'
    formtabs: 'String'
    contextmenus: 'String'
    actionbuttons: 'String'
    columnbuttons: 'String'
    filters: 'String'
    extended: 'String'
    columns: 'String'
    createdby: 'Int'
    createdon: 'DateTime'
    editedby: 'Int'
    editedon: 'DateTime'
    deleted: 'Boolean'
    deletedon: 'DateTime'
    deletedby: 'Int'
    published: 'Boolean'
    publishedon: 'DateTime'
    publishedby: 'Int'
  }
  bani684_migx_config_elements: {
    id: 'Int'
    config_id: 'Int'
    element_id: 'Int'
    rank: 'Int'
    createdby: 'Int'
    createdon: 'DateTime'
    editedby: 'Int'
    editedon: 'DateTime'
    deleted: 'Boolean'
    deletedon: 'DateTime'
    deletedby: 'Int'
    published: 'Boolean'
    publishedon: 'DateTime'
    publishedby: 'Int'
  }
  bani684_migx_elements: {
    id: 'Int'
    type: 'String'
    content: 'String'
    createdby: 'Int'
    createdon: 'DateTime'
    editedby: 'Int'
    editedon: 'DateTime'
    deleted: 'Boolean'
    deletedon: 'DateTime'
    deletedby: 'Int'
    published: 'Boolean'
    publishedon: 'DateTime'
    publishedby: 'Int'
  }
  bani684_migx_formtabs: {
    id: 'Int'
    config_id: 'Int'
    caption: 'String'
    pos: 'Int'
    print_before_tabs: 'Boolean'
    extended: 'String'
  }
  bani684_migx_formtab_fields: {
    id: 'Int'
    config_id: 'Int'
    formtab_id: 'Int'
    field: 'String'
    caption: 'String'
    description: 'String'
    pos: 'Int'
    description_is_code: 'Boolean'
    inputTV: 'String'
    inputTVtype: 'String'
    validation: 'String'
    configs: 'String'
    restrictive_condition: 'String'
    display: 'String'
    sourceFrom: 'String'
    sources: 'String'
    inputOptionValues: 'String'
    default: 'String'
    extended: 'String'
  }
  bani684_modhybridauth_providers: {
    id: 'Int'
    name: 'String'
    keys: 'String'
    scope: 'String'
    enabled: 'String'
    class_key: 'String'
  }
  bani684_modhybridauth_user_profile: {
    id: 'Int'
    internalKey: 'Int'
    identifier: 'String'
    provider: 'Int'
    profileURL: 'String'
    webSiteURL: 'String'
    photoURL: 'String'
    displayName: 'String'
    description: 'String'
    firstName: 'String'
    lastName: 'String'
    gender: 'bani684_modhybridauth_user_profile_gender'
    language: 'String'
    age: 'Int'
    birthDay: 'Int'
    birthMonth: 'Int'
    birthYear: 'Int'
    email: 'String'
    emailVerified: 'String'
    phone: 'String'
    address: 'String'
    country: 'String'
    region: 'String'
    city: 'String'
    zip: 'Int'
    createdon: 'DateTime'
    extended: 'String'
  }
  bani684_modsearch_indexes: {
    resource_id: 'Int'
    lemma: 'String'
  }
  bani684_modxsdk_package: {
    id: 'Int'
    name: 'String'
    version_major: 'Int'
    version_minor: 'Int'
    version_patch: 'Int'
    version_type: 'String'
  }
  bani684_modxsdk_packagesource: {
    packageid: 'Int'
    sourceid: 'Int'
  }
  bani684_modxsdk_package_vehicle: {
    packageid: 'Int'
    vehicleid: 'Int'
  }
  bani684_modxsdk_project: {
    id: 'Int'
    name: 'String'
    description: 'String'
  }
  bani684_modxsdk_project_package: {
    projectid: 'Int'
    packageid: 'Int'
  }
  bani684_modxsdk_vehicle: {
    id: 'Int'
    name: 'String'
  }
  bani684_modxsite_cities: {
    id: 'Int'
    city: 'String'
    country_id: 'Int'
    rank: 'Int'
    link: 'Int'
    domain: 'String'
    big: 'String'
  }
  bani684_modxsite_companies: {
    id: 'Int'
    name: 'String'
    country_id: 'Int'
    city_id: 'Int'
    address: 'String'
    website: 'String'
    email: 'String'
    phone: 'String'
    main_modx_version: 'bani684_modxsite_companies_main_modx_version'
    employees: 'Int'
    works: 'Int'
    foundation_date: 'Int'
    resource_id: 'Int'
    blog_id: 'Int'
    owner: 'Int'
    use_owr_techs: 'Int'
    createdby: 'Int'
    createdon: 'Int'
    editedby: 'Int'
    editedon: 'Int'
  }
  bani684_modxsite_countries: {
    id: 'Int'
    country: 'String'
    rank: 'Int'
  }
  bani684_monitor_requests: {
    id: 'Int'
    parent: 'Int'
    path: 'String'
    site_url: 'String'
    url: 'String'
    context_key: 'String'
    resource_id: 'Int'
    http_status: 'Int'
    uuid: 'String'
    user_id: 'Int'
    ip: 'String'
    date: 'DateTime'
    from_cache: 'String'
    phptemplates_non_cached: 'String'
    time: 'Decimal'
    php_memory: 'Decimal'
    db_queries: 'Int'
    db_queries_time: 'Decimal'
    php_error: 'Int'
    php_error_info: 'String'
    referer: 'String'
    user_agent: 'String'
  }
  bani684_monitor_request_items: {
    id: 'Int'
    request_id: 'Int'
    parent: 'Int'
    type: 'String'
    name: 'String'
    properties: 'String'
    time: 'Decimal'
    php_memory: 'Decimal'
    db_queries: 'Int'
    db_queries_time: 'Decimal'
  }
  bani684_namespaces: {
    name: 'String'
    path: 'String'
    assets_path: 'String'
  }
  bani684_packman_profile: {
    id: 'Int'
    name: 'String'
    description: 'String'
    data: 'String'
  }
  bani684_property_set: {
    id: 'Int'
    name: 'String'
    category: 'Int'
    description: 'String'
    properties: 'String'
  }
  bani684_redirects: {
    id: 'Int'
    uri: 'String'
    resource_id: 'Int'
  }
  bani684_register_messages: {
    topic: 'Int'
    id: 'String'
    created: 'DateTime'
    valid: 'DateTime'
    accessed: 'DateTime'
    accesses: 'Int'
    expires: 'Int'
    payload: 'String'
    kill: 'Boolean'
  }
  bani684_register_queues: {
    id: 'Int'
    name: 'String'
    options: 'String'
  }
  bani684_register_topics: {
    id: 'Int'
    queue: 'Int'
    name: 'String'
    created: 'DateTime'
    updated: 'DateTime'
    options: 'String'
  }
  bani684_search_stat: {
    id: 'Int'
    query: 'String'
    finded: 'Int'
    date: 'DateTime'
  }
  bani684_session: {
    id: 'String'
    access: 'Int'
    data: 'String'
  }
  bani684_site_content: {
    id: 'Int'
    type: 'String'
    contentType: 'String'
    pagetitle: 'String'
    longtitle: 'String'
    description: 'String'
    alias: 'String'
    link_attributes: 'String'
    published: 'Boolean'
    pub_date: 'Int'
    unpub_date: 'Int'
    parent: 'Int'
    isfolder: 'Boolean'
    introtext: 'String'
    content: 'String'
    richtext: 'Boolean'
    template: 'Int'
    menuindex: 'Int'
    searchable: 'Boolean'
    cacheable: 'Boolean'
    createdby: 'Int'
    createdon: 'Int'
    editedby: 'Int'
    editedon: 'Int'
    deleted: 'Boolean'
    deletedon: 'Int'
    deletedby: 'Int'
    publishedon: 'Int'
    publishedby: 'Int'
    menutitle: 'String'
    donthit: 'Boolean'
    privateweb: 'Boolean'
    privatemgr: 'Boolean'
    content_dispo: 'Boolean'
    hidemenu: 'Boolean'
    class_key: 'String'
    context_key: 'String'
    content_type: 'Int'
    uri: 'String'
    uri_override: 'Boolean'
    hide_children_in_tree: 'Boolean'
    show_in_tree: 'Boolean'
    properties: 'String'
    TemplateVarValues: 'bani684_site_tmplvar_contentvalues'
  }
  bani684_site_htmlsnippets: {
    id: 'Int'
    source: 'Int'
    property_preprocess: 'Boolean'
    name: 'String'
    description: 'String'
    editor_type: 'Int'
    category: 'Int'
    cache_type: 'Boolean'
    snippet: 'String'
    locked: 'Boolean'
    properties: 'String'
    static: 'Boolean'
    static_file: 'String'
  }
  bani684_site_plugins: {
    id: 'Int'
    source: 'Int'
    property_preprocess: 'Boolean'
    name: 'String'
    description: 'String'
    editor_type: 'Int'
    category: 'Int'
    cache_type: 'Boolean'
    plugincode: 'String'
    locked: 'Boolean'
    properties: 'String'
    disabled: 'Boolean'
    moduleguid: 'String'
    static: 'Boolean'
    static_file: 'String'
  }
  bani684_site_plugin_events: {
    pluginid: 'Int'
    event: 'String'
    priority: 'Int'
    propertyset: 'Int'
  }
  bani684_site_snippets: {
    id: 'Int'
    source: 'Int'
    property_preprocess: 'Boolean'
    name: 'String'
    description: 'String'
    editor_type: 'Int'
    category: 'Int'
    cache_type: 'Boolean'
    snippet: 'String'
    locked: 'Boolean'
    properties: 'String'
    moduleguid: 'String'
    static: 'Boolean'
    static_file: 'String'
  }
  bani684_site_templates: {
    id: 'Int'
    source: 'Int'
    property_preprocess: 'Boolean'
    templatename: 'String'
    description: 'String'
    editor_type: 'Int'
    category: 'Int'
    icon: 'String'
    template_type: 'Int'
    content: 'String'
    locked: 'Boolean'
    properties: 'String'
    static: 'Boolean'
    static_file: 'String'
  }
  bani684_site_tmplvars: {
    id: 'Int'
    source: 'Int'
    property_preprocess: 'Boolean'
    type: 'String'
    name: 'String'
    caption: 'String'
    description: 'String'
    editor_type: 'Int'
    category: 'Int'
    locked: 'Boolean'
    elements: 'String'
    rank: 'Int'
    display: 'String'
    default_text: 'String'
    properties: 'String'
    input_properties: 'String'
    output_properties: 'String'
    static: 'Boolean'
    static_file: 'String'
  }
  bani684_site_tmplvar_access: {
    id: 'Int'
    tmplvarid: 'Int'
    documentgroup: 'Int'
  }
  bani684_site_tmplvar_contentvalues: {
    id: 'Int'
    tmplvarid: 'Int'
    contentid: 'Int'
    value: 'String'
    Resource: 'bani684_site_content'
  }
  bani684_site_tmplvar_templates: {
    tmplvarid: 'Int'
    templateid: 'Int'
    rank: 'Int'
  }
  bani684_society_blog_attributes: {
    id: 'Int'
    resourceid: 'Int'
    content_hash: 'String'
  }
  bani684_society_blog_topic: {
    id: 'Int'
    blogid: 'Int'
    topicid: 'Int'
    rank: 'Int'
  }
  bani684_society_comments: {
    id: 'Int'
    thread_id: 'Int'
    parent: 'Int'
    text: 'String'
    raw_text: 'String'
    ip: 'String'
    createdon: 'DateTime'
    createdby: 'Int'
    editedon: 'DateTime'
    editedby: 'Int'
    published: 'String'
    deleted: 'String'
    deletedon: 'DateTime'
    deletedby: 'Int'
    comments_count: 'Int'
    properties: 'String'
  }
  bani684_society_email_messages: {
    id: 'Int'
    user_id: 'Int'
    subject: 'String'
    message: 'String'
    date: 'DateTime'
    status: 'Int'
  }
  bani684_society_notice_types: {
    id: 'Int'
    type: 'String'
    comment: 'String'
    rank: 'Int'
    target: 'String'
  }
  bani684_society_notice_users: {
    id: 'Int'
    notice_id: 'Int'
    user_id: 'Int'
    active: 'Int'
  }
  bani684_society_subscribers: {
    userid: 'Int'
    subscriberid: 'Int'
    rank: 'Int'
  }
  bani684_society_threads: {
    id: 'Int'
    target_id: 'Int'
    target_class: 'String'
    comments_count: 'Int'
    createdon: 'DateTime'
    editedon: 'DateTime'
    views: 'Int'
    rating: 'Float'
    positive_votes: 'Int'
    negative_votes: 'Int'
    neutral_votes: 'Int'
  }
  bani684_society_topic_attributes: {
    id: 'Int'
    resourceid: 'Int'
    content_hash: 'String'
    short_text: 'String'
    raw_content: 'String'
    topic_tags: 'String'
  }
  bani684_society_topic_tags: {
    id: 'Int'
    topic_id: 'Int'
    tag: 'String'
    active: 'Boolean'
  }
  bani684_society_user_attributes: {
    id: 'Int'
    internalKey: 'Int'
    createdon: 'Int'
  }
  bani684_society_votes: {
    id: 'Int'
    target_id: 'Int'
    target_class: 'String'
    type: 'Int'
    thread_id: 'Int'
    user_id: 'Int'
    vote_direction: 'String'
    vote_value: 'Float'
    vote_date: 'DateTime'
  }
  bani684_system_eventnames: {
    name: 'String'
    service: 'Int'
    groupname: 'String'
  }
  bani684_system_settings: {
    key: 'String'
    value: 'String'
    xtype: 'String'
    namespace: 'String'
    area: 'String'
    editedon: 'DateTime'
  }
  bani684_transport_packages: {
    signature: 'String'
    created: 'DateTime'
    updated: 'DateTime'
    installed: 'DateTime'
    state: 'Boolean'
    workspace: 'Int'
    provider: 'Int'
    disabled: 'Boolean'
    source: 'String'
    manifest: 'String'
    attributes: 'String'
    package_name: 'String'
    metadata: 'String'
    version_major: 'Int'
    version_minor: 'Int'
    version_patch: 'Int'
    release: 'String'
    release_index: 'Int'
  }
  bani684_transport_providers: {
    id: 'Int'
    name: 'String'
    description: 'String'
    service_url: 'String'
    username: 'String'
    api_key: 'String'
    created: 'DateTime'
    updated: 'DateTime'
    active: 'Boolean'
    priority: 'Int'
    properties: 'String'
  }
  bani684_users: {
    id: 'Int'
    username: 'String'
    password: 'String'
    cachepwd: 'String'
    class_key: 'String'
    active: 'Boolean'
    remote_key: 'String'
    remote_data: 'String'
    hash_class: 'String'
    salt: 'String'
    primary_group: 'Int'
    session_stale: 'String'
    sudo: 'Boolean'
    createdon: 'Int'
    delegate: 'String'
    offer: 'String'
    offer_date: 'Int'
    contract_date: 'Int'
    createdby: 'Int'
  }
  bani684_user_attributes: {
    id: 'Int'
    internalKey: 'Int'
    fullname: 'String'
    email: 'String'
    phone: 'String'
    mobilephone: 'String'
    blocked: 'Boolean'
    blockeduntil: 'Int'
    blockedafter: 'Int'
    logincount: 'Int'
    lastlogin: 'Int'
    thislogin: 'Int'
    failedlogincount: 'Int'
    sessionid: 'String'
    dob: 'Int'
    gender: 'Int'
    address: 'String'
    country: 'String'
    city: 'String'
    state: 'String'
    zip: 'String'
    fax: 'String'
    photo: 'String'
    comment: 'String'
    website: 'String'
    extended: 'String'
  }
  bani684_user_group_roles: {
    id: 'Int'
    name: 'String'
    description: 'String'
    authority: 'Int'
  }
  bani684_user_group_settings: {
    group: 'Int'
    key: 'String'
    value: 'String'
    xtype: 'String'
    namespace: 'String'
    area: 'String'
    editedon: 'DateTime'
  }
  bani684_user_messages: {
    id: 'Int'
    type: 'String'
    subject: 'String'
    message: 'String'
    sender: 'Int'
    recipient: 'Int'
    private: 'Int'
    date_sent: 'DateTime'
    read: 'Boolean'
  }
  bani684_user_settings: {
    user: 'Int'
    key: 'String'
    value: 'String'
    xtype: 'String'
    namespace: 'String'
    area: 'String'
    editedon: 'DateTime'
  }
  bani684_versionx_chunk: {
    version_id: 'Int'
    content_id: 'Int'
    saved: 'DateTime'
    user: 'Int'
    mode: 'String'
    marked: 'Boolean'
    name: 'String'
    description: 'String'
    category: 'Int'
    snippet: 'String'
    locked: 'Boolean'
    properties: 'String'
  }
  bani684_versionx_plugin: {
    version_id: 'Int'
    content_id: 'Int'
    saved: 'DateTime'
    user: 'Int'
    mode: 'String'
    marked: 'Boolean'
    name: 'String'
    description: 'String'
    category: 'Int'
    plugincode: 'String'
    locked: 'Boolean'
    properties: 'String'
    disabled: 'Boolean'
  }
  bani684_versionx_resource: {
    version_id: 'Int'
    content_id: 'Int'
    saved: 'DateTime'
    user: 'Int'
    mode: 'String'
    marked: 'Boolean'
    title: 'String'
    context_key: 'String'
    class: 'String'
    content: 'String'
    fields: 'String'
    tvs: 'String'
  }
  bani684_versionx_snippet: {
    version_id: 'Int'
    content_id: 'Int'
    saved: 'DateTime'
    user: 'Int'
    mode: 'String'
    marked: 'Boolean'
    name: 'String'
    description: 'String'
    category: 'Int'
    snippet: 'String'
    locked: 'Boolean'
    properties: 'String'
  }
  bani684_versionx_template: {
    version_id: 'Int'
    content_id: 'Int'
    saved: 'DateTime'
    user: 'Int'
    mode: 'String'
    marked: 'Boolean'
    templatename: 'String'
    description: 'String'
    category: 'Int'
    content: 'String'
    locked: 'Boolean'
    properties: 'String'
  }
  bani684_versionx_templatevar: {
    version_id: 'Int'
    content_id: 'Int'
    saved: 'DateTime'
    user: 'Int'
    mode: 'String'
    marked: 'Boolean'
    type: 'String'
    name: 'String'
    caption: 'String'
    description: 'String'
    category: 'Int'
    locked: 'Boolean'
    rank: 'Int'
    display: 'String'
    default_text: 'String'
    properties: 'String'
    input_properties: 'String'
    output_properties: 'String'
  }
  bani684_visitors: {
    id: 'Int'
    date: 'DateTime'
    url: 'String'
    referer: 'String'
    userAgent: 'String'
    user_id: 'Int'
    ip: 'String'
    status: 'Int'
    cookie: 'String'
  }
  bani684_workspaces: {
    id: 'Int'
    name: 'String'
    path: 'String'
    created: 'DateTime'
    active: 'Boolean'
    attributes: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  bani684_access_actiondom: Typegen.NexusPrismaFields<'bani684_access_actiondom'>
  bani684_access_actions: Typegen.NexusPrismaFields<'bani684_access_actions'>
  bani684_access_category: Typegen.NexusPrismaFields<'bani684_access_category'>
  bani684_access_context: Typegen.NexusPrismaFields<'bani684_access_context'>
  bani684_access_elements: Typegen.NexusPrismaFields<'bani684_access_elements'>
  bani684_access_media_source: Typegen.NexusPrismaFields<'bani684_access_media_source'>
  bani684_access_menus: Typegen.NexusPrismaFields<'bani684_access_menus'>
  bani684_access_namespace: Typegen.NexusPrismaFields<'bani684_access_namespace'>
  bani684_access_permissions: Typegen.NexusPrismaFields<'bani684_access_permissions'>
  bani684_access_policies: Typegen.NexusPrismaFields<'bani684_access_policies'>
  bani684_access_policy_templates: Typegen.NexusPrismaFields<'bani684_access_policy_templates'>
  bani684_access_policy_template_groups: Typegen.NexusPrismaFields<'bani684_access_policy_template_groups'>
  bani684_access_resources: Typegen.NexusPrismaFields<'bani684_access_resources'>
  bani684_access_resource_groups: Typegen.NexusPrismaFields<'bani684_access_resource_groups'>
  bani684_access_templatevars: Typegen.NexusPrismaFields<'bani684_access_templatevars'>
  bani684_actiondom: Typegen.NexusPrismaFields<'bani684_actiondom'>
  bani684_actions: Typegen.NexusPrismaFields<'bani684_actions'>
  bani684_actions_fields: Typegen.NexusPrismaFields<'bani684_actions_fields'>
  bani684_active_users: Typegen.NexusPrismaFields<'bani684_active_users'>
  bani684_categories: Typegen.NexusPrismaFields<'bani684_categories'>
  bani684_categories_closure: Typegen.NexusPrismaFields<'bani684_categories_closure'>
  bani684_class_map: Typegen.NexusPrismaFields<'bani684_class_map'>
  bani684_cmpgenerator: Typegen.NexusPrismaFields<'bani684_cmpgenerator'>
  bani684_content_type: Typegen.NexusPrismaFields<'bani684_content_type'>
  bani684_context: Typegen.NexusPrismaFields<'bani684_context'>
  bani684_context_resource: Typegen.NexusPrismaFields<'bani684_context_resource'>
  bani684_context_setting: Typegen.NexusPrismaFields<'bani684_context_setting'>
  bani684_dashboard: Typegen.NexusPrismaFields<'bani684_dashboard'>
  bani684_dashboard_widget: Typegen.NexusPrismaFields<'bani684_dashboard_widget'>
  bani684_dashboard_widget_placement: Typegen.NexusPrismaFields<'bani684_dashboard_widget_placement'>
  bani684_documentgroup_names: Typegen.NexusPrismaFields<'bani684_documentgroup_names'>
  bani684_document_groups: Typegen.NexusPrismaFields<'bani684_document_groups'>
  bani684_edit_versions: Typegen.NexusPrismaFields<'bani684_edit_versions'>
  bani684_element_property_sets: Typegen.NexusPrismaFields<'bani684_element_property_sets'>
  bani684_extension_packages: Typegen.NexusPrismaFields<'bani684_extension_packages'>
  bani684_fc_profiles: Typegen.NexusPrismaFields<'bani684_fc_profiles'>
  bani684_fc_profiles_usergroups: Typegen.NexusPrismaFields<'bani684_fc_profiles_usergroups'>
  bani684_fc_sets: Typegen.NexusPrismaFields<'bani684_fc_sets'>
  bani684_gallery_albums: Typegen.NexusPrismaFields<'bani684_gallery_albums'>
  bani684_gallery_album_contexts: Typegen.NexusPrismaFields<'bani684_gallery_album_contexts'>
  bani684_gallery_album_items: Typegen.NexusPrismaFields<'bani684_gallery_album_items'>
  bani684_gallery_items: Typegen.NexusPrismaFields<'bani684_gallery_items'>
  bani684_gallery_tags: Typegen.NexusPrismaFields<'bani684_gallery_tags'>
  bani684_lexicon_entries: Typegen.NexusPrismaFields<'bani684_lexicon_entries'>
  bani684_manager_log: Typegen.NexusPrismaFields<'bani684_manager_log'>
  bani684_media_sources: Typegen.NexusPrismaFields<'bani684_media_sources'>
  bani684_media_sources_contexts: Typegen.NexusPrismaFields<'bani684_media_sources_contexts'>
  bani684_media_sources_elements: Typegen.NexusPrismaFields<'bani684_media_sources_elements'>
  bani684_membergroup_names: Typegen.NexusPrismaFields<'bani684_membergroup_names'>
  bani684_membergroup_template: Typegen.NexusPrismaFields<'bani684_membergroup_template'>
  bani684_member_groups: Typegen.NexusPrismaFields<'bani684_member_groups'>
  bani684_menus: Typegen.NexusPrismaFields<'bani684_menus'>
  bani684_migx_configs: Typegen.NexusPrismaFields<'bani684_migx_configs'>
  bani684_migx_config_elements: Typegen.NexusPrismaFields<'bani684_migx_config_elements'>
  bani684_migx_elements: Typegen.NexusPrismaFields<'bani684_migx_elements'>
  bani684_migx_formtabs: Typegen.NexusPrismaFields<'bani684_migx_formtabs'>
  bani684_migx_formtab_fields: Typegen.NexusPrismaFields<'bani684_migx_formtab_fields'>
  bani684_modhybridauth_providers: Typegen.NexusPrismaFields<'bani684_modhybridauth_providers'>
  bani684_modhybridauth_user_profile: Typegen.NexusPrismaFields<'bani684_modhybridauth_user_profile'>
  bani684_modsearch_indexes: Typegen.NexusPrismaFields<'bani684_modsearch_indexes'>
  bani684_modxsdk_package: Typegen.NexusPrismaFields<'bani684_modxsdk_package'>
  bani684_modxsdk_packagesource: Typegen.NexusPrismaFields<'bani684_modxsdk_packagesource'>
  bani684_modxsdk_package_vehicle: Typegen.NexusPrismaFields<'bani684_modxsdk_package_vehicle'>
  bani684_modxsdk_project: Typegen.NexusPrismaFields<'bani684_modxsdk_project'>
  bani684_modxsdk_project_package: Typegen.NexusPrismaFields<'bani684_modxsdk_project_package'>
  bani684_modxsdk_vehicle: Typegen.NexusPrismaFields<'bani684_modxsdk_vehicle'>
  bani684_modxsite_cities: Typegen.NexusPrismaFields<'bani684_modxsite_cities'>
  bani684_modxsite_companies: Typegen.NexusPrismaFields<'bani684_modxsite_companies'>
  bani684_modxsite_countries: Typegen.NexusPrismaFields<'bani684_modxsite_countries'>
  bani684_monitor_requests: Typegen.NexusPrismaFields<'bani684_monitor_requests'>
  bani684_monitor_request_items: Typegen.NexusPrismaFields<'bani684_monitor_request_items'>
  bani684_namespaces: Typegen.NexusPrismaFields<'bani684_namespaces'>
  bani684_packman_profile: Typegen.NexusPrismaFields<'bani684_packman_profile'>
  bani684_property_set: Typegen.NexusPrismaFields<'bani684_property_set'>
  bani684_redirects: Typegen.NexusPrismaFields<'bani684_redirects'>
  bani684_register_messages: Typegen.NexusPrismaFields<'bani684_register_messages'>
  bani684_register_queues: Typegen.NexusPrismaFields<'bani684_register_queues'>
  bani684_register_topics: Typegen.NexusPrismaFields<'bani684_register_topics'>
  bani684_search_stat: Typegen.NexusPrismaFields<'bani684_search_stat'>
  bani684_session: Typegen.NexusPrismaFields<'bani684_session'>
  bani684_site_content: Typegen.NexusPrismaFields<'bani684_site_content'>
  bani684_site_htmlsnippets: Typegen.NexusPrismaFields<'bani684_site_htmlsnippets'>
  bani684_site_plugins: Typegen.NexusPrismaFields<'bani684_site_plugins'>
  bani684_site_plugin_events: Typegen.NexusPrismaFields<'bani684_site_plugin_events'>
  bani684_site_snippets: Typegen.NexusPrismaFields<'bani684_site_snippets'>
  bani684_site_templates: Typegen.NexusPrismaFields<'bani684_site_templates'>
  bani684_site_tmplvars: Typegen.NexusPrismaFields<'bani684_site_tmplvars'>
  bani684_site_tmplvar_access: Typegen.NexusPrismaFields<'bani684_site_tmplvar_access'>
  bani684_site_tmplvar_contentvalues: Typegen.NexusPrismaFields<'bani684_site_tmplvar_contentvalues'>
  bani684_site_tmplvar_templates: Typegen.NexusPrismaFields<'bani684_site_tmplvar_templates'>
  bani684_society_blog_attributes: Typegen.NexusPrismaFields<'bani684_society_blog_attributes'>
  bani684_society_blog_topic: Typegen.NexusPrismaFields<'bani684_society_blog_topic'>
  bani684_society_comments: Typegen.NexusPrismaFields<'bani684_society_comments'>
  bani684_society_email_messages: Typegen.NexusPrismaFields<'bani684_society_email_messages'>
  bani684_society_notice_types: Typegen.NexusPrismaFields<'bani684_society_notice_types'>
  bani684_society_notice_users: Typegen.NexusPrismaFields<'bani684_society_notice_users'>
  bani684_society_subscribers: Typegen.NexusPrismaFields<'bani684_society_subscribers'>
  bani684_society_threads: Typegen.NexusPrismaFields<'bani684_society_threads'>
  bani684_society_topic_attributes: Typegen.NexusPrismaFields<'bani684_society_topic_attributes'>
  bani684_society_topic_tags: Typegen.NexusPrismaFields<'bani684_society_topic_tags'>
  bani684_society_user_attributes: Typegen.NexusPrismaFields<'bani684_society_user_attributes'>
  bani684_society_votes: Typegen.NexusPrismaFields<'bani684_society_votes'>
  bani684_system_eventnames: Typegen.NexusPrismaFields<'bani684_system_eventnames'>
  bani684_system_settings: Typegen.NexusPrismaFields<'bani684_system_settings'>
  bani684_transport_packages: Typegen.NexusPrismaFields<'bani684_transport_packages'>
  bani684_transport_providers: Typegen.NexusPrismaFields<'bani684_transport_providers'>
  bani684_users: Typegen.NexusPrismaFields<'bani684_users'>
  bani684_user_attributes: Typegen.NexusPrismaFields<'bani684_user_attributes'>
  bani684_user_group_roles: Typegen.NexusPrismaFields<'bani684_user_group_roles'>
  bani684_user_group_settings: Typegen.NexusPrismaFields<'bani684_user_group_settings'>
  bani684_user_messages: Typegen.NexusPrismaFields<'bani684_user_messages'>
  bani684_user_settings: Typegen.NexusPrismaFields<'bani684_user_settings'>
  bani684_versionx_chunk: Typegen.NexusPrismaFields<'bani684_versionx_chunk'>
  bani684_versionx_plugin: Typegen.NexusPrismaFields<'bani684_versionx_plugin'>
  bani684_versionx_resource: Typegen.NexusPrismaFields<'bani684_versionx_resource'>
  bani684_versionx_snippet: Typegen.NexusPrismaFields<'bani684_versionx_snippet'>
  bani684_versionx_template: Typegen.NexusPrismaFields<'bani684_versionx_template'>
  bani684_versionx_templatevar: Typegen.NexusPrismaFields<'bani684_versionx_templatevar'>
  bani684_visitors: Typegen.NexusPrismaFields<'bani684_visitors'>
  bani684_workspaces: Typegen.NexusPrismaFields<'bani684_workspaces'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  