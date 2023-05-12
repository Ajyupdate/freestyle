

import type { ReactElement } from 'react'
import Layout from '../../component/layout/auth/Layout'
import type { NextPageWithLayout } from '../../component/types/next-page-with-layout'

import { GetStaticPaths, GetStaticProps } from 'next';
import SignInForm from '../../modules/auth/SignInForm';
import ForgotPassword from '../../modules/auth/RequestPasswordReset';

const Login: NextPageWithLayout = () => {
  
  return (
      <div>
        <main>
        <ForgotPassword/>
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




