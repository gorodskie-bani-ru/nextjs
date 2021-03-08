import styled from 'styled-components'
import { CommentStyled } from '../Comment/styles'

export const TopicStyled = styled.div`
  .content {
    margin: 20px 0;
  }

  .comments {
    margin-top: 20px;
  }

  .sub-info {
    &,
    & > * {
      display: flex;
      align-items: center;
    }

    > * {
      margin: 0 5px;
    }

    svg {
      height: 1rem;
      width: 1rem;
      font-size: 1rem;
    }
  }

  ${CommentStyled} {
    margin: 20px 0;
  }
`
