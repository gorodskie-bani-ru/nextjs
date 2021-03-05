import { PaginationProps } from 'src/components/ui/Pagination'
import { UsersPageViewUserProps } from './User/interfaces'

export type UsersPageViewProps = {
  // data: UsersConnectionQuery | null | undefined

  users: UsersPageViewUserProps['user'][]

  pagination: PaginationProps
}
