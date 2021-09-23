import type { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Theme from 'src/theme'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Jost', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
