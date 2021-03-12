import { Grid } from '@material-ui/core'
import React, { useMemo } from 'react'
import CompaniesViewCompany from './Company'
import { CompaniesViewProps } from './interfaces'
import { CompaniesViewStyled } from './styles'

const CompaniesView: React.FC<CompaniesViewProps> = ({
  companies,
  ...other
}) => {
  return useMemo(() => {
    return (
      <>
        <CompaniesViewStyled {...other}>
          <Grid container>
            {companies.map((n) => (
              <Grid key={n.id} item xs={12} sm={6} md={4} lg={3}>
                <CompaniesViewCompany company={n} />
              </Grid>
            ))}
          </Grid>
        </CompaniesViewStyled>
      </>
    )
  }, [companies, other])
}

export default CompaniesView
