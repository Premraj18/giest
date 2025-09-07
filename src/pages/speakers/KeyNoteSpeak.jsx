import Layout from '../../components/Layout'

const KeyNoteSpeakers = () => {
    const speakers = [
        {
            id: 1,
            name: "Prof. Ambrish Chandra",
            title: "Professor",
            affiliation: "Department of Electrical Engineering, École de Technologie Supérieure Montreal, QC, Canada",
            topic: "Hybrid Renewable Energy Standalone Systems",
            image: "/keynote-speakers/ambrish_chandra.png"
        },
        {
            id: 2,
            name: "Professor Faz Rahman",
            title: "Professor",
            affiliation: "School of Electrical Engineering & Telecommunication, UNSW Sydney, Australia",
            topic: "Will be within the scope of the Conference theme",
            image: "/keynote-speakers/faz_rahman.png"
        },
        {
            id: 3,
            name: "Dr. Srikanth Pillai",
            title: "Research and Teaching Assistant",
            affiliation: "McMaster University, Hamilton, Ontario, Canada",
            additionalInfo: "IAS Society Board Member, Chair, Chapter and Membership (CMD)",
            image: "/keynote-speakers/dr_srikanth_pilai.png"
        },
        {
            id: 4,
            name: "Dr. Sanjeet Kumar Dwivedi",
            title: "Siemens Gamesa Renewable Energy A/S, Denmark",
            affiliation: "",
            topic: "Powering Bharat@100: Green Industrial Electronics for Sustainable Manufacturing, Mobility, and Grid Resilience",
            image: "/keynote-speakers/dr_sanjeet_kumar_dwivedi.png"
        },
        {
            id: 5,
            name: "Prof. Celia Shahnaz",
            title: "Professor",
            affiliation: "Department of EEE, BUET, Bangladesh",
            image: "/keynote-speakers/celia_shahnaz.png"
        },
        {
            id: 6,
            name: "Dr. Ranjan Kumar Behera",
            title: "Associate Professor",
            affiliation: "IIT Patna",
            topic: "Stress Management and Emotional Resilience: Keys to Professional Success",
            image: "/keynote-speakers/ranjan_kumar_behera.png"
        }
    ];

    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 pb-16 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-12'>
                        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                            Keynote Speakers
                        </h1>
                        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-2'></div>
                        <div className='w-12 h-0.5 bg-gray-300 mx-auto'></div>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                        {speakers.map(speaker => (
                            <div key={speaker.id} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                                <div className='aspect-w-3 aspect-h-4 bg-gray-200'>
                                    <img 
                                        src={speaker.image} 
                                        alt={speaker.name}
                                        className='w-full h-56 object-contain object-center bg-gray-100'
                                    />
                                </div>
                                
                                <div className='p-6'>
                                    <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                                        {speaker.name}
                                    </h2>
                                    
                                    <p className='text-sm font-medium text-blue-600 mb-2'>
                                        {speaker.title}
                                    </p>
                                    
                                    <p className='text-sm text-gray-600 mb-3 leading-relaxed'>
                                        {speaker.affiliation}
                                    </p>
                                    
                                    {speaker.additionalInfo && (
                                        <p className='text-sm text-gray-600 mb-3 leading-relaxed'>
                                            {speaker.additionalInfo}
                                        </p>
                                    )}
                                    
                                    {speaker.topic && (
                                        <div className='mt-4 pt-4 border-t border-gray-100'>
                                            <p className='text-xs font-semibold text-gray-700 mb-1'>Topic:</p>
                                            <p className='text-sm text-gray-600 leading-relaxed'>
                                                {speaker.topic}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default KeyNoteSpeakers
