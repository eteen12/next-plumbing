import React from "react";
import HeroMobile from "@/components/sections/heroMobile.jsx";
import Hero from "@/components/sections/hero";
import LocalExperts from "@/components/sections/localExperts";
import Services from "@/components/reusables/carousel";

export default function Home() {
  return (

      <div>
        <HeroMobile />
        <Hero />
        <LocalExperts />
        <Services />
      </div>

  );
}
