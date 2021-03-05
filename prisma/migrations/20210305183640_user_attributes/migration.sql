-- AddForeignKey
ALTER TABLE `bani684_user_attributes` ADD FOREIGN KEY (`internalKey`) REFERENCES `bani684_users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
