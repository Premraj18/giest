/* eslint-disable no-unused-vars */
import { Fragment, useContext, useRef, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Dialog, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { FiMenu } from "react-icons/fi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {

  //scroll effect
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  })

  //color on which page is routing
  let { pathname } = useLocation()
  let subpage = pathname.split('/')?.[1]
  // console.log(subpage)

  function Linkness(type = null) {
    if (subpage === '') {
      subpage = 'home'
    }
    let classes = 'text-sm font-medium hover:text-blue-600 '

    if (type === subpage) {
      classes += 'border-b-2 border-blue-600 p-1'
    }
    else {
      classes += ' '
    }

    // console.log(classes)
    return classes
  }

  //toggle
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.header className='w-full py-1 fixed top-0 z-10 sm:px-10 px-5 flex justify-between items-center'
      variants={{
        visible: { background: 'white', boxShadow: '0px 0.01px 5px rgba(24, 22, 22, 0.155)', color: 'black' },
        hidden: { background: 'white', boxShadow: '0px 0.01px 5px rgba(24, 22, 22, 0.155)', color: 'black' },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.1, }}
    >
      <nav className='flex flex-col md:flex-row w-full md:justify-center justify-between items-center screen-max-width'>

        {/* destop view */}
        <div className='w-full flex flex-col items-center justify-between'>
          <div className="flex flex-wrap items-center justify-center gap-6 md:ml-10 py-2">
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/giestlogo.png' : '/giestlogo.png'}`} alt="img" className={`md:w-20 w-10`} />
            </Link>
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/ias.png' : '/ias.png'}`} alt="img" className={`md:w-32 w-10`} />
            </Link>
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/ieee.png' : '/ieee.png'}`} alt="img" className={`md:w-20 w-10`} />
            </Link>
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/ieeenitm.png' : '/ieeenitm.png'}`} alt="img" className={`md:w-32 w-10`} />
            </Link>
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/nitjsrlogo.png' : '/nitjsrlogo.png'}`} alt="img" className={`md:w-16 w-10`} />
            </Link>
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/ies1.png' : '/ies1.png'}`} alt="img" className={`md:w-20 w-10`} />
            </Link>
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/ies2.png' : '/ies2.png'}`} alt="img" className={`md:w-32 w-10`} />
            </Link>
            <Link to='/'>
              <img src={`${subpage === '' && hidden == !true ? '/ieeesil.png' : '/ieeesil.png'}`} alt="img" className={`md:w-32 w-10`} />
            </Link>
          </div>
          <div className='md:flex flex-1 justify-end items-center mr-3 space-x-10 mb-2 hidden'>
            <Link to={'/'} className={Linkness('home')}>
              <p className={`text-base text-black`}>Home</p>
            </Link>
            <Link to={'/authors'} className={Linkness('authors')}>
              <p className={`text-base text-black`}>Authors </p>
            </Link>
            <Link to={'/impdate'} className={Linkness('impdate')}>
              <p className={`text-base text-black`}>Important Dates </p>
            </Link>


            {/* <Link to={'/committee'} className={Linkness('committee')}>
              <p className={`text-base text-black`}>Committee </p>
            </Link> */}

            <Link to={'/specialSession'} className={Linkness('specialSession')}>
              <p className={`text-base text-black`}>Special Session</p>
            </Link>

            <div className="relative">
              {/* Dropdown Trigger */}
              <button
                className="flex items-center text-base text-black"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Committee
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg w-40">
                  <Link
                    to="/international-advisory-committee"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    International advisory committee
                  </Link>
                  <Link
                    to="/national-advisory-committee"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    National advisory committee
                  </Link>
                  <Link
                    to="/organizing-Committee"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Organizing Committee
                  </Link>
                </div>
              )}
            </div>

            <Link to={'/workshop'} className={Linkness('workshop')}>
              <p className={`text-base text-black`}>Workshop&Tutorials </p>
            </Link>
            <Link to={'/sponsorship'} className={Linkness('sponsorship')}>
              <p className={`text-base text-black`}>Sponsership </p>
            </Link>
            <Link to={'/accomodation'} className={Linkness('accomodation')}>
              <p className={`text-base text-black`}>Accomodation </p>
            </Link>
            <Link to={'/placetovisit'} className={Linkness('placetovisit')}>
              <p className={`text-base text-black`}>Place to Visit </p>
            </Link>
          </div>
        </div>
        {/* <div className='md:flex lg:text-xl text-base hidden items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <Link to='/contact'>
            <button className={`px-2 py-1 text-base border-2 rounded-full border-orange-600 hover:bg-orange-700 hover:text-white ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`} >Contact Us</button>
          </Link>
        </div> */}

        {/* mobile view */}
        <div onClick={toggleCart} className='cursor-pointer md:hidden font-semibold md:absolute md:right-0 md:mx-8 md:mt-0'>
          <button className={`${subpage === 'home' && hidden == !true ? 'text-black' : 'text-black'}`}><FiMenu size={30} /></button>
        </div>
        <div ref={ref} className="w-full md:hidden h-[100vh] sideCart bg-white absolute top-0 right-0 py-10 transition-transform transform translate-x-full ">
          <span onClick={toggleCart} className="absolute top-8 right-4 cursor-pointer"><RxCross2 size={30} /></span>
          <div className='flex flex-col border-t-2 py-5 justify-center items-center mt-12 gap-10'>
            <div className='flex flex-col text-lg items-center justify-center gap-y-5'>
              <Link to={'/'} className={Linkness('home')}>
                <p className={`text-base text-black`}>Home</p>
              </Link>
              <Link to={'/authors'} className={Linkness('authors')}>
                <p className={`text-base text-black`}>Authors </p>
              </Link>
              <Link to={'/impdate'} className={Linkness('impdate')}>
                <p className={`text-base text-black`}>Important Dates </p>
              </Link>

              {/* <Link to={'/committee'} className={Linkness('committee')}>
              <p className={`text-base text-black`}>Committee </p>
            </Link> */}
              <Link to={'/specialSession'} className={Linkness('specialSession')}>
                <p className={`text-base text-black`}>Special Session </p>
              </Link>

              <div className="relative">
                {/* Dropdown Trigger */}
                <button
                  className="flex items-center text-base text-black"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Committee
                  <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg w-40">
                    <Link
                      to="/international-advisory-committee"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      International advisory committee
                    </Link>
                    <Link
                      to="/national-advisory-committee"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      National advisory committee
                    </Link>
                    <Link
                      to="/organizing-Committee"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Organizing Committee
                    </Link>
                  </div>
                )}
              </div>



              <Link to={'/workshop'} className={Linkness('workshop')}>
                <p className={`text-base text-black`}>Workshop&Tutorials </p>
              </Link>
              <Link to={'/sponsorship'} className={Linkness('sponsorship')}>
                <p className={`text-base text-black`}>Sponsership </p>
              </Link>
              <Link to={'/accomodation'} className={Linkness('accomodation')}>
                <p className={`text-base text-black`}>Accomodation </p>
              </Link>
              <Link to={'/placetovisit'} className={Linkness('placetovisit')}>
                <p className={`text-base text-black`}>Place to Visit </p>
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}