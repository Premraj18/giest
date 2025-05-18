/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const About = () => {
    return (
        <div className=' bg-white flex flex-col justify-center items-center pb-20 pt-5'>
            <h3 className='text-4xl font-semibold text-blue-600 mb-10'>About Conference</h3>
            <div className='flex w-full flex-col lg:flex-row justify-center items-center px-3 lg:px-20 gap-8 gap-y-14 lg:gap-y-0'>
                <div className='lg:w-2/5 lg:text-lg' >
                    <p className='text-justify'>GIEST-2025 is the “2025 IEEE 2nd International Conference on Green Industrial Electronics
                        and Sustainable Technologies” will be
                        organized by the <span className='font-semibold'> Electrical Engineering
                        Department, NIT Jamshedpur </span> in association with IEEE Kolkata Section-Silchar Industrial
                        Electronics Society Chapter and Student Branch, NIT Manipur.  </p>

                    <p className='text-justify'> This is the flagship annual
                        international conference of the IEEE Kolkata Section-Silchar Industrial Electronics Society
                        Chapter and will be conducted in hybrid mode with the technical co-sponsorship of IEEE
                        Silchar Subsection, <span className='font-semibold'> from 11th to 13 thOctober 2025 in HYBRID MODE </span> </p>

                </div>
                <div className='lg:w-2/5 lg:text-lg' >
                    <p className='text-justify'>The main objective of this
                        international conference is to foster collaboration among researchers from prestigious
                        institutes and industries worldwide. The conference aims to provide a platform for
                        professionals and executives from the energy sector, manufacturing industries, and
                        electrical power companies to share innovative ideas and information focused on
                        techniques for handling today’s challenges in green industrial electronics and sustainable
                        technologies. </p>
                </div>


            </div>
            <div className='flex flex-col md:justify-center md:items-center px-3 md:px-24 mt-10'>
                <h3 className='text-4xl font-semibold text-blue-600 mb-10'>About Institute</h3>
                <p className='text-justify'>The National Institute of Technology Jamshedpur, established on August 15, 1960, was
                    formerly known as the Regional Institute of Technology (RIT) Jamshedpur.
                    It attained the status of an Institution of National Importance through the National
                    Institutes of Technology Act, 2007 (Act 29 of 2007). The institute aims to cultivate
                    young engineers for the nation's economic advancement. Located in the western part of Jamshedpur,
                    NIT Jamshedpur's campus spans 341.3 acres, with the Kharkai river flowing nearby and picturesque
                    hills and forests in the backdrop, providing an ideal setting for academic pursuits and research. The institute offers
                    degrees in various disciplines, including B.Tech (Hons.), M.Tech, MSc, MCA, and PhD in fields such as Civil Engineering,
                    Computer Science & Engineering, Electrical Engineering, Electronics & Communication Engineering, Mechanical Engineering, Metallurgical & Materials Engineering, Production Engineering, Chemistry, Mathematics, Physics, among others. NIT Jamshedpur is on a trajectory of growth with NBA accreditation for three undergraduate courses and ongoing research projects supported by DST and ministries.
                </p>

            </div>

            <div className='flex flex-col md:justify-center md:items-center px-3 md:px-24 mt-10'>
                <h3 className='text-4xl font-semibold text-blue-600 mb-10'>About Department</h3>
                <p className='text-justify'>The Department of Electrical Engineering was started in 1960. The department has been consistently producing quality
                    engineers since its inception and is also involved in research and development activities.
                    The alumni of the department are well placed in both public and private sectors.
                    In addition to the UG Programme the department runs PG Programme in Power Systems and Power
                    Electronics and Drives and Ph.D. program in different areas of specialization.
                </p>

            </div>
        </div>
    )
}

export default About
