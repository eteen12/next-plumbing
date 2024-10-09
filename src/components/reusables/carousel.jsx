import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GiWaterDrop } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";

import Residential from "/public/services/residential.jpg";
import Commercial from "/public/services/commercial.jpg";
import Emergency from "/public/services/emergency.jpg";

import CarouselOverlay from "./useCarousel";

export default function CarouselComponent() {
  const services = [
    {
      id: 1,
      image: Residential,
      title: "Residential",
      alt: "Residential plumbing image",
      desc: "We provide reliable plumbing services for homes, including repairs and new installations. Whether it's fixing leaks or upgrading your system, we've got you covered.",
    },
    {
      id: 2,
      image: Commercial,
      title: "Commercial",
      alt: "Commercial plumbing image",
      desc: "Our commercial plumbing services ensure your business runs smoothly with minimal downtime. From routine maintenance to large-scale installations, we handle it all.",
    },
    {
      id: 3,
      image: Emergency,
      title: "Emergency",
      alt: "Emergency plumbing image",
      desc: "Available 24/7, our emergency services quickly address urgent plumbing issues. We resolve everything from burst pipes to severe leaks, minimizing damage and disruption.",
    },
  ];
  return (
    <Carousel>
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id}>
            <div className="w-full h-full mx-auto pb-10">
              <div className="relative w-[90vw] max-w-[350px] h-[60vh] mx-auto sm:max-w-[450px] md:max-w-[600px] lg:min-w-[800px] lg:min-h-[600px] rounded-3xl rounded-shadow">
                <div className="z-10 ">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="relative object-cover rounded-3xl "
                  />
                </div>
                {/* Desktop */}
                <div className="absolute bottom-0 left-0 flex flex-col p-4 pl-0 w-5/6 h-20 mediumGrayBg text-white z-10 rounded-bl-3xl rounded-tr-3xl md:h-24 lg:h-28">
                  <div className="flex items-center">
                    <div className="w-20 h-20 -mt-9 flex-shrink-0 lg:w-24 lg:h-24">
                      <GiWaterDrop
                        className="w-full h-full blueColor"
                        style={{ filter: "drop-shadow(3px 0px 5px #0B7F58)" }}
                      />
                    </div>
                    <div className="flex justify-between w-full ml-2 -mt-4 ">
                      <h3
                        className="text-xl dm-sans darkColor md:text-2xl lg:text-3xl"
                        style={{ "--font-weight": "900" }}
                      >
                        {service.title}
                      </h3>
                      <FaPlus className="darkColor mt-1" />
                    </div>
                  </div>
                  <p className="greenColor pl-20 ml-2 poppins -mt-5 md:text-lg lg:text-xl lg:pl-24">
                    Services
                  </p>
                </div>
                <CarouselOverlay title={service.title} desc={service.desc} />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" left-2  cursor-pointer z-10 shadow" />
      <CarouselNext className=" right-2  cursor-pointer z-10 " />
    </Carousel>
  );
}
