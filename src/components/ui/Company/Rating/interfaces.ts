import { CompanyFieldsFragment } from 'src/modules/gql/generated'

export type CompanyRatingProps = {
  company: CompanyFieldsFragment

  allowEdit?: boolean
}
