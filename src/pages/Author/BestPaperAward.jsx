import React from 'react'
import Layout from '../../components/Layout'

const BestPaperAward = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 flex flex-col bg-gray-50 md:px-36 px-2 gap-4'>
                <p className='text-2xl md:text-4xl font-semibold' >Best Paper Award </p>
                <div className='flex flex-col gap-x-5'>
                    <p className='text-justify'>The IEEE GIEST 2025 Conference Best Paper Award recognizes outstanding academic 
research and writing presented at the GIEST 2025 conference, aiming to highlight and 
encourage high-quality contributions to the field. </p>
                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Award Description and Criteria:</h3>
                        <div className='pt-6 pb-3 flex flex-col gap-3'>
                            <p>All full papers accepted and presented in the GIEST 2025 conference are eligible for 
                            consideration, irrespective of the authors' professional background. </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Selection Process: </h3>
                         <div className='pt-5 pb-3 flex flex-col gap-3'>
                            <p>The papers with the highest scores from the review process and recommended by the session 
                            chairs will be selected as the best paper award. </p> 
                            <p>Authors of these selected papers will be notified before the finalization of conference 
                            proceeding publications, and the list of selected best papers will be announced at the conference 
                            homepage. </p> 
                            <p><span className='font-semibold'>Evaluation:</span> The Best Paper Award Committee will evaluate each full paper submitted to 
                            GIEST and presented during the conference based on the recommendation by the reviewers 
                            and session chairs.  </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Award Criteria: </h3>
                         <div className='pt-5 pb-3 flex flex-col gap-3'>
                            <p><span className='font-semibold'>Originality (30%):</span> Emphasis on the paper’s original contribution to knowledge through 
                            theoretical development, empirical results, or policy development.</p> 
                            <p><span className='font-semibold'>Presentation (30%):</span> The winning paper should be presented with a good approach to the 
                            audience that enhances the cumulative knowledge base of the field.</p> 
                            <p><span className='font-semibold'>Quality of Argument (20%):</span> Includes critical analysis of concepts, theories, and findings, 
                            and the coherence of the paper's debate.</p> 
                            <p><span className='font-semibold'>Clarity of Expression (10%):</span> Evaluation of the paper's clarity, accuracy, readability, and 
                            organizational quality.</p> 
                            <p><span className='font-semibold'>Time Management (10%):</span> Presentation should be within a prescribed time limit.</p> 
                            <p><span className='font-semibold'>Selection of Winner:</span> The paper with the highest overall score, as determined by the Scientific 
                            Committee, will be awarded the Best Paper Award.</p> 
                        </div>
                    </div>

                    <p className='md:text-xl text-lg pb-8  font-medium text-justify '>The authors of the winning paper, along with any co-authors, will receive a signed and 
stamped official award certificate that includes the award name, paper title, and authors’ 
names. Their achievement will also be publicly acknowledged on the conference website.  </p>

                </div>
            </div>
        </Layout>
    )
}

export default BestPaperAward
