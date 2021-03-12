import { Button } from '@material-ui/core'
import React, { useCallback, useMemo, useState } from 'react'
import Link from 'src/components/ui/Link'
import Paper from 'src/components/ui/Paper'
import Title from 'src/components/ui/Title'
import CompaniesView from 'src/pages/Companies/View'
import { RatingsPageViewRatingProps } from './interfaces'
import { RatingsPageViewRatingStyled } from './styles'

const RatingsPageViewRating: React.FC<RatingsPageViewRatingProps> = ({
  ratingType,
  votes: votesProps,
  companies: companiesProps,
  showAll: showAllProps,
  ...other
}) => {
  const limit = 12

  const [showAll, showAllSetter] = useState(showAllProps)

  const toggleShowAll = useCallback(() => {
    showAllSetter(!showAll)
  }, [showAll])

  const { companies, haveMore, total } = useMemo(() => {
    // const companies: CompaniesViewProps["companies"] = [];

    const votes = votesProps.filter((n) => n.type === ratingType.id)

    // const companies = votes.filter(n => n.type === ratingType.id).map(n => n.Company)
    const companies = companiesProps.filter(
      (n) => votes.findIndex((v) => v.target_id === n.id) !== -1
    )

    const total = companies.length

    const haveMore = !showAll && total > limit

    return {
      companies: showAll ? companies : companies.slice(0, limit),
      haveMore,
      total,
    }
  }, [companiesProps, ratingType.id, showAll, votesProps])

  return useMemo(() => {
    return (
      <RatingsPageViewRatingStyled {...other}>
        <Paper>
          <Link
            href={(ratingType.uri && `/${ratingType.uri}`) || '#'}
            title={ratingType.pagetitle}
            className="rating--title"
          >
            <Title variant="h3">
              {haveMore ? `ТОП ${limit} бань` : `Все бани`} в рейтинге{' '}
            </Title>
            <Title variant="h2">{ratingType.pagetitle}</Title>
          </Link>

          <CompaniesView companies={companies} />

          {haveMore && (
            <div className="buttons">
              <Button variant="contained" onClick={toggleShowAll}>
                Показать все {total}
              </Button>
            </div>
          )}
        </Paper>
      </RatingsPageViewRatingStyled>
    )
  }, [
    companies,
    haveMore,
    other,
    ratingType.pagetitle,
    ratingType.uri,
    toggleShowAll,
    total,
  ])
}

export default RatingsPageViewRating
