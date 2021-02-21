/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import App, { AppContext, AppInitialProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import muiTheme from 'src/theme/muiTheme'
import Link from 'next/link'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import { useApollo, initializeApollo } from 'src/lib/apolloClient'
import jquery from 'jquery'

import MainMenu from 'src/components/App/MainMenu'
import Head from 'next/head'
import Cities from './Cities'

import { CitiesDocument, CitiesQueryResult } from 'src/modules/gql/generated'

import { NextPageContextCustom, AppProps } from './interfaces'

// import chalk from 'chalk';
// import Debug from 'debug';
// const debug = Debug('apolloClient');

declare global {
  interface Window {
    $: any
    jQuery: any
  }
}

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = jquery
  // eslint-disable-next-line no-restricted-modules
  require('bootstrap/dist/js/bootstrap')
}

export default function MyApp({ Component, pageProps }: AppProps) {
  // debug(chalk[pageProps.apolloClient ? 'green' : 'red']('MyApp pageProps apolloClient exists'))

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  // const {
  //   // apolloClient: store,
  //   // apolloClient,
  // } = pageProps;

  // const apolloClient = useApollo(pageProps.initialApolloState, store as ApolloClientNormolized);
  const apolloClient = useApollo(pageProps.initialApolloState, false)

  // debug(chalk[apolloClient ? 'green' : 'red']('MyApp apolloClient exists'))

  const counters = useMemo(() => {
    const metrika = `<!-- Yandex.Metrika informer -->
      <a rel="noreferrer noopener" href="https://metrika.yandex.ru/stat/?id=26848689&amp;from=informer"
      target="_blank" rel="nofollow"><img src="https://bs.yandex.ru/informer/26848689/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
      style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" onclick="try{Ya.Metrika.informer({i:this,id:26848689,lang:'ru'});return false}catch(e){}"/></a>
      <!-- /Yandex.Metrika informer -->
    `

    return (
      <Grid container alignItems="center">
        <Grid item>
          <div dangerouslySetInnerHTML={{ __html: metrika }} />
        </Grid>

        <Grid item>
          Powered by{' '}
          <a
            href="https://prisma-cms.com"
            rel="noreferrer noopener"
            target="_blank"
            title="Разработка сайтов и интернет-магазинов на JavaScript"
          >
            Prisma-CMS
          </a>
        </Grid>
      </Grid>
    )
  }, [])

  return (
    <ThemeProvider theme={muiTheme}>
      <Head>
        {/* 
          PWA primary color 
        */}
        <meta name="theme-color" content={muiTheme.palette.primary.main} />
      </Head>

      <style jsx global>{`
        #__next {
          height: 100%;
        }
      `}</style>

      {/* 
        CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. 
      */}
      <CssBaseline />

      <ApolloProvider client={apolloClient}>
        <Cities />

        <div
          style={{
            maxWidth: 1260,
            width: '100%',
            margin: '0 auto',
            // padding: '0 16px',
            height: '100%',
            border: '1px solid',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* {pageReloading
            ?
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
              }}
            >
              <div
                className="preloader"
              />
            </div>
            :
            null
          } */}

          <MainMenu />

          <div
            style={{
              overflow: 'auto',
              flex: 1,
              border: '1px solid green',
              padding: '20px 16px',
            }}
          >
            <Component {...pageProps} />

            <CardContent>
              <Grid
                container
                style={{
                  paddingTop: 30,
                }}
              >
                <Grid item xs>
                  {counters}
                </Grid>

                <Grid item>
                  <Link href="/ratings/">
                    <a title="Рейтинги бань">Рейтинги бань</a>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="/contacts.html">
                    <a title="Разместить информацию о бане">
                      Добавить баню или сауну
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  /**
   * Для того, чтобы в итоге можно было собрать общий аполло-стейт
   * с приложения и далее выполняемый страниц и документа,
   * передаем аполло-клиент далее в контекст приложения.
   */
  const apolloClient = initializeApollo({
    withWs: false,
    appContext,
  })

  const newAppContext = {
    ...appContext,
    ctx: {
      ...appContext.ctx,
      apolloClient,
    } as NextPageContextCustom,
  }

  /**
   * Здесь вызывается page.getInitialProps() и далее _document.getInitialProps()
   * Все собирается в конечный appProps
   */
  const appProps = await App.getInitialProps(newAppContext)

  const { pageProps, ...otherProps } = appProps

  /**
   * Load global API data
   */
  ;(await apolloClient.query({
    query: CitiesDocument,
    variables: {},
  })) as CitiesQueryResult

  const newProps: AppInitialProps = {
    ...otherProps,
    pageProps: {
      ...pageProps,
      initialApolloState: apolloClient.cache.extract(),
    },
  }

  return newProps
}
