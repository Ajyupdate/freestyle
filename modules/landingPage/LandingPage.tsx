import React from 'react'
import FirstColumn from '../../component/FirstColumn'
import Nav from '../../component/Nav'

export interface iLandingPage {}

const LandingPage = (props: iLandingPage) => {
  return (
    <div>
      <Nav/>
      <FirstColumn/>
    
    </div>
  )
}

export default LandingPage