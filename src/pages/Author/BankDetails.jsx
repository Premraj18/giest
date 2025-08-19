import React from 'react'

const PaymentDetails = () => {
    const paymentData = [
        {
            field: "Account Name",
            details: "RESEARCH AND CONSULTANCY NIT JAMSHEDPUR"
        },
        {
            field: "Account Number",
            details: "38246478714"
        },
        {
            field: "Bank Name",
            details: "State Bank of India"
        },
        {
            field: "Branch Name",
            details: "NIT Jamshedpur Campus, Adityapur"
        },
        {
            field: "IFSC Code",
            details: "SBIN0001882"
        },
        {
            field: "MICR Code",
            details: "831002004"
        },
        {
            field: "SWIFT Code",
            details: "SBININBB761"
        },
        {
            field: "Institute Address",
            details: "NIT Campus, Adityapur, Jamshedpur, Seraikela-Kharsawan, Jharkhand – 831014"
        },
        {
            field: "Payment Remark (Comment)",
            details: "GIEST_Paper ID (e.g., GIEST_XXXX)"
        }
    ];

    return (
        <div>
            <div className="w-full sm:mt-0 md:pb-20 py-10">
                <div className="w-full">
                    <h2 className="w-full text-3xl text-center text-blue-600 font-semibold text-blue-50-600 md:text-4xl pb-10">
                        Conference Registration Fee Payment Details
                    </h2>
                </div>
                <div className="p-6 max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                            <tr className="bg-gray-100 text-gray-700 text-sm">
                                <th className="border p-2 text-xl">Field</th>
                                <th className="border p-2 text-xl">Details</th>
                            </tr>
                            </thead>
                            <tbody>
                            {paymentData.map((row, index) => (
                                <tr key={index} className="text-center text-lg">
                                    <td className="border p-2">{row.field}</td>
                                    <td className="border p-2">{row.details}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails