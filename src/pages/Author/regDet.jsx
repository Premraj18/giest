import React from "react";

const RegistrationDetails = () => {
  const points = [
    "At least one of the authors of every accepted paper must register for the conference as an author and present the paper in order to be included in the conference proceedings of GIEST 2025, and subsequent submission to IEEE Xplore® digital library. Please note that, only the registered & presented papers will be communicated to IEEE for possible inclusion into the IEEE Xplore database.",
    "Student author registration is also considered as a regular paper registration.",
    "If more than one author of an accepted paper wishes to attend the conference, all such authors need to be registered separately by paying an applicable registration fee.",
    "Each author registration covers only one accepted paper. However, for the second paper registering by the same author will be supported with a 40% discount in the respective category of the required registration fee (e.g. for Academic, non-IEEE category, In-person mode, 1st paper = ₹ 8000, 2nd paper = ₹ 4800, 3rd paper = ₹ 8000, 4th paper = ₹ 4800 and so on, only when the registering author is common for all the papers. The same example fits good to all category registrations including Foreign author registrations.)",
    "Additional authors (other than those who are included in the manuscript submitted for review) cannot be added to the camera-ready paper.",
    "Any accepted paper included in the final program is expected to have at least one author attend and present the paper (physically/virtually) at the conference. Non-presented papers will not be submitted to the IEEE Xplore® digital library as per IEEE no-show policy.",
    "The physical category registration fees include the conference kit, access/admission to all the technical sessions, lunch on all conference days, morning and evening refreshments. However, virtual registration fees include access/admission to all the virtual sessions such as technical sessions, keynote speech, Panel discussion only.",
    "The paper must be presented by an author of that paper at the conference unless the TPC Chair grants permission in advance of the event for a substitute presenter, who is qualified both to present and answer questions.",
    "Receipt of the Registration Fee will be provided in the name of registered author(s) only.",
    "The registration fee, once paid, is neither refundable nor transferable.",
    "The manuscripts may contain six pages. Up to two (2) additional pages are permissible with over-length page charges. The maximum number of pages per manuscript allowed is eight (8). Extra page Charges: ₹ 2000 or $ 25 Per Extra Page.",
    "Please submit proof of IEEE membership, proof of studentship, and proof of required registration Fee during the registration.",
    "The authors are advised to strictly follow the registration fee structure categorized as Early Bird and Regular Registration Fee."
  ];

  return (
    <div className="">
      <h1 className="md:text-4xl text-3xl font-bold mb-4 text-center text-blue-700">Registration Details for GIEST 2025</h1>
      <ol className="list-decimal list-inside space-y-4 font-medium text-gray-800">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ol>
    </div>
  );
};

export default RegistrationDetails;