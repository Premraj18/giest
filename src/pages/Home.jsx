import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Event from '../components/Event'
import OurTeam from '../components/OurTeam'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Event/>
      <OurTeam/>
    </Layout>
  )
}

export default Home
