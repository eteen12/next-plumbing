import React from "react";
import HeroMobile from "@/components/sections/heroMobile.jsx";
import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/aboutUs";
import Services from "@/components/reusables/carousel";
import AboutUs2 from "@/components/sections/aboutUs2";

export default function Home() {
  return (
    <div>
      <HeroMobile />
      <Hero />
      <AboutUs />
      <Services />
     <AboutUs2 />
    </div>
  );
}
