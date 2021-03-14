import React, { useMemo } from 'react'
import CompanyRating from 'src/components/ui/Company/Rating'
import Link from 'src/components/ui/Link'
import Paper from 'src/components/ui/Paper'
import Title from 'src/components/ui/Title'
import { imageFormats } from 'src/helpers/imageFormats'
import SchedulesList from '../../Company/View/WorkTime/SchedulesList'
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
          <div className="imageWrapper">
            <Link href={company.uri || '/'}>
              <img
                src={
                  (company.image &&
                    imageFormats(company.image, 'slider_thumb')) ||
                  undefined
                }
                className="company--image"
                alt={company.pagetitle}
              />
            </Link>
            <CompanyRating company={company} />
          </div>

          <div className="content">
            <Link href={company.uri || '/'}>
              <Title>{company.pagetitle}</Title>
            </Link>

            {company.address}

            {(company.Schedules && (
              <SchedulesList
                Schedules={company.Schedules}
                showOffDates={false}
              />
            )) ||
              null}
          </div>
        </Paper>
      </CompaniesViewCompanyStyled>
    )
  }, [company])
}

export default CompaniesViewCompany
