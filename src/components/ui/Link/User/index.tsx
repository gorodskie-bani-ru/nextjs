import React, { useMemo } from 'react'
import { imageFormats } from 'src/helpers/imageFormats'

import Link from '..'
import { UserLinkProps } from './interfaces'
import { UserLinkStyled } from './styled'

/**
 * Ссылка на страницу пользователя
 */
const UserLink: React.FC<UserLinkProps> = ({ user, ...other }) => {
  return useMemo(() => {
    return (
      <UserLinkStyled {...other}>
        <Link
          href={`/profile/${user.username}`}
          title={user.fullname || user.username || undefined}
        >
          {user.image && (
            <img src={imageFormats(user.image, 'thumb')} className="avatar" />
          )}{' '}
          {user.fullname || user.username}
        </Link>
      </UserLinkStyled>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [other, user.username])
}

export default UserLink
