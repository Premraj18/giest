import React from 'react'
import Layout from '../../components/Layout'
import Data from '../approvedSession/appsess.json'

const Callforpaper = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 py-10 flex flex-col justify-center bg-gray-50'>
                <h2 className='md:text-4xl text-3xl text-center md:pb-8 font-bold text-blue-600'>Call for Papers</h2>
                <div className='flex flex-col px-3 md:px-20 lg:px-40'>
                    <p className='my-5'>We are pleased to invite authors to submit their original research work for GIEST 2025. This is an excellent opportunity to showcase your research and contribute to advancements in your field.</p>

                    <div>
                        <h2 className='md:text-3xl text-2xl font-semibold pb-3'>Regular Technical Tracks:</h2>
                        <ol className='list-disc flex flex-col gap-2 px-2'>
                            <li>Electrical Machines, Power Electronics, and Drives.</li>
                            <li>Electric Vehicles and Sustainable Transportation.</li>
                            <li>Wired and Wireless Charging Technologies and their Control.</li>
                            <li>Energy Storage Systems and their Power Flow Management.</li>
                            <li>Renewable Energy Integration, Control and Management.</li>
                            <li>Green Manufacturing and Supply Chain Management.</li>
                            <li>Smart Grids and Energy Management Systems.</li>
                            <li>AI, ML, Cyber Security and IOT Applications to Sustainable Energy & e-mobility.</li>
                            <li>Automation, Control and Digitization for Industry Applications.</li>
                            <li>Advanced Robotics and Intelligent Mechatronics.</li>
                            <li>Integrated Systems Engineering and Security</li>
                            <li>Integrated Monitoring, Diagnosis, and Inst. Systems.</li>
                            <li>Biomedical Embedded Systems Integration.</li>
                            <li>Green Manufacturing and Supply Chain Management.</li>
                        </ol>
                    </div>

                    <div className='flex flex-col gap-3 font-medium py-8'>
                        <h2 className='md:text-3xl text-2xl font-semibold pb-3'>Special Session list:</h2>
                        {
                            Data.map((e, i) => (
                                <div key={e.id} className='flex items-center justify-between md:pr-20 border-b'>
                                    <div className=''>
                                        <p>{e.ss}</p>
                                        <p className='text-blue-600'>{e.organizer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <h2 className='md:text-3xl text-2xl font-semibold'>Submission Guidelines:</h2>
                    <div className='py-5'>
                        <p className='mb-5'>Authors are invited to submit full papers (maximum 6 pages) adhering to the standard IEEE conference format. Detailed guidelines and templates for paper formatting can be accessed below.</p>
                        <a href="https://www.ieee.org/conferences/publishing/templates.html" target='_blank' className='border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Guidelines</a>
                    </div>

                    <h2 className='md:text-3xl text-2xl font-semibold'>Publication Details:</h2>
                    <div className='py-5'>
                        <p>All accepted and presented papers will:</p>
                        <p>Be copyrighted to IEEE.</p>
                        <p>Be published in the conference proceedings.</p>
                        <p>Be eligible for inclusion in the IEEE Xplore® Digital Library.</p>
                        <p className='mb-5'>Paper Submission Link:</p>
                        <a href="https://cmt3.research.microsoft.com/GIEST2025/Submission/Index" target='_blank' className='border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Submit Your Paper Here</a>
                    </div>

                    <h2 className='md:text-3xl text-2xl font-semibold'>Brochure</h2>
                    <div className='py-5'>
                        <p className='mb-5'>You can download the conference brochure for more details:</p>
                        <a download='brouchre' href='/brouchre.pdf' className='border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Download Brochure</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Callforpaper
