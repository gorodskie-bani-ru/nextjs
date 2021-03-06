import styled from 'styled-components'
import { CommentStyled } from '../Comment/styles'

export const TopicStyled = styled.div`
  .content {
    margin: 20px 0;
  }

  .comments {
    margin-top: 20px;
  }

  ${CommentStyled} {
    margin: 20px 0;
  }
`
