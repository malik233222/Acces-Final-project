import React from 'react'
// import Navbar from '../../components/Navbar'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'
import Newletters from './Newletters'

const Home = () => {
  return (
    <>
      {/* <Navbar  /> */}
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <Newletters />
    </>
  )
}

export default Home