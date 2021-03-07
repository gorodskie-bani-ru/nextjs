/* eslint-disable @typescript-eslint/camelcase */
import { interfaceType, objectType } from 'nexus'
// import { TemplateVarIDs } from '../../constants'
import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { commentSelect } from '../Query/definitions/society/Comment'

export const Resource = objectType({
  name: 'Resource',
  definition(t) {
    t.implements('ResourceInterface')
  },
})

export const ResourceInterface = interfaceType({
  name: 'ResourceInterface',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
  resolveType(item) {
    // Город
    if (item.template === 26) {
      return 'City'
    }
    // Заведение
    else if (item.template === 27) {
      return 'Company'
    }
    // Рейтинг заведений
    else if (item.template === 30) {
      return 'Rating'
    }
    // Общая публикация
    else if (item.template === 15) {
      return 'Topic'
    }
    // Отзыв о заведении
    else if (item.template === 28) {
      return 'Review'
    }
    return 'Resource'
  },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('pagetitle')
    t.nonNull.string('longtitle')
    t.nonNull.string('description')
    t.nonNull.date('createdon')
    // t.nonNull.date("publishedon")
    // t.nonNull.date("pubdate")
    t.string('content')
    t.string('uri')
    t.string('alias')
    t.nonNull.int('template')
    t.nonNull.boolean('published')
    t.nonNull.int('createdby')
    t.nonNull.boolean('searchable')
    t.list.nonNull.field('TemplateVarValues', {
      type: 'bani684_site_tmplvar_contentvalues',
    })
    t.field('CreatedBy', {
      type: 'User',
    })

    // TODO Создать отдельные типы Обзор и Топик и перенести получение комментов туда
    t.nonNull.list.nonNull.field('Comments', {
      type: 'Comment',
      description: 'Комментарии',
      async resolve(resource, _args, ctx) {
        const thread = await ctx.prisma.bani684_society_threads.findFirst({
          where: {
            target_id: {
              equals: resource.id,
            },
            target_class: {
              equals: 'modResource',
            },
          },
        })

        if (thread) {
          const comments: NexusGenObjects['Comment'][] = await ctx.prisma.bani684_society_comments.findMany(
            {
              where: {
                thread_id: thread.id,
              },
              orderBy: {
                createdon: 'asc',
              },
              select: commentSelect,
            }
          )

          return comments
        }

        return []
      },
    })
  },
})
