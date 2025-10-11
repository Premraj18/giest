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
      <RunningTab2 text="The camera ready paper submission and early bird registration date is extended till 08/09/2025"/>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Quick Actions
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-2"></div>
                    <div className="w-12 h-0.5 bg-gray-300 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <TopLink
                        to="/registrationdetail"
                        className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                                    Registration for GIEST - 2025
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Register for the conference and secure your spot
                                </p>
                            </div>
                            <div className="text-blue-500 group-hover:text-blue-600 transform group-hover:scale-110 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </TopLink>

                    <Link
                        onClick={() => {
                            window.open("/cameraReady.pdf", "_blank");
                        }}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                                    Camera Ready Submission
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Guidelines for final paper submission
                                </p>
                            </div>
                            <div className="text-purple-500 group-hover:text-purple-600 transform group-hover:scale-110 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                    <Link
                        to="https://forms.gle/AMu59H38hAa562kJA"
                        target="_blank"
                        className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                                    IEEE Student Travel Grant Registration form
                                </h3>
                                <p className="text-red-600 text-sm">
                                    (Deadline 25.09.2025)
                                </p>
                            </div>
                            <div className="text-blue-500 group-hover:text-blue-600 transform group-hover:scale-110 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    <TopLink
                        to="/presdetail"
                        className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-2">
                                    Presentation Details <span className="text-red-400 text-sm">(for virtual participation only)</span>
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Submission of PPT and MP4 Files – GIEST 2025
                                </p>
                            </div>
                            <div className="text-blue-500 group-hover:text-blue-600 transform group-hover:scale-110 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </TopLink>




                    <Link
                        onClick={() => {
                            window.open("/final_schedule.pdf", "_blank");
                        }}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                                    Programme Schedule
                                </h3>
                               < p className="text-gray-600 text-sm">
                                   Final Programme Schedule for GIEST 2025
                            </p>
                            </div>
                            <div className="text-purple-500 group-hover:text-purple-600 transform group-hover:scale-110 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                    </Link>


                    <Link
                        onClick={() => {
                            window.open("/session_list.pdf", "_blank");
                        }}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                                    Google Meet Links
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Joining Google Meet link for the Inaugural/Tutorial/Keynote/Valedictory and all the parallel Technical Tracks.
                                </p>
                            </div>
                            <div className="text-purple-500 group-hover:text-purple-600 transform group-hover:scale-110 transition-all">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>

      <About/>
      <Countdown/>
      {/* <Regfee/> */}
      <Contact/>
    </Layout>
  )
}

export default Home
