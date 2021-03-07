-- AddForeignKey
ALTER TABLE `bani684_site_tmplvar_contentvalues` ADD FOREIGN KEY (`contentid`) REFERENCES `bani684_site_content`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
