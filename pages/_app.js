import { ThemeProvider } from 'next-themes'
import { darkTheme, globalCss } from 'stitches.config'
import 'styles/normalize.css'

function MyApp({ Component, pageProps }) {
  globalStyles()

  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="dark"
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

const globalStyles = globalCss({
  body: {
    fontFamily: '$inter',
    color: '$gray12'
  },
  '@font-face': []
})
