-- AddForeignKey
ALTER TABLE `bani684_society_votes` ADD FOREIGN KEY (`user_id`) REFERENCES `bani684_users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
