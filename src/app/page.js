import React from "react";
import HeroMobile from "@/components/sections/heroMobile.jsx";
import HeroLarge from "@/components/sections/heroLarge";
import LocalExperts from "@/components/sections/localExperts";
import Services from "@/components/reusables/carousel";

export default function Home() {
  return (

      <div>
        <HeroMobile />
        <HeroLarge />
        <LocalExperts />
        <Services />
      </div>

  );
}
