import React from 'react'
import Layout from '../../components/Layout'
import item from "./organizing-committee.json";
import { motion } from "framer-motion";

const OrganizingCommittee = () => {
    // Grouping items by designation
    const grouped = item.reduce((acc, curr) => {
        if (!acc[curr.designation]) acc[curr.designation] = [];
        acc[curr.designation].push(curr);
        return acc;
    }, {});

    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 bg-gray-50'>
                <p className='text-2xl md:text-4xl text-center font-bold text-blue-600 underline'>
                    Organizing Committee
                </p>

                {/* Iterate over grouped designations */}
                {Object.entries(grouped).map(([designation, members]) => (
                    <div key={designation} className="py-10">
                        {/* Section Heading */}
                        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-8 underline">
                            {designation}
                        </h2>

                        {/* Members Grid */}
                        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 md:gap-14 md:px-14">
                            {members.map((e) => (
                                <motion.div
                                    key={e.id}
                                    className="lg:w-[18vw] sm:w-[50vw] w-80 md:h-[45vh] h-[60vh] bg-white rounded-2xl shadow-lg flex"
                                    whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                                >
                                    <div className='w-full h-full flex flex-col items-center justify-center px-2 gap-6'>
                                        <img
                                            src={e.photo}
                                            alt={e.name}
                                            className='w-[115px] h-28 md:w-28 md:h-28 rounded-full object-cover shadow-2xl'
                                        />
                                        <div className='flex flex-col items-center justify-center gap-2 text-center'>
                                            <h2 className='text-lg font-semibold'>{e.name}</h2>
                                            <p className="text-sm">{e.address}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default OrganizingCommittee;
