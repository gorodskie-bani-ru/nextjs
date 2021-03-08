import React, { useContext, useMemo } from 'react'

import View from './View'

import { Page } from '../_App/interfaces'
import { NextSeo } from 'next-seo'
import {
  useVotesByRatingQuery,
  VotesByRatingDocument,
} from 'src/modules/gql/generated'
import { AppContext } from '../_App/Context'

/**
 * Рейтинги
 */
const RatingsPage: Page = () => {
  const response = useVotesByRatingQuery()

  const context = useContext(AppContext)

  return useMemo(() => {
    const ratingTypes = response.data?.ratings

    if (!ratingTypes?.length) {
      return null
    }

    return (
      <>
        <NextSeo
          title="Рейтинги бань и саун"
          description={`Оценки по критериям ${ratingTypes
            .map((n) => `"${n.pagetitle}"`)
            .join(', ')}`}
        />

        <View
          ratingsTypes={ratingTypes}
          votes={context?.appData?.companies_rating || []}
          companies={response.data?.companies || []}
        />
      </>
    )
  }, [
    context?.appData?.companies_rating,
    response.data?.companies,
    response.data?.ratings,
  ])
}

RatingsPage.getInitialProps = async (context) => {
  const { apolloClient } = context

  await apolloClient.query({
    query: VotesByRatingDocument,
  })

  return {}
}

export default RatingsPage
