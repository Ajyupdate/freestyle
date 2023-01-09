import { Box } from '@chakra-ui/react'
import React from 'react'
import BestChoice from '../../component/BestChoice'
import FirstColumn from '../../component/FirstColumn'
import Nav from '../../component/Nav'

export interface iLandingPage {}

const LandingPage = (props: iLandingPage) => {
  return (
    <div>
      <Box bg='#F5F5F5'>
        <Nav/>
        <FirstColumn/>
      </Box>
      <BestChoice/>
    
    </div>
  )
}

export default LandingPage