import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
// import Banner from '../pages/Home/Banner'

const Layout = () => {
    return (
        <div>
           
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout