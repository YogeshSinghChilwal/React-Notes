import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

//~ 3- OutLet
/*
Imagine you have a website with a Header and Footer that appear on every page, 
but the main content should change depending on the route. 
Instead of repeating the Header and Footer in every page component, 
you define a Layout component with the Outlet, and React Router will handle which content gets rendered inside that Outlet.
*/

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
