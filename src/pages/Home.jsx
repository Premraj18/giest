import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Countdown from '../components/Countdown'
import Contact from '../components/Contact'
import Regfee from '../components/Regfee'
import RunningTab from '../components/RunTab'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <RunningTab/>
      <About/>
      <Countdown/>
      <Regfee/>
      <Contact/>
    </Layout>
  )
}

export default Home
