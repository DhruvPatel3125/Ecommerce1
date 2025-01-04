import React from 'react'
import Layout from '../components/layouts/Layout'
import { useAuth } from '../context/Auth'

const Homepages = () => {
  const[auth,setAuth] = useAuth()
  return (
    <Layout>
      <h1>Home page</h1>
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default Homepages
