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
            <div className="w-full h-full px-10">
              <div className="relative w-[50%] h-[300px] mx-auto">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
            <h3>{service.title}</h3>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer z-10"/>
      <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer z-10"/>
    </Carousel>
  );
}
