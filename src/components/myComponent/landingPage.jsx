"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const LandingPage = ({ onContinue }) => {
  return (
    <main className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Full-screen background image */}
      <Image
        src="/landingimage.jpg"
        alt="Landing background"
        fill
        className="object-cover object-top -z-10" // fill both height and width, cropping if needed
        priority
      />

      {/* Animated content */}
      <div className="text-center drop-shadow-lg animate-fade-in">
        {/* Styled text instead of logo image */}
        <h1 className="text-6xl font-extrabold animate-zoom-in">
          <span className="font-[cursive] italic text-white">G</span>
          <span className="text-white">hanchi</span>
          <span className="text-red-500">'s</span>
          <div className="mt-2 text-lg font-medium text-orange-400">
            The Smart Collection
          </div>
        </h1>

        {/* Button */}
        <Link href="/" passHref>
          <Button
            onClick={onContinue}
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 animate-bounce-slow"
          >
            See Our Collections
          </Button>
        </Link>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoom-in 1.2s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default LandingPage;
