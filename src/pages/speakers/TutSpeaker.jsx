import Layout from '../../components/Layout'

const TutorialSpeakers = () => {
    const speakers = [
        {
            id: 1,
            name: "Prof. Kalyan Chatterjee",
            title: "Professor",
            affiliation: "IIT (ISM) Dhanbad",
            topic: "Fault Ride Through Capability for Wind Energy Conversion System",
            image: "/tutorial-speakers/kalyan_chatterjee.png"
        },
        {
            id: 2,
            name: "Dr. Olive Ray",
            title: "Associate Professor",
            affiliation: "IIT Bhubaneswar",
            topic: "Topic will be announced soon",
            image: "/tutorial-speakers/olive_ray.png"
        }
    ];

    return (
        <Layout>
            <div className='min-h-[80vh] pt-44 pb-16 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-12'>
                        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                            Tutorial Speakers
                        </h1>
                        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-2'></div>
                        <div className='w-12 h-0.5 bg-gray-300 mx-auto'></div>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto'>
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

export default TutorialSpeakers
