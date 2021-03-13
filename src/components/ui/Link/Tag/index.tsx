import React, { useMemo } from 'react'

import Link from '..'
import { TagLinkProps } from './interfaces'

/**
 * Ссылка на страницу тега
 */
const TagLink: React.FC<TagLinkProps> = ({ tag, children, ...other }) => {
  return useMemo(() => {
    return (
      <Link href={`/tag/${tag.tag}`} title={tag.tag} {...other}>
        {children || tag.tag}
      </Link>
    )
  }, [tag.tag, other, children])
}

export default TagLink
