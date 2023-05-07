import { Box } from '@chakra-ui/react'
import React from 'react'
import BestChoice from './components/BestChoice'
import FirstColumn from './components/FirstColumn'
import LandingContact from './components/LandingContact'
import Nav from './components/Nav'
import Subscription from './components/Subscription'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import { useLoggedInContext } from '../../component/layout/AuthContext'
export interface iLandingPage {}

const LandingPage = (props: iLandingPage) => {
  
  
  return (
    <div>
      <Box >
        {/* <Nav/> */}
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