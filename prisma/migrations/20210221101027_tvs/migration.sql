
-- AddForeignKey
ALTER TABLE bani684_site_tmplvar_contentvalues ADD CONSTRAINT tmplvar_contentvalues_FK FOREIGN KEY (id) REFERENCES bani684_site_content(id) ON DELETE CASCADE ON UPDATE CASCADE;
-- ALTER TABLE bani684_site_tmplvar_contentvalues ADD CONSTRAINT tmplvar_contentvalues_FK FOREIGN KEY (contentid) REFERENCES bani684_site_content(id);

