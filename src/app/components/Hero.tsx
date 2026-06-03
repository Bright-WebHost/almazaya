'use client'

import { useState, useEffect } from 'react'

type HeroProps = {
  title: string
  subtitle: string
  backgroundGradient?: boolean
  ctaText?: string
}

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
              <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">
                {ctaText}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

const slides = [
  {
    image: "/hero/hero1.jpg",
    label: "ADVANCED MEDICAL CARE"
  },
  {
    image: "/hero/hero2.png",
    label: "INDUSTRIAL HEALTH SERVICES"
  },
  {
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2000",
    label: "24/7 EMERGENCY SUPPORT"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Changed to 100dvh to fix mobile browser bottom-bar issues
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex items-center">
      
      {/* Background Image Slider/Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="Al Mazaya Medical Complex"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Left-Side Focused Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
      </div>

      {/* Premium Cinematic Noise Texture */}
      <div 
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Hero Content */}
      {/* Added pt-24 for mobile to account for the navbar, and pr-8 to avoid overlap with side indicators */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-24 pb-12 lg:pt-16 lg:px-10">
        
        <div className="max-w-[850px] pr-8 sm:pr-0">
          
          {/* Main Heading - Responsive text sizes and responsive line breaks */}
          <h1 className="text-[2.75rem] sm:text-[3.5rem] leading-[1.05] tracking-tight text-white md:text-[5rem] lg:text-[6rem] font-medium">
            Comprehensive <br className="hidden sm:block" />
            advanced <br className="hidden sm:block" />
            medical <span className="font-serif italic text-white/95">care</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 md:mt-6 max-w-[500px] text-base leading-relaxed text-white/90 md:text-lg lg:text-xl font-light">
            Providing exceptional healthcare services for the Dammam community and the Kingdom's industrial sectors.
          </p>

          {/* CTA Buttons - Stacked on mobile, side-by-side on larger screens */}
          <div className="relative mt-8 md:mt-10 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            
            <button className="w-full sm:w-auto rounded-full bg-[#D4B670] px-8 py-4 md:py-3.5 text-[15px] font-semibold text-[#174440] transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Book Appointment
            </button>

            <button className="w-full sm:w-auto rounded-full border border-[#D4B670] bg-transparent px-8 py-4 md:py-3.5 text-[15px] font-semibold text-[#D4B670] transition-all duration-300 hover:bg-[#D4B670]/10">
              Our Services
            </button>

            {/* Decorative SVG Graphic */}
            <div className="absolute -bottom-10 -left-6 pointer-events-none opacity-70 hidden md:block z-[-1]">
              <svg width="280" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 60 C 60 60, 100 20, 160 30 S 220 50, 280 40" stroke="#D4B670" strokeWidth="1" strokeDasharray="3 4" fill="transparent" />
                <circle cx="160" cy="30" r="2.5" fill="#D4B670" />
                <circle cx="280" cy="40" r="2.5" fill="#D4B670" />
                <circle cx="80" cy="45" r="2" fill="#174440" />
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* Ultra-Subtle Side Indicators */}
      {/* Adjusted right positioning for mobile */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-20">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            onClick={() => setCurrentSlide(index)}
            className="flex items-center justify-end gap-4 group cursor-pointer p-2 md:p-0"
          >
            {/* The fading text - hidden on mobile entirely, visible on desktop */}
            <span 
              className={`text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? 'text-white/70 opacity-100 translate-x-0 hidden md:block' 
                  : 'text-white/0 opacity-0 translate-x-4 hidden md:block'
              }`}
            >
              {slide.label}
            </span>
            
            {/* The growing subtle line */}
            <div 
              className={`w-[2px] transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? 'h-8 md:h-10 bg-[#D4B670]' 
                  : 'h-2 md:h-3 bg-white/20 group-hover:bg-white/40 group-hover:h-4 md:group-hover:h-5'
              }`}
            ></div>
          </div>
        ))}
      </div>

    </section>
  )
}