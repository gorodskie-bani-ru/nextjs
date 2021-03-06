import React, { useMemo } from 'react'
import Editor, { PrismaCmsEditorProps } from '@prisma-cms/editor'
import { TopicProps } from './interfaces'
import { TopicStyled } from './styles'
import Link from '../Link'
import Title from '../Title'
import UserLink from '../Link/User'
import moment from 'moment'
import Paper from '../Paper'
import Comment from '../Comment'

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

  const comments = useMemo(() => {
    if (!topic.Comments.length) {
      return null
    }

    return (
      <div className="comments">
        <Title variant="h3">Комментарии</Title>
        {topic.Comments.map((n) => {
          return <Comment key={n.id} comment={n} />
        })}
      </div>
    )
  }, [topic.Comments])

  return useMemo(() => {
    return (
      <TopicStyled {...other}>
        <Paper>
          <Link href={topic.uri || '#'} title={topic.pagetitle}>
            <Title>{topic.pagetitle}</Title>
          </Link>
          {content && <div className="content">{content}</div>}
          {topic.CreatedBy && <UserLink user={topic.CreatedBy} />} |{' '}
          {topic.createdon && moment(topic.createdon).format('YYYY-MM-DD')}
          {comments}
        </Paper>
      </TopicStyled>
    )
  }, [
    other,
    topic.uri,
    topic.pagetitle,
    topic.CreatedBy,
    topic.createdon,
    content,
    comments,
  ])
}

export default Topic
