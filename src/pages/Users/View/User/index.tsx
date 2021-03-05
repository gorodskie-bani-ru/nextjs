import React, { useMemo } from 'react'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
} from 'src/components/ui/GridTable/styles'
import UserLink from 'src/components/ui/Link/User'
import { UsersPageViewUserProps } from './interfaces'
import moment from 'moment'

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
        <GridTableAttributeStyled>
          {moment(user.createdon).format('DD-MM-YYYY')}
        </GridTableAttributeStyled>

        {/* <GridTableAttributeStyled>Email</GridTableAttributeStyled> */}
      </GridTableItemStyled>
    )
  }, [other, user])
}

export default UsersPageViewUser
