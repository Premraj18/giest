import React from 'react'
import Layout from '../../components/Layout'

const ApprovedSession = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 flex flex-col bg-gray-50 lg:px-28'>
                <p className='text-2xl md:text-4xl font-bold text-center' >Approved Session</p>
                <p className='font-semibold md:text-2xl text-lg pt-6 pb-4'>See the descriptions for all Special Sessions</p>
                <div className='flex flex-col gap-3 font-medium pt-8'>
                    <div className='flex gap-x-56'>
                        <p>SS1: Smart Grid-Enabled Sustainable Infrastructure for EV Charging and Transport Corridors.</p>
                        {/* <a href="" className='border px-3 py-1 bg-blue-500 text-white rounded-lg'><button >View Pdf</button></a> */}
                    </div>
                    <div className='flex gap-x-56'>
                        <p>SS2: Advanced Data-Driven Solutions for Transmission Grid Optimization.</p>
                        {/* <a href="" className='border px-3 py-1 bg-blue-500 text-white rounded-lg'><button >View Pdf</button></a> */}
                    </div>
                    <div className='flex gap-x-56'>
                        <p>SS3: Cyber-physical systems and smart urban infrastructures for sustainable future cities.</p>
                        {/* <a href="" className='border px-3 py-1 bg-blue-500 text-white rounded-lg'><button >View Pdf</button></a> */}
                    </div>
               
                </div>
            </div>
        </Layout>
    )
}

export default ApprovedSession
