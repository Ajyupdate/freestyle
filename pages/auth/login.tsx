

import type { ReactElement } from 'react'
import Layout from '../../component/layout/auth/Layout'
import type { NextPageWithLayout } from '../../component/types/next-page-with-layout'
import LoginForm from '../../modules/auth/LoginForm'
import { GetStaticPaths, GetStaticProps } from 'next';

const Login: NextPageWithLayout = () => {
  
  return (
      <div>
        <main>
          <LoginForm />
        </main>
      </div>
    )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Login




