import React, { useMemo } from 'react'
import Editor, { PrismaCmsEditorProps } from '@prisma-cms/editor'
import { TopicProps } from './interfaces'
import { TopicStyled } from './styles'
import Link from '../Link'
import Title from '../Title'
import UserLink from '../Link/User'
import moment from 'moment'

const Topic: React.FC<TopicProps> = ({ topic, ...other }) => {
  const content = useMemo(() => {
    if (!topic.content) {
      return null
    }

    try {
      const value = JSON.parse(topic.content) as PrismaCmsEditorProps['value']

      if (value) {
        return <Editor editorKey="topic" value={value} />
      }
    } catch (error) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: topic.content,
          }}
        />
      )
    }
  }, [topic.content])

  return useMemo(() => {
    return (
      <TopicStyled {...other}>
        <Link href={topic.uri || '#'} title={topic.pagetitle}>
          <Title>{topic.pagetitle}</Title>
        </Link>
        {content && <div className="content">{content}</div>}
        {topic.CreatedBy && <UserLink user={topic.CreatedBy} />} |{' '}
        {topic.createdon && moment(topic.createdon).format('YYYY-MM-DD')}
      </TopicStyled>
    )
  }, [
    other,
    topic.uri,
    topic.pagetitle,
    topic.CreatedBy,
    topic.createdon,
    content,
  ])
}

export default Topic
