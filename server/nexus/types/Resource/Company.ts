/* eslint-disable @typescript-eslint/camelcase */
import { FieldResolver, objectType } from 'nexus'
import { TemplateVarIDs } from '../../constants'
import { imageResolver } from '../Query/resolvers/image'
import { coords } from './definitions/coords'

const galleryResolver: FieldResolver<'Company', 'gallery'> = (parent) => {
  type File = {
    title: string
    image: string
    description: string
  }

  let gallery: File[] = []

  const galleryTV = parent.TemplateVarValues?.find(
    (n) => n.tmplvarid === TemplateVarIDs.gallery
  )

  if (galleryTV?.value) {
    try {
      gallery = JSON.parse(galleryTV.value)
        .map(({ title = '', image = '', description = '' }) => {
          if (!image) {
            return
          }

          return {
            title,
            image: imageResolver(image),
            description,
          }
        })
        .filter((n: File | null) => n)
    } catch (error) {
      console.error(error)
    }
  }

  return gallery
}

export const Company = objectType({
  name: 'Company',
  description: 'Компания',

  definition(t) {
    t.implements('ResourceInterface')

    coords(t)

    /**
     * Del. Если прописать резолвер, то поле не будет определено в типе объекта,
     * а оно нужно, чтобы можно было с чистым запросом прописать
     */
    t.string('image', {
      async resolve(parent, _args, ctx, info) {
        let image =
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.image
          )?.value || null

        if (image) {
          image = imageResolver(image)
        } else {
          const gallery = await galleryResolver(parent, {}, ctx, info)

          if (gallery && gallery[0]) {
            const item = await gallery[0]

            image = await item.image
          }
        }

        return image
      },
    })

    t.string('address', {
      description: 'Адрес (без указания города)',
      resolve(parent) {
        return (
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.address
          )?.value || null
        )
      },
    })
    t.string('addressComments', {
      description: 'Комментарии к адресу',
      resolve(parent) {
        return (
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.addressComments
          )?.value || null
        )
      },
    })
    t.string('prices', {
      description: 'Цены',
      resolve(parent) {
        return (
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.prices
          )?.value || null
        )
      },
    })
    t.string('workTime', {
      description: 'Рабочее время',
      resolve(parent) {
        return (
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.workTime
          )?.value || null
        )
      },
    })
    //   // t.string('pricesComments', {
    //   //   description: "Комментарии к ценам",
    //   //   resolve(parent) {
    //   //     return parent.TemplateVarValues?.find(n => n.tmplvarid === TemplateVarIDs.pricesComments)?.value || null
    //   //   }
    //   // })
    //   // t.field('coords', {
    //   //   type: 'Coordinates',
    //   // })

    //   // t.nonNull.string('email')
    //   t.list.nonNull.field('TemplateVarValues', {
    //     type: 'bani684_site_tmplvar_contentvalues',
    //   })

    t.field('rating', {
      type: 'VotesAvg',
      description: 'Средний рейтинг',
    })

    t.nonNull.list.nonNull.field('gallery', {
      type: 'GalleryImage',
      resolve: galleryResolver,
    })
  },
})
