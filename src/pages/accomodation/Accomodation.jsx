import { ExternalLink } from 'lucide-react';
import Layout from '../../components/Layout';

const AccommodationPage = () => {

    const hotels = [
        {
            id: 1,
            name: "Ramada",
            bookingUrl: "https://www.wyndhamhotels.com/ramada/jamshedpur-india/ramada-jamshedpur/overview"
        },
        {
            id: 2,
            name: "Ginger Jamshedpur",
            bookingUrl: "https://www.gingerhotels.com/hotels/ginger-jamshedpur"
        },
        {
            id: 3,
            name: "NOVANTA JAMSHEDPUR",
            bookingUrl: "https://www.makemytrip.com/hotels/novanta_jamshedpur-details-jamshedpur.html"
        },
        {
            id: 4,
            name: "Motel Madhuban",
            bookingUrl: "https://www.makemytrip.com/hotels/motel_madhuban-details-jamshedpur.html"
        },
        {
            id: 5,
            name: "THE CRUZE PREMIUM BOUTIQUE HOTEL",
            bookingUrl: "https://www.makemytrip.com/hotels/the_cruze_premium_boutique_hotel-details-jamshedpur.html"
        },
        {
            id: 6,
            name: "The Alcor Hotel",
            bookingUrl: "https://www.makemytrip.com/hotels/the_alcor_hotel-details-jamshedpur.html"
        },
        {
            id: 7,
            name: "The Sonnet Jamshedpur",
            bookingUrl: "https://www.makemytrip.com/hotels/the_sonnet_jamshedpur-details-jamshedpur.html"
        }
    ];

    const handleBookingClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <Layout>
        <div className="min-h-[80vh] pt-44 bg-gray-50 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600 mb-2">
                        Accommodation
                    </h1>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="divide-y divide-gray-200">
                        {hotels.map((hotel) => (
                            <div
                                key={hotel.id}
                                className="p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                                onClick={() => handleBookingClick(hotel.bookingUrl)}
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {hotel.name}
                                    </h3>

                                </div>
                                <div className="flex items-center text-blue-600">
                                    <span className="mr-2 text-sm font-medium">Book Now</span>
                                    <ExternalLink size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        </Layout>
    );
};

export default AccommodationPage;