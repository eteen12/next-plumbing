import React from "react";
import Image from "next/image";

import HeroImageMobile from "/public/heroMobile.png";

export default function HeroMobile() {
  return (
    <div className="w-full h-screen relative grid stacked-grid grid-rows-[40%_60%] sm:hidden">
      {/* Text Container */}
      <div className="mt-10 flex flex-col justify-center items-center h-full z-10">
        <h1
          className="darkColor text-4xl font-bold mb-3 darkColor dm-sans text-center text-nowrap"
          style={{ "--font-weight": "600" }}
        >
          Your, plumbing <br />
          service
        </h1>
        <p
          className="darkColor text-base mb-4 darkColor poppins text-center"
          style={{ "--font-weight": "600" }}
        >
          Serving Kelowna since 2016
        </p>
        <button
          aria-label="Book a plumbing service"
          className="blueColorBg text-white py-2 px-12 rounded-full poppins shadow-lg text-base"
          style={{ "--font-weight": "600" }}
        >
          Book now
        </button>
      </div>

      {/* Image Container */}
      <div className="relative z-0 h-full w-full">
        <Image
          src={HeroImageMobile}
          alt="Plumbing hero image"
          className="object-cover"
          priority
          fill
        />
      </div>
    </div>
  );
}
