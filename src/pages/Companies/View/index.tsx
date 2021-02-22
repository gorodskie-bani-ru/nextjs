import { Grid } from '@material-ui/core'
import React, { useMemo } from 'react'
import CompaniesViewCompany from './Company'
import { CompaniesViewProps } from './interfaces'
import { CompaniesViewStyled } from './styles'

const CompaniesView: React.FC<CompaniesViewProps> = ({ componies }) => {
  return useMemo(() => {
    return (
      <>
        <CompaniesViewStyled>
          <Grid container>
            {componies.map((n) => (
              <Grid key={n.id} xs={12} sm={6} md={4} lg={3}>
                <CompaniesViewCompany company={n} />
              </Grid>
            ))}
          </Grid>
        </CompaniesViewStyled>
      </>
    )
  }, [componies])
}

export default CompaniesView
