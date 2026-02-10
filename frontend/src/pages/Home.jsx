import React from "react";
import Navbar from "../components/navbar";

import HeroSection from "../pages/HeroSection";
import CTASection from "../pages/CTASection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CTASection />
    
    </div>
  );
}
