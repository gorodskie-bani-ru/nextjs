import React, { useMemo } from 'react'

import Link from '..'
import { UserLinkProps } from './interfaces'

/**
 * Ссылка на страницу пользователя
 */
const UserLink: React.FC<UserLinkProps> = ({ user, ...other }) => {
  return useMemo(() => {
    return (
      <Link
        href={`/profile/${user.username}`}
        title={user.fullname || user.username || undefined}
        {...other}
      >
        {user.fullname || user.username}
      </Link>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [other, user.username])
}

export default UserLink
