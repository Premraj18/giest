import Layout from '../../components/Layout'
import Regfee from '../../components/Regfee'
import Regfee2 from './Regfee2'
import RegistrationDetails from './regDet'
import BankDetails from './BankDetails'

const Registrationdetails = () => {
    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 flex flex-col justify-center bg-gray-50'>
                <p className='text-2xl md:text-4xl font-bold text-center underline' >Registration Details</p>

                {/* Registration Link Section */}
                <p className="mt-6 text-lg text-center">
                    <span className="font-bold text-red-600 underline">Registration Link:</span>{" "}
                    <a
                        href="https://forms.gle/ZoVAzhgwrMNeWkXa6"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://forms.gle/ZoVAzhgwrMNeWkXa6
                    </a>
                </p>

                <p className="mt-4 text-base max-w-4xl mx-auto">
                    <span className="text-red-600 font-bold">Note: </span> Authors are requested to fill out the Google Form for paper registration.{" "}
                    <span className="font-bold text-red-600">Please note that each paper must be registered separately.</span>{" "}
                    However, if multiple papers have been registered under a combined payment, the details of the additional papers must also be provided in the form.
                </p>

                <div className='md:px-20 px-2 font-bold md:mt-10 pb-8'>
                    <RegistrationDetails/>
                </div>
                <Regfee/>
                <Regfee2/>
                <div className='md:px-20 px-2 md:-mt-10 pb-8'>
                    <p className='text-xl font-semibold text-red-600'><span className='font-bold underline'>Note:- </span>Each author registration covers only one accepted papers. However, for second paper
                    registering by the same author will be provided a 40% discount in the respective category
                    of required registration fee</p>
                </div>
                <div className='md:px-20 px-2 font-bold md:mt-10 pb-8'>
                    <BankDetails/>
                </div>
            </div>
        </Layout>
    )
}

export default Registrationdetails
