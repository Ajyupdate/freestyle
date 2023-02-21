// import { Box } from "@chakra-ui/react";
// import LandingPage from "../modules/landingPage/LandingPage";


// export default function Home() {
//   return (
//     <>
    
//       <Box >
//         <LandingPage/>
//       </Box>
      
      
      
//     </>
//   )
// }

import type { ReactElement } from 'react'
import LandingPage from '../modules/landingPage/LandingPage'
import Layout from '../component/layout/landing-page/Layout'
import type { NextPageWithLayout } from '../component/types/next-page-with-layout'

const Home: NextPageWithLayout = () => {
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
