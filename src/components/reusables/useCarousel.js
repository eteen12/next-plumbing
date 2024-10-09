"use client";
import React, { useState } from "react";

export default function CarouselOverlay() {//something i can pass is the name

  const [bgColor, setBgColor] = useState("bg-transparent");

  const handleMouseEnter = () => {
    setBgColor("bg-blue-800 bg-opacity-90");
  };
  const handleClick = () => {
    setBgColor("bg-blue-800 bg-opacity-90 ");
  };
  const handleMouseLeave = () => {
    setBgColor("bg-transparent bg-opacity-100");
  };
  return (
    <div
      style={{ backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`absolute h-full w-full z-50 rounded-3xl cursor-pointer transition-colors duration-500 ease-in-out  ${bgColor}`}
    ></div>
  );
}
