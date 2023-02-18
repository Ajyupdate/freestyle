import { Box } from '@chakra-ui/react'
import React from 'react'
import BestChoice from '../../component/BestChoice'
import Copyright from '../../component/Copyright'
import FirstColumn from '../../component/FirstColumn'
import LargeWithLogoLeft from '../../component/Footer'
import LargeWithAppLinksAndSocial from '../../component/Footer'
import LandingContact from '../../component/LandingContact'
import Nav from '../../component/Nav'
import Subscription from '../../component/Subscription'

import WhyChooseUs from '../../component/WhyChooseUs'

export interface iLandingPage {}

const LandingPage = (props: iLandingPage) => {
  return (
    <div>
      <Box bg='#F5F5F5'>
        <Nav/>
        <FirstColumn/>
      </Box>
      <Box>
      <BestChoice/>
      <WhyChooseUs />
      <LandingContact/>
      <Subscription/>
      {/* <LargeWithAppLinksAndSocial/> */}
      <LargeWithLogoLeft/>
      
      
      </Box>
     
      
      
    
    </div>
  )
}

export default LandingPage