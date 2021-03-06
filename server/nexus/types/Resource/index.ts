/* eslint-disable @typescript-eslint/camelcase */
import { objectType, unionType } from 'nexus'
import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { commentSelect } from '../Query/definitions/society/Comment'

export * from './Company'
export * from './City'

export const ResourceUnion = unionType({
  name: 'ResourceUnion',
  description: 'Компания, Город или иной ресурс',
  definition(t) {
    t.members('Resource', 'Company', 'City')
  },
  resolveType: (item) => {
    if (item.template === 26) {
      return 'City'
    } else if (item.template === 27) {
      return 'Company'
    }

    return 'Resource'
  },
})

export const Resource = objectType({
  name: 'Resource',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
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
