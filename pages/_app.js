import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import { GlobalStyle } from '../src/theme/GlobalStyle';
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title> #tapago - workoutSocial</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&display=swap" rel="stylesheet" />
    </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
