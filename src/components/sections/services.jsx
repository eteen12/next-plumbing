import React from "react";
import CarouselComponent from "../reusables/carousel.jsx";

export default function Services() {
  return (
    <div className="flex flex-col w-full min-h-[100vh]">
      <h1 className="text-6xl">Services</h1>
      <div className="w-full h-full">
        <CarouselComponent />
      </div>
    </div>
  );
}
