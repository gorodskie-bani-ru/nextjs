-- DropForeignKey
ALTER TABLE `bani684_site_content` DROP FOREIGN KEY `bani684_site_content_ibfk_1`;

-- DropForeignKey
ALTER TABLE `bani684_site_tmplvar_contentvalues` DROP FOREIGN KEY `bani684_site_tmplvar_contentvalues_ibfk_1`;

-- DropForeignKey
ALTER TABLE `bani684_society_comments` DROP FOREIGN KEY `bani684_society_comments_ibfk_1`;

-- DropForeignKey
ALTER TABLE `bani684_society_topic_tags` DROP FOREIGN KEY `bani684_society_topic_tags_ibfk_1`;

-- DropForeignKey
ALTER TABLE `bani684_society_votes` DROP FOREIGN KEY `bani684_society_votes_ibfk_1`;

-- DropForeignKey
ALTER TABLE `bani684_society_votes` DROP FOREIGN KEY `bani684_society_votes_ibfk_2`;

-- DropForeignKey
ALTER TABLE `bani684_user_attributes` DROP FOREIGN KEY `bani684_user_attributes_ibfk_1`;

-- AddForeignKey
ALTER TABLE `bani684_site_content` ADD CONSTRAINT `bani684_site_content_createdby_fkey` FOREIGN KEY (`createdby`) REFERENCES `bani684_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bani684_site_tmplvar_contentvalues` ADD CONSTRAINT `bani684_site_tmplvar_contentvalues_contentid_fkey` FOREIGN KEY (`contentid`) REFERENCES `bani684_site_content`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bani684_society_comments` ADD CONSTRAINT `bani684_society_comments_createdby_fkey` FOREIGN KEY (`createdby`) REFERENCES `bani684_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bani684_society_topic_tags` ADD CONSTRAINT `bani684_society_topic_tags_topic_id_fkey` FOREIGN KEY (`topic_id`) REFERENCES `bani684_site_content`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bani684_society_votes` ADD CONSTRAINT `bani684_society_votes_type_fkey` FOREIGN KEY (`type`) REFERENCES `bani684_site_content`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bani684_society_votes` ADD CONSTRAINT `bani684_society_votes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `bani684_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bani684_user_attributes` ADD CONSTRAINT `bani684_user_attributes_internalKey_fkey` FOREIGN KEY (`internalKey`) REFERENCES `bani684_users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `bani684_access_policies` RENAME INDEX `bani684_access_policies.name_unique` TO `bani684_access_policies_name_key`;

-- RenameIndex
ALTER TABLE `bani684_categories` RENAME INDEX `category` TO `bani684_categories_parent_category_key`;

-- RenameIndex
ALTER TABLE `bani684_class_map` RENAME INDEX `bani684_class_map.class_unique` TO `bani684_class_map_class_key`;

-- RenameIndex
ALTER TABLE `bani684_content_type` RENAME INDEX `bani684_content_type.name_unique` TO `bani684_content_type_name_key`;

-- RenameIndex
ALTER TABLE `bani684_documentgroup_names` RENAME INDEX `bani684_documentgroup_names.name_unique` TO `bani684_documentgroup_names_name_key`;

-- RenameIndex
ALTER TABLE `bani684_membergroup_names` RENAME INDEX `bani684_membergroup_names.name_unique` TO `bani684_membergroup_names_name_key`;

-- RenameIndex
ALTER TABLE `bani684_modhybridauth_providers` RENAME INDEX `bani684_modhybridauth_providers.name_unique` TO `bani684_modhybridauth_providers_name_key`;

-- RenameIndex
ALTER TABLE `bani684_modhybridauth_user_profile` RENAME INDEX `identifier` TO `bani684_modhybridauth_user_profile_identifier_provider_key`;

-- RenameIndex
ALTER TABLE `bani684_modhybridauth_user_profile` RENAME INDEX `internalKey` TO `bani684_modhybridauth_user_profile_internalKey_provider_key`;

-- RenameIndex
ALTER TABLE `bani684_modxsdk_package` RENAME INDEX `name` TO `bani684_modxsdk_package_name_version_major_version_minor_ver_key`;

-- RenameIndex
ALTER TABLE `bani684_modxsdk_project_package` RENAME INDEX `projectid` TO `bani684_modxsdk_project_package_projectid_packageid_key`;

-- RenameIndex
ALTER TABLE `bani684_modxsite_cities` RENAME INDEX `Index` TO `bani684_modxsite_cities_city_country_id_key`;

-- RenameIndex
ALTER TABLE `bani684_modxsite_cities` RENAME INDEX `bani684_modxsite_cities.domain_unique` TO `bani684_modxsite_cities_domain_key`;

-- RenameIndex
ALTER TABLE `bani684_modxsite_companies` RENAME INDEX `bani684_modxsite_companies.blog_id_unique` TO `bani684_modxsite_companies_blog_id_key`;

-- RenameIndex
ALTER TABLE `bani684_modxsite_companies` RENAME INDEX `bani684_modxsite_companies.resource_id_unique` TO `bani684_modxsite_companies_resource_id_key`;

-- RenameIndex
ALTER TABLE `bani684_modxsite_countries` RENAME INDEX `bani684_modxsite_countries.country_unique` TO `bani684_modxsite_countries_country_key`;

-- RenameIndex
ALTER TABLE `bani684_property_set` RENAME INDEX `bani684_property_set.name_unique` TO `bani684_property_set_name_key`;

-- RenameIndex
ALTER TABLE `bani684_redirects` RENAME INDEX `bani684_redirects.uri_unique` TO `bani684_redirects_uri_key`;

-- RenameIndex
ALTER TABLE `bani684_register_queues` RENAME INDEX `bani684_register_queues.name_unique` TO `bani684_register_queues_name_key`;

-- RenameIndex
ALTER TABLE `bani684_site_htmlsnippets` RENAME INDEX `bani684_site_htmlsnippets.name_unique` TO `bani684_site_htmlsnippets_name_key`;

-- RenameIndex
ALTER TABLE `bani684_site_plugins` RENAME INDEX `bani684_site_plugins.name_unique` TO `bani684_site_plugins_name_key`;

-- RenameIndex
ALTER TABLE `bani684_site_snippets` RENAME INDEX `bani684_site_snippets.name_unique` TO `bani684_site_snippets_name_key`;

-- RenameIndex
ALTER TABLE `bani684_site_templates` RENAME INDEX `bani684_site_templates.templatename_unique` TO `bani684_site_templates_templatename_key`;

-- RenameIndex
ALTER TABLE `bani684_site_tmplvars` RENAME INDEX `bani684_site_tmplvars.name_unique` TO `bani684_site_tmplvars_name_key`;

-- RenameIndex
ALTER TABLE `bani684_society_blog_attributes` RENAME INDEX `bani684_society_blog_attributes.content_hash_unique` TO `bani684_society_blog_attributes_content_hash_key`;

-- RenameIndex
ALTER TABLE `bani684_society_blog_attributes` RENAME INDEX `bani684_society_blog_attributes.resourceid_unique` TO `bani684_society_blog_attributes_resourceid_key`;

-- RenameIndex
ALTER TABLE `bani684_society_blog_topic` RENAME INDEX `blogid` TO `bani684_society_blog_topic_blogid_topicid_key`;

-- RenameIndex
ALTER TABLE `bani684_society_notice_types` RENAME INDEX `bani684_society_notice_types.type_unique` TO `bani684_society_notice_types_type_key`;

-- RenameIndex
ALTER TABLE `bani684_society_notice_users` RENAME INDEX `notice_id` TO `bani684_society_notice_users_notice_id_user_id_key`;

-- RenameIndex
ALTER TABLE `bani684_society_subscribers` RENAME INDEX `userid` TO `bani684_society_subscribers_userid_subscriberid_key`;

-- RenameIndex
ALTER TABLE `bani684_society_threads` RENAME INDEX `target_id` TO `bani684_society_threads_target_id_target_class_key`;

-- RenameIndex
ALTER TABLE `bani684_society_topic_attributes` RENAME INDEX `bani684_society_topic_attributes.content_hash_unique` TO `bani684_society_topic_attributes_content_hash_key`;

-- RenameIndex
ALTER TABLE `bani684_society_topic_attributes` RENAME INDEX `bani684_society_topic_attributes.resourceid_unique` TO `bani684_society_topic_attributes_resourceid_key`;

-- RenameIndex
ALTER TABLE `bani684_society_topic_tags` RENAME INDEX `active` TO `bani684_society_topic_tags_active_idx`;

-- RenameIndex
ALTER TABLE `bani684_society_topic_tags` RENAME INDEX `topic_id` TO `bani684_society_topic_tags_topic_id_tag_key`;

-- RenameIndex
ALTER TABLE `bani684_society_user_attributes` RENAME INDEX `bani684_society_user_attributes.internalKey_unique` TO `bani684_society_user_attributes_internalKey_key`;

-- RenameIndex
ALTER TABLE `bani684_society_votes` RENAME INDEX `target_id` TO `bani684_society_votes_target_id_target_class_user_id_type_key`;

-- RenameIndex
ALTER TABLE `bani684_society_votes` RENAME INDEX `thread_id` TO `bani684_society_votes_thread_id_user_id_type_key`;

-- RenameIndex
ALTER TABLE `bani684_transport_providers` RENAME INDEX `bani684_transport_providers.name_unique` TO `bani684_transport_providers_name_key`;

-- RenameIndex
ALTER TABLE `bani684_user_attributes` RENAME INDEX `bani684_user_attributes.internalKey_unique` TO `bani684_user_attributes_internalKey_key`;

-- RenameIndex
ALTER TABLE `bani684_user_group_roles` RENAME INDEX `bani684_user_group_roles.name_unique` TO `bani684_user_group_roles_name_key`;

-- RenameIndex
ALTER TABLE `bani684_users` RENAME INDEX `bani684_users.username_unique` TO `bani684_users_username_key`;

-- RenameIndex
ALTER TABLE `bani684_workspaces` RENAME INDEX `bani684_workspaces.path_unique` TO `bani684_workspaces_path_key`;
