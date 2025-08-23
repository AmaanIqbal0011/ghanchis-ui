"use client";

import { useState } from "react";
import LandingPage from "../components/myComponent/landingPage";
import Navbar from "@/components/myComponent/navbar";
import Marquee from "@/components/myComponent/marquee"
import HeroSection from "@/components/myComponent/heroSection";


export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return (
      <>
     
      <LandingPage onContinue={() => setShowLanding(false)} />
        </>
    );
  }

  return (
    <div>
      <Marquee />
      <Navbar />
      <HeroSection />
     

    </div>
  );
}
