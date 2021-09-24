import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Theme, GlobalStyle } from '@/styles/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
