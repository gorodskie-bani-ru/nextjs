import React, { useMemo } from 'react'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableStyled,
} from 'src/components/ui/GridTable/styles'
import Pagination from 'src/components/ui/Pagination'
import { UsersPageViewProps } from './interfaces'
import UsersPageViewUser from './User'

const UsersPageView: React.FC<UsersPageViewProps> = ({
  users,
  pagination,
  ...other
}) => {
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

        <Pagination {...pagination} />
      </>
    )
  }, [other, pagination, users])
}

export default UsersPageView
