import { objectType } from 'nexus'

export const GalleryImage = objectType({
  name: 'GalleryImage',
  definition(t) {
    t.nonNull.string('title')
    t.nonNull.string('image')
    t.nonNull.string('description')
  },
})
