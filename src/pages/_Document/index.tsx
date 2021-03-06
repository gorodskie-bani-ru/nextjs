import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import {
  ServerStyleSheets,
  // createGenerateClassName,
} from '@material-ui/core/styles'
import theme from 'src/theme/muiTheme'
// import createEmotionServer from '@emotion/server/create-instance';
// import theme from '../src/theme';
// import { cache } from './_app';
import { ServerStyleSheet } from 'styled-components'

// import { JssProvider, SheetsRegistry } from 'react-jss'

// const { extractCritical } = createEmotionServer(cache);

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          /> */}

          {/* <link
            type="text/css"
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter"
          /> */}
          {/* <!-- Yandex.Metrika counter --> */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
           
              ym(26848689, "init", {
                         clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   trackHash:true
              });
              `,
            }}
          />
          {/* <!-- /Yandex.Metrika counter --> */}

          <base href="/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const sheet = new ServerStyleSheet()
  // const sheetsRegistry = new SheetsRegistry()
  // const generateClassName = createGenerateClassName()

  // Render app and page and get the context of the page with collected side effects.
  const MUIsheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => {
        return (
          <>
            {MUIsheets.collect(
              <>
                {sheet.collectStyles(
                  // <JssProvider
                  //   registry={sheetsRegistry}
                  //   generateClassName={generateClassName}
                  // >
                  <App {...props} />
                  // </JssProvider>
                )}
              </>
            )}
          </>
        )
      },
    })

  const initialProps = await Document.getInitialProps(ctx)
  // const styles = extractCritical(initialProps.html);

  // const css = sheetsRegistry.toString()

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      MUIsheets.getStyleElement(),
      sheet.getStyleElement(),
      // <style
      //   key="styles"
      //   id="server-side-jss"
      //   dangerouslySetInnerHTML={{
      //     __html: css,
      //   }}
      // />,
      // <style
      //   key="emotion-style-tag"
      //   data-emotion={`css ${styles.ids.join(' ')}`}
      //   // eslint-disable-next-line react/no-danger
      //   dangerouslySetInnerHTML={{ __html: styles.css }}
      // />,
    ],
  }
}
