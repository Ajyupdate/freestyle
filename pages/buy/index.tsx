import React from 'react'
import type { ReactElement } from 'react'
import BuyLayout from '../../component/layout/buy/Layout'
import type { NextPageWithLayout } from '../../component/types/next-page-with-layout'
import Layout from '../../component/layout/landing-page/Layout'
import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import MainGrid from '../../modules/buy-page/components/MainGrid'

export interface iBuy{

}
const sidebar = <div>hi how are yoou</div>
const Buy: NextPageWithLayout = () => {
  return (
    <MainGrid/>
  )
}

Buy.getLayout = function getLayout(page: ReactElement){
  return(
    <BuyLayout sidebarContent = {sidebar}>
      
      {page}
    </BuyLayout>
  )
}

export default Buy

