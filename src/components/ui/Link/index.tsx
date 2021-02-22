import React from 'react'
import NextLink from 'next/link'
import { LinkProps } from './interfaces'
import { LinkStyled } from './styles'

const Link: React.FC<LinkProps> = ({ children, href, ...other }) => {
  return (
    <>
      <NextLink href={href}>
        <LinkStyled {...other}>{children}</LinkStyled>
      </NextLink>
    </>
  )
}

export default Link
