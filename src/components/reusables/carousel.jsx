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

export default function Services() {
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
            <Image
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full rounded-3xl"
              loading="lazy"
              fill
            />
            <h3>{service.title}</h3>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
