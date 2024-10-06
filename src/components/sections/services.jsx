import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Services() {
  return (
    <div className="min-h-screen w-full px-20">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-10 bg-blue-500 text-white text-center">
              <h2 className="text-2xl font-bold">Service 1</h2>
              <p className="mt-2">Description of Service 1</p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-10 bg-green-500 text-white text-center">
              <h2 className="text-2xl font-bold">Service 2</h2>
              <p className="mt-2">Description of Service 2</p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-10 bg-red-500 text-white text-center">
              <h2 className="text-2xl font-bold">Service 3</h2>
              <p className="mt-2">Description of Service 3</p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-10 bg-red-500 text-white text-center">
              <h2 className="text-2xl font-bold">Service 3</h2>
              <p className="mt-2">Description of Service 3</p>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-10 bg-red-500 text-white text-center">
              <h2 className="text-2xl font-bold">Service 3</h2>
              <p className="mt-2">Description of Service 3</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}