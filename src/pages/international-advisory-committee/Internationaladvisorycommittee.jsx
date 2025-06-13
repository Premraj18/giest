import React from 'react'
import Layout from '../../components/Layout'
import { BsLinkedin } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { motion } from 'framer-motion'
import item from './international-advisory.json'

const Internationaladvisorycommittee = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 flex flex-col justify-center bg-gray-50'>
                <p className='text-2xl md:text-4xl text-center font-bold text-blue-600 underline' >International Advisory Committee</p>
                <div className="w-full flex flex-col sm:flex-row flex-wrap py-20 pt-16 justify-center items-center gap-10 md:gap-14 md:px-14">
                    {
                        // eslint-disable-next-line react/prop-types
                        item?.map((e, i) => (
                            <motion.div key={e.id} className={`lg:w-[18vw] sm:w-[50vw] w-80 md:h-[45vh] h-[60vh] bg-white rounded-2xl shadow-lg ${e.designation == 'Director' ? 'hidden' : 'flex'}`}
                                whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                            >
                                <div className='w-full h-full flex flex-col items-center justify-center px-2 gap-10 lg:gap-10'>
                                    <div className=''>
                                        <img src={e.img} alt="" className='w-[115px] h-28 md:w-28 md:h-28  rounded-[100%] object-cover shadow-2xl' />
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-2 '>
                                        <h2 className='text-lg font-semibold'>{e.name}</h2>
                                        <p>{e.affiliation}</p>
                                        {/* <p>{e.address}</p> */}
                                        {/* <p>{e.email}</p>
                                        <p>{e.mobno}</p> */}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Internationaladvisorycommittee
