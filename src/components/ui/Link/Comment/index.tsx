import React, { useMemo } from 'react'

import Link from '..'
import { CommentLinkProps } from './interfaces'

/**
 * Ссылка на страницу комментария
 */
const CommentLink: React.FC<CommentLinkProps> = ({
  comment,
  children,
  ...other
}) => {
  return useMemo(() => {
    return (
      <Link href={`/comments/comment-${comment.id}.html`} {...other}>
        {children}
      </Link>
    )
  }, [children, comment.id, other])
}

export default CommentLink
