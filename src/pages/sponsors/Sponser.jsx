import React from 'react'
import Layout from '../../components/Layout'

const Sponser = () => {
    const sponsorships = [
        {
            tier: "Diamond",
            price: "₹3 Lakh",
            authors: 2,
            attendees: 6,
            talk: true,
            ads: true,
            stall: "4m × 4m",
            brochure: true,
            logo: true,
            adSpace: "1 page",
        },
        {
            tier: "Gold",
            price: "₹2 Lakh",
            authors: 1,
            attendees: 5,
            talk: true,
            ads: true,
            stall: "4m × 3m",
            brochure: true,
            logo: true,
            adSpace: "1 page",
        },
        {
            tier: "Silver",
            price: "₹1 Lakh",
            authors: 1,
            attendees: 4,
            talk: true,
            ads: true,
            stall: "3m × 3m",
            brochure: true,
            logo: true,
            adSpace: "1/2 page",
        },
        {
            tier: "Bronze",
            price: "₹50,000",
            authors: 0,
            attendees: 2,
            talk: false,
            ads: false,
            stall: "3m × 2m",
            brochure: false,
            logo: true,
            adSpace: "1/4 page",
        },
    ];
    return (
        <Layout>
            <div className="p-6 pt-44 bg-white text-gray-800">
                <h1 className="text-3xl text-blue-600 font-bold text-center mb-8">
                    GIEST-2025 Sponsorship Packages
                </h1>

                {/* <p>We are pleased to offer sponsorship opportunities for GIEST-2025. Our sponsorship packages are designed to provide maximum visibility and engagement with attendees through various levels of support.</p> */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sponsorships.map((sponsor, idx) => (
                        <div key={idx} className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
                            <h2 className="text-xl font-bold text-center text-indigo-600 mb-2">{sponsor.tier}</h2>
                            <p className="text-center text-gray-700 font-semibold mb-4">{sponsor.price}</p>
                            <ul className="space-y-2 text-sm">
                                <li>🎓 Free Author Registrations: {sponsor.authors}</li>
                                <li>👥 Free Attendee Registrations: {sponsor.attendees}</li>
                                <li>🎤 Expert Talk: {sponsor.talk ? "Yes" : "No"}</li>
                                <li>📢 Venue Ads: {sponsor.ads ? "Yes" : "No"}</li>
                                <li>🏢 Stall: {sponsor.stall}</li>
                                <li>📄 Brochure in Kit: {sponsor.brochure ? "Yes" : "No"}</li>
                                <li>🖼️ Logo Placement: {sponsor.logo ? "Yes" : "No"}</li>
                                <li>📰 Ad in Proceedings: {sponsor.adSpace}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center flex flex-col justify-center items-center">
                    <a
                        href="https://forms.gle/chQYPZKsnmk4HhrD9"
                        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply for Sponsorship
                    </a>

                    <div className="mt-6 space-y-3 text-sm text-gray-700 flex flex-col justify-center items-center">
                        <p>
                            📑 <strong>SOP for Donations/Sponsorship:</strong>{" "}
                            <a
                                href="https://nitjsr.ac.in/backend/files/SOP_For_making_Donations_sponsorship_to_National_Institute_of_Technology.pdf"
                                className="text-blue-600 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View SOP PDF
                            </a>
                        </p>

                        <p>
                            💳 <strong>Payment Link (SBI Collect):</strong>{" "}
                            <a
                                href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=338318"
                                className="text-blue-600 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Pay via SBI Collect
                            </a>
                        </p>
                        <p>
                            🔗 <strong>OR Scan the QR Code from the proposal PDF</strong> to open the payment link directly.
                        </p>
                        <img src="/qrcode.jpg" alt="" />
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                        <p>📞 Contact: Dr. Ravi Bhushan — <a href="tel:+918862950216" className="underline">+91 8862950216</a></p>
                        <p>
                            📧 Email:{" "}
                            <a href="mailto:ravibhushan.ee@nitjsr.ac.in" className="underline">
                                ravibhushan.ee@nitjsr.ac.in
                            </a>{" "}
                            /{" "}
                            <a href="mailto:giestconf2025@gmail.com" className="underline">
                                giestconf2025@gmail.com
                            </a>
                        </p>
                        <p> Venue: National Institute of Technology Jamshedpur, Jharkhand, India</p>
                        <div className='flex items-center justify-center my-10'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6863772192432!2d86.14154107508409!3d22.77701737934658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sjp!4v1718941681102!5m2!1sen!2sjp"
                                width="100%"
                                height="320"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                className='rounded-2xl shadow-xl'
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Sponser

