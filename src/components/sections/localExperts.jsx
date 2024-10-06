import React from "react";
import Image from "next/image";
import AboutUs from "/public/aboutUs.jpg";
import AboutUsLarge from "/public/aboutUsLarge.jpg";

export default function LocalExperts() {
  return (
    <div className="relative w-full min-h-[100vh] p-5 pt-20 grid gap-5 sm:grid-cols-[50%_50%] md:grid-cols-[40%_60%] sm:pt-52 sm:p-0 sm:gap-0 ">
      {/* Left Column */}
      <div className="relative w-full h-full">
        <div className=" h-[50%] w-full sm:h-[80vh]">
          <Image
            src={AboutUs}
            alt="Plumbing expert"
            className="object-cover object-left rounded-3xl sm:hidden"
            priority
            fill
          />
          <Image
            src={AboutUsLarge}
            alt="Plumbing expert"
            className="object-cover object-left borderRadius shadow-xl hidden sm:block"
            priority
            fill
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-[100px] p-5 sm:p-2 sm:text-end md:px-12 lg:px-20">
        <div className="flex sm:justify-end">
          <div className="w-3 h-px blueColorBg mr-2 mt-3 sm:hidden" />
          <p
            className="text-base montserrat600 blueColor poppins md:text-lg lg:text-xl"
            style={{ "--font-weight": "600" }}
          >
            about us
          </p>
          <div className="w-3 h-px blueColorBg ml-2 mt-2 md:mt-4 lg:mt-3.5 hidden sm:flex" />
        </div>
        <h2
          className="text-nowrap dm-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ "--font-weight": "800" }}
        >
          Your Local Plumbing <br /> Experts
        </h2>
        <p
          className="mt-5 sm:text-lg poppins lg:text-xl max-w-[400px] md:self-end"
          style={{ "--font-weight": "500" }}
        >
          Serving Kelowna for over 10 years, we are dedicated to providing
          top-quality plumbing services with a commitment to customer
          satisfaction. Our experienced team is here to handle all your plumbing
          needs, from routine maintenance to emergency repairs.
        </p>
      </div>
    </div>
  );
}
