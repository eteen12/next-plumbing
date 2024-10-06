import React from "react";
import HeroMobile from "@/components/sections/heroMobile.jsx";
import HeroLarge from "@/components/sections/heroLarge";
import LocalExperts from "@/components/sections/localExperts";

export default function Home() {
  return (

      <div>
        <HeroMobile />
        <HeroLarge />
        <LocalExperts />
      </div>

  );
}
