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
            description: "Submit your PPT and MP4 presentation files"
        },
        {
            id: 2,
            title: "Submission Instructions",
            url: "https://docs.google.com/document/d/1ePx5UcNVKG5Rt2c4e_lDbkfO6adhFyAT/edit",
            description: "Detailed guidelines for file submission"
        },
        {
            id: 3,
            title: "PPT Template",
            url: "https://docs.google.com/presentation/d/14Dj_cfsxTkpCvtRaniR90U68D7KJR8oI/edit",
            description: "Official presentation template for GIEST 2025"
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

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                                        <span className="mr-2 text-sm font-medium">Open</span>
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                            ))}
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