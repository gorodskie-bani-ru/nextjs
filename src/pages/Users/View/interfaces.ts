import { UsersPageViewUserProps } from './User/interfaces'

export interface UsersPageViewProps {
  // data: UsersConnectionQuery | null | undefined

  users: UsersPageViewUserProps['user'][]
}
