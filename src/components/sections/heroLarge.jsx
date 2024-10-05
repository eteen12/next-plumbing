import React from "react";
import Image from "next/image";
import HeroLargeImage from "/public/heroLarge.jpg";

export default function HeroLarge() {
  return (
    <section className="hidden sm:flex relative items-center justify-between w-full h-screen px-8 py-4">
      {/* Image Content */}
      <div className="absolute inset-0 w-full h-full mt-20 md:px-10 ">
        <div className="relative w-full h-full md:rounded-3xl overflow-hidden">
          <Image
            src={HeroLargeImage}
            alt="Plumbing hero image"
            className="object-cover "
            priority
            fill
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] to-transparent opacity-70 "
          style={{
            background:
              "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.8) 25%, rgba(255, 255, 255, 0.5) 30%, transparent 60%)",
          }}
        ></div>
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col justify-center w-full z-10 darkColor md:pl-8">
        <h1
          className="text-5xl font-bold  leading-tight mb-2 dm-sans"
          style={{ "--font-weight": "600" }}
        >
          Your, plumbing <br /> service
        </h1>
        <p className="text-xl  mb-4 poppins" style={{ "--font-weight": "600" }}>
          Serving Kelowna, since 2016
        </p>
        <button
          className="blueColorBg text-white w-48 py-1.5 rounded-full text-lg poppins shadow-lg"
          style={{ "--font-weight": "600" }}
        >
          Book now
        </button>
      </div>
    </section>
  );
}
