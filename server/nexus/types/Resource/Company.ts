/* eslint-disable @typescript-eslint/camelcase */
import { objectType } from 'nexus'
import { TemplateVarIDs } from '../../constants'
import { coordsResolver } from '../Query/resolvers/coords'

export const Company = objectType({
  name: 'Company',
  description: 'Компания',
  // sourceType: {
  //   module: '@prisma/client',
  //   export: 'bani684_site_content',
  // },
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('pagetitle')
    t.nonNull.string('longtitle')
    t.nonNull.string('description')
    t.nonNull.int('createdby')
    t.nonNull.date('createdon')
    // t.nonNull.date("pubdate")
    t.string('content')
    t.string('uri')
    t.string('alias')
    t.nonNull.int('template')
    t.nonNull.boolean('published')
    t.nonNull.boolean('searchable')
    // t.nonNull.date("publishedon")
    t.nonNull.int('editedby')
    t.nonNull.date('editedon')
    // t.nonNull.string("alias")
    t.string('image', {
      resolve(parent) {
        return (
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.image
          )?.value || null
        )
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
    // t.string('pricesComments', {
    //   description: "Комментарии к ценам",
    //   resolve(parent) {
    //     return parent.TemplateVarValues?.find(n => n.tmplvarid === TemplateVarIDs.pricesComments)?.value || null
    //   }
    // })
    // t.field('coords', {
    //   type: 'Coordinates',
    // })

    t.field('coords', {
      type: 'Coordinates',
      description: 'Координаты',
      resolve: coordsResolver,
    })

    // t.nonNull.string('email')
    t.list.nonNull.field('TemplateVarValues', {
      type: 'bani684_site_tmplvar_contentvalues',
    })

    t.nonNull.list.nonNull.field('gallery', {
      type: GalleryImage,
      resolve(parent) {
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
                  image,
                  description,
                }
              })
              .filter((n: File | null) => n)
          } catch (error) {
            console.error(error)
          }
        }

        return gallery
      },
    })
  },
})

const GalleryImage = objectType({
  name: 'GalleryImage',
  definition(t) {
    t.nonNull.string('title')
    t.nonNull.string('image')
    t.nonNull.string('description')
  },
})