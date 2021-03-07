-- AddForeignKey
ALTER TABLE `bani684_society_votes` ADD FOREIGN KEY (`type`) REFERENCES `bani684_site_content`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
