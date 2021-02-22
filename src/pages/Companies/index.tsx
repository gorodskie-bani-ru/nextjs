import React from 'react'
import {
  useCompaniesQuery,
  CompaniesDocument,
  CompaniesQueryResult,
} from 'src/modules/gql/generated'
import { NextPageContextCustom } from '../_App/interfaces'
import Link from 'next/link'

const CompaniesPage = () => {
  const {
    // loading,
    // error,
    data,
  } = useCompaniesQuery({
    variables: {
      take: 3,
    },
  })

  const companiesList =
    data?.companies.map((company) => {
      if (!company || !company.uri) {
        return null
      }

      const { id, pagetitle: name, uri } = company

      return (
        <div key={id}>
          <Link href={uri}>
            <a title={name || undefined}>{name}</a>
          </Link>
        </div>
      )
    }) ?? []

  return (
    <>
      CompaniesPage
      <div>{companiesList}</div>
    </>
  )
}

CompaniesPage.getInitialProps = async (appContext: NextPageContextCustom) => {
  /**
   * Load global API data
   */
  const { apolloClient } = appContext

  ;(await apolloClient.query({
    query: CompaniesDocument,
    variables: {},
  })) as CompaniesQueryResult

  return {}
}

export default CompaniesPage
