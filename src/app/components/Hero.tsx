'use client';

import Link from 'next/link'
import React, { useState, useEffect } from "react";

// ------------------------------------------------------------------
// 1. NAMED EXPORT: Used by your Contact Page
// ------------------------------------------------------------------
type HeroProps = {
  title: string;
  subtitle: string;
  backgroundGradient?: boolean;
  ctaText?: string;
};

export function Hero({
  title,
  subtitle,
  backgroundGradient = false,
  ctaText,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${backgroundGradient ? 'bg-gradient-to-br from-slate-50 to-emerald-50' : 'bg-white'}`}>
      <div className="container-custom py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Al Mazaya Medical Complex</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            {ctaText ? (
              <button className="inline-flex items-center gap-2 rounded-full bg-[#174440] px-8 py-3 text-white font-semibold hover:bg-[#174440]/90 transition-colors">
                {ctaText}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------
// 2. DEFAULT EXPORT: The Main Home Page Hero 
// ------------------------------------------------------------------

const PILLAR_SLIDES = [
  {
    id: "01",
    title: "Advanced Medical Care",
    desc: "State-of-the-art diagnostic and clinical treatments for the community.",
    image: "/hero/hero1.jpg",
  },
  {
    id: "02",
    title: "Industrial Health",
    desc: "RAC-standard remote clinics engineered for heavy sector logistics.",
    image: "/hero/hero2.png",
  },
  {
    id: "03",
    title: "24/7 Emergency",
    desc: "Dedicated trauma facility backed by a robust, rugged ambulance fleet.",
    image: "/emergency.png",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === PILLAR_SLIDES.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[#174440] flex items-center">
      
      {/* Ambient Background Gradients for Depth */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1b524d] blur-[120px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#0d2a27] blur-[100px] opacity-80 pointer-events-none"></div>
      <div className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-[#D4B670] blur-[160px] opacity-10 pointer-events-none"></div>

      {/* Grid Overlay for Premium Technical Texture */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Cinematic Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Hero Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-24 pb-12 lg:pt-16 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Core Typography */}
        <div className="lg:col-span-7 max-w-[850px] pr-8 sm:pr-0">
          
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#D4B670]"></span>
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#D4B670] font-semibold">
              Al Mazaya Advanced Medical Complex
            </p>
          </div>

          <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.05] tracking-tight text-white md:text-[4.5rem] lg:text-[5.5rem] font-medium">
            Comprehensive <br className="hidden sm:block" />
            advanced <br className="hidden sm:block" />
            medical <span className="font-serif italic text-white/80">care</span>
          </h1>

          <p className="mt-6 max-w-[500px] text-base leading-relaxed text-white/70 md:text-lg font-light">
            Providing exceptional healthcare services for the Dammam community
            and the Kingdom's industrial sectors.
          </p>

          <div className="relative mt-10 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-[#D4B670] px-8 py-4 md:py-3.5 text-[15px] font-semibold text-[#174440] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(212,182,112,0.2)] text-center"
            >
              Contact Us
            </Link>

            <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 md:py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Column: Auto-Sliding Pillar Card (Widened for Landscape Images) */}
        <div className="lg:col-span-5 hidden lg:flex justify-end items-center relative w-full mt-10 lg:mt-0">
          
          {/* Changed to max-w-[600px] and a landscape aspect ratio (aspect-[4/3] to xl:aspect-[16/11]) to fit wide images */}
          <div className="relative w-full max-w-[600px] aspect-[4/3] xl:aspect-[16/11] rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_50px_rgba(0,0,0,0.4)] bg-[#0d2a27]">
            
            {PILLAR_SLIDES.map((slide, index) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  currentSlide === index 
                    ? "opacity-100 translate-x-0 pointer-events-auto" 
                    : "opacity-0 translate-x-8 pointer-events-none"
                }`}
              >
                {/* Background Image: Added object-center to ensure the middle is always prioritized */}
                <div className="absolute inset-0 overflow-hidden">
                   <img 
                      src={slide.image} 
                      alt={slide.title}
                      className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                        currentSlide === index ? "scale-105" : "scale-100"
                      }`}
                   />
                </div>
                
                {/* Gradient Overlay adjusted to only cover the bottom text area */}
                <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-t from-[#174440] via-[#174440]/80 to-transparent pointer-events-none"></div>

                {/* Card Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-3">
                  <div className="inline-block bg-[#174440]/80 border border-[#D4B670]/50 backdrop-blur-md px-3 py-1 rounded w-fit mb-2 shadow-sm">
                    <p className="text-[10px] font-mono text-[#D4B670] tracking-[0.2em] uppercase">
                      Pillar {slide.id}
                    </p>
                  </div>
                  <h3 className="text-2xl xl:text-3xl font-medium text-white shadow-sm">{slide.title}</h3>
                  <p className="text-sm xl:text-base text-white/90 font-light leading-relaxed max-w-[90%] drop-shadow-md">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Slider Navigation Dots / Progress */}
            <div className="absolute top-6 left-8 right-8 flex gap-2 z-20">
              {PILLAR_SLIDES.map((_, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className="h-1.5 flex-1 rounded-full bg-white/30 cursor-pointer overflow-hidden backdrop-blur-sm shadow-sm"
                >
                  <div 
                    className={`h-full bg-[#D4B670] transition-all duration-[5000ms] ease-linear ${
                      currentSlide === idx ? "w-full" : currentSlide > idx ? "w-full duration-0" : "w-0 duration-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}