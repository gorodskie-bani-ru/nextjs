import React, { useMemo } from 'react'

import Link from '..'
import { UserLinkProps } from './interfaces'

/**
 * Ссылка на страницу пользователя
 */
const UserLink: React.FC<UserLinkProps> = ({ user, ...other }) => {
  return useMemo(() => {
    return (
      <Link href={`/profile/${user.username}`} {...other}>
        {user.username}
      </Link>
    )
  }, [other, user.username])
}

export default UserLink
