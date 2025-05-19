import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Countdown from '../components/Countdown'
import Contact from '../components/Contact'
import Regfee from '../components/Regfee'
import RunningTab from '../components/RunTab'
import RunningTab2 from '../components/RunTab2'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <RunningTab text="“2025 IEEE 2nd International Conference on Green Industrial Electronics and Sustainable Technologies” will be organized by the Electrical Engineering Department, NIT Jamshedpur from 11th to 13th October 2025 in HYBRID MODE"/>
      <RunningTab2 text="The submission date has been extended to 25th May 2025."/>
      <About/>
      <Countdown/>
      <Regfee/>
      <Contact/>
    </Layout>
  )
}

export default Home
