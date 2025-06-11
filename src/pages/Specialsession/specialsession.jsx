import React from 'react'
import Layout from '../../components/Layout'

const specialsession = () => {
    return (
        <Layout>
            <div className='pt-44 pb-10 flex flex-col justify-center bg-gray-50m px-4'>
                <p className='text-3xl md:text-5xl font-bold text-blue-500 text-center' >Special Session</p>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <p className='text-2xl md:text-4xl font-semibold overflow-hidden' >Call for Special Session Proposals</p>
                    <div className='flex flex-col justify-center mt-10 md:px-24'>
                        <div>
                            <p className='text-2xl  md:text-3xl font-semibold text-blue-600' >Call for Special Session Proposals</p>
                            <p className='py-3 pt-6 '>
                                The organizing team invites professionals in the area of Conference Topics to propose Special Sessions (SS) to be held on
                                2025 IEEE 2ndInternational Conference on Green Industrial Electronics and Sustainable Technologies (GIEST-2025) ” will be organized by the Electrical Engineering Department, NIT Jamshedpur in association with IEEEKolkata Section-Silchar Industrial Electronics Society Chapter and Student Branch, NIT Manipur,
                                during 11th to 13th October 2025.
                            </p>
                            <p className='py-3'>
                                <span className='font-semibold'>Benefit of Special Session:</span> Special sessions provide the opportunity to focus in detail on particular emerging topics, which are not reflected in the list of conference tracks or represent specific working fields where researchers would like to meet and discuss advances.
                            </p>
                            <p className='py-7 font-bold text-center text-lg md:text-2xl md:px-16 '>
                                Please send your proposal for Special Session in MS Word format to <span className='underline'> giestconf2025@gmail.com </span> only with cc to all Special Session organizers.
                            </p>
                        </div>
                        <div className='flex gap-4 items-center pb-10'>
                            <p className='text-xl font-semibold'> Special session proposal format:</p>
                            <a download href='/template.docx' className=' p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500'>Download</a>
                        </div>
                        <div>
                            <p className='text-xl md:text-2xl font-semibold text-blue-600' >Important Dates for Special Sessions:</p>
                            <p className='pt-6 md:text-lg'>
                                Last date Submission of proposals: <span className='font-semibold text-blue-500'> 25th May, 2025</span>  <span className='font-semibold text-blue-500'>  Special Session Proposal Submission Closed </span> 
                            </p>
                            <p className='pb-3 md:text-lg'>
                                Notification of decision: <span className='font-semibold text-blue-500'> Within one week of submission</span>
                            </p>
                        </div>
                        <div>
                            <p className='text-xl md:text-2xl pt-8 font-semibold text-blue-600' >Instruction to Special Session Organizers:</p>
                            <div className='pt-6 pb-3 flex flex-col gap-3'>
                                <p>1. An individual may not be the (co‐) author of more than two papers submitted to the proposed Special Session.</p>
                                <p>2. Papers authored by session organizers must not exceed 60% of the total content of the Special Session.</p>
                                <p>3. Papers submitted to special sessions will undergo the same review process as regular papers. The review process will be solely handled by the conference organizing committee. However, the list of suggested reviewers provided by the special session organizers may or may not be utilized. </p>
                                <p>4. If a session has too few submissions, accepted papers will be reallocated to regular sessions wherever possible.</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-xl md:text-2xl pt-8 font-semibold text-blue-600' >Following points need to be included in the special session proposal:</p>
                            <div className='pt-6 pb-3 flex flex-col gap-3'>
                                <p>1.	Title of the Special Session.</p>
                                <p>2.	Brief description of the area of concern (approx. 100 words), with a special emphasis on why this topic is considered interesting and significant.</p>
                                <p>3.	Names and contact details of three or more special session organizers (multi‐nationals preferred and multi-institutional mandatory), who are committed to promoting the session and ensuring a sufficient number of quality submissions. Please also include a brief background of each organizer.</p>
                                <p>4.	A list of at least 15 potential authors, including their names, email addresses, their affiliations. </p>
                                <p>5.	A list of at least 15 potential national/international reviewers, including their names, email addresses, and affiliations.</p>
                            </div>
                        </div>
                        <div>
                            <p><span className='font-semibold text-blue-600'>Successful SS:</span> A special session will be considered successful if it results in a minimum of six accepted and registered papers, with authors from at 
                                least three independent institutions. One complimentary registration will be provided to the chair or co-chair of each successful Special Session.</p>
                            <p className='py-4'><span className='font-semibold text-blue-600'>Session Chairs:</span> Once a special session is finally accepted by the conference organizers, one of the session organizers will serve as the Session Chair,
                                 in collaboration with other chairs in the confer-ence. In some extenuated circumstance, if the session organizers are unable to attend, the Technical 
                                 Program Chairs and Conference General Chairs reserve the right to appoint alternate Session Chairs.</p>
                            <p className='font-medium text-red-600'><span className='font-bold'>Note:</span> All important dates, rules, and regulations must be followed as per the GIEST-2025.</p>
                        </div>
                        <div>
                            <p className='text-xl md:text-2xl pt-8 font-semibold text-blue-600' >Complimentary Conference Registration:</p>
                            <div className='pt-6 pb-3 flex flex-col gap-3'>
                                <p className='font-semibold text-lg'> For each successfully organized Special Session, one complimentary registration will be provided.</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-xl md:text-2xl pt-6 font-semibold text-blue-600' >Contacts for Special Session:</p>
                            <div className='pt-5 pb-3 flex flex-col gap-3 font-medium'>
                                <p>Dr. Ravi Bhushan, NIT Jamshedpur (ravibhushan.ee@nitjsr.ac.in)</p>
                                <p>Dr. Sanjay Kumar, NIT Jamshedpur (sanjay.ee@nitjsr.ac.in)</p>
                                <p>Dr. Tanmoy Roy Choudhury, NIT Rourkela (trc.6287@gmail.com)</p>
                                <p>GIEST-2025 Organizing Team (giestconf2025@gmail.com)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default specialsession
