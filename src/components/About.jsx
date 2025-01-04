/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BiCheckDouble } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { LuMoveRight } from 'react-icons/lu';
//this is naman
const variants = {
    initial: {
        x: -200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
}

const About = () => {
    return (
        <motion.div className=' bg-white flex flex-col justify-center items-center py-20'
          variants={variants}
          initial='initial'
          whileInView='animate'
        >
            <h3 className='text-4xl font-semibold text-blue-600 mb-10'>About Conference</h3>
            <div className='flex w-full flex-col lg:flex-row justify-center items-center px-5 lg:px-20 gap-8 gap-y-14 lg:gap-y-0'>
                <motion.div className='lg:w-2/5 lg:text-lg' variants={variants}>
                    <motion.p variants={variants}>GIEST-2025 is the IEEE International Conference on Green Industrial Electronics and Sustainable Technologies (GIEST-2025) will be organized by the IEEE Kolkata Section-Silchar Industrial Electronics Society Chapter in association with the Department of Electrical Engineering, NIT Jamshedpur and IEEE Student Branch.</motion.p>
                    <motion.p className='my-3' variants={variants}>Why Attend?</motion.p>
                    <motion.p className='my-3' variants={variants}>This international platform fosters collaboration and innovation, providing:</motion.p>
                    <div className='text-base flex flex-col gap-3'>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-blue-600 text-xl'><BiCheckDouble/></span> Development of Technical Expertise: Enhance your technical skills by engaging with real-world challenges. </motion.p>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-blue-600 text-xl'><BiCheckDouble/></span> Networking Opportunities: Connect with like-minded individuals driven by innovation in electrical engineering and technology.  </motion.p>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-blue-600 text-xl'><BiCheckDouble/></span> Representation: Showcase your skills and represent your team, yourself, and your organization in various prestigious competitions and events.</motion.p>
                    </div>
                </motion.div>
                <motion.div className='lg:w-2/5 lg:text-lg' variants={variants}>
                   <motion.p variants={variants}>The prestigious annual international conference organized by the IEEE Kolkata 
                    Section-Silchar Industrial Electronics Society Chapter will take place at NIT Jamshedpur on the 25th and 26th of October 2025. 
                    This hybrid-mode event is technically co-sponsored by the IEEE Kolkata Section and IEEE Silchar Subsection. </motion.p>

                   <motion.p className='pt-6' variants={variants}>The conference aims to unite researchers, professionals, and industry leaders from esteemed institutions and global organizations. 
                    Participants will include executives from the energy sector, manufacturing industries, and electrical power companies. 
                    Together, they will exchange ideas, discuss innovations, and explore advanced techniques to address contemporary challenges in the field of electrical engineering and related industries.</motion.p>
                    <Link to='/about' className=''>
                        <motion.button className='bg-blue-600 hover:bg-blue-500 text-white sm:w-40 flex items-center justify-center gap-3 p-2 py-1 sm:py-2 mt-5 rounded-full' >Learn more <span className='pt-1'><LuMoveRight/></span></motion.button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
