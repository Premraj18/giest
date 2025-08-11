import React from 'react'
import Layout from '../../components/Layout'
import item from "./organizing-committee.json";
import {motion} from "framer-motion";

const OrganizingCommittee = () => {
    return (
        <Layout>

            <div className='min-h-[80vh] pt-44 flex flex-col justify-center bg-gray-50'>
                <p className='text-2xl md:text-4xl text-center font-bold text-blue-600 underline'>Organizing
                    Committee</p>
                <div
                    className="w-full flex flex-col sm:flex-row flex-wrap py-20 pt-16 justify-center items-center gap-10 md:gap-14 md:px-14">
                    {

                        item?.map((e, i) => (
                            <motion.div key={e.id}
                                        className={`lg:w-[18vw] sm:w-[50vw] w-80 md:h-[45vh] h-[60vh] bg-white rounded-2xl shadow-lg flex`}
                                        whileHover={{scale: 1.1, transition: {duration: 0.4}}}
                            >
                                <div
                                    className='w-full h-full flex flex-col items-center justify-center px-2 gap-10 lg:gap-10'>
                                    <div className=''>
                                        <img src={e.photo} alt=""
                                             className='w-[115px] h-28 md:w-28 md:h-28  rounded-[100%] object-cover shadow-2xl'/>
                                    </div>
                                    <div className='flex flex-col items-center justify-center gap-2 '>
                                        <h2 className='text-lg font-semibold'>{e.name}</h2>
                                        <p>{e.designation}</p>
                                        <p>{e.address}</p>
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

export default OrganizingCommittee
