"use client";

import React from "react";

// Monotone premium styling logos extracted from your corporate profile
const ARAMCO_CLIENTS = [
  { name: "Nasser S. Al-Hajri Corp", short: "NSH" },
  { name: "Saipem", short: "SAIPEM" },
  { name: "Sinopec", short: "SINOPEC" },
  { name: "Doosan", short: "DOOSAN" },
  { name: "McDermott", short: "MCDERMOTT" },
  { name: "Sino Hydro", short: "SINOHYDRO" },
];

const NON_ARAMCO_CLIENTS = [
  { name: "Al Sharif Group", short: "ASG" },
  { name: "KEC Ltd", short: "KEC" },
  { name: "Expertise Contracting", short: "EXPERTISE" },
  { name: "Abaja Contracting", short: "ABAJA" },
];

export default function IndustrialMarquee() {
  const allClients = [...ARAMCO_CLIENTS, ...NON_ARAMCO_CLIENTS];
  
  // Duplicate the array to create a seamless infinite illusion loop
  const doubleClients = [...allClients, ...allClients, ...allClients];

  return (
    <section className="relative w-full bg-black py-12 overflow-hidden border-y border-neutral-900">
      {/* Decorative Gradient Overlays for a high-end fade out on edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
          Trusted Field Partners // Heavy Industrial Sectors
        </p>
      </div>

      {/* Marquee Track Container */}
      <div className="flex w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-4">
          {doubleClients.map((client, idx) => (
            <div
              key={`${client.short}-${idx}`}
              className="inline-flex flex-col items-center justify-center mx-12 group cursor-default"
            >
              {/* Premium Minimalistic Logo Placeholder with a slick hover lift */}
              <span className="text-xl md:text-2xl font-black tracking-tighter text-neutral-600 transition-colors duration-300 group-hover:text-white select-none">
                {client.short}
              </span>
              <span className="text-[10px] font-medium tracking-wide text-neutral-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 max-w-[140px] text-center truncate">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom marquee logic directly via style injection or your global CSS file */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}