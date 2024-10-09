import React from "react";
import CarouselComponent from "../reusables/carousel.jsx";

export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-[100vh] whiteColorBg ">
      <div className="poppins darkColor mt-5 flex flex-col gap-3 sm:gap-5 max-w-full sm:max-w-[250px] md:max-w-[380px] lg:max-w-[520px]">
        <div className="flex items-center">
          <div className="w-3 h-px blueColorBg mr-2 mt-3.5" />
          <p
            className="text-lg montserrat600 blueColor poppins"
            style={{ "--font-weight": "700" }}
          >
            our services
          </p>
        </div>
        <h2
          className="dm-sans text-3xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl"
          style={{ "--font-weight": "700" }}
        >
          Explore our Range <br /> of Services
        </h2>
      </div>
      <div className="w-full h-full">
        <CarouselComponent />
      </div>
    </div>
  );
}
