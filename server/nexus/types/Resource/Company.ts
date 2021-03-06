/* eslint-disable @typescript-eslint/camelcase */
import { objectType } from 'nexus'
import { TemplateVarIDs } from '../../constants'
import { coords } from './definitions/coords'

export const Company = objectType({
  name: 'Company',
  description: 'Компания',

  definition(t) {
    t.implements('ResourceInterface')

    coords(t)

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

    t.nonNull.list.nonNull.field('gallery', {
      type: 'GalleryImage',
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
