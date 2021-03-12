import { CompaniesQuery } from 'src/modules/gql/generated'

export type CompaniesViewProps = {
  companies: CompaniesQuery['companies']
}
