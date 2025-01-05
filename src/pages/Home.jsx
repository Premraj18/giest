import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Countdown from '../components/Countdown'
import Contact from '../components/Contact'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Countdown/>
      <Contact/>
    </Layout>
  )
}

export default Home
