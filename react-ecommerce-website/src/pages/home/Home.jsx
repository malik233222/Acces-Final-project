import React from 'react'
// import Navbar from '../../components/Navbar'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'

const Home = () => {
  return (
    <>
    {/* <Navbar  /> */}
    <Banner/>
    <Category/>
    <Products/>
    <Collections/>
    <BestSellers/>
    </>
  )
}

export default Home