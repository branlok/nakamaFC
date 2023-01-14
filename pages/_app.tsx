import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
// pages/_app.js
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../utils/HandjetFlowerDouble-Medium.woff2', display: 'swap' })

const GlobalStyle = createGlobalStyle`

  body, html, main {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    font-family: ${myFont.style.fontFamily};
    background-color: black;
    position: relative;
    overflow-x: hidden;
  }
  body {
    overflow-x: hidden;
  }
  * {
    box-sizing: border-box;
  }
  svg {
    padding: 0px;
    margin: 0px;
    display: block;
  }
`


interface ThemeInterface {
  colors: {
    "background": string,
    "background-contrast": string,
    "primary": string,
    "primary-contrast": string,
    accent: string,
    "secondary-accent": string,
  },
  fontColors: {
    "primary": string,
    "secondary": string
  },
  fontSize: {
    sm: string,
    base: string,
    lg: string,
    xl: string,
    xxl: string,
    xxxl: string,
  }
}

const theme: ThemeInterface = {
  colors: {
    "background": '#141414',
    "background-contrast": '#1D1D1D',
    "primary": '#0A0E1B',
    "primary-contrast": '#1C1931',
    accent: '#D2353B',
    "secondary-accent": '#F7931D'

  },
  fontColors: {
    primary: 'white',
    secondary: "#D9D9D9"
  },
  fontSize: {
    sm: '0.75rem', /* 12px */
    base: '1rem',   /* 16px, base */
    lg: '1.25rem', /* 20px */
    xl: '1.5rem', /* 24px */
    xxl: '1.75rem', /* 28px */
    xxxl: '2rem'    /* 32px */
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
