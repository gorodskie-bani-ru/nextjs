import { NextSeo } from 'next-seo'
import React, { useMemo } from 'react'
import { SortOrder, useCitiesQuery } from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import CitiesPageView from './View'

/**
 * Страница всех городов
 */
const CitiesPage: Page = () => {
  const citiesData = useCitiesQuery({
    variables: {
      orderBy: {
        // TODO Сейчас сортировка связана с appData
        pagetitle: SortOrder.ASC,
      },
    },
  })

  return useMemo(() => {
    return (
      <>
        <NextSeo
          title="Все города"
          description="Города, в которых указаны бани"
        />

        <CitiesPageView cities={citiesData.data?.cities || []} />
      </>
    )
  }, [citiesData.data?.cities])
}

export default CitiesPage
