import React from 'react'
import Layout from '../../components/Layout'

const Studenttragrant = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 flex flex-col bg-gray-50 md:px-36 px-2 gap-4'>
                <p className='text-2xl md:text-4xl font-semibold' >Students Travel Grant</p>
                <a href="https://forms.gle/AMu59H38hAa562kJA" className="text-blue-600">IEEE Student Travel Grant Registration form</a> <span className="text-red-500">(Deadline 25.09.2025)</span>
                <div className='flex flex-col gap-x-5'>
                    <p className='text-justify'>The IEEE Students Travel Grant aims to support student participation in IEEE conferences by
                        providing financial assistance for paper registration fees and/or travel expenses. This initiative
                        encourages students to present their research, collaborate with peers, and gain valuable
                        academic and professional experience. Each awardee will receive of Grant amount maximum
                        up to 10,000 INR which can be used to cover the registration fee of the paper submitted in
                        GIEST-2025 and/or transportation costs to the venue city and back to his/her parental
                        organization using the most economical means of transportation i.e. sleeper /3 Tier AC Train
                        /Economy Class Air/Taxi/Bus. </p>
                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Eligibility :</h3>
                        <div className='pt-6 pb-3 flex flex-col gap-3'>
                            <p>1. <span className='font-semibold'>Student Status:</span> Applicants must be registered full-time undergraduate/postgraduate
                                students/Ph.D. Scholar at the time of application and conference attendance. A thesis
                                submitted or a doctoral awardee will not be considered for this award.</p>
                            <p>2. <span className='font-semibold'>IEEE Membership</span>: Applicants must be active IEEE student members. Non
                                members are encouraged to join IEEE prior to applying.</p>
                            <p>3. <span className='font-semibold'>Conference Participation:</span> Applicants (i.e. student only) must be presenting a
                                paper, poster, or participating in a significant manner at an IEEE GIEST 2025
                                conference and paper should be fully registered by the presenting student only.</p>
                            <p>4. <span className='font-semibold'>Approval:</span> The approval will be given to the student authors of the full papers which
                                are submitted in the GIEST 2025 conference on or before the due date and accepted
                                by the conference organizers.</p>
                            <p>5. It is not necessarily required that all the authors must be the student authors in the
                                paper. Any authors are permissible but the applicant of STG must be an author of
                                the accepted paper, duly registered by him or her and attending the conference in
                                physical mode.</p>
                            <p>6. Applicant MUST reside outside (min. 100 Kms distant) the city (i.e. Jamshedpur) in
                                which the conference is held and attend the conference physically.</p>
                            <p>7. The STG will be given to the recipient whose to-and-fro journey from the parental
                                organization and submission of original tickets/boarding pass. The travel mode can
                                be of sleeper /3 Tier AC Train /Economy Class Air/Taxi/Bus types.</p>
                            <p>8. The maximum reimbursable amount of the Student Travel Grant is 10,000 INR only.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Application Process: </h3>
                         <div className='pt-5 pb-3 flex flex-col gap-3'>
                            <p>Applicants must complete the IEEE Students Travel Grant application form, 
                            including personal details, IEEE membership number, conference details, and a brief 
                            description of their contribution to the conference.</p> 
                            <p>Supporting Documents: Applicants must provide proof of student status (e.g., 
                            enrolment certificate), acceptance letter or email from the conference organizers 
                            confirming their paper acceptance and participation, and a budget outlining 
                            anticipated paper registration fee and travel expenses.</p> 
                            <p className="text-red-600">Deadline: Applications must be submitted by the specified deadline 25.09.2025 (11:59 PM). Late applications will not be considered.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Evaluation Criteria: </h3>
                         <div className='pt-5 pb-3 flex flex-col gap-3'>
                            <p>Academic Merit: Quality and significance of the student's contribution to the 
                            conference, as evidenced by the full paper or participation details. </p> 
                            <p>Financial Need: Demonstration of financial need based on the budget submitted, 
                            including estimates of paper registration fee and travel expenses. </p> 
                            <p>Impact: Potential impact of attending the conference on the student's academic and 
                            professional development. </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Selection Process:  </h3>
                         <div className='pt-5 pb-3 flex flex-col gap-3'>
                            <p>Review Panel: A STG committee appointed by the GIEST 2025 Chair/Organizer 
                            will evaluate all applications based on the established criteria. </p> 
                            <p>Notification: Successful applicants will be notified of their Student Travel Grant 
                            award via email within a reasonable time frame after the application deadline and 
                            will also be displayed at the conference website. </p> 
                        </div>
                    </div>

                    <div className='flex flex-col gap-x-4 py-5'>
                        <h3 className='font-semibold text-xl'>Grant Disbursement:  </h3>
                         <div className='pt-5 pb-3 flex flex-col gap-3'>
                            <p>The amount of the STG will be determined based on the budget submitted by the 
                            applicant, up to a maximum of <span className='font-semibold'> 10,000 INR</span>. Grants will be reimbursed upon 
                            submission of the Fee and travel receipts and a brief report summarizing the student's 
                            conference experience after the completion of the conference.  </p> 
                        </div>
                    </div>

                    <p className='md:text-xl text-lg pb-5 text-center'>For inquiries or more information about the IEEE Students Travel Grant, please 
                    write an email <span className='font-semibold underline'>giestconf2025@gmail.com</span> or contact the conference Chair, GIEST 
                    2025. </p>

                </div>
            </div>
        </Layout>
    )
}

export default Studenttragrant
