import { NextSeo } from 'next-seo'
import React, { useMemo } from 'react'
import { RatingsPageViewProps } from './interfaces'
import RatingsPageViewRating from './Rating'
import { RatingsPageViewStyled } from './styles'

const RatingsPageView: React.FC<RatingsPageViewProps> = ({
  ratingsTypes,
  votes,
  companies,
  ratingTypeAlias,
  ...other
}) => {
  const content = useMemo(() => {
    if (ratingTypeAlias) {
      const type = ratingsTypes.find((n) => n.alias === ratingTypeAlias)

      if (type) {
        return (
          <>
            <NextSeo
              title={`Бани и сауны по рейтингу "${type.pagetitle}"`}
              description={`Все бани и сауны по рейтингу "${type.pagetitle}"`}
            />

            <RatingsPageViewRating
              ratingType={type}
              votes={votes}
              companies={companies}
              showAll={true}
            />
          </>
        )
      }
    } else {
      return (
        <>
          <NextSeo
            title="Рейтинги бань и саун"
            description={`Рейтинги бань и саун по критериям ${ratingsTypes
              .map((n) => `"${n.pagetitle}"`)
              .join(', ')}`}
          />
          {ratingsTypes.map((n) => {
            return (
              <RatingsPageViewRating
                key={n.id}
                ratingType={n}
                votes={votes}
                companies={companies}
                showAll={false}
              />
            )
          })}
        </>
      )
    }
  }, [companies, ratingTypeAlias, ratingsTypes, votes])

  return useMemo(() => {
    return <RatingsPageViewStyled {...other}>{content}</RatingsPageViewStyled>
  }, [other, content])
}

export default RatingsPageView
