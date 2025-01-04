import React, { useEffect, useState } from 'react'
import './App.css'
import { BallTriangle,Bars } from 'react-loader-spinner';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {Toaster} from 'react-hot-toast';

import Home from './pages/Home';
import About from './pages/About US/About';
import SponsorCrausal from './pages/sponser/SponerCrausal';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Event from './pages/Event/Event';
import Team from './pages/OurTeam/Team';

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000)
  }, [])
  return (
    <>
      <div>
        {
          loading && (
            <div className='h-screen w-full bg-stone-200 flex justify-center items-center'>
              <Bars
                height={100}
                width={100}
                radius={5}
                color="orange"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          )
        }
        {
          !loading && (
            <Router>
              {/* <Media/> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sponser" element={<SponsorCrausal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/event" element={<Event />} />
                <Route path="/team" element={<Team />} />
              </Routes>
              <Toaster/>
            </Router>
          )
        }
      </div>
    </>
  )
}

export default App