import React from 'react'
import Navbar from './Navbar'
import Section2 from './Section2'
import Clothes from './Clothes'
import DressStyle from './DressStyle'
import TopCloth from './TopCloth'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Section2/>
        <Clothes/>
        <DressStyle/>
        <TopCloth/>
        <Footer/>
    </div>
  )
}

export default Home