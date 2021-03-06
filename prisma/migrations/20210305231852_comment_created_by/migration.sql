-- AddForeignKey
ALTER TABLE `bani684_society_comments` ADD FOREIGN KEY (`createdby`) REFERENCES `bani684_users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
