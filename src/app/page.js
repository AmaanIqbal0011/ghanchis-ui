// "use client";

// import { useState } from "react";
// import LandingPage from "../components/myComponent/landingPage";
// import Navbar from "@/components/myComponent/navbar";
// import Marquee from "@/components/myComponent/marquee"
// import HeroSection from "@/components/myComponent/heroSection";
// import Footer from "@/components/myComponent/footer";
// import ScrollReveal from "@/components/myComponent/scroll-reveal";


// export default function Home() {
//   const [showLanding, setShowLanding] = useState(true);

//   if (showLanding) {
//     return (
//       <>
     
//       <LandingPage onContinue={() => setShowLanding(false)} />
//         </>
//     );
//   }

//   return (
//     <main className="h-screen w-full overflow-y-scroll ">
//       <section className="snap-start">
//         <Marquee />
//         <Navbar />
//         <HeroSection />
//       </section>

//       <ScrollReveal className="bg-neutral-900 text-white">
//         <h2 className="text-4xl font-bold">Our Collection</h2>
//       </ScrollReveal>

//       <ScrollReveal className="bg-white text-black">
       
//         <h2 className="text-4xl font-bold">About Us</h2>
//       </ScrollReveal>

//       <ScrollReveal className="bg-gray-800 text-white">
//         <Footer />
//       </ScrollReveal>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import LandingPage from "../components/myComponent/landingPage";
import Navbar from "@/components/myComponent/navbar";
import Marquee from "@/components/myComponent/marquee";
import HeroSection from "@/components/myComponent/heroSection";
import Footer from "@/components/myComponent/footer";
import ScrollReveal from "@/components/myComponent/scroll-reveal";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LandingPage onContinue={() => setShowLanding(false)} />;
  }

  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start">
        <Marquee />
        <Navbar />
        <HeroSection />
      </section>

      <ScrollReveal className="bg-neutral-900 text-white">
        <h2 className="text-4xl font-bold">Our Collection</h2>
      </ScrollReveal>

      <ScrollReveal className="bg-white text-black">
        <h2 className="text-4xl font-bold">About Us</h2>
      </ScrollReveal>

      <ScrollReveal className="bg-gray-800 text-white">
        <Footer />
      </ScrollReveal>
    </main>
  );
}

