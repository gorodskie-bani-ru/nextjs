-- AddForeignKey
ALTER TABLE `bani684_site_content` ADD FOREIGN KEY (`createdby`) REFERENCES `bani684_users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
