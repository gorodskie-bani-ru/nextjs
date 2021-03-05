import React from 'react'
import NextLink from 'next/link'
import { LinkProps } from './interfaces'
import { LinkStyled } from './styles'

const Link: React.FC<LinkProps> = ({ children, href, title, ...other }) => {
  return (
    <>
      <NextLink href={href}>
        <LinkStyled title={title} {...other}>
          {children}
        </LinkStyled>
      </NextLink>
    </>
  )
}

export default Link
