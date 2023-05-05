import React, { ReactElement } from 'react'
import Layout from '../../component/layout/auth/Layout'
import { NextPageWithLayout } from '../../component/types/next-page-with-layout'
import PropertyForm from '../../modules/sell/AddProperty'

const AddProperty:NextPageWithLayout = () => {
  return (
    <div>
        <PropertyForm/>
    </div>
  )
}

AddProperty.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default AddProperty