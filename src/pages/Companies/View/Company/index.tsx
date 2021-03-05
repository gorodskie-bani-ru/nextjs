import React, { useMemo } from 'react'
import Link from 'src/components/ui/Link'
import Title from 'src/components/ui/Title'
import { imageFormats } from 'src/helpers/imageFormats'
import { CompaniesViewCompanyProps } from './interfaces'
import { CompaniesViewCompanyStyled } from './styles'

/**
 * Карточка компаний в списке компаний
 */
const CompaniesViewCompany: React.FC<CompaniesViewCompanyProps> = ({
  company,
}) => {
  return useMemo(() => {
    return (
      <CompaniesViewCompanyStyled>
        <div className="paper">
          <Link href={company.uri || '/'}>
            <img
              src={
                (company.image &&
                  imageFormats(company.image, 'slider_thumb')) ||
                undefined
              }
              className="company--image"
            />

            <div className="content">
              <Title>{company.pagetitle}</Title>

              {company.address}
            </div>
          </Link>
        </div>
      </CompaniesViewCompanyStyled>
    )
  }, [company])
}

export default CompaniesViewCompany