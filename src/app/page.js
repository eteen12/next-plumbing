import React from "react";
import HeroMobile from "@/components/sections/heroMobile.jsx";
import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/aboutUs";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div>
      <HeroMobile />
      <Hero />
      <AboutUs />
      <Services />
    
    </div>
  );
}
