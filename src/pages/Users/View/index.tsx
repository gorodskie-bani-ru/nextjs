import React, { useMemo } from 'react'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableStyled,
} from 'src/components/ui/GridTable/styles'
import { UsersPageViewProps } from './interfaces'
import UsersPageViewUser from './User'

const UsersPageView: React.FC<UsersPageViewProps> = ({ users, ...other }) => {
  return useMemo(() => {
    return (
      <>
        <GridTableStyled {...other}>
          <GridTableItemStyled>
            <GridTableAttributeStyled>Пользователь</GridTableAttributeStyled>
            <GridTableAttributeStyled>
              Дата регистрации
            </GridTableAttributeStyled>

            {/* 
            // TODO Resote comments count
          <GridTableAttributeStyled>Комментарии</GridTableAttributeStyled> 
          */}

            {/* <GridTableAttributeStyled>Емейл</GridTableAttributeStyled> */}
          </GridTableItemStyled>

          {users.map((n) => {
            return <UsersPageViewUser key={n.id} user={n} />
          })}
        </GridTableStyled>
      </>
    )
  }, [other, users])
}

export default UsersPageView
