import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import Residential from "/public/services/residential.jpg";
import Commercial from "/public/services/commercial.jpg";
import Emergency from "/public/services/emergency.jpg";

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
            <div className="w-full h-full mx-auto">
              <div className="relative w-[90vw] max-w-[350px]  h-[60vh] mx-auto sm:max-w-[450px] md:max-w-[600px] lg:min-w-[800px] lg:min-h-[600px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="relative object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 p-4 mediumGrayBg text-white z-20 rounded-b-3xl ">
                  <h3 className="text-xl dm-sans darkColor">{service.title}</h3>
                  <p className="poppins darkColor text-base mt-5 sm:text-lg whitespace-normal ">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
            <h3>{service.title}</h3>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" left-2  cursor-pointer z-10 shadow" />
      <CarouselNext className=" right-2  cursor-pointer z-10 " />
    </Carousel>
  );
}
