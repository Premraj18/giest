import React from "react";
import { Link } from "react-router-dom";
import CardSponser from "./CardSponser";
import { motion } from 'framer-motion'
import Layout from "../../components/Layout";

const variants = {
    initial: {
        y: 100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
}

const SponsorCrausal = () => {
    return (
        <Layout>
            <div className="w-full bg-slate-100 pt-20">
                <div className="h-full w-full justify-center items-center flex-1 ">
                    <div className='w-full'>
                        <h2 className='w-full text-3xl text-center text-black font-semibold md:text-5xl py-10 lg:py-16'>Partnerships and Sponsorships</h2>
                    </div>
                    <div className="w-full mb-10">
                        <p className="w-full text-xl text-center font-semibold md:text-3xl mt-4 text-black">OUR PAST SPONSOR</p>
                    </div>
                    <div className="w-full">
                        {/* <SponserCard /> */}
                        <CardSponser />
                    </div>
                    <div className="w-full mt-10">
                        <p className="w-full text-xl text-center font-semibold md:text-3xl mt-4 text-black">SUPPORT US</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <p className="px-2 sm:w-[90vw] text-lg text-center text-black font-semibold md:text-2xl my-12">"Pursuing dreams and aspirations is challenging, and one of the hardest parts is to persist and keep chasing them.
                            As Predators, we are dedicated to striving for success, but we need your support in bearing this responsibility."
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-center text-center">
                        <a className="px-4 rounded-full cursor-pointer font-medium border-orange-500 hover:bg-orange-600 hover:text-gray-900 py-2 text-gray-900 border-2 mb-5">
                            Download Brouchure
                        </a>
                    </div>
                    <motion.div className='mt-10 md:mx-40'
                        variants={variants}
                        initial='initial'
                        whileInView='animate'
                    >
                        <motion.h2 className='text-center underline  text-xl text-black md:text-3xl' variants={variants}>Why Should You Sponsor Us ?</motion.h2>
                        <ul className='flex flex-col md:text-lg text-base px-5 text-gray-900 justify-center list-disc gap-y-5 pl-10 my-10 w-full'>
                            <motion.li className=' text-gray-900 ' variants={variants}>
                                Networking Opportunities: Sponsors might see opportunities to
                                connect with like-minded individuals or organizations, leading
                                to potential collaborations and business relationships.
                            </motion.li>
                            <motion.li className=' text-gray-900 ' variants={variants}>
                                Brand Recognition: Sponsoring can enhance a company's or
                                individual's brand image. Being associated with successful
                                or meaningful endeavors can positively impact how the sponsor
                                is perceived by the public.
                            </motion.li>
                            <motion.li className=' text-gray-900 ' variants={variants}>
                                Corporate Social Responsibility (CSR): Many companies are committed
                                to contributing to social and environmental causes as part of their
                                CSR initiatives. Sponsoring individuals or projects that promote
                                positive social impact aligns with these values.

                            </motion.li>
                            <motion.li className=' text-gray-900 ' variants={variants}>
                                Shared Values: Sponsors may be interested in supporting causes or
                                projects that align with their values and mission. If there is a
                                strong alignment between the sponsor's goals and the goals of the
                                individual or project seeking sponsorship, it can be a compelling
                                reason to offer support.
                            </motion.li>
                        </ul>
                    </motion.div>

                    <div className='mt-10'>
                        <h2 className='text-center font-semibold text-xl text-black md:text-3xl'>BANK DETAILS</h2>

                        <div className='flex flex-col gap-y-4 mt-5 px-2'>
                            <p className='text-center '>Account Name - Electrical enginnering Society, NIT JAMSHEDPUR</p>
                            <p className='text-center '>Account number - 293928329738</p>
                            <p className='text-center'>IFSC Code - SBIN0001882</p>
                            <p className='text-center mb-10'>Phone/Google Pay/Paytm - 1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SponsorCrausal
    ;
