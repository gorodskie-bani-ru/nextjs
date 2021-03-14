/**
 * Blog and Resource resources have same url mask like "/blog/..."
 * so we need load resource and switch like type
 */

import React, { useMemo } from 'react'
import {
  CompaniesDocument,
  CompaniesQuery,
  CompaniesQueryVariables,
  ResourcesDocument,
  ResourcesQuery,
  ResourcesQueryVariables,
  useResourcesQuery,
} from 'src/modules/gql/generated'

// import View from './View'

import { Page, NextPageContextCustom } from '../_App/interfaces'
// import { ResourcePageProps } from './interfaces'
// import { NextSeo } from 'next-seo'
import { useRouter, NextRouter } from 'next/router'

import { ResourcePageProps } from './interfaces'
import CompanyView from '../Companies/Company/View'
import Topic from 'src/components/ui/Topic'
import { NextSeo } from 'next-seo'
import CityPage, { getCompaniesVariables } from '../Cities/City'

export const getResourceVariables = (
  router: NextRouter | NextPageContextCustom
) => {
  const uri = new URL(
    router.asPath || '',
    global.location?.origin || 'http://localhost'
  )

  const pathname = decodeURI(uri.pathname).replace(/^\/+/, '')

  const variables: ResourcesQueryVariables = {
    take: 1,
    where: {
      deleted: {
        equals: false,
      },
      published: {
        equals: true,
      },
      OR: [
        {
          uri: {
            equals: pathname,
          },
        },
        {
          uri: {
            equals: pathname + '/',
          },
        },
      ],
    },
    withContent: true,
    withCreatedBy: true,
    withComments: true,
  }

  return variables
}

const ResourcePage: Page<ResourcePageProps> = () => {
  const router = useRouter()

  const variables = useMemo(() => getResourceVariables(router), [router])

  const response = useResourcesQuery({
    variables,
    onError: console.error,
  })

  const object = response.data?.resources[0]

  return useMemo(() => {
    if (!object || !object.__typename) {
      return null
    }

    if (object.__typename === 'Company') {
      //

      return (
        <>
          <NextSeo
            title={object.pagetitle}
            description={`Все информация о "${object.pagetitle}"`}
          />
          <CompanyView company={object} />
        </>
      )
    } else if (object.__typename === 'City') {
      return <CityPage city={object} />
    } else if (
      object.__typename === 'Review' ||
      object.__typename === 'Topic'
    ) {
      //

      return (
        <>
          <NextSeo title={object.pagetitle} />
          <Topic topic={object} withComments />
        </>
      )
    }
    // else if (object.__typename === 'City') {
    //   //

    //   return <CompanyView company={object} />
    // }
    // Topic
    // else if (
    //   object.__typename === 'Resource' &&
    //   [15, 28].includes(object.template)
    // ) {
    //   return (
    //     <>
    //       <NextSeo title={object.pagetitle} />
    //       <Topic topic={object} withComments />
    //     </>
    //   )
    // }
    else {
      throw new Error('Unknown Resource type')
    }
  }, [object])
}

ResourcePage.getInitialProps = async (context) => {
  const { apolloClient, query, res } = context

  /**
   * Редиректим со страниц с даннми координат
   */
  if (res && Array.isArray(query.path) && query.path.length) {
    const path = [...query.path]

    const coordsPath = path.find((n) => /^@\d+/.test(n))

    if (coordsPath) {
      path.pop()

      // TODO Поправить тип для res
      // https://freecode.academy/tasks/ckm95xkamgc0h07306qnymjuk
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      res.redirect(301, '/' + path.join('/'))

      return {}
    }
  }

  const variables = getResourceVariables(context)

  // console.log('ResourcePage variables', variables);

  const queryResult = await apolloClient.query<ResourcesQuery>({
    query: ResourcesDocument,

    /**
     * Важно, чтобы все переменные запроса серверные и фронтовые совпадали,
     * иначе при рендеринге не будут получены данные из кеша и рендер будет пустой.
     */
    variables,
  })

  /**
   * Получаем первый попавшийся документ по запрошенному УРЛу
   */
  const object = queryResult.data.resources[0]

  // let type: ResourcePageProps["type"]

  // if (object) {

  //   /**
  //    * Определяем тип ресурса по шаблону
  //    */
  //   switch (object.template) {

  //     case 27:

  //       type = "company";
  //       break;

  //   }

  // }

  // console.log('ResourcePage object', object);

  // switch (object?.type) {
  //   case ResourceType.TOPIC:
  //   case ResourceType.COMMENT:
  //     break

  //   case ResourceType.BLOG:
  //   case ResourceType.PERSONALBLOG:
  //     await blogGetInitialProps(context, object)

  //     break

  //   default:
  //     return {
  //       statusCode: 404,
  //     }
  // }

  let statusCode = 404

  if (object && object.__typename) {
    if (
      object.__typename === 'Company' ||
      object.__typename === 'Review' ||
      object.__typename === 'Topic'
      // || (object.__typename === 'Resource' &&
      //   [15, 28].includes(object.template))
    ) {
      statusCode = 200
    } else if (object.__typename === 'City') {
      /**
       * Дополнительно получаем данные компаний
       */
      await apolloClient.query<CompaniesQuery, CompaniesQueryVariables>({
        query: CompaniesDocument,
        variables: getCompaniesVariables({
          city: object,
          query: context.query,
        }).variables,
      })

      statusCode = 200
    } else if (['City'].includes(object.__typename)) {
      //
    }
  }

  return {
    queryResult,
    statusCode,
  }
}

export default ResourcePage
