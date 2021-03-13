import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React, { useMemo } from 'react'
import {
  QueryCompaniesArgs,
  useCompaniesQuery,
} from 'src/modules/gql/generated'
import { Page } from 'src/pages/_App/interfaces'
import { CityPageProps } from './interfaces'
import CityPageView from './View'

/**
 * Параметры для запроса компаний
 */
export const getCompaniesVariables = ({
  city,
  query,
}: {
  city: CityPageProps['city'] | undefined
  query: ParsedUrlQuery
}): {
  variables: QueryCompaniesArgs
  page: number
} => {
  let skip: number | undefined

  const take = 10

  const page =
    (query.page && typeof query.page === 'string' && parseInt(query.page)) || 0

  if (page > 1) {
    skip = (page - 1) * take
  }

  const variables: QueryCompaniesArgs = {
    take: 12,
    skip,
  }

  if (city?.coords) {
    variables.orderBy = {
      coords: {
        lat: city.coords.lat,
        lng: city.coords.lng,
      },
    }
  }

  return {
    variables,
    page,
  }
}

const CityPage: Page<CityPageProps> = ({ city, ...other }) => {
  const router = useRouter()

  const { variables, page } = useMemo(() => {
    return getCompaniesVariables({
      city,
      query: router.query,
    })
  }, [city, router.query])

  const companiesResponse = useCompaniesQuery({
    variables,
  })

  return useMemo(() => {
    return (
      <>
        <NextSeo
          title={`Общественные бани в городе "${city.pagetitle}"`}
          description={`Все общественные бани и сауны в городе "${city.pagetitle}"`}
        />
        <CityPageView
          city={city}
          companies={companiesResponse.data?.companies || []}
          pagination={{
            page,
            limit: companiesResponse.variables?.take || 0,
            total: companiesResponse.data?.companiesCount || 0,
          }}
          {...other}
        />
      </>
    )
  }, [
    city,
    companiesResponse.data?.companies,
    companiesResponse.data?.companiesCount,
    companiesResponse.variables?.take,
    other,
    page,
  ])
}

export default CityPage
