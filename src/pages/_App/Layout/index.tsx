import React, { useMemo } from 'react'

import Link from 'next/link'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import MainMenu from './MainMenu'

/**
 * Общий лейаут для всех страниц сайта
 */
const Layout: React.FC<React.PropsWithChildren> = ({ children, ...other }) => {
  const counters = useMemo(() => {
    return (
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          &copy;{' '}
          <a
            href="https://freecode.academy"
            rel="noreferrer noopener"
            target="_blank"
            title="Разработка сайтов и интернет-магазинов на JavaScript"
          >
            FreeCode.Academy
          </a>
        </Grid>
      </Grid>
    )
  }, [])

  return useMemo(() => {
    return (
      <div
        style={{
          // maxWidth: 1260,
          width: '100%',
          margin: '0 auto',
          // padding: '0 16px',
          height: '100%',
          // border: '1px solid',
          display: 'flex',
          flexDirection: 'column',
        }}
        {...other}
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
            // border: '1px solid green',
          }}
        >
          <div
            style={{
              maxWidth: 1260,
              margin: '0 auto',
              padding: '20px 16px',
            }}
          >
            {children}

            <CardContent>
              <Grid
                container
                spacing={1}
                style={{
                  paddingTop: 30,
                }}
              >
                <Grid item xs>
                  {counters}
                </Grid>

                <Grid item>
                  <Link href="/ratings" title="Рейтинги бань">
                    Рейтинги бань
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="/tag" title="Теги">
                    Теги
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="/people" title="Участники">
                    Участники
                  </Link>
                </Grid>

                {/* <Grid item>
                  <Link href="/contacts.html">
                    <a title="Разместить информацию о бане">
                      Добавить баню или сауну
                    </a>
                  </Link>
                </Grid> */}
              </Grid>
            </CardContent>
          </div>
        </div>
      </div>
    )
  }, [children, counters, other])
}

export default Layout
