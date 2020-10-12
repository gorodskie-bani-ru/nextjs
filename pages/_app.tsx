import React, { useMemo } from 'react'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'src/theme'
import Link from 'next/link'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import { useApollo } from 'src/lib/apolloClient'

import 'src/components/App/styles/styles.less'

export type AppProps = {
  Component: any
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  const apolloClient = useApollo(pageProps.initialApolloState)

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
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        #__next {
          height: 100%;
        }
      `}</style>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      <ApolloProvider client={apolloClient}>
        <div
          style={{
            maxWidth: 1260,
            width: '100%',
            margin: '0 auto',
            padding: '0 16px',
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
      </ApolloProvider>
    </ThemeProvider>
  )
}
