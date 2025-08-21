import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Countdown from '../components/Countdown'
import Contact from '../components/Contact'
import Regfee from '../components/Regfee'
import RunningTab from '../components/RunTab'
import RunningTab2 from '../components/RunTab2'
import {Link, useNavigate} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import TopLink from '../components/TopLink'
import {Button} from "@headlessui/react";

const Home = () => {

    const navigate = useNavigate();

  return (
    <Layout>
      <HeroSection/>
      <RunningTab text="“2025 IEEE 2nd International Conference on Green Industrial Electronics and Sustainable Technologies” will be organized by the Electrical Engineering Department, NIT Jamshedpur from 11th to 13th October 2025 in"/>
      <RunningTab2 text="The camera ready paper submission and early bird registration date is extended till 31/08/2025"/>

        <div className="flex flex-col gap-3 p-4 items-center">
            <TopLink
                to="/registrationdetail"
                className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
            >
                Registration for GIEST - 2025
            </TopLink>

            <Link
                onClick={() => {
                    window.open("/cameraReady.pdf", "_blank");
                }}
                className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
            >
                Camera Ready Submission Instructions
            </Link>
        </div>


      <About/>
      <Countdown/>
      {/* <Regfee/> */}
      <Contact/>
    </Layout>
  )
}

export default Home
