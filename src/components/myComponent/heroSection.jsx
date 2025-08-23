"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/landingimage.jpg", 
  "/hero.jpg",
  "/hero1.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[95vh] overflow-hidden">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-20 scale-100" : "opacity-0 z-10 scale-105"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
className="object-cover object-top"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 z-25"></div>
      
      {/* Content */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4">
        <div className="max-w-4xl mx-auto transform transition-all duration-700 ease-in-out">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Welcome to <span className="text-amber-400">Ghanchis.pk</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 max-w-2xl mx-auto">
            Discover the finest culinary experiences crafted with passion and tradition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Menu
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
              Book a Table
            </button>
          </div>
        </div>
      </div> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-amber-500 scale-125" 
                : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm hidden sm:block"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full z-30 transition-all duration-300 backdrop-blur-sm hidden sm:block"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Mobile swipe indicators */}
      <div className="sm:hidden absolute bottom-20 left-0 right-0 flex justify-between items-center px-6 z-30">
        <div className="bg-black/30 rounded-full p-2 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="bg-black/30 rounded-full p-2 backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;