import React from 'react'

const Regfee2 = () => {
    const data = [
        {
            category: "Indian",
            entries: [
                {
                    title: "Academicians/Scientists/Industrialists",
                    virtualIEEE: "INR 6500",
                    virtualNonIEEE: "INR 7500",
                    inPersonIEEE: "INR 7500",
                    inPersonNonIEEE: "INR 8500",
                },
                {
                    title: "Student Author",
                    virtualIEEE: "INR 5500",
                    virtualNonIEEE: "INR 6500",
                    inPersonIEEE: "INR 6500",
                    inPersonNonIEEE: "INR 7500",
                },
                {
                    title: "Non-author Attendee",
                    virtualIEEE: "INR 2000",
                    virtualNonIEEE: "INR 2500",
                    inPersonIEEE: "INR 2500",
                    inPersonNonIEEE: "INR 3000",
                },
            ],
        },
        {
            category: "Foreign",
            entries: [
                {
                    title: "Academicians/Scientists/Industrialists",
                    virtualIEEE: "USD 275",
                    virtualNonIEEE: "USD 325",
                    inPersonIEEE: "USD 325",
                    inPersonNonIEEE: "USD 375",
                },
                {
                    title: "Student Author",
                    virtualIEEE: "USD 175",
                    virtualNonIEEE: "USD 200",
                    inPersonIEEE: "USD 225",
                    inPersonNonIEEE: "USD 250",
                },
                {
                    title: "Non-author Attendee",
                    virtualIEEE: "USD 50",
                    virtualNonIEEE: "USD 60",
                    inPersonIEEE: "USD 60",
                    inPersonNonIEEE: "USD 70",
                },
            ],
        },
    ];
    return (
        <div>
            <div className="w-full sm:mt-0 md:pb-20 py-5">
                <div className="w-full">
                    <h2 className="w-full text-3xl text-center text-blue-600 font-semibold text-blue-50-600 md:text-4xl pb-10">
                        Regular registration Fee  (21.08.2025 to 25.09.2025)
                    </h2>
                </div>
                <div className="p-6 max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">Registration Fees</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700 text-sm">
                                    <th className="border p-2">Category</th>
                                    <th className="border p-2" colSpan="2">Virtual</th>
                                    <th className="border p-2" colSpan="2">In-person</th>
                                </tr>
                                <tr className="bg-gray-50 text-gray-600 text-sm">
                                    <th className="border p-2"></th>
                                    <th className="border p-2">IEEE</th>
                                    <th className="border p-2">Non-IEEE</th>
                                    <th className="border p-2">IEEE</th>
                                    <th className="border p-2">Non-IEEE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((group, idx) => (
                                    <React.Fragment key={idx}>
                                        <tr className="bg-gray-200">
                                            <td className="border p-2 font-semibold" colSpan="5">
                                                {group.category}
                                            </td>
                                        </tr>
                                        {group.entries.map((entry, index) => (
                                            <tr key={index} className="text-center text-sm">
                                                <td className="border p-2">{entry.title}</td>
                                                <td className="border p-2">{entry.virtualIEEE}</td>
                                                <td className="border p-2">{entry.virtualNonIEEE}</td>
                                                <td className="border p-2">{entry.inPersonIEEE}</td>
                                                <td className="border p-2">{entry.inPersonNonIEEE}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Regfee2
