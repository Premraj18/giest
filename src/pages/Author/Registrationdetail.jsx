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
                <Regfee/>
                <Regfee2/>
                <div className='md:px-20 px-2 md:-mt-10 pb-8'>
                    <p className='text-xl font-semibold text-red-600'><span className='font-bold underline'>Note:- </span>Each author registration covers only one accepted papers. However, for second paper
                    registering by the same author will be provided a 40% discount in the respective category
                    of required registration fee</p>
                </div>
                <div className='md:px-20 px-2 font-bold md:mt-10 pb-8'>
                    <RegistrationDetails/>
                    <BankDetails/>
                </div>
            </div>
        </Layout>
    )
}

export default Registrationdetails
