

import { ReactElement, useEffect } from 'react'
import LandingPage from '../modules/landingPage/LandingPage'
import Layout from '../component/layout/landing-page/Layout'
import type { NextPageWithLayout } from '../component/types/next-page-with-layout'




const Home: NextPageWithLayout = () => {

    useEffect(() => {
    const getUserDetails = async () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiYWRkcmVzc19pZCI6OSwiZmlyc3RfbmFtZSI6Im1hcmN1cyIsImxhc3RfbmFtZSI6IlJhc2hmb3JkIiwiZW1haWwiOiJtYXJjdXNAZ21haWwuY29tIiwicGhvbmVfbnVtYmVyIjoiMDgxNzg1NTU0MTEiLCJpbWFnZV91cmwiOm51bGwsImFkZHJlc3NfZGV0YWlscyI6eyJzdHJlZXQiOiJvdGEiLCJjaXR5IjpudWxsLCJzdGF0ZSI6bnVsbCwiY291bnRyeSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGx9LCJpYXQiOjE2ODAzNzU4NzYsImV4cCI6MTY4MDM3Njc3Nn0.Bg-ef0faAYH1nYpwgvY7mFqW2GYOflgnzNijA_Jtw3I'
    console.log(token)
      
  
      try {
        const response = await fetch(`https://real-estate-yjz9.onrender.com/seller/get_account`, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`
           
          }
        });
    
        const user = await response.json();
        console.log(user)
       
       
        
        
        // Do something with the user details...
      } catch (error) {
        console.error(error);
        
      }
    };
    getUserDetails()
  })
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
