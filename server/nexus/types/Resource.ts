import { objectType } from 'nexus'

export const Resource = objectType({
  name: 'Resource',
  sourceType: {
    module: '@prisma/client',
    export: 'bani684_site_content',
  },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('pagetitle')
    t.nonNull.string('longtitle')
    t.nonNull.string('description')
    // t.nonNull.date("createdon")
    t.string('content')
    t.string('uri')
    // t.nonNull.string('email')
    // t.nonNull.list.nonNull.field('posts', {
    //   type: 'Post',
    //   resolve: (parent, _, context) => {
    //     return context.prisma.user
    //       .findUnique({
    //         where: { id: parent.id || undefined },
    //       })
    //       .posts()
    //   },
    // })
  },
})
