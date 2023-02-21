import { Box } from '@chakra-ui/react'
import React from 'react'
import BestChoice from './components/BestChoice'
import FirstColumn from './components/FirstColumn'
import LandingContact from './components/LandingContact'
import Nav from './components/Nav'
import Subscription from './components/Subscription'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'

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
      
      
      
      </Box>
     
      
      
    
    </div>
  )
}

export default LandingPage