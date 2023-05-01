import React from 'react'
import type { ReactElement } from 'react'
import BuyLayout from '../../component/layout/buy/Layout'
import type { NextPageWithLayout } from '../../component/types/next-page-with-layout'

import MainGrid from '../../modules/buy-page/components/MainGrid'
import {Sidebar} from '../../modules/buy-page/components/Sidebar'
import Cookies from "universal-cookie";
const cookies = new Cookies();

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
  const token = cookies.get("token");
  console.log(token)

  
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

