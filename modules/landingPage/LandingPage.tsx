import { Box } from '@chakra-ui/react'
import React from 'react'
import BestChoice from '../../component/BestChoice'
import FirstColumn from '../../component/FirstColumn'
import LandingContact from '../../component/LandingContact'
import Nav from '../../component/Nav'
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
      </Box>
     
      
      
    
    </div>
  )
}

export default LandingPage