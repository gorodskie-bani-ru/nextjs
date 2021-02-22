import { LinkStyled } from 'src/components/ui/Link/styles'
import styled from 'styled-components'

export const CompaniesViewCompanyStyled = styled.div`
  height: 100%;

  > .paper {
  }

  ${LinkStyled} {
    display: block;
    height: 100%;

    > div.content {
      padding: 10px;
    }
  }

  img.company--image {
    width: 100%;
  }
`
