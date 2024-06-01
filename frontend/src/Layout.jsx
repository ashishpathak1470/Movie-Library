import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './comp/Header'
import Footer from './comp/Footer'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout