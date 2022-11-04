import Document, { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="manifest" href="/pwa/manifest.json" /> */}
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/pwa/favicons/72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/pwa/favicons/114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/pwa/favicons/144.png"
          />
          <meta name="google-site-verification" content="Kx7LKcgg5yUS3FvEvtkIrtecberh21b0hyc6b1nPMis" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          {process.env.NODE_ENV === 'production' && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
