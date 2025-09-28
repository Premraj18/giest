import React from 'react'
import Layout from '../../components/Layout'
import { ExternalLink } from 'lucide-react'

const PresentationDet = () => {
    const handleLinkClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const links = [
        {
            id: 1,
            title: "Google Form for submission",
            url: "https://forms.gle/Tuvq1upf6Jki7DfQA",
            description: "Submit your PPT and MP4 presentation files",
            instruction: "Open"
        },
        {
            id: 2,
            title: "PPT Template",
            url: "/GIEST_PPT_Template.pptx",
            description: "Official presentation template for GIEST 2025",
            instruction: "Download"
        }
    ];

    return (
        <Layout>
            <div className="min-h-[80vh] pt-44 bg-gray-50 pb-20">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                            Submission of PPT and MP4 Files – GIEST 2025
                        </h1>
                        <p className="text-sm text-gray-600 font-medium">
                            (for Virtual Presentation only)
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                        <div className="p-6">
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                                <p className="text-gray-800 leading-relaxed">
                                    This is to inform you that all virtual presenters are required to submit their PowerPoint (PPT) and MP4 presentation files for GIEST 2025 by the deadline of <span className="font-semibold text-red-600">30th September 2025</span>.
                                </p>
                            </div>

                            <p className="text-gray-700 mb-4">
                                Please use the links below to access the submission form, instructions, and template:
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                        <div className="divide-y divide-gray-200">
                            {links.map((link) => (
                                <div
                                    key={link.id}
                                    className="p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                                    onClick={() => handleLinkClick(link.url)}
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {link.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {link.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-blue-600">
                                        <span className="mr-2 text-sm font-medium">{link.instruction}</span>
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                ON THE DAY OF VIRTUAL PRESENTATION
                            </h2>
                            <p className="text-gray-800 mb-4 font-medium">
                                It is mandatory that the registered <strong>AUTHOR</strong> or <strong>PRESENTER</strong> shall be present online during the conference at the date and time notified and it is necessary to ensure the following instructions carefully:
                            </p>

                            <ul className="space-y-2 text-gray-700 text-lg">
                                <li>• All the authors and co-authors are invited to join the conference in online mode.</li>
                                <li>• It is imperative that presentations are delivered in English.</li>
                                <li>• You may use the given template/any standard template for the Power Point presentation (Template) and video presentation mp4 file</li>
                                <li>• Visit the <a href="https://giest2024.nitmanipur.ac.in/" className="text-blue-700">GIEST 2024 Website</a> for a detailed schedule and joining link.</li>
                                <li>• Authors need to prepare a video presentation mp4 file (PPT must be clearly visible) of max. of <strong>10 minutes</strong> only.</li>
                                <li>• The shared recorded video link will be accessed by GIEST team and will be presented during the assigned session followed by Q and A session. (Make sure that you have submitted the link of your mp4 video files (PPT must be clearly visible) in the Google form link. [Note: <strong>MP4 video file needs to be uploaded in your google drive with the access permission to the</strong> giestconference@nitjsr.ac.in or open to all.]</li>
                                <li>• <strong>It is the responsibility of the presenting author to prepare an mp4 video whose presentation timing should not exceed 10-minutes. The presentation time over the 10 minutes duration will not be accepted.</strong></li>
                                <li>• Attendees shall <strong>unmute</strong> only during Q/A.</li>
                                <li>• Attendees may or may not turn on the camera during the play of the video but need to turn on the camera during Q/A session.</li>
                                <li>• Attendees are requested to join the given link (at least <strong>10 minutes</strong> before the starting presentation of the specified TRACK) from their desktop/PC preferably. Install mobile application if joining from smartphone.</li>
                                <li>• Kindly maintain the decorum of the online conference.</li>
                                <li>• A scanned copy of an invoice for the paid registration fee (in the name of the registering author) will be provided through email within ten days after the completion of the conference.</li>
                                <li>• Presenting author will receive an e-certificate within ten days after the completion of the conference.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            The same information will also be updated shortly on the official conference website.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PresentationDet