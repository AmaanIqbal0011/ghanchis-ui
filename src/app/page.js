"use client";

import { useState } from "react";
import LandingPage from "../components/myComponent/landingPage";
import Navbar from "@/components/myComponent/navbar";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return (
      <LandingPage onContinue={() => setShowLanding(false)} />
    );
  }

  return (
    <div>
      <Navbar />
      <p></p>
    </div>
  );
}
