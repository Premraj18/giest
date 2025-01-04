import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Countdown from '../components/Countdown'
import ImpDates from '../components/ImpDates'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Countdown/>
      <ImpDates/>
    </Layout>
  )
}

export default Home
