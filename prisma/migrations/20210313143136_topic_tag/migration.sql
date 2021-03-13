-- AddForeignKey
ALTER TABLE `bani684_society_topic_tags` ADD FOREIGN KEY (`topic_id`) REFERENCES `bani684_site_content`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
