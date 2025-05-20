import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { RiNewspaperLine } from "react-icons/ri";
import { BsEnvelopePaper } from "react-icons/bs";
import Layout from '../../components/Layout';

const ImpDates = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Layout>
            <div>
                <div id='impdate' className="w-full sm:mt-0  py-44 bg-gray-50">
                    <div className="w-full">
                        <h2 className="w-full text-3xl text-center text-blue-600 font-semibold text-blue-50-600 md:text-5xl pb-20">
                            Important Dates
                        </h2>
                    </div>
                    <div className="flex flex-wrap px-3 items-center justify-center w-full gap-14 font-bold text-lg">
                        <div className="flex flex-col justify-center gap-5 items-center p-4 px-8 border border-gray-200 rounded-2xl shadow-md w-[350px] min-h-[200px] hover:shadow-lg  transform transition-all hover:scale-105  bg-white duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='text-3xl text-blue-600'>
                                <RiNewspaperLine />
                            </div>

                            <p className="text-lg text-justify ">Paper Submission Opens </p>
                            <p className="text-lg text-justify ">15/02/2025</p>
                        </div>

                        <div className="flex flex-col justify-center gap-5 items-center p-4 px-8 border border-gray-200 rounded-2xl shadow-md w-[350px] min-h-[200px] hover:shadow-lg  transform transition-all hover:scale-105  bg-white duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='text-3xl text-blue-600'>
                                <RiNewspaperLine />
                            </div>

                            <p className="text-lg text-justify ">Paper Submission Closes </p>
                            <div className='flex gap-x-5'>
                                <p className="text-lg text-justify">10/06/2025 </p>
                                {/* <p className="text-lg text-justify ">25/06/2025 </p> */}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-5 items-center p-4 px-8 border border-gray-200 rounded-2xl shadow-md w-[350px] min-h-[200px] hover:shadow-lg  transform transition-all hover:scale-105  bg-white duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='text-3xl text-blue-600'>
                                <BsEnvelopePaper />
                            </div>

                            <p className="text-lg text-justify ">Notification of Acceptance </p>
                            <p className="text-lg text-justify ">20/07/2025</p>
                        </div>

                        <div className="flex flex-col justify-center gap-5 items-center p-4 px-8 border border-gray-200 rounded-2xl shadow-md w-[350px] min-h-[200px] hover:shadow-lg  transform transition-all hover:scale-105  bg-white duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='text-3xl text-blue-600'>
                                <BsEnvelopePaper />
                            </div>

                            <p className="text-lg text-justify ">Final Camera-ready paper </p>
                            <p className="text-lg text-justify ">20/08/2025</p>
                        </div>

                        <div className="flex flex-col justify-center gap-5 items-center p-4 px-8 border border-gray-200 rounded-2xl shadow-md w-[350px] min-h-[200px] hover:shadow-lg  transform transition-all hover:scale-105  bg-white duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className='text-3xl text-blue-600'>
                                <SlCalender />
                            </div>

                            <p className="text-lg text-justify ">Early Bird Registration </p>
                            <p className="text-lg text-justify ">20/08/2025</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default ImpDates
