import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
// pages/_app.js
import localFont from '@next/font/local'
import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
  subsets: ['latin'], weight: ['400'], display: 'swap'
})


// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../utils/HandjetFlowerDouble-Medium.woff2', display: 'swap' })

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: orange;
  }
  body, html, main {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    font-family: ${myFont.style.fontFamily};
    /* background-color: black; */
    position: relative;
    overflow-x: hidden;
    background-color: #0A0E1B;
  }
  main {
    overflow: hidden;
  }
  h1, h2, p {
    font-family: ${IM.style.fontFamily};
    -webkit-font-smoothing: antialiased;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }
  
  body {
    overflow-x: hidden;
    /* background-color: #0A0E1B; */

  }
  * {
    box-sizing: border-box;
  }
  svg {
    padding: 0px;
    margin: 0px;
    display: block;
  }
  body::-webkit-scrollbar {
  background: transparent; /* Chrome/Safari/Webkit */
  width: 0px;
}
    
body {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
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
    xs: string,
    sm: string,
    base: string,
    lg: string,
    xl: string,
    xxl: string,
    xxxl: string,
    xxxxl: string
  }
}

const theme: ThemeInterface = {
  colors: {
    "background": '#141414',
    "background-contrast": '#1D1D1D',
    "primary": '#0B0E1A', //  "primary": '#0d142c',
    "primary-contrast": '#1C1931',
    accent: '#ca1016',
    "secondary-accent": '#F7931D'

  },
  fontColors: {
    primary: 'white',
    secondary: "#D9D9D9"
  },
  fontSize: {
    xs: '0.5rem',
    sm: '0.75rem', /* 12px */
    base: '1rem',   /* 16px, base */
    lg: '1.25rem', /* 20px */
    xl: '1.5rem', /* 24px */
    xxl: '1.75rem', /* 28px */
    xxxl: '2rem',    /* 32px */
    xxxxl: '4rem'
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
