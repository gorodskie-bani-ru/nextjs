import React, { useContext, useMemo } from 'react'

import View from './View'

import { Page, PageProps } from '../_App/interfaces'
import {
  useVotesByRatingQuery,
  VotesByRatingDocument,
  VotesByRatingQuery,
} from 'src/modules/gql/generated'
import { AppContext } from '../_App/Context'
import { RatingsPageViewProps } from './View/interfaces'

/**
 * Рейтинги
 */
const RatingsPage: Page<
  PageProps & {
    /**
     * Страница конкретного типа рейтинга
     */
    ratingTypeAlias: RatingsPageViewProps['ratingTypeAlias']
  }
> = ({ ratingTypeAlias }) => {
  const response = useVotesByRatingQuery()

  const context = useContext(AppContext)

  return useMemo(() => {
    const ratingTypes = response.data?.ratings

    if (!ratingTypes?.length) {
      return null
    }

    return (
      <>
        <View
          ratingsTypes={ratingTypes}
          votes={context?.appData?.companies_rating || []}
          companies={response.data?.companies || []}
          ratingTypeAlias={ratingTypeAlias}
        />
      </>
    )
  }, [
    context?.appData?.companies_rating,
    ratingTypeAlias,
    response.data?.companies,
    response.data?.ratings,
  ])
}

RatingsPage.getInitialProps = async (context) => {
  const { apolloClient, query } = context

  const ratingTypeAlias: string | undefined =
    query.alias && typeof query.alias === 'string' ? query.alias : undefined

  const result = await apolloClient.query<VotesByRatingQuery>({
    query: VotesByRatingDocument,
  })

  let statusCode: number | undefined

  if (
    // Если не были получены данные рейтингов
    !result.data.ratings.length ||
    // или запрошен конкретный рейтинг, но он не найден
    (ratingTypeAlias &&
      !result.data.ratings.find((n) => n.alias === ratingTypeAlias))
  ) {
    statusCode = 404
  }

  return {
    statusCode,
    ratingTypeAlias,
  }
}

export default RatingsPage
