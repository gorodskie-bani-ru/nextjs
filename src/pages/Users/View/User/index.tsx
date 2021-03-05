import React, { useMemo } from 'react'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
} from 'src/components/ui/GridTable/styles'
import UserLink from 'src/components/ui/Link/User'
import { UsersPageViewUserProps } from './interfaces'

const UsersPageViewUser: React.FC<UsersPageViewUserProps> = ({
  user,
  ...other
}) => {
  return useMemo(() => {
    return (
      <GridTableItemStyled {...other}>
        <GridTableAttributeStyled>
          <UserLink user={user} />
        </GridTableAttributeStyled>
        <GridTableAttributeStyled>Дава регистрации</GridTableAttributeStyled>

        <GridTableAttributeStyled>Email</GridTableAttributeStyled>
      </GridTableItemStyled>
    )
  }, [other, user])
}

export default UsersPageViewUser
