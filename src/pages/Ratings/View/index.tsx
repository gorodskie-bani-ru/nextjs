import React, { useMemo } from 'react'
import { RatingsPageViewStyled } from './styles'

const RatingsPageView: React.FC = () => {
  return useMemo(() => {
    return <RatingsPageViewStyled></RatingsPageViewStyled>
  }, [])
}

export default RatingsPageView
