import React from "react";
import Image from "next/image";

import Commercial from "/public/projects/commercialBuilding.jpg";
import Residential from "/public/projects/residentialBuilding.jpg";

export default function Projects() {
  return (
    <div className="w-full min-h-full">
      <div className="grid grid-cols-2 grid-rows-2 h-[80vh] lg:h-[100vh]">
        <div className="relative  w-full">
          <Image
            src={Residential}
            alt="Plumbing hero image"
            className="object-cover border-radius-tl-img"
            fill
          />
        </div>
        {/* Text Container */}
        <div className="relative text-right w-full max-w-[250px] sm:max-w-[1000px] ">
          <div className="flex flex-col justify-center py-10 ">
            <div className="flex justify-end">
              <p
                className="text-lg montserrat600 blueColor poppins  "
                style={{ "--font-weight": "700" }}
              >
                projects
              </p>
              <div className="w-3 h-px blueColorBg mr-2 mt-3.5" />
            </div>
            <h3
              className="text-4xl dm-sans sm:text-5xl lg:text-6xl"
              style={{ "--font-weight": "600" }}
            >
              Take a<br /> look
              <br /> at our <br />
              projects
            </h3>
          </div>
        </div>
        {/* Text Container */}
        <div className="]"></div>
        <div className="relative w-full ">
          <Image
            src={Commercial}
            alt="Plumbing hero image"
            className="object-cover border-radius-br-img"
            fill
          />
        </div>
      </div>
    </div>
  );
}
