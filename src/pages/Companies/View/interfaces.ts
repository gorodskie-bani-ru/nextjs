import { CompaniesQuery } from 'src/modules/gql/generated'

export type CompaniesViewProps = {
  componies: CompaniesQuery['companies']
}
