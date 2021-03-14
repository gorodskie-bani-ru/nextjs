import { CompanyRatingStyled } from 'src/components/ui/Company/Rating/styles'
import { LinkStyled } from 'src/components/ui/Link/styles'
import { PaperStyled } from 'src/components/ui/Paper/styles'
import styled from 'styled-components'

export const CompaniesViewCompanyStyled = styled.div`
  height: 100%;

  > ${PaperStyled} {
    ${LinkStyled} {
      display: block;
      height: 100%;
    }

    > div.content {
      padding: 10px;
    }

    .imageWrapper {
      position: relative;

      img.company--image {
        width: 100%;
      }

      ${CompanyRatingStyled} {
        position: absolute;
        right: 5px;
        top: 5px;
      }
    }
  }
`
