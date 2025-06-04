import React from 'react'
import Layout from '../../components/Layout'
import Data from './appsess.json'
import { FaRegFilePdf } from "react-icons/fa";

const ApprovedSession = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 flex flex-col bg-gray-50 lg:px-28 px-3 md:pb-10 pb-5 '>
                <p className='text-2xl md:text-4xl font-bold text-center text-blue-600' >Approved Session</p>
                <p className='font-semibold md:text-2xl text-lg pt-6 pb-4'>See the descriptions for all Special Sessions</p>
                <div className='flex flex-col gap-3 font-medium pt-8'>
                    <div className='flex items-center justify-between md:pr-20 border-b pb-3'>
                        <div className='md:w-3/4 w-2/3'>
                            <p className='text-xl font-bold'>Title of the Special Session</p>
                        </div>
                        <div className='w-3/12'>
                            <p className='text-xl font-bold'>Details on Call for Papers for the Session</p>
                        </div>
                    </div>
                    {
                        Data.map((e, i) => (
                            <div key={e.id} className='flex items-center justify-between md:pr-20 border-b'>
                                <div className='md:w-3/4 w-2/3'>
                                    <p>{e.ss}</p>
                                    <p className='text-blue-600'>{e.organizer}</p>
                                </div>
                                {(e.id != 5 && e.id != 9 && e.id != 10 && e.id != 11) && <div className='w-3/12 flex items-center'>
                                    <div><FaRegFilePdf className='text-blue-600'/></div>
                                    <a href={e.flyer} target='_blank' className='px-3 py-1  text-blue-600 hover:text-blue-800 hover:underline'>Flyer_SS{e.id}</a>
                                </div>}
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default ApprovedSession
