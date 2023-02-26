import React from 'react'
import type { ReactElement } from 'react'
import BuyLayout from '../../component/layout/buy/Layout'
import type { NextPageWithLayout } from '../../component/types/next-page-with-layout'
import Layout from '../../component/layout/landing-page/Layout'
import { Box, Flex, SimpleGrid, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import MainGrid from '../../modules/buy-page/components/MainGrid'
import {Sidebar} from '../../modules/buy-page/components/Sidebar'
import fourKHouse from 'public/FourKHouse.svg'
export interface iBuy{

}
// const sidebar = <div><Sidebar 
// image={fourKHouse}
//           price={4000}
//           title={'Primerose Mansion'}
//           location={
//             'Abuja Lagos'
//           }
//                   /></div>
const Buy: NextPageWithLayout = () => {
  return (
    <MainGrid/>
  )
}

Buy.getLayout = function getLayout(page: ReactElement){
  return(
    <BuyLayout sidebarContent = {Sidebar}>
      
      {page}
    </BuyLayout>
  )
}

export default Buy

