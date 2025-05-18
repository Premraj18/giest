import React from 'react'
import Layout from '../../components/Layout'

const ApprovedSession = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 flex flex-col bg-gray-50 lg:px-28'>
                <p className='text-2xl md:text-4xl font-semibold text-center' >Approved Session</p>
                <p className='font-semibold md:text-2xl text-lg pt-6 pb-4'>See the descriptions for all Special Sessions</p>
                <div className='flex flex-col gap-2 font-medium'>
                    <div className='flex gap-x-56'>
                        <p>SS1: Smart Grid-Enabled Sustainable Infrastructure for EV Charging and Transport Corridors.</p>
                        {/* <button>Pdf</button> */}
                    </div>
                    {/* <div className='flex gap-x-56'>
                        <p>SS1: Smart Grid-Enabled Sustainable Infrastructure for EV Charging and Transport Corridors.</p>
                        <button>Pdf</button>
                    </div> */}
                </div>
            </div>
        </Layout>
    )
}

export default ApprovedSession
