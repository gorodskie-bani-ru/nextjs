import { RatingsPageViewRatingProps } from './Rating/interfaces'

export type RatingsPageViewProps = {
  ratingsTypes: RatingsPageViewRatingProps['ratingType'][]
  votes: RatingsPageViewRatingProps['votes']
  companies: RatingsPageViewRatingProps['companies']

  /**
   * Страница конкретного типа рейтинга
   */
  ratingTypeAlias: string | undefined
}
