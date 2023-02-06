import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

import theme from '../config'
import '@fontsource/lora';
import '@fontsource/rubik';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Nav/> */}
      <Component {...pageProps} />
      {/* <Footer/> */}
      
    </ChakraProvider>
  )
}
