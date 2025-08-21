/* eslint-disable no-unused-vars */
import React from "react";
import { BiCopyright, BiRightArrowAlt } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white ">
        <div
            className="flex flex-col md:flex-row gap-y-10 justify-center md:justify-evenly items-center md:p-8 px-4 py-8">
            <div className="flex flex-col text-center md:text-start gap-5 md:w-[25%]">
                <h2 className="text-lg font-semibold">GIEST-2025</h2>
                <p>National Institute of Technology Jamshedpur Jharkhand, 831014 <br/> India</p>
                <div>
                    {/* <p className="font-medium">Linkedin : <span className="font-normal">@giest</span></p> */}
                    <p className="font-medium">Email : <span className="font-normal">giestconf2025@gmail.com</span></p>
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
                <p className="text-lg font-semibold my-3">Useful Links</p>
                <ul className="flex flex-wrap md:flex-col gap-2 text-sm justify-center ">
                    <Link to='/callforpaper'>
                        <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt
                            className="text-orange-600 hidden md:block"/>Authors <span
                            className="md:hidden text-xl">|</span></li>
                    </Link>
                    <Link to='/specialSession'>
                        <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt
                            className="text-orange-600 hidden md:block"/>Special Session<span
                            className="md:hidden text-xl">|</span></li>
                    </Link>
                    {/* <Link to='/sponser'>
              <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt className="text-orange-600 hidden md:block" />Sponser us <span className="md:hidden text-xl" >|</span></li>
            </Link> */}
                    <Link to='/sponsorship'>
                        <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt
                            className="text-orange-600 hidden md:block"/>Sponsors <span
                            className="md:hidden text-xl">|</span></li>
                    </Link>
                    <Link to='/impdate'>
                        <li className="flex items-center gap-2 cursor-pointer "><BiRightArrowAlt
                            className="text-orange-600 hidden md:block"/>Imp Dates<span
                            className="md:hidden text-xl">|</span></li>
                    </Link>
                    <Link to='/workshop'>
                        <li className="flex items-center gap-2 cursor-pointer pt-[5px] md:pt-0 "><BiRightArrowAlt
                            className="text-orange-600 hidden md:block"/>Workshop <span
                            className="md:hidden text-xl"></span></li>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-col items-center md:items-start gap-5">
                <h2 className="text-lg font-semibold">Our Social Networks</h2>
                <p>Get in touch with us</p>
                <div className="flex items-center gap-5">
                    <a href="" target="_blank" rel="noreferrer"><FaLinkedinIn
                        className="border bg-gray-800 p-1 rounded-full text-white cursor-pointer text-2xl"/></a>
                    <a href="" target="_blank" rel="noreferrer"><FaFacebookF
                        className="border bg-gray-800 p-1 rounded-full text-white cursor-pointer text-2xl"/></a>
                    {/* <a href="" target="_blank"><FaYoutube className="border bg-gray-800 p-1 rounded-full text-white cursor-pointer text-2xl"/></a> */}
                    <a href="" target="_blank" rel="noreferrer"><MdEmail
                        className="border bg-gray-800 p-1 rounded-full text-white cursor-pointer text-2xl"/></a>
                </div>
            </div>
            {/* Below is the link for flag-counter.*/}
            <a href="https://info.flagcounter.com/0IKY"><img
                src="https://s05.flagcounter.com/count2/0IKY/bg_1F2937/txt_FFFFFF/border_1F2937/columns_4/maxflags_16/viewers_0/labels_0/pageviews_1/flags_0/percent_0/"
                alt="Flag Counter" border="0"/></a>

        </div>
        <div
            className=" text-sm md:text-base flex flex-col md:flex-row items-center justify-between md:px-20 py-4 border-t-2 border-gray-400 md:mx-20 mx-5">
            <p className="flex items-center"><BiCopyright className="mx-2 mt-1 text-lg" /> Copyright GIEST All Rights Reserved</p>
        <p className="mt-4 md:mt-0">Design and develop by <a href="https://www.linkedin.com/in/prem-raj-a802682a7/" target="_blank" className="text-orange-600">Prem Raj </a></p>
      </div>
    </footer>
  );
};

export default Footer;