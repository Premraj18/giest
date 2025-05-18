import React, { useEffect, useState } from 'react'
import './App.css'
import { BallTriangle, Bars } from 'react-loader-spinner';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Author from './pages/Author/Author';
import Impdate from './pages/impdates/Impdates';
import Workshop from './pages/workshop/Workshop';
import Speakers from './pages/speakers/Speakers';
import SpecialSession from './pages/Specialsession/specialsession';
import ApprovedSession from './pages/approvedSession/ApprovedSession';
import Sponser from './pages/sponsors/Sponser';
import Accomodation from './pages/accomodation/Accomodation';
import Placetovisit from './pages/placetovisit/Placetovisit';
import Internationaladvisorycommittee from './pages/international-advisory-committee/Internationaladvisorycommittee';
import Nationaladvisorycommittee from './pages/Nationaladvisorycommittee';
import OrganizingCommittee from './pages/organizing-Committee/OrganizingCommittee';
import Callforpaper from './pages/Author/CallForPaper';
import Registrationdetails from './pages/Author/Registrationdetail';
import Studenttragrant from './pages/Author/Studenttravgrant';
import BestPaperAward from './pages/Author/BestPaperAward';
import CameraReaSub from './pages/Author/CameraReaSub';
import RegistrationForm from './pages/Author/RegistrationForm';
import PresentationDet from './pages/Author/PresentationDet';
import KeyNoteSpeakers from './pages/speakers/KeyNoteSpeak';
import TutorialSpeakers from './pages/speakers/TutSpeaker';


function App() {
  return (
    <>
      <div>

        <Router>
          {/* <Media/> */}
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/international-advisory-committee" element={<Internationaladvisorycommittee />} />
            <Route path="/national-advisory-committee" element={<Nationaladvisorycommittee />} />
            <Route path="/organizing-Committee" element={<OrganizingCommittee />} />

            <Route path="/impdate" element={<Impdate />} />

            {/* <Route path="/authors" element={<Author />} /> */}
            <Route path="/callforpaper" element={<Callforpaper />} />
            <Route path="/registrationdetail" element={<Registrationdetails />} />
            <Route path="/studentravelgrant" element={<Studenttragrant />} />
            <Route path="/bestpaperaward" element={<BestPaperAward />} />
            <Route path="/camerareadysub" element={<CameraReaSub />} />
            <Route path="/regform" element={<RegistrationForm />} />
            <Route path="/presdetail" element={<PresentationDet />} />

            <Route path="/specialSession" element={<SpecialSession/>} />
            <Route path="/approvedsession" element={<ApprovedSession/>} />

            {/* <Route path="/speaker" element={<Speakers />} /> */}
            <Route path="/keyspeak" element={<KeyNoteSpeakers />} />
            <Route path="/tutspeak" element={<TutorialSpeakers />} />

            <Route path="/workshop" element={<Workshop />} />

            <Route path="/sponsorship" element={<Sponser />} />
            
            <Route path="/accomodation" element={<Accomodation />} />
            
            <Route path="/placetovisit" element={<Placetovisit />} />
          </Routes>
          <Toaster />
        </Router>

      </div>
    </>
  )
}

export default App