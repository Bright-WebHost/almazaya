"use client";

import React, { useState } from "react";

interface FleetAsset {
  id: string;
  tag: string;
  title: string;
  metric: string;
  description: string;
  imgUrl: string;
}

const FLEET_ASSETS: FleetAsset[] = [
  {
    id: "01",
    tag: "HIGH-CAPACITY AMBULANCES",
    title: "Toyota Hardtop Type H1 Fleet",
    metric: "10 Active Units",
    description: "Fully custom configurations engineered precisely to meet strict JHAH MMSR field specifications, prepared for raw industrial terrain deployments.",
    imgUrl: "https://images.unsplash.com/photo-1587559070757-f72a388edbba?q=80&w=1200", 
  },
  {
    id: "02",
    tag: "REMOTE SITE READY",
    title: "Heavy Terrain 4x4 Support Units",
    metric: "8 Tactical Vehicles",
    description: "Rapid response medical vehicles deployed directly across Kingdom sectors to maintain uninterrupted remote area protection.",
    imgUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200",
  },
  {
    id: "03",
    tag: "ADVANCED TRAUMA GEAR",
    title: "MMSR Emergency Trauma Kits",
    metric: "100% Asset Readiness",
    description: "Outfitted with high-spec Nitronox trauma panels, specialized Robert Shaw rescue gear, and disaster management kits to handle acute events instantly.",
    imgUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200",
  },
];

export default function FleetShowcase() {
  const [activeTab, setActiveTab] = useState<string>("01");

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Typography Content Toggles */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-3">
              Tactical Infrastructure // Field Readiness
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Engineered for <br />
              <span className="font-semibold text-neutral-100">Disaster Response</span>
            </h2>
            <p className="text-neutral-400 font-light max-w-sm text-sm leading-relaxed mb-8">
              Substantial deployment capital directed toward advanced fleet configurations compliant with industrial standards.
            </p>
          </div>

          {/* Nav Interactive Rows */}
          <div className="space-y-4 w-full">
            {FLEET_ASSETS.map((asset) => (
              <div
                key={asset.id}
                onMouseEnter={() => setActiveTab(asset.id)}
                onClick={() => setActiveTab(asset.id)}
                className={`group border-l-2 py-4 pl-6 cursor-pointer transition-all duration-300 ${
                  activeTab === asset.id
                    ? "border-white bg-neutral-900/40"
                    : "border-neutral-800 hover:border-neutral-500 bg-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-wider text-neutral-500">
                    {asset.tag}
                  </span>
                  <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-300 transition-colors">
                    [{asset.metric}]
                  </span>
                </div>
                <h3 className="text-lg font-medium mt-1 tracking-tight">
                  {asset.title}
                </h3>
                
                {/* Dynamic Height Drawer Smoothness */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    activeTab === asset.id
                      ? "grid-rows-[1fr] opacity-100 mt-2"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs font-light text-neutral-400 leading-relaxed max-w-xs">
                      {asset.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Fixed/Pinned Premium Img Visual Sandbox */}
        <div className="lg:col-span-7 w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden relative border border-neutral-900 bg-neutral-950 shadow-2xl">
          {FLEET_ASSETS.map((asset) => (
            <div
              key={asset.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                activeTab === asset.id
                  ? "opacity-40 scale-100 pointer-events-auto"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              {/* Img background layout */}
              <img
                src={asset.imgUrl}
                alt={asset.title}
                className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            </div>
          ))}
          
          {/* Subtle Industrial Overlay Graphic detailing active coordinates */}
          <div className="absolute bottom-6 right-6 font-mono text-[10px] text-neutral-500 tracking-widest bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded border border-neutral-800 pointer-events-none">
            SYS_STATUS: ACTIVE // DAMMAM_HQ
          </div>
        </div>

      </div>
    </section>
  );
}