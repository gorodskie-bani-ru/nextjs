/* eslint-disable @typescript-eslint/camelcase */
import { FieldResolver, objectType } from 'nexus'
import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { TemplateVarIDs } from '../../../constants'
import { imageResolver } from '../../Query/resolvers/image'
import { coords } from '../definitions/coords'

export * from './Schedule'

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
    t.string('metro', {
      description: 'Метро',
      resolve(parent) {
        return (
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.metro
          )?.value || null
        )
      },
    })
    t.string('phones', {
      description: 'Телефоны',
      resolve(parent) {
        return (
          parent.TemplateVarValues?.find(
            (n) => n.tmplvarid === TemplateVarIDs.phones
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

    t.field('Schedules', {
      type: 'Schedules',
      description: 'Расписание работы',
      resolve(parent) {
        let Schedules: NexusGenObjects['Schedules'] | null = null

        if (parent.properties) {
          try {
            const data = JSON.parse(parent.properties) as {
              schedule: NexusGenObjects['Schedule'][] | null
              schedule_men: NexusGenObjects['Schedule'][] | null
              schedule_women: NexusGenObjects['Schedule'][] | null
              schedule_family: NexusGenObjects['Schedule'][] | null
            } | null

            if (data && typeof data === 'object' && !Array.isArray(data)) {
              const {
                schedule: Schedule,
                schedule_men: ScheduleMen,
                schedule_women: ScheduleWomen,
                schedule_family: ScheduleFamily,
              } = data

              Schedules = {
                Schedule: Schedule
                  ? Schedule.map((n: NexusGenObjects['Schedule'], index) =>
                      prepareShedule(n, index)
                    ).filter((n) => n)
                  : null,
                ScheduleMen: ScheduleMen
                  ? ScheduleMen.map((n: NexusGenObjects['Schedule'], index) =>
                      prepareShedule(n, index)
                    ).filter((n) => n)
                  : null,
                ScheduleWomen: ScheduleWomen
                  ? ScheduleWomen.map((n: NexusGenObjects['Schedule'], index) =>
                      prepareShedule(n, index)
                    ).filter((n) => n)
                  : null,
                ScheduleFamily: ScheduleFamily
                  ? ScheduleFamily.map(
                      (n: NexusGenObjects['Schedule'], index) =>
                        prepareShedule(n, index)
                    ).filter((n) => n)
                  : null,
              }
            }
          } catch (error) {
            console.error('Company::Schedules JSON parse error', error)
          }
        }

        return Schedules
      },
    })

    t.nonNull.list.nonNull.field('gallery', {
      type: 'GalleryImage',
      resolve: galleryResolver,
    })
  },
})

function prepareShedule(
  Schedule: NexusGenObjects['Schedule'] | null,
  index: number
): NexusGenObjects['Schedule'] | null {
  if (!Schedule) {
    return null
  }

  const {
    start: {
      day: dayStart = 0,
      hour: hourStart = 0,
      minute: minuteStart = 0,
      month: monthStart = 0,
      second: secondStart = 0,
      weekDay: weekDayStart = index,
      year: yearStart = 0,
    },
    end: {
      day: dayEnd = 0,
      hour: hourEnd = 0,
      minute: minuteEnd = 0,
      month: monthEnd = 0,
      second: secondEnd = 0,
      weekDay: weekDayEnd = index,
      year: yearEnd = 0,
    },
  } = Schedule

  return {
    start: {
      day: dayStart,
      hour: hourStart,
      minute: minuteStart,
      month: monthStart,
      second: secondStart,
      weekDay: weekDayStart,
      year: yearStart,
    },
    end: {
      day: dayEnd,
      hour: hourEnd,
      minute: minuteEnd,
      month: monthEnd,
      second: secondEnd,
      weekDay: weekDayEnd,
      year: yearEnd,
    },
  }
}
