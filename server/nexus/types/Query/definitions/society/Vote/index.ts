/* eslint-disable @typescript-eslint/camelcase */
import {
  bani684_site_content,
  bani684_site_tmplvar_contentvalues,
  bani684_society_votes,
  Prisma,
} from '@prisma/client'
import { ObjectDefinitionBlock, objectType } from 'nexus/dist/core'
import { TemplateVarIDs } from '../../../../../constants'
import { NexusGenObjects } from 'server/nexus/generated/nexus'
import { userSelect } from '../../User'

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
    type: Votes,
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
        vote_value_avg: number
      }

      type CompaniesResult = {
        company_id: NexusGenObjects['Company']['id']
        company_pagetitle: NexusGenObjects['Company']['pagetitle']
        company_createdby: NexusGenObjects['Company']['createdby']
        company_createdon: NexusGenObjects['Company']['createdon']
        company_description: NexusGenObjects['Company']['description']
        company_longtitle: NexusGenObjects['Company']['longtitle']
        company_published: NexusGenObjects['Company']['published']
        company_searchable: NexusGenObjects['Company']['searchable']
        company_template: NexusGenObjects['Company']['template']
        company_image: NexusGenObjects['Company']['image']
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
                  vote_value_avg: 'vote_value',
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
                    column: 'vote_value_avg',
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
            .select('tvs_image.value as company_image')

            // alias for selection
            .as('t')
        )

        /**
         * Конечные данные выборки
         */
        .select(
          'type',
          'target_id',
          'vote_value_avg',
          'company_id',
          'company_pagetitle',
          'company_createdby',
          'company_createdon',
          'company_published',
          'company_searchable',
          'company_template',
          'company_description',
          'company_longtitle',
          'company_image'
        )

      return query.then((r) => {
        return r.map((n): NexusGenObjects['Votes'] => {
          const {
            type,
            target_id,
            // vote_value_avg,
            vote_value_avg,

            company_id,
            company_pagetitle,
            company_createdby,
            company_createdon,
            company_published,
            company_searchable,
            company_template,
            company_description,
            company_longtitle,
            company_image,
          } = n

          return {
            type,
            target_id,
            avg: {
              vote_value_avg,
            },
            Company: {
              id: company_id,
              pagetitle: company_pagetitle,
              createdby: company_createdby,
              createdon: company_createdon,
              published: company_published,
              searchable: company_searchable,
              template: company_template,
              description: company_description,
              longtitle: company_longtitle,
              image: company_image,
            },
          }
        })
      })

      // const result = await ctx.prisma.$queryRaw<{
      //   type_id: number
      //   company_id: number
      //   vote_value_avg: number
      //   company_pagetitle: string
      // }[]>(sql.toQuery());
    },
  })
}

const Votes = objectType({
  name: 'Votes',
  description: 'Сгруппированные голоса',
  definition(t) {
    t.int('type')
    t.nonNull.int('target_id')
    t.nonNull.field('Company', {
      type: 'Company',
    })

    t.nonNull.field('avg', {
      type: VotesAvg,
    })
  },
})

const VotesAvg = objectType({
  description: 'Средние значения голосов',
  name: 'VotesAvg',
  definition(t) {
    t.nonNull.float('vote_value_avg')
  },
})
