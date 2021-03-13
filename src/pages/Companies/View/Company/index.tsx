import React, { useMemo } from 'react'
import CompanyRating from 'src/components/ui/Company/Rating'
import Link from 'src/components/ui/Link'
import Paper from 'src/components/ui/Paper'
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
        <Paper>
          <Link href={company.uri || '/'}>
            <div className="imageWrapper">
              <img
                src={
                  (company.image &&
                    imageFormats(company.image, 'slider_thumb')) ||
                  undefined
                }
                className="company--image"
                alt={company.pagetitle}
              />
              <CompanyRating company={company} />
            </div>

            <div className="content">
              <Title>{company.pagetitle}</Title>

              {company.address}
            </div>
          </Link>
        </Paper>
      </CompaniesViewCompanyStyled>
    )
  }, [company])
}

export default CompaniesViewCompany
