

import { ReactElement, useEffect } from 'react'
import Layout from '../../component/layout/landing-page/Layout';
import type { NextPageWithLayout } from '../../component/types/next-page-with-layout';
import MoreDetails from '../../modules/buy-page/HouseDetails';


const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


const Home: NextPageWithLayout = () => {


  return (
      <div>
        <main>
          <MoreDetails />
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
