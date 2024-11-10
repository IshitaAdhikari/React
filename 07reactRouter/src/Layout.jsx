import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//this outlet makes the layout as the base and 
//header and footer will remain same ans things inside it can change

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout