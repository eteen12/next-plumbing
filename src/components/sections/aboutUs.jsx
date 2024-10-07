import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaCheck } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import AboutUsLarge from "/public/aboutUsLarge.jpg";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen p-5 mt-32 grid grid-cols-1 gap-28 mx-auto sm:p-10 sm:grid-cols-[50%_50%] sm:gap-5  md:p-20 md:max-w-[850px] lg:max-w-[1000px] xl:max-w-[1300px]">
      <div className="relative mx-auto w-[70vw] h-[72vh] sm:max-w-[260px] sm:max-h-[600px] md:max-w-[330px] md:max-h-[700px] lg:max-w-[400px] lg:min-h-[600px] 
      xl:max-w-[450px] xl:min-h-[700px]">
        {/* Background Image */}
        <div className="blueColorBg w-full h-full rounded-3xl absolute top-0 left-0 z-0 -translate-x-10 -translate-y-10"></div>

        {/* Foreground Image */}
        <Image
          src={AboutUsLarge}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl z-10 transform translate-x-10 translate-y-10 sm:translate-y-4 sm:translate-x-4"
          layout="fill"
        />
      </div>
      
      <div className="poppins darkColor mt-5 flex flex-col gap-3 sm:gap-5 max-w-full sm:max-w-[250px] md:max-w-[380px] lg:max-w-[520px]">
        <div className="flex items-center">
          <div className="w-3 h-px blueColorBg mr-2 mt-3.5" />
          <p
            className="text-lg montserrat600 blueColor poppins"
            style={{ "--font-weight": "700" }}
          >
            about us
          </p>
        </div>
        <h2
          className="dm-sans text-3xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl"
          style={{ "--font-weight": "700" }}
        >
          Your Local  <br />  Plumbing Experts
        </h2>
        <p className="poppins mt-5 text-base sm:text-lg whitespace-normal">
          Serving Kelowna for over 10 years, we are dedicated to providing
          top-quality plumbing services with a commitment to customer
          satisfaction. Our experienced team is here to handle all your plumbing
          needs, from routine maintenance to emergency repairs.
        </p>

        <div className="poppins darkColor mt-5 flex flex-col gap-3 sm:gap-5 max-w-full sm:max-w-[340px] md:max-w-[380px] lg:max-w-[520px]">
          <div className="flex items-center">
            <span className="flex-grow">Immediate 24/7 on-call service</span>
            <FaCheck className="text-xl text-green-500 ml-2 rounded-full" />
          </div>
          <div className="flex items-center">
            <span className="flex-grow">Experienced and fully certified technicians</span>
            <FaCheck className="text-xl text-green-500 ml-2" />
          </div>
          <div className="flex items-center">
            <span className="flex-grow">Results guaranteed, we stand behind our work</span>
            <FaCheck className="text-xl text-green-500 ml-2" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-5">
          <Link
            href="#"
            className="flex items-center dm-sans"
            style={{ "--font-weight": "700" }}
          >
            Request a quote <IoChevronForwardOutline className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}