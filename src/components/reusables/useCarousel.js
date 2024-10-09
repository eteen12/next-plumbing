"use client";
import React, { useState } from "react";

export default function CarouselOverlay({ title, desc, icon }) {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };
  const handleClick = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`absolute h-full w-full z-50 rounded-3xl cursor-pointer transition-colors duration-500 ease-in-out
      ${
        isActive ? "bg-blue-800 bg-opacity-90" : "bg-transparent bg-opacity-100"
      }`}
    >
      {isActive && (
        <div className="p-10">
          <h1>{title}</h1>
          <h2>{desc}</h2>
          <p>{icon}</p>
        </div>
      )}
    </div>
  );
}
