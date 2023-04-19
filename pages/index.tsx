

import { ReactElement, useEffect } from 'react'
import LandingPage from '../modules/landingPage/LandingPage'
import Layout from '../component/layout/landing-page/Layout'
import type { NextPageWithLayout } from '../component/types/next-page-with-layout'


const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const Home: NextPageWithLayout = () => {

    useEffect(() => {
    const getUserDetails = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiYWRkcmVzc19pZCI6OSwiZmlyc3RfbmFtZSI6Im1hcmN1cyIsImxhc3RfbmFtZSI6IlJhc2hmb3JkIiwiZW1haWwiOiJtYXJjdXNAZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjoiMDgxNzg1NTU0MTEiLCJpbWFnZV91cmwiOm51bGwsImFkZHJlc3NfZGV0YWlscyI6eyJzdHJlZXQiOiJvdGEiLCJjaXR5IjpudWxsLCJzdGF0ZSI6bnVsbCwiY291bnRyeSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGx9LCJpYXQiOjE2ODE5MTc2NjgsImV4cCI6MTY4MTkxODU2OH0.0Ym6tR0V_HwUioK87W5eKlxE6mVbsbnBnPI1IbrKTrs'
      console.log(token)
      
      try {
        const response = await fetch(`${API_ENDPOINT}property/get_property_features/2`, 
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //     Authorization: `Bearer ${token}`
           
        //   }
        // }
        );
       
    
        const user = await response.json();
        console.log(user)
       
        
        // Do something with the user details...
      } catch (error) {
        console.error(error);
        
      }
      
      
    };
    getUserDetails()
  }, [])
  return (
      <div>
        <main>
          <LandingPage/>
        </main>
      </div>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
