import { RatingFragment, VotesByRatingQuery } from 'src/modules/gql/generated'
import { AppContextValue } from 'src/pages/_App/Context'

export type RatingsPageViewRatingProps = {
  ratingType: RatingFragment
  // votes: VotesByRatingQuery["votesByRating"]
  votes: NonNullable<AppContextValue['appData']>['companies_rating']

  companies: VotesByRatingQuery['companies']

  showAll: boolean
}
