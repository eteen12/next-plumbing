import React from "react";
import HeroMobile from "@/components/sections/heroMobile.jsx";
import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/aboutUs";
import Services from "@/components/sections/services";
import Cta from "@/components/sections/cta";
import Projects from "@/components/sections/projects";
import WhyUs from "@/components/reusables/whyUs";

export default function Home() {
  return (
    <div>
      <HeroMobile />
      <Hero />
      <AboutUs />
      <WhyUs />
      <Services />
      <Cta />
      <Projects />
    </div>
  );
}
