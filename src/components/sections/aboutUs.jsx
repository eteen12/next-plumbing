import React from "react";
import Image from "next/image";
import AboutUsSmall from "/public/aboutUs.jpg";
import AboutUsLarge from "/public/aboutUsLarge.jpg";

export default function AboutUs() {
  return (
    <div className="py-20 grid grid-cols-1 gap-10 p-10 sm:p-0 sm:mr-24 sm:grid-cols-2 ">
      <div className="relative h-[400px] sm:h-[1200px]">
        <Image
          src={AboutUsLarge}
          className="object-cover borderRadius hidden sm:block"
          fill
          alt="Smiling plumber"
          loading="lazy"
        />
        <Image
          src={AboutUsSmall}
          className="object-cover rounded-3xl sm:hidden"
          fill
          alt="Smiling plumber "
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex">
          <div className="w-5 h-px bg-red-700 mr-2 mt-3" />
          <p className="text-lg montserrat600 text-red-700">About Us</p>
        </div>
        <h2 className="montserrat700 text-2xl lg:text-4xl">
          Your Local Plumbing Experts
        </h2>
        <p className="mt-5 lg:text-lg">
          Serving Kelowna for over 10 years, we are dedicated to providing
          top-quality plumbing services with a commitment to customer
          satisfaction. Our experienced team is here to handle all your plumbing
          needs, from routine maintenance to emergency repairs.
        </p>

        <div className="mt-5">
          <p className="flex py-1">
            {/* <IoMdCheckmarkCircleOutline className="text-xl mr-2 mt-px text-green-500" /> */}
            Immediate 24/ 7 On-Call Service
          </p>
          <p className="flex py-1">
            {/* <IoMdCheckmarkCircleOutline className="text-xl mr-2 mt-px text-green-500" /> */}
            Experienced and Fully Certified Technicians
          </p>
          <p className="flex py-1">
            {/* <IoMdCheckmarkCircleOutline className="text-xl mr-2 mt-px text-green-500" /> */}
            Results Guaranteed – We Stand Behind Our Work
          </p>
        </div>

        <div className=" flex flex-col sm:flex-row mt-5">
          <a
            href="#"
            className="bg-red-700 text-white px-6 py-2 border border-red-700 text-lg text-nowrap w-auto self-start"
          >
            Contact Us
          </a>
          <a
            href="/request-quote"
            className="text-black group flex items-center sm:pl-4 font-semibold text-nowrap mt-4 sm:mt-0"
          >
            <span className="sm:ml-2 transition-opacity duration-300 ease-in-out montserrat500 ">
              Request a Quote
            </span>
            <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 ml-2">
              &gt;
            </span>
          </a>
        </div>
      </div>
    </div>
    
  );
}
