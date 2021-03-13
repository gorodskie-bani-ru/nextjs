import React, { useMemo } from 'react'
import TagLink from '../Link/Tag'
import { TagsProps } from './interfaces'
import { TagsStyled } from './styles'

/**
 * Список тегов
 */
const Tags: React.FC<TagsProps> = ({ tags, ...other }) => {
  return useMemo(() => {
    if (!tags.length) {
      return null
    }

    return (
      <TagsStyled {...other}>
        {tags.map((tag) => {
          return <TagLink key={tag.tag} tag={tag} />
        })}
      </TagsStyled>
    )
  }, [other, tags])
}

export default Tags
