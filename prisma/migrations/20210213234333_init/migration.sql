-- CreateTable
CREATE TABLE `bani684_access_actiondom` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `authority`(`authority`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_actions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `authority`(`authority`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_category` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `authority`(`authority`),
INDEX `context_key`(`context_key`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_context` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `authority`(`authority`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_elements` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `authority`(`authority`),
INDEX `context_key`(`context_key`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_media_source` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `authority`(`authority`),
INDEX `context_key`(`context_key`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_menus` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `authority`(`authority`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_namespace` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `authority`(`authority`),
INDEX `context_key`(`context_key`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_permissions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `template` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT NOT NULL,
    `value` BOOLEAN NOT NULL DEFAULT true,
INDEX `name`(`name`),
INDEX `template`(`template`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_policies` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT,
    `parent` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `template` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `class` VARCHAR(255) NOT NULL DEFAULT '',
    `data` TEXT,
    `lexicon` VARCHAR(255) NOT NULL DEFAULT 'permissions',
UNIQUE INDEX `bani684_access_policies.name_unique`(`name`),
INDEX `class`(`class`),
INDEX `parent`(`parent`),
INDEX `template`(`template`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_policy_templates` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `template_group` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` MEDIUMTEXT,
    `lexicon` VARCHAR(255) NOT NULL DEFAULT 'permissions',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_policy_template_groups` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` MEDIUMTEXT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_resources` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `authority`(`authority`),
INDEX `context_key`(`context_key`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_resource_groups` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `authority`(`authority`),
INDEX `context_key`(`context_key`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`, `target`, `principal`, `authority`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_access_templatevars` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target` VARCHAR(100) NOT NULL DEFAULT '',
    `principal_class` VARCHAR(100) NOT NULL DEFAULT 'modPrincipal',
    `principal` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
    `policy` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `authority`(`authority`),
INDEX `context_key`(`context_key`),
INDEX `policy`(`policy`),
INDEX `principal`(`principal`),
INDEX `principal_class`(`principal_class`),
INDEX `target`(`target`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_actiondom` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `set` INTEGER NOT NULL DEFAULT 0,
    `action` VARCHAR(255) NOT NULL DEFAULT '',
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT,
    `xtype` VARCHAR(100) NOT NULL DEFAULT '',
    `container` VARCHAR(255) NOT NULL DEFAULT '',
    `rule` VARCHAR(100) NOT NULL DEFAULT '',
    `value` TEXT NOT NULL,
    `constraint` VARCHAR(255) NOT NULL DEFAULT '',
    `constraint_field` VARCHAR(100) NOT NULL DEFAULT '',
    `constraint_class` VARCHAR(100) NOT NULL DEFAULT '',
    `active` BOOLEAN NOT NULL DEFAULT true,
    `for_parent` BOOLEAN NOT NULL DEFAULT false,
    `rank` INTEGER NOT NULL DEFAULT 0,
INDEX `action`(`action`),
INDEX `active`(`active`),
INDEX `for_parent`(`for_parent`),
INDEX `name`(`name`),
INDEX `rank`(`rank`),
INDEX `set`(`set`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_actions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `namespace` VARCHAR(100) NOT NULL DEFAULT 'core',
    `controller` VARCHAR(255) NOT NULL,
    `haslayout` BOOLEAN NOT NULL DEFAULT true,
    `lang_topics` TEXT NOT NULL,
    `assets` TEXT NOT NULL,
    `help_url` TEXT NOT NULL,
INDEX `controller`(`controller`),
INDEX `namespace`(`namespace`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_actions_fields` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `action` VARCHAR(255) NOT NULL DEFAULT '',
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `type` VARCHAR(100) NOT NULL DEFAULT 'field',
    `tab` VARCHAR(255) NOT NULL DEFAULT '',
    `form` VARCHAR(255) NOT NULL DEFAULT '',
    `other` VARCHAR(255) NOT NULL DEFAULT '',
    `rank` INTEGER NOT NULL DEFAULT 0,
INDEX `action`(`action`),
INDEX `tab`(`tab`),
INDEX `type`(`type`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_active_users` (
    `internalKey` INTEGER NOT NULL DEFAULT 0,
    `username` VARCHAR(50) NOT NULL DEFAULT '',
    `lasthit` INTEGER NOT NULL DEFAULT 0,
    `id` INTEGER,
    `action` VARCHAR(255) NOT NULL DEFAULT '',
    `ip` VARCHAR(20) NOT NULL DEFAULT '',

    PRIMARY KEY (`internalKey`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_categories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent` INTEGER UNSIGNED DEFAULT 0,
    `category` VARCHAR(45) NOT NULL DEFAULT '',
    `rank` INTEGER NOT NULL DEFAULT 0,
UNIQUE INDEX `category`(`parent`, `category`),
INDEX `parent`(`parent`),
INDEX `rank`(`rank`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_categories_closure` (
    `ancestor` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `descendant` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `depth` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`ancestor`,`descendant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_class_map` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `class` VARCHAR(120) NOT NULL DEFAULT '',
    `parent_class` VARCHAR(120) NOT NULL DEFAULT '',
    `name_field` VARCHAR(255) NOT NULL DEFAULT 'name',
    `path` TINYTEXT,
    `lexicon` VARCHAR(255) NOT NULL DEFAULT 'core:resource',
UNIQUE INDEX `bani684_class_map.class_unique`(`class`),
INDEX `name_field`(`name_field`),
INDEX `parent_class`(`parent_class`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_cmpgenerator` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `package` VARCHAR(255) DEFAULT '',
    `database` VARCHAR(128) DEFAULT '',
    `tables` TEXT,
    `table_prefix` VARCHAR(255) DEFAULT '',
    `build_scheme` INTEGER DEFAULT 1,
    `build_package` INTEGER DEFAULT 1,
    `create_date` DATETIME(0),
    `last_ran` DATETIME(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_content_type` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TINYTEXT,
    `mime_type` TINYTEXT,
    `file_extensions` TINYTEXT,
    `headers` MEDIUMTEXT,
    `binary` BOOLEAN NOT NULL DEFAULT false,
UNIQUE INDEX `bani684_content_type.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_context` (
    `key` VARCHAR(100) NOT NULL,
    `description` TINYTEXT,
    `rank` INTEGER NOT NULL DEFAULT 0,
    `name` VARCHAR(255),
INDEX `name`(`name`),
INDEX `rank`(`rank`),

    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_context_resource` (
    `context_key` VARCHAR(255) NOT NULL,
    `resource` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`context_key`,`resource`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_context_setting` (
    `context_key` VARCHAR(255) NOT NULL,
    `key` VARCHAR(50) NOT NULL,
    `value` MEDIUMTEXT,
    `xtype` VARCHAR(75) NOT NULL DEFAULT 'textfield',
    `namespace` VARCHAR(40) NOT NULL DEFAULT 'core',
    `area` VARCHAR(255) NOT NULL DEFAULT '',
    `editedon` DATETIME(0) NOT NULL,

    PRIMARY KEY (`context_key`,`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_dashboard` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT,
    `hide_trees` BOOLEAN NOT NULL DEFAULT false,
INDEX `hide_trees`(`hide_trees`),
INDEX `name`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_dashboard_widget` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT,
    `type` VARCHAR(100) NOT NULL,
    `content` MEDIUMTEXT,
    `namespace` VARCHAR(255) NOT NULL DEFAULT '',
    `lexicon` VARCHAR(255) NOT NULL DEFAULT 'core:dashboards',
    `size` VARCHAR(255) NOT NULL DEFAULT 'half',
INDEX `lexicon`(`lexicon`),
INDEX `name`(`name`),
INDEX `namespace`(`namespace`),
INDEX `type`(`type`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_dashboard_widget_placement` (
    `dashboard` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `widget` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `rank`(`rank`),

    PRIMARY KEY (`dashboard`,`widget`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_documentgroup_names` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `private_memgroup` BOOLEAN NOT NULL DEFAULT false,
    `private_webgroup` BOOLEAN NOT NULL DEFAULT false,
UNIQUE INDEX `bani684_documentgroup_names.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_document_groups` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `document_group` INTEGER NOT NULL DEFAULT 0,
    `document` INTEGER NOT NULL DEFAULT 0,
INDEX `document`(`document`),
INDEX `document_group`(`document_group`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_edit_versions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target_id` INTEGER UNSIGNED NOT NULL,
    `data` TEXT,
    `createdby` INTEGER UNSIGNED,
    `createdon` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `editedby` INTEGER UNSIGNED,
    `editedon` DATETIME(0),
    `status` CHAR(1) NOT NULL DEFAULT '0',
INDEX `createdby`(`createdby`),
INDEX `createdon`(`createdon`),
INDEX `editedby`(`editedby`),
INDEX `editedon`(`editedon`),
INDEX `status`(`status`),
INDEX `target_id`(`target_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_element_property_sets` (
    `element` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `element_class` VARCHAR(100) NOT NULL DEFAULT '',
    `property_set` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`element`,`element_class`,`property_set`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_extension_packages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `namespace` VARCHAR(40) NOT NULL DEFAULT 'core',
    `name` VARCHAR(100) NOT NULL DEFAULT 'core',
    `path` TEXT,
    `table_prefix` VARCHAR(255) NOT NULL DEFAULT '',
    `service_class` VARCHAR(255) NOT NULL DEFAULT '',
    `service_name` VARCHAR(255) NOT NULL DEFAULT '',
    `created_at` DATETIME(0),
    `updated_at` DATETIME(0),
INDEX `name`(`name`),
INDEX `namespace`(`namespace`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_fc_profiles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `rank` INTEGER NOT NULL DEFAULT 0,
INDEX `active`(`active`),
INDEX `name`(`name`),
INDEX `rank`(`rank`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_fc_profiles_usergroups` (
    `usergroup` INTEGER NOT NULL DEFAULT 0,
    `profile` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`usergroup`,`profile`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_fc_sets` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `profile` INTEGER NOT NULL DEFAULT 0,
    `action` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `template` INTEGER NOT NULL DEFAULT 0,
    `constraint` VARCHAR(255) NOT NULL DEFAULT '',
    `constraint_field` VARCHAR(100) NOT NULL DEFAULT '',
    `constraint_class` VARCHAR(100) NOT NULL DEFAULT '',
INDEX `action`(`action`),
INDEX `active`(`active`),
INDEX `profile`(`profile`),
INDEX `template`(`template`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_gallery_albums` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `year` VARCHAR(100),
    `description` TEXT,
    `createdon` DATETIME(0),
    `createdby` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `prominent` BOOLEAN NOT NULL DEFAULT false,
    `watermark` VARCHAR(255) NOT NULL DEFAULT '',
    `cover_filename` VARCHAR(255) NOT NULL DEFAULT '',
INDEX `active`(`active`),
INDEX `createdby`(`createdby`),
INDEX `name`(`name`),
INDEX `parent`(`parent`),
INDEX `prominent`(`prominent`),
INDEX `rank`(`rank`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_gallery_album_contexts` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `album` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT 'web',
INDEX `album`(`album`),
INDEX `context_key`(`context_key`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_gallery_album_items` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `item` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `album` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `album`(`album`),
INDEX `item`(`item`),
INDEX `rank`(`rank`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_gallery_items` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL DEFAULT '',
    `filename` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT,
    `mediatype` VARCHAR(40) NOT NULL DEFAULT 'image',
    `url` TEXT,
    `createdon` DATETIME(0),
    `createdby` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `duration` VARCHAR(40) NOT NULL DEFAULT '',
    `streamer` TEXT,
    `watermark_pos` VARCHAR(10) NOT NULL DEFAULT 'tl',
INDEX `active`(`active`),
INDEX `createdby`(`createdby`),
INDEX `mediatype`(`mediatype`),
INDEX `name`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_gallery_tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `item` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `tag` VARCHAR(255) NOT NULL DEFAULT '',
INDEX `item`(`item`),
INDEX `tag`(`tag`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_lexicon_entries` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `value` TEXT NOT NULL,
    `topic` VARCHAR(255) NOT NULL DEFAULT 'default',
    `namespace` VARCHAR(40) NOT NULL DEFAULT 'core',
    `language` VARCHAR(20) NOT NULL DEFAULT 'en',
    `createdon` DATETIME(0),
    `editedon` DATETIME(0) NOT NULL ,
INDEX `language`(`language`),
INDEX `name`(`name`),
INDEX `namespace`(`namespace`),
INDEX `topic`(`topic`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_manager_log` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `occurred` DATETIME(0) ,
    `action` VARCHAR(100) NOT NULL DEFAULT '',
    `classKey` VARCHAR(100) NOT NULL DEFAULT '',
    `item` VARCHAR(255) NOT NULL DEFAULT '0',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_media_sources` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT,
    `class_key` VARCHAR(100) NOT NULL DEFAULT 'sources.modFileMediaSource',
    `properties` MEDIUMTEXT,
    `is_stream` BOOLEAN NOT NULL DEFAULT true,
INDEX `class_key`(`class_key`),
INDEX `is_stream`(`is_stream`),
INDEX `name`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_media_sources_contexts` (
    `source` INTEGER NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT 'web',

    PRIMARY KEY (`source`,`context_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_media_sources_elements` (
    `source` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `object_class` VARCHAR(100) NOT NULL DEFAULT 'modTemplateVar',
    `object` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `context_key` VARCHAR(100) NOT NULL DEFAULT 'web',

    PRIMARY KEY (`source`,`object`,`object_class`,`context_key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_membergroup_names` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT,
    `parent` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `dashboard` INTEGER UNSIGNED NOT NULL DEFAULT 1,
UNIQUE INDEX `bani684_membergroup_names.name_unique`(`name`),
INDEX `dashboard`(`dashboard`),
INDEX `parent`(`parent`),
INDEX `rank`(`rank`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_membergroup_template` (
    `group` INTEGER UNSIGNED NOT NULL,
    `template` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`group`,`template`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_member_groups` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_group` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `member` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `role` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `rank`(`rank`),
INDEX `role`(`role`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_menus` (
    `text` VARCHAR(255) NOT NULL DEFAULT '',
    `parent` VARCHAR(255) NOT NULL DEFAULT '',
    `action` VARCHAR(255) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `icon` VARCHAR(255) NOT NULL DEFAULT '',
    `menuindex` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `params` TEXT NOT NULL,
    `handler` TEXT NOT NULL,
    `permissions` TEXT NOT NULL,
    `namespace` VARCHAR(100) NOT NULL DEFAULT 'core',
INDEX `action`(`action`),
INDEX `parent`(`parent`),

    PRIMARY KEY (`text`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_migx_configs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL DEFAULT '',
    `formtabs` TEXT NOT NULL,
    `contextmenus` TEXT NOT NULL,
    `actionbuttons` TEXT NOT NULL,
    `columnbuttons` TEXT NOT NULL,
    `filters` TEXT NOT NULL,
    `extended` TEXT NOT NULL,
    `columns` TEXT NOT NULL,
    `createdby` INTEGER NOT NULL DEFAULT 0,
    `createdon` DATETIME(0) NOT NULL,
    `editedby` INTEGER NOT NULL DEFAULT 0,
    `editedon` DATETIME(0) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedon` DATETIME(0) NOT NULL,
    `deletedby` INTEGER NOT NULL DEFAULT 0,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `publishedon` DATETIME(0) NOT NULL,
    `publishedby` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_migx_config_elements` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `config_id` INTEGER NOT NULL DEFAULT 0,
    `element_id` INTEGER NOT NULL DEFAULT 0,
    `rank` INTEGER NOT NULL DEFAULT 0,
    `createdby` INTEGER NOT NULL DEFAULT 0,
    `createdon` DATETIME(0) NOT NULL,
    `editedby` INTEGER NOT NULL DEFAULT 0,
    `editedon` DATETIME(0) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedon` DATETIME(0) NOT NULL,
    `deletedby` INTEGER NOT NULL DEFAULT 0,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `publishedon` DATETIME(0) NOT NULL,
    `publishedby` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_migx_elements` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(100) NOT NULL DEFAULT '',
    `content` TEXT NOT NULL,
    `createdby` INTEGER NOT NULL DEFAULT 0,
    `createdon` DATETIME(0) NOT NULL,
    `editedby` INTEGER NOT NULL DEFAULT 0,
    `editedon` DATETIME(0) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedon` DATETIME(0) NOT NULL,
    `deletedby` INTEGER NOT NULL DEFAULT 0,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `publishedon` DATETIME(0) NOT NULL,
    `publishedby` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_migx_formtabs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `config_id` INTEGER NOT NULL DEFAULT 0,
    `caption` VARCHAR(255) NOT NULL DEFAULT '',
    `pos` INTEGER NOT NULL DEFAULT 0,
    `print_before_tabs` BOOLEAN NOT NULL DEFAULT false,
    `extended` TEXT NOT NULL,
INDEX `config_id`(`config_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_migx_formtab_fields` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `config_id` INTEGER NOT NULL DEFAULT 0,
    `formtab_id` INTEGER NOT NULL DEFAULT 0,
    `field` VARCHAR(255) NOT NULL DEFAULT '',
    `caption` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT NOT NULL,
    `pos` INTEGER NOT NULL DEFAULT 0,
    `description_is_code` BOOLEAN NOT NULL DEFAULT false,
    `inputTV` VARCHAR(255) NOT NULL DEFAULT '',
    `inputTVtype` VARCHAR(255) NOT NULL DEFAULT '',
    `validation` TEXT NOT NULL,
    `configs` VARCHAR(255) NOT NULL DEFAULT '',
    `restrictive_condition` TEXT NOT NULL,
    `display` VARCHAR(255) NOT NULL DEFAULT '',
    `sourceFrom` VARCHAR(255) NOT NULL DEFAULT '',
    `sources` VARCHAR(255) NOT NULL DEFAULT '',
    `inputOptionValues` TEXT NOT NULL,
    `default` TEXT NOT NULL,
    `extended` TEXT NOT NULL,
INDEX `config_id`(`config_id`),
INDEX `field`(`field`),
INDEX `formtab_id`(`formtab_id`),
INDEX `pos`(`pos`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modhybridauth_providers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `keys` TEXT NOT NULL,
    `scope` TEXT,
    `enabled` CHAR(1) NOT NULL DEFAULT '0',
    `class_key` VARCHAR(50) NOT NULL DEFAULT 'modHybridAuthProvider',
UNIQUE INDEX `bani684_modhybridauth_providers.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modhybridauth_user_profile` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `internalKey` INTEGER UNSIGNED NOT NULL,
    `identifier` VARCHAR(100) NOT NULL,
    `provider` INTEGER UNSIGNED NOT NULL,
    `profileURL` VARCHAR(255),
    `webSiteURL` VARCHAR(255),
    `photoURL` VARCHAR(255),
    `displayName` VARCHAR(50),
    `description` TEXT,
    `firstName` VARCHAR(100),
    `lastName` VARCHAR(100),
    `gender` ENUM('female', 'male'),
    `language` VARCHAR(50),
    `age` INTEGER UNSIGNED,
    `birthDay` INTEGER UNSIGNED,
    `birthMonth` INTEGER UNSIGNED,
    `birthYear` INTEGER UNSIGNED,
    `email` VARCHAR(255),
    `emailVerified` CHAR(1) DEFAULT '0',
    `phone` VARCHAR(50),
    `address` VARCHAR(255),
    `country` VARCHAR(100),
    `region` VARCHAR(100),
    `city` VARCHAR(100),
    `zip` INTEGER UNSIGNED,
    `createdon` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `extended` TEXT,
UNIQUE INDEX `identifier`(`identifier`, `provider`),
UNIQUE INDEX `internalKey`(`internalKey`, `provider`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modsearch_indexes` (
    `resource_id` INTEGER UNSIGNED NOT NULL,
    `lemma` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`resource_id`,`lemma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsdk_package` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `version_major` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `version_minor` INTEGER NOT NULL DEFAULT 0,
    `version_patch` INTEGER NOT NULL DEFAULT 0,
    `version_type` VARCHAR(100) NOT NULL DEFAULT 'beta',
UNIQUE INDEX `name`(`name`, `version_major`, `version_minor`, `version_patch`, `version_type`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsdk_packagesource` (
    `packageid` INTEGER UNSIGNED NOT NULL,
    `sourceid` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`packageid`,`sourceid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsdk_package_vehicle` (
    `packageid` INTEGER UNSIGNED NOT NULL,
    `vehicleid` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`packageid`,`vehicleid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsdk_project` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsdk_project_package` (
    `projectid` INTEGER UNSIGNED NOT NULL,
    `packageid` INTEGER UNSIGNED NOT NULL,
UNIQUE INDEX `projectid`(`projectid`, `packageid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsdk_vehicle` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsite_cities` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(100) NOT NULL,
    `country_id` INTEGER UNSIGNED NOT NULL,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `link` INTEGER UNSIGNED,
    `domain` VARCHAR(25),
    `big` CHAR(1) NOT NULL DEFAULT '0',
UNIQUE INDEX `bani684_modxsite_cities.domain_unique`(`domain`),
UNIQUE INDEX `Index`(`city`, `country_id`),
INDEX `rank`(`rank`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsite_companies` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `country_id` INTEGER UNSIGNED,
    `city_id` INTEGER UNSIGNED,
    `address` VARCHAR(1024) NOT NULL DEFAULT '',
    `website` VARCHAR(256) NOT NULL DEFAULT '',
    `email` VARCHAR(100) NOT NULL DEFAULT '',
    `phone` VARCHAR(256) NOT NULL DEFAULT '',
    `main_modx_version` ENUM('Evolution', 'Revolution'),
    `employees` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `works` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `foundation_date` INTEGER,
    `resource_id` INTEGER UNSIGNED,
    `blog_id` INTEGER UNSIGNED,
    `owner` INTEGER UNSIGNED,
    `use_owr_techs` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `createdby` INTEGER UNSIGNED NOT NULL,
    `createdon` INTEGER UNSIGNED NOT NULL,
    `editedby` INTEGER UNSIGNED,
    `editedon` INTEGER UNSIGNED,
UNIQUE INDEX `bani684_modxsite_companies.resource_id_unique`(`resource_id`),
UNIQUE INDEX `bani684_modxsite_companies.blog_id_unique`(`blog_id`),
INDEX `city`(`city_id`),
INDEX `country`(`country_id`),
INDEX `createdby`(`createdby`),
INDEX `createdon`(`createdon`),
INDEX `editedby`(`editedby`),
INDEX `employees`(`employees`),
INDEX `main_modx_version`(`main_modx_version`),
INDEX `name`(`name`),
INDEX `owner`(`owner`),
INDEX `use_owr_techs`(`use_owr_techs`),
INDEX `works`(`works`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_modxsite_countries` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(255) NOT NULL,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
UNIQUE INDEX `bani684_modxsite_countries.country_unique`(`country`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_monitor_requests` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent` INTEGER UNSIGNED NOT NULL,
    `path` VARCHAR(255) NOT NULL,
    `site_url` VARCHAR(255) NOT NULL,
    `url` VARCHAR(768) NOT NULL,
    `context_key` VARCHAR(100) NOT NULL,
    `resource_id` INTEGER UNSIGNED,
    `http_status` SMALLINT UNSIGNED NOT NULL DEFAULT 200,
    `uuid` CHAR(36) NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `ip` VARCHAR(15) NOT NULL,
    `date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `from_cache` CHAR(1) NOT NULL DEFAULT '0',
    `phptemplates_non_cached` CHAR(1) NOT NULL DEFAULT '0',
    `time` DECIMAL(10, 4) NOT NULL,
    `php_memory` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `db_queries` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `db_queries_time` DECIMAL(10, 4) NOT NULL DEFAULT 0.0000,
    `php_error` MEDIUMINT UNSIGNED NOT NULL DEFAULT 0,
    `php_error_info` TEXT NOT NULL,
    `referer` TEXT NOT NULL,
    `user_agent` VARCHAR(768) NOT NULL DEFAULT '',
INDEX `date`(`date`),
INDEX `ip`(`ip`),
INDEX `parent`(`parent`),
INDEX `php_error`(`php_error`),
INDEX `resource_id`(`resource_id`),
INDEX `user_agent`(`user_agent`),
INDEX `user_id`(`user_id`),
INDEX `uuid`(`path`, `site_url`, `uuid`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_monitor_request_items` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `request_id` INTEGER UNSIGNED NOT NULL,
    `parent` INTEGER UNSIGNED NOT NULL,
    `type` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `properties` TEXT NOT NULL,
    `time` DECIMAL(10, 4) NOT NULL,
    `php_memory` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `db_queries` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `db_queries_time` DECIMAL(10, 4) NOT NULL DEFAULT 0.0000,
INDEX `name`(`name`),
INDEX `parent`(`parent`),
INDEX `request_id`(`request_id`),
INDEX `type`(`type`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_namespaces` (
    `name` VARCHAR(40) NOT NULL DEFAULT '',
    `path` TEXT,
    `assets_path` TEXT,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_packman_profile` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `description` TEXT NOT NULL,
    `data` TEXT NOT NULL,
INDEX `name`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_property_set` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `category` INTEGER NOT NULL DEFAULT 0,
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `properties` TEXT,
UNIQUE INDEX `bani684_property_set.name_unique`(`name`),
INDEX `category`(`category`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_redirects` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `uri` VARCHAR(255) NOT NULL,
    `resource_id` INTEGER UNSIGNED NOT NULL,
UNIQUE INDEX `bani684_redirects.uri_unique`(`uri`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_register_messages` (
    `topic` INTEGER UNSIGNED NOT NULL,
    `id` VARCHAR(255) NOT NULL,
    `created` DATETIME(0) NOT NULL,
    `valid` DATETIME(0) NOT NULL,
    `accessed` DATETIME(0),
    `accesses` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `expires` INTEGER NOT NULL DEFAULT 0,
    `payload` MEDIUMTEXT NOT NULL,
    `kill` BOOLEAN NOT NULL DEFAULT false,
INDEX `accessed`(`accessed`),
INDEX `accesses`(`accesses`),
INDEX `created`(`created`),
INDEX `expires`(`expires`),
INDEX `valid`(`valid`),

    PRIMARY KEY (`topic`,`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_register_queues` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `options` MEDIUMTEXT,
UNIQUE INDEX `bani684_register_queues.name_unique`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_register_topics` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `queue` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created` DATETIME(0) NOT NULL,
    `updated` DATETIME(0),
    `options` MEDIUMTEXT,
INDEX `name`(`name`),
INDEX `queue`(`queue`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_search_stat` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `query` VARCHAR(255) NOT NULL DEFAULT '',
    `finded` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
INDEX `date`(`date`),
INDEX `finded`(`finded`),
INDEX `query`(`query`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_session` (
    `id` VARCHAR(255) NOT NULL DEFAULT '',
    `access` INTEGER UNSIGNED NOT NULL,
    `data` MEDIUMTEXT,
INDEX `access`(`access`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_content` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(20) NOT NULL DEFAULT 'document',
    `contentType` VARCHAR(50) NOT NULL DEFAULT 'text/html',
    `pagetitle` VARCHAR(255) NOT NULL DEFAULT '',
    `longtitle` VARCHAR(255) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `alias` VARCHAR(255) DEFAULT '',
    `link_attributes` VARCHAR(255) NOT NULL DEFAULT '',
    `published` BOOLEAN NOT NULL DEFAULT false,
    `pub_date` INTEGER NOT NULL DEFAULT 0,
    `unpub_date` INTEGER NOT NULL DEFAULT 0,
    `parent` INTEGER NOT NULL DEFAULT 0,
    `isfolder` BOOLEAN NOT NULL DEFAULT false,
    `introtext` TEXT,
    `content` MEDIUMTEXT,
    `richtext` BOOLEAN NOT NULL DEFAULT true,
    `template` INTEGER NOT NULL DEFAULT 0,
    `menuindex` INTEGER NOT NULL DEFAULT 0,
    `searchable` BOOLEAN NOT NULL DEFAULT true,
    `cacheable` BOOLEAN NOT NULL DEFAULT true,
    `createdby` INTEGER NOT NULL DEFAULT 0,
    `createdon` INTEGER NOT NULL DEFAULT 0,
    `editedby` INTEGER NOT NULL DEFAULT 0,
    `editedon` INTEGER NOT NULL DEFAULT 0,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `deletedon` INTEGER NOT NULL DEFAULT 0,
    `deletedby` INTEGER NOT NULL DEFAULT 0,
    `publishedon` INTEGER NOT NULL DEFAULT 0,
    `publishedby` INTEGER NOT NULL DEFAULT 0,
    `menutitle` VARCHAR(255) NOT NULL DEFAULT '',
    `donthit` BOOLEAN NOT NULL DEFAULT false,
    `privateweb` BOOLEAN NOT NULL DEFAULT false,
    `privatemgr` BOOLEAN NOT NULL DEFAULT false,
    `content_dispo` BOOLEAN NOT NULL DEFAULT false,
    `hidemenu` BOOLEAN NOT NULL DEFAULT false,
    `class_key` VARCHAR(100) NOT NULL DEFAULT 'modDocument',
    `context_key` VARCHAR(100) NOT NULL DEFAULT 'web',
    `content_type` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `uri` VARCHAR(191),
    `uri_override` BOOLEAN NOT NULL DEFAULT false,
    `hide_children_in_tree` BOOLEAN NOT NULL DEFAULT false,
    `show_in_tree` BOOLEAN NOT NULL DEFAULT true,
    `properties` MEDIUMTEXT,
INDEX `alias`(`alias`),
INDEX `cache_refresh_idx`(`parent`, `menuindex`, `id`),
INDEX `cacheable`(`cacheable`),
INDEX `class_key`(`class_key`),
INDEX `context_key`(`context_key`),
INDEX `hide_children_in_tree`(`hide_children_in_tree`),
INDEX `hidemenu`(`hidemenu`),
INDEX `isfolder`(`isfolder`),
INDEX `menuindex`(`menuindex`),
INDEX `parent`(`parent`),
INDEX `pub_date`(`pub_date`),
INDEX `published`(`published`),
INDEX `searchable`(`searchable`),
INDEX `show_in_tree`(`show_in_tree`),
INDEX `template`(`template`),
INDEX `unpub_date`(`unpub_date`),
INDEX `uri`(`uri`),
INDEX `uri_override`(`uri_override`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_htmlsnippets` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `source` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `property_preprocess` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT 'Chunk',
    `editor_type` INTEGER NOT NULL DEFAULT 0,
    `category` INTEGER NOT NULL DEFAULT 0,
    `cache_type` BOOLEAN NOT NULL DEFAULT false,
    `snippet` MEDIUMTEXT,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` TEXT,
    `static` BOOLEAN NOT NULL DEFAULT false,
    `static_file` VARCHAR(255) NOT NULL DEFAULT '',
UNIQUE INDEX `bani684_site_htmlsnippets.name_unique`(`name`),
INDEX `category`(`category`),
INDEX `locked`(`locked`),
INDEX `static`(`static`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_plugins` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `source` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `property_preprocess` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `editor_type` INTEGER NOT NULL DEFAULT 0,
    `category` INTEGER NOT NULL DEFAULT 0,
    `cache_type` BOOLEAN NOT NULL DEFAULT false,
    `plugincode` MEDIUMTEXT NOT NULL,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` TEXT,
    `disabled` BOOLEAN NOT NULL DEFAULT false,
    `moduleguid` VARCHAR(32) NOT NULL DEFAULT '',
    `static` BOOLEAN NOT NULL DEFAULT false,
    `static_file` VARCHAR(255) NOT NULL DEFAULT '',
UNIQUE INDEX `bani684_site_plugins.name_unique`(`name`),
INDEX `category`(`category`),
INDEX `disabled`(`disabled`),
INDEX `locked`(`locked`),
INDEX `static`(`static`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_plugin_events` (
    `pluginid` INTEGER NOT NULL DEFAULT 0,
    `event` VARCHAR(255) NOT NULL DEFAULT '',
    `priority` INTEGER NOT NULL DEFAULT 0,
    `propertyset` INTEGER UNSIGNED NOT NULL DEFAULT 0,
INDEX `priority`(`priority`),

    PRIMARY KEY (`pluginid`,`event`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_snippets` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `source` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `property_preprocess` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `editor_type` INTEGER NOT NULL DEFAULT 0,
    `category` INTEGER NOT NULL DEFAULT 0,
    `cache_type` BOOLEAN NOT NULL DEFAULT false,
    `snippet` MEDIUMTEXT,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` TEXT,
    `moduleguid` VARCHAR(32) NOT NULL DEFAULT '',
    `static` BOOLEAN NOT NULL DEFAULT false,
    `static_file` VARCHAR(255) NOT NULL DEFAULT '',
UNIQUE INDEX `bani684_site_snippets.name_unique`(`name`),
INDEX `category`(`category`),
INDEX `locked`(`locked`),
INDEX `moduleguid`(`moduleguid`),
INDEX `static`(`static`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_templates` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `source` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `property_preprocess` BOOLEAN NOT NULL DEFAULT false,
    `templatename` VARCHAR(50) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT 'Template',
    `editor_type` INTEGER NOT NULL DEFAULT 0,
    `category` INTEGER NOT NULL DEFAULT 0,
    `icon` VARCHAR(255) NOT NULL DEFAULT '',
    `template_type` INTEGER NOT NULL DEFAULT 0,
    `content` MEDIUMTEXT NOT NULL,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` TEXT,
    `static` BOOLEAN NOT NULL DEFAULT false,
    `static_file` VARCHAR(255) NOT NULL DEFAULT '',
UNIQUE INDEX `bani684_site_templates.templatename_unique`(`templatename`),
INDEX `category`(`category`),
INDEX `locked`(`locked`),
INDEX `static`(`static`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_tmplvars` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `source` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `property_preprocess` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(20) NOT NULL DEFAULT '',
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `caption` VARCHAR(80) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `editor_type` INTEGER NOT NULL DEFAULT 0,
    `category` INTEGER NOT NULL DEFAULT 0,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `elements` TEXT,
    `rank` INTEGER NOT NULL DEFAULT 0,
    `display` VARCHAR(20) NOT NULL DEFAULT '',
    `default_text` MEDIUMTEXT,
    `properties` TEXT,
    `input_properties` TEXT,
    `output_properties` TEXT,
    `static` BOOLEAN NOT NULL DEFAULT false,
    `static_file` VARCHAR(255) NOT NULL DEFAULT '',
UNIQUE INDEX `bani684_site_tmplvars.name_unique`(`name`),
INDEX `category`(`category`),
INDEX `locked`(`locked`),
INDEX `rank`(`rank`),
INDEX `static`(`static`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_tmplvar_access` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tmplvarid` INTEGER NOT NULL DEFAULT 0,
    `documentgroup` INTEGER NOT NULL DEFAULT 0,
INDEX `tmplvar_template`(`tmplvarid`, `documentgroup`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_tmplvar_contentvalues` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tmplvarid` INTEGER NOT NULL DEFAULT 0,
    `contentid` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `value` MEDIUMTEXT NOT NULL,
INDEX `contentid`(`contentid`),
INDEX `tmplvarid`(`tmplvarid`),
INDEX `tv_cnt`(`tmplvarid`, `contentid`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_site_tmplvar_templates` (
    `tmplvarid` INTEGER NOT NULL DEFAULT 0,
    `templateid` INTEGER NOT NULL DEFAULT 0,
    `rank` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`tmplvarid`,`templateid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_blog_attributes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `resourceid` INTEGER UNSIGNED NOT NULL,
    `content_hash` CHAR(32),
UNIQUE INDEX `bani684_society_blog_attributes.resourceid_unique`(`resourceid`),
UNIQUE INDEX `bani684_society_blog_attributes.content_hash_unique`(`content_hash`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_blog_topic` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `blogid` INTEGER UNSIGNED NOT NULL,
    `topicid` INTEGER UNSIGNED NOT NULL,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
UNIQUE INDEX `blogid`(`blogid`, `topicid`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_comments` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `thread_id` INTEGER UNSIGNED,
    `parent` INTEGER UNSIGNED,
    `text` TEXT NOT NULL,
    `raw_text` TEXT NOT NULL,
    `ip` VARCHAR(16) NOT NULL DEFAULT '0.0.0.0',
    `createdon` DATETIME(0),
    `createdby` INTEGER UNSIGNED,
    `editedon` DATETIME(0),
    `editedby` INTEGER UNSIGNED,
    `published` CHAR(1) NOT NULL DEFAULT '1',
    `deleted` CHAR(1) NOT NULL DEFAULT '0',
    `deletedon` DATETIME(0),
    `deletedby` INTEGER UNSIGNED,
    `comments_count` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `properties` TEXT,
INDEX `createdby`(`createdby`),
INDEX `deleted`(`deleted`),
INDEX `deletedby`(`deletedby`),
INDEX `editedby`(`editedby`),
INDEX `parent`(`parent`),
INDEX `target_id`(`thread_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_email_messages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `subject` VARCHAR(256) NOT NULL,
    `message` TEXT NOT NULL,
    `date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` TINYINT NOT NULL DEFAULT 1,
INDEX `user_id`(`user_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_notice_types` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(50) NOT NULL,
    `comment` VARCHAR(256) NOT NULL DEFAULT '',
    `rank` INTEGER UNSIGNED NOT NULL,
    `target` VARCHAR(100),
UNIQUE INDEX `bani684_society_notice_types.type_unique`(`type`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_notice_users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `notice_id` INTEGER UNSIGNED NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `active` TINYINT UNSIGNED NOT NULL DEFAULT 1,
UNIQUE INDEX `notice_id`(`notice_id`, `user_id`),
INDEX `active`(`active`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_subscribers` (
    `userid` INTEGER UNSIGNED NOT NULL,
    `subscriberid` INTEGER UNSIGNED NOT NULL,
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 0,
UNIQUE INDEX `userid`(`userid`, `subscriberid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_threads` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target_id` INTEGER UNSIGNED,
    `target_class` VARCHAR(100) NOT NULL DEFAULT 'modResource',
    `comments_count` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `createdon` DATETIME(0) NOT NULL,
    `editedon` DATETIME(0),
    `views` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `rating` FLOAT NOT NULL DEFAULT 0.000,
    `positive_votes` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `negative_votes` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `neutral_votes` INTEGER UNSIGNED NOT NULL DEFAULT 0,
UNIQUE INDEX `target_id`(`target_id`, `target_class`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_topic_attributes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `resourceid` INTEGER UNSIGNED NOT NULL,
    `content_hash` CHAR(32),
    `short_text` TEXT NOT NULL,
    `raw_content` TEXT NOT NULL,
    `topic_tags` VARCHAR(1024) NOT NULL DEFAULT '',
UNIQUE INDEX `bani684_society_topic_attributes.resourceid_unique`(`resourceid`),
UNIQUE INDEX `bani684_society_topic_attributes.content_hash_unique`(`content_hash`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_topic_tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `topic_id` INTEGER UNSIGNED NOT NULL,
    `tag` VARCHAR(100) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
UNIQUE INDEX `topic_id`(`topic_id`, `tag`),
INDEX `active`(`active`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_user_attributes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `internalKey` INTEGER UNSIGNED NOT NULL,
    `createdon` INTEGER NOT NULL,
UNIQUE INDEX `bani684_society_user_attributes.internalKey_unique`(`internalKey`),
INDEX `createdon`(`createdon`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_society_votes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `target_id` INTEGER UNSIGNED NOT NULL,
    `target_class` VARCHAR(100) NOT NULL,
    `type` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `thread_id` INTEGER UNSIGNED,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `vote_direction` CHAR(1) NOT NULL DEFAULT '0',
    `vote_value` FLOAT NOT NULL DEFAULT 0.000,
    `vote_date` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
UNIQUE INDEX `target_id`(`target_id`, `target_class`, `user_id`, `type`),
UNIQUE INDEX `thread_id`(`thread_id`, `user_id`, `type`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_system_eventnames` (
    `name` VARCHAR(50) NOT NULL,
    `service` TINYINT UNSIGNED NOT NULL DEFAULT 0,
    `groupname` VARCHAR(20) NOT NULL DEFAULT '',

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_system_settings` (
    `key` VARCHAR(50) NOT NULL DEFAULT '',
    `value` TEXT NOT NULL,
    `xtype` VARCHAR(75) NOT NULL DEFAULT 'textfield',
    `namespace` VARCHAR(40) NOT NULL DEFAULT 'core',
    `area` VARCHAR(255) NOT NULL DEFAULT '',
    `editedon` DATETIME(0) NOT NULL ,

    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_transport_packages` (
    `signature` VARCHAR(255) NOT NULL,
    `created` DATETIME(0) NOT NULL,
    `updated` DATETIME(0),
    `installed` DATETIME(0),
    `state` BOOLEAN NOT NULL DEFAULT true,
    `workspace` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `provider` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `disabled` BOOLEAN NOT NULL DEFAULT false,
    `source` TINYTEXT,
    `manifest` TEXT,
    `attributes` MEDIUMTEXT,
    `package_name` VARCHAR(255) NOT NULL,
    `metadata` TEXT,
    `version_major` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `version_minor` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `version_patch` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `release` VARCHAR(100) NOT NULL DEFAULT '',
    `release_index` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
INDEX `disabled`(`disabled`),
INDEX `package_name`(`package_name`),
INDEX `provider`(`provider`),
INDEX `release`(`release`),
INDEX `release_index`(`release_index`),
INDEX `version_major`(`version_major`),
INDEX `version_minor`(`version_minor`),
INDEX `version_patch`(`version_patch`),
INDEX `workspace`(`workspace`),

    PRIMARY KEY (`signature`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_transport_providers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT,
    `service_url` TINYTEXT,
    `username` VARCHAR(255) NOT NULL DEFAULT '',
    `api_key` VARCHAR(255) NOT NULL DEFAULT '',
    `created` DATETIME(0) NOT NULL,
    `updated` DATETIME(0),
    `active` BOOLEAN NOT NULL DEFAULT true,
    `priority` TINYINT NOT NULL DEFAULT 10,
    `properties` MEDIUMTEXT NOT NULL,
UNIQUE INDEX `bani684_transport_providers.name_unique`(`name`),
INDEX `api_key`(`api_key`),
INDEX `username`(`username`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL DEFAULT '',
    `password` VARCHAR(100) NOT NULL DEFAULT '',
    `cachepwd` VARCHAR(100) NOT NULL DEFAULT '',
    `class_key` VARCHAR(100) NOT NULL DEFAULT 'modUser',
    `active` BOOLEAN NOT NULL DEFAULT true,
    `remote_key` VARCHAR(255),
    `remote_data` TEXT,
    `hash_class` VARCHAR(100) NOT NULL DEFAULT 'hashing.modPBKDF2',
    `salt` VARCHAR(100) NOT NULL DEFAULT '',
    `primary_group` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `session_stale` TEXT,
    `sudo` BOOLEAN NOT NULL DEFAULT false,
    `createdon` INTEGER NOT NULL DEFAULT 0,
    `delegate` CHAR(1),
    `offer` TEXT,
    `offer_date` INTEGER UNSIGNED,
    `contract_date` INTEGER UNSIGNED,
    `createdby` INTEGER UNSIGNED,
UNIQUE INDEX `bani684_users.username_unique`(`username`),
INDEX `class_key`(`class_key`),
INDEX `contract_date`(`contract_date`),
INDEX `createdby`(`createdby`),
INDEX `delegate`(`delegate`),
INDEX `offer_date`(`offer_date`),
INDEX `primary_group`(`primary_group`),
INDEX `remote_key`(`remote_key`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_user_attributes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `internalKey` INTEGER UNSIGNED NOT NULL,
    `fullname` VARCHAR(100) NOT NULL DEFAULT '',
    `email` VARCHAR(100) NOT NULL DEFAULT '',
    `phone` VARCHAR(100) NOT NULL DEFAULT '',
    `mobilephone` VARCHAR(100) NOT NULL DEFAULT '',
    `blocked` BOOLEAN NOT NULL DEFAULT false,
    `blockeduntil` INTEGER NOT NULL DEFAULT 0,
    `blockedafter` INTEGER NOT NULL DEFAULT 0,
    `logincount` INTEGER NOT NULL DEFAULT 0,
    `lastlogin` INTEGER NOT NULL DEFAULT 0,
    `thislogin` INTEGER NOT NULL DEFAULT 0,
    `failedlogincount` INTEGER NOT NULL DEFAULT 0,
    `sessionid` VARCHAR(100) NOT NULL DEFAULT '',
    `dob` INTEGER NOT NULL DEFAULT 0,
    `gender` INTEGER NOT NULL DEFAULT 0,
    `address` TEXT NOT NULL,
    `country` VARCHAR(255) NOT NULL DEFAULT '',
    `city` VARCHAR(255) NOT NULL DEFAULT '',
    `state` VARCHAR(25) NOT NULL DEFAULT '',
    `zip` VARCHAR(25) NOT NULL DEFAULT '',
    `fax` VARCHAR(100) NOT NULL DEFAULT '',
    `photo` VARCHAR(255) NOT NULL DEFAULT '',
    `comment` TEXT NOT NULL,
    `website` VARCHAR(255) NOT NULL DEFAULT '',
    `extended` TEXT,
UNIQUE INDEX `bani684_user_attributes.internalKey_unique`(`internalKey`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_user_group_roles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT,
    `authority` INTEGER UNSIGNED NOT NULL DEFAULT 9999,
UNIQUE INDEX `bani684_user_group_roles.name_unique`(`name`),
INDEX `authority`(`authority`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_user_group_settings` (
    `group` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `key` VARCHAR(50) NOT NULL,
    `value` TEXT,
    `xtype` VARCHAR(75) NOT NULL DEFAULT 'textfield',
    `namespace` VARCHAR(40) NOT NULL DEFAULT 'core',
    `area` VARCHAR(255) NOT NULL DEFAULT '',
    `editedon` DATETIME(0) NOT NULL ,

    PRIMARY KEY (`group`,`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_user_messages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(15) NOT NULL DEFAULT '',
    `subject` VARCHAR(255) NOT NULL DEFAULT '',
    `message` TEXT NOT NULL,
    `sender` INTEGER NOT NULL DEFAULT 0,
    `recipient` INTEGER NOT NULL DEFAULT 0,
    `private` TINYINT NOT NULL DEFAULT 0,
    `date_sent` DATETIME(0) NOT NULL ,
    `read` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_user_settings` (
    `user` INTEGER NOT NULL DEFAULT 0,
    `key` VARCHAR(50) NOT NULL DEFAULT '',
    `value` TEXT,
    `xtype` VARCHAR(75) NOT NULL DEFAULT 'textfield',
    `namespace` VARCHAR(40) NOT NULL DEFAULT 'core',
    `area` VARCHAR(255) NOT NULL DEFAULT '',
    `editedon` DATETIME(0) NOT NULL,

    PRIMARY KEY (`user`,`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_versionx_chunk` (
    `version_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content_id` INTEGER UNSIGNED NOT NULL,
    `saved` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user` INTEGER NOT NULL DEFAULT 0,
    `mode` VARCHAR(24) NOT NULL DEFAULT 'update',
    `marked` BOOLEAN DEFAULT false,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT 'Chunk',
    `category` INTEGER NOT NULL DEFAULT 0,
    `snippet` MEDIUMTEXT,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` MEDIUMTEXT,
INDEX `category`(`category`),
INDEX `content_id`(`content_id`),
INDEX `user`(`user`),

    PRIMARY KEY (`version_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_versionx_plugin` (
    `version_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content_id` INTEGER UNSIGNED NOT NULL,
    `saved` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user` INTEGER NOT NULL DEFAULT 0,
    `mode` VARCHAR(24) NOT NULL DEFAULT 'update',
    `marked` BOOLEAN DEFAULT false,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT 'Chunk',
    `category` INTEGER NOT NULL DEFAULT 0,
    `plugincode` MEDIUMTEXT NOT NULL,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` MEDIUMTEXT,
    `disabled` BOOLEAN NOT NULL DEFAULT false,
INDEX `category`(`category`),
INDEX `content_id`(`content_id`),
INDEX `user`(`user`),

    PRIMARY KEY (`version_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_versionx_resource` (
    `version_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content_id` INTEGER UNSIGNED NOT NULL,
    `saved` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user` INTEGER NOT NULL DEFAULT 0,
    `mode` VARCHAR(24) NOT NULL DEFAULT 'update',
    `marked` BOOLEAN DEFAULT false,
    `title` VARCHAR(255) NOT NULL DEFAULT 'Unnamed',
    `context_key` VARCHAR(255) NOT NULL DEFAULT 'web',
    `class` VARCHAR(255) NOT NULL DEFAULT 'modDocument',
    `content` MEDIUMTEXT,
    `fields` MEDIUMTEXT,
    `tvs` MEDIUMTEXT,
INDEX `content_id`(`content_id`),
INDEX `user`(`user`),

    PRIMARY KEY (`version_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_versionx_snippet` (
    `version_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content_id` INTEGER UNSIGNED NOT NULL,
    `saved` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user` INTEGER NOT NULL DEFAULT 0,
    `mode` VARCHAR(24) NOT NULL DEFAULT 'update',
    `marked` BOOLEAN DEFAULT false,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT 'Chunk',
    `category` INTEGER NOT NULL DEFAULT 0,
    `snippet` MEDIUMTEXT,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` MEDIUMTEXT,
INDEX `category`(`category`),
INDEX `content_id`(`content_id`),
INDEX `user`(`user`),

    PRIMARY KEY (`version_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_versionx_template` (
    `version_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content_id` INTEGER UNSIGNED NOT NULL,
    `saved` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user` INTEGER NOT NULL DEFAULT 0,
    `mode` VARCHAR(24) NOT NULL DEFAULT 'update',
    `marked` BOOLEAN DEFAULT false,
    `templatename` VARCHAR(50) NOT NULL,
    `description` VARCHAR(255) DEFAULT 'Template',
    `category` INTEGER NOT NULL DEFAULT 0,
    `content` MEDIUMTEXT NOT NULL,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `properties` MEDIUMTEXT,
INDEX `category`(`category`),
INDEX `content_id`(`content_id`),
INDEX `user`(`user`),

    PRIMARY KEY (`version_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_versionx_templatevar` (
    `version_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `content_id` INTEGER UNSIGNED NOT NULL,
    `saved` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `user` INTEGER NOT NULL DEFAULT 0,
    `mode` VARCHAR(24) NOT NULL DEFAULT 'update',
    `marked` BOOLEAN DEFAULT false,
    `type` VARCHAR(20) NOT NULL DEFAULT '',
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `caption` VARCHAR(80) NOT NULL DEFAULT '',
    `description` VARCHAR(255) NOT NULL DEFAULT '',
    `category` INTEGER NOT NULL DEFAULT 0,
    `locked` BOOLEAN NOT NULL DEFAULT false,
    `rank` INTEGER NOT NULL DEFAULT 0,
    `display` VARCHAR(20) NOT NULL DEFAULT '',
    `default_text` VARCHAR(2000),
    `properties` MEDIUMTEXT,
    `input_properties` MEDIUMTEXT,
    `output_properties` MEDIUMTEXT,
INDEX `content_id`(`content_id`),
INDEX `user`(`user`),

    PRIMARY KEY (`version_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_visitors` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `date` DATETIME(0) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `referer` VARCHAR(191) NOT NULL,
    `userAgent` VARCHAR(191) NOT NULL,
    `user_id` INTEGER UNSIGNED,
    `ip` VARCHAR(130) NOT NULL,
    `status` SMALLINT NOT NULL,
    `cookie` VARCHAR(32) NOT NULL,
INDEX `ip`(`ip`),
INDEX `referer`(`referer`),
INDEX `url`(`url`),
INDEX `userAgent`(`userAgent`),
INDEX `user_id`(`user_id`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bani684_workspaces` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL DEFAULT '',
    `path` VARCHAR(255) NOT NULL DEFAULT '',
    `created` DATETIME(0) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `attributes` MEDIUMTEXT,
UNIQUE INDEX `bani684_workspaces.path_unique`(`path`),
INDEX `active`(`active`),
INDEX `name`(`name`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
