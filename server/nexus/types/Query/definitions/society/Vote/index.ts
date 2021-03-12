/* eslint-disable @typescript-eslint/camelcase */
import {
  bani684_site_content,
  bani684_site_tmplvar_contentvalues,
  bani684_society_votes,
  Prisma,
} from '@prisma/client'
import { ObjectDefinitionBlock } from 'nexus/dist/core'
import { TemplateVarIDs } from '../../../../../constants'
import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { userSelect } from '../../User'
import { CompaniesResult } from '../../Resource/Company'

export const votes = (t: ObjectDefinitionBlock<'Query'>) => {
  t.crud.bani684SocietyVotess({
    type: 'Vote',
    alias: 'votes',
    description: 'Оценки',
    filtering: true,
    ordering: true,
    resolve(_, args, ctx) {
      const variables = args as Pick<
        Prisma.bani684_society_votesFindManyArgs,
        'where'
      >

      return ctx.prisma.bani684_society_votes.findMany({
        ...variables,
        select: {
          id: true,
          target_class: true,
          target_id: true,
          thread_id: true,
          type: true,
          user_id: true,
          vote_date: true,
          vote_direction: true,
          vote_value: true,
          Type: true,
          CreatedBy: {
            select: userSelect,
          },
        },
      })
    },
  })

  t.nonNull.list.nonNull.field('votesByRating', {
    description: 'Средние значения по голосам',
    type: 'Votes',
    // args: {
    //   where: arg({
    //     type: 'bani684_site_contentWhereInput',
    //   }),
    // },
    async resolve(_, _args, { knex }) {
      // const variables = args as Pick<Prisma.Bani684_society_votesGroupByArgs, "where">;

      // const result = await ctx.prisma.bani684_society_votes.groupBy({
      //   ...variables,
      //   by: [
      //     "type",
      //     "target_id",
      //   ],
      //   avg: {
      //     vote_value: true,
      //   },
      //   orderBy: {
      //     // type: "desc"
      //     // vote_value: "desc",
      //   },
      //   where: {
      //     ...variables.where,
      //     target_class: "modResource",
      //     type: {
      //       not: null,
      //     },
      //   },
      // })

      type VotesResult = Pick<bani684_society_votes, 'type' | 'target_id'> & {
        voteValueAvg: number
      }

      const query = knex
        .from<VotesResult & CompaniesResult>(
          knex
            /**
             * Выборка непосредственно статистики по голосам
             */
            .from<VotesResult>(
              knex<bani684_society_votes>('bani684_society_votes')
                .avg({
                  voteValueAvg: 'vote_value',
                })

                /**
                 * Получаемые поля
                 */
                .select('type', 'target_id')

                /**
                 * Условия выборки
                 */
                // Только рейтинги по компаниям
                .whereNotNull('type')
                // Только со ссылкой на компанию
                .whereNotNull('target_id')

                /**
                 * Группируем по полям
                 */
                .groupBy('type', 'target_id')

                /**
                 * Сортируем результаты
                 */
                .orderBy([
                  {
                    column: 'voteValueAvg',
                    order: 'desc',
                  },
                ])

                .as('votes')
            )
            .select('votes.*')

            /**
             * Данные компаний
             */
            .innerJoin<bani684_site_content>(
              'bani684_site_content as company',
              'company.id',
              '=',
              'target_id'
            )
            .select({
              company_id: 'company.id',
              company_uri: 'company.uri',
              company_pagetitle: 'company.pagetitle',
              company_createdby: 'company.createdby',
              company_createdon: 'company.createdon',
              company_description: 'company.description',
              company_longtitle: 'company.longtitle',
              company_published: 'company.published',
              company_searchable: 'company.searchable',
              company_template: 'company.template',
            })

            /**
             * Картинка компании
             */
            .leftJoin<bani684_site_tmplvar_contentvalues>(
              'bani684_site_tmplvar_contentvalues as tvs_image',
              {
                'tvs_image.tmplvarid': TemplateVarIDs.image,
                'tvs_image.contentid': 'company.id',
              }
            )
            .select('tvs_image.id as company_image_id')
            .select('tvs_image.value as company_image')

            /**
             * Галерея компании
             */
            .leftJoin<bani684_site_tmplvar_contentvalues>(
              'bani684_site_tmplvar_contentvalues as tvs_gallery',
              {
                'tvs_gallery.tmplvarid': TemplateVarIDs.gallery,
                'tvs_gallery.contentid': 'company.id',
              }
            )
            .select('tvs_gallery.id as company_gallery_id')
            .select('tvs_gallery.value as company_gallery')

            // alias for selection
            .as('t')
        )

        /**
         * Конечные данные выборки
         */
        .select(
          'type',
          'target_id',
          'voteValueAvg',
          'company_id',
          'company_uri',
          'company_pagetitle',
          'company_createdby',
          'company_createdon',
          'company_published',
          'company_searchable',
          'company_template',
          'company_description',
          'company_longtitle',
          'company_image',
          'company_image_id',
          'company_gallery_id',
          'company_gallery'
        )

      // console.log('SQL', query.toQuery());

      // TODO get ReturnType<> from knex and use prisma.$rawQuery
      return query.then((r) => {
        // console.log("r.length", r.length);

        return r.map((n): NexusGenObjects['Votes'] => {
          const {
            type,
            target_id,
            // voteValueAvg,
            voteValueAvg,

            company_id,
            company_uri,
            company_pagetitle,
            company_createdby,
            company_createdon,
            company_published,
            company_searchable,
            company_template,
            company_description,
            company_longtitle,
            company_image_id,
            company_image,
            company_gallery_id,
            company_gallery,
          } = n

          const TemplateVarValues: NexusGenObjects['Company']['TemplateVarValues'] = []

          if (company_image_id && company_image) {
            TemplateVarValues.push({
              id: company_image_id,
              tmplvarid: TemplateVarIDs.image,
              value: company_image,
              contentid: company_id,
            })
          }

          if (company_gallery_id && company_gallery) {
            TemplateVarValues.push({
              id: company_gallery_id,
              tmplvarid: TemplateVarIDs.gallery,
              value: company_gallery,
              contentid: company_id,
            })
          }

          return {
            type,
            target_id,
            avg: {
              voteValueAvg,
            },
            Company: {
              id: company_id,
              uri: company_uri,
              pagetitle: company_pagetitle,
              createdby: company_createdby,
              createdon: company_createdon,
              published: company_published,
              searchable: company_searchable,
              template: company_template,
              description: company_description,
              longtitle: company_longtitle,
              // image: company_image,
              TemplateVarValues,
            },
          }
        })
      })

      // const result = await ctx.prisma.$queryRaw<{
      //   type_id: number
      //   company_id: number
      //   voteValueAvg: number
      //   company_pagetitle: string
      // }[]>(sql.toQuery());
    },
  })
}
