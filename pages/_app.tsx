import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

import '@fontsource/source-sans-pro';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <Nav/> */}
      <Component {...pageProps} />
      {/* <Footer/> */}
      
    </ChakraProvider>
  )
}
