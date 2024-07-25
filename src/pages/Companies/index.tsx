import React from 'react'
import {
  useCompaniesQuery,
  CompaniesDocument,
  CompaniesQueryResult,
} from 'src/modules/gql/generated'
import { Page } from '../_App/interfaces'
import Link from 'next/link'

const CompaniesPage: Page = () => {
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
          <Link href={uri} title={name || undefined}>
            {name}
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

CompaniesPage.getInitialProps = async (appContext) => {
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
