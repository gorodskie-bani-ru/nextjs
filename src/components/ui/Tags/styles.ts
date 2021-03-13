import styled from 'styled-components'
import { LinkStyled } from '../Link/styles'

export const TagsStyled = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;

  ${LinkStyled} {
    background: ${({ theme }) => theme.background.default};
    line-height: 1.4rem;
    border-radius: 0.7rem;
    padding: 0 0.35rem;
    margin: 0.2rem;
    white-space: nowrap;
  }
`
