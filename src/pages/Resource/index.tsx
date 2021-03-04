/**
 * Blog and Resource resources have same url mask like "/blog/..."
 * so we need load resource and switch like type
 */

import React, { useMemo } from 'react'
import {
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

      return <CompanyView company={object} />
    } else {
      throw new Error('Unknown Resource type')
    }
  }, [object])
}

ResourcePage.getInitialProps = async (context) => {
  const { apolloClient } = context

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

  return {
    queryResult,
    statusCode:
      !object || !object.__typename || !['Company'].includes(object.__typename)
        ? 404
        : undefined,
    // type,
  }
}

export default ResourcePage
