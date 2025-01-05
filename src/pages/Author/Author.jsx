import React from 'react'
import Layout from '../../components/Layout'

const Author = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-28 py-10 flex justify-center bg-gray-50'>
                <div className='flex flex-col px-3 md:px-20 lg:px-40'>
                    <h2 className='text-2xl font-semibold'>Call for Papers</h2>
                    <p className='my-5'>We are pleased to invite authors to submit their original research work for GIEST 2025. This is an excellent opportunity to showcase your research and contribute to advancements in your field.</p>

                    <h2 className='text-2xl font-semibold'>Submission Guidelines:</h2>
                    <div className='py-5'>
                        <p className='mb-5'>Authors are invited to submit full papers (maximum 6 pages) adhering to the standard IEEE conference format. Detailed guidelines and templates for paper formatting can be accessed below.</p>
                        <a href="https://www.ieee.org/conferences/publishing/templates.html" target='_blank' className='border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Guidelines</a>
                    </div>

                    <h2 className='text-2xl font-semibold'>Publication Details:</h2>
                    <div className='py-5'>
                        <p>All accepted and presented papers will:</p>
                        <p>Be copyrighted to IEEE.</p>
                        <p>Be published in the conference proceedings.</p>
                        <p>Be eligible for inclusion in the IEEE Xplore® Digital Library.</p>
                        <p className='mb-5'>Paper Submission Link:</p>
                        <a href="https://cmt3.research.microsoft.com/GIEST2025/Submission/Index" target='_blank' className='border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Submit Your Paper Here</a>
                    </div>

                    <h2 className='text-2xl font-semibold'>Brochure</h2>
                    <div className='py-5'>
                        <p className='mb-5'>You can download the conference brochure for more details:</p>
                        <a download='brouchre' href='/brouchre.pdf' className='border p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Download Brochure</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Author
