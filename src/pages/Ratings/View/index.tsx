import React, { useMemo } from 'react'
import { RatingsPageViewProps } from './interfaces'
import RatingsPageViewRating from './Rating'
import { RatingsPageViewStyled } from './styles'

const RatingsPageView: React.FC<RatingsPageViewProps> = ({
  ratingsTypes,
  votes,
  companies,
  ...other
}) => {
  return useMemo(() => {
    return (
      <RatingsPageViewStyled {...other}>
        {ratingsTypes.map((n) => {
          return (
            <RatingsPageViewRating
              key={n.id}
              ratingType={n}
              votes={votes}
              companies={companies}
            />
          )
        })}
      </RatingsPageViewStyled>
    )
  }, [other, ratingsTypes, votes, companies])
}

export default RatingsPageView
