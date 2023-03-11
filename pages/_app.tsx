import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { NextPageWithLayout } from '../component/types/next-page-with-layout'

import theme from '../config'
import '@fontsource/lora';
import '@fontsource/rubik';
import { LoggedInProvider } from '../component/layout/AuthContext'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <ChakraProvider theme={theme}>
      <LoggedInProvider>
        {getLayout(<Component {...pageProps} />)}
      </LoggedInProvider>
      
     
      
    </ChakraProvider>
  )
}
