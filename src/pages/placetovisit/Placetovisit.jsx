import Layout from '../../components/Layout';

const PlacesToVisit = () => {
    const places = [
        {
            id: 1,
            name: "Rankini Mandir",
            image: "/places-to-visit/img1.jpg",
            link: "https://jamshedpur.nic.in/tourist-place/rankini-mandir/",
            description: "Rankini Temple- In Rohinibera village of Potka block is the Rankini temple. Tourists going to Ghatshila should definitely visit this temple, which is located in the dense forests. "
        },
        {
            id: 2,
            name: "Sai Temple Sonari",
            image: "/places-to-visit/img2.jpeg",
            link: "https://jamshedpur.nic.in/tourist-place/sai-temple-sonari/",
            description: "The Sri Sai Temple, built on 0.75 acre at a cost of around Rs 3 crore, is meant for all devotees of Shirdi Sai Baba, the legendary saint held as the incarnation of Krishna by some and a pir by others."
        },
        {
            id: 3,
            name: "Zoological Park",
            image: "/places-to-visit/img3.jpg",
            link: "https://jamshedpur.nic.in/gallery/zoological-park/",
            description: "Home to various species of animals and birds, the Jamshedpur Zoological Park offers an educational and entertaining experience for visitors of all ages."
        },
        {
            id: 4,
            name: "Dimna Lake",
            image: "/places-to-visit/img4.jpg",
            link: "https://jamshedpur.nic.in/tourist-place/dimna-lake/",
            description: "TATA Steel has constructed    Dimna Lake in the  Boram  Block. This lake is near to the Dalma Wild life Sanctuary and is  quite  attractive having the facility for  boating.   Tourists   visit   this   lake  especially during November to  February."
        },
        {
            id: 5,
            name: "Dalma Wildlife Sanctuary",
            image: "/places-to-visit/img5.jpg",
            link: "https://jamshedpur.nic.in/tourist-place/dalma-wild-life-sanctuary/",
            description: "Dalma Wild Life Sanctuary was started in the year 1975. On the top of Dalma hill Guesthouses of forest department and TISCO are located.Further there is a Shiva temple for the Hindus, which becomes an eyecatcher during the Hindu festival Shiv Ratri."
        },
        {
            id: 6,
            name: "Jubilee Park",
            image: "/places-to-visit/img6.jpg",
            link: "https://jamshedpur.nic.in/tourist-place/jubilee-park/",
            description: "Jubilee Park is a park located in the city of Jamshedpur in India. It is a popular destination for all those who wish to have an outdoor picnic, enjoy some outdoor activities and games or even just to have a relaxing day out with friends and family."
        },
    ];

    const handleCardClick = (link) => {
        if (link && link !== "#") {
            window.open(link, "_blank");
        }
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50 py-44 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                            Places to Visit
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover amazing destinations around Jamshedpur
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {places.map((place) => (
                            <div
                                key={place.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                                onClick={() => handleCardClick(place.link)}
                            >
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={place.image}
                                        alt={place.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-white text-sm leading-relaxed">
                                                {place.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {place.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PlacesToVisit;