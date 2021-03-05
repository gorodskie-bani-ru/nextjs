import styled from 'styled-components'
import { CompaniesViewCompanyStyled } from './Company/styles'

export const CompaniesViewStyled = styled.div`
  ${CompaniesViewCompanyStyled} {
    padding: 10px;

    > .paper {
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
      height: 100%;
    }
  }
`
