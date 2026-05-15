// src/app/components/ServicesSection.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'general',
    title: 'General &\nFamily Medicine',
    description: 'Comprehensive routine health consultations and expert medical care tailored for your entire family.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2000',
    dotColor: 'bg-[#5eead4]',
  },
  {
    id: 'maternity',
    title: 'Obstetrics &\nGynecology',
    description: 'Dedicated women’s health services, providing proactive care from routine checkups to full maternity support.',
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2000',
    dotColor: 'bg-[#a78bfa]',
  },
  {
    id: 'pediatrics',
    title: 'Pediatric\nClinics',
    description: 'Helping parents navigate their child’s development with expert pediatric care and compassionate support.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2000',
    dotColor: 'bg-[#fbbf24]',
  },
  {
    id: 'dental',
    title: 'Dental &\nCosmetic',
    description: 'Advanced dental treatments and aesthetic procedures utilizing cutting-edge technology for your best smile.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000',
    dotColor: 'bg-[#38bdf8]',
  },
]

export default function ServicesSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-[#FAF9F6] py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        
        {/* Header Area */}
        <div className="mb-10 max-w-2xl lg:mb-12">
          <h2 className="text-[2rem] sm:text-[2.5rem] font-medium leading-[1.1] tracking-tight text-[#174440] md:text-[3.5rem]">
            Evidence-based <br />
            <span className="font-serif italic text-[#174440]/80">medical services</span>
          </h2>
        </div>

        {/* Expanding Cards Container - Increased mobile height to 700px so items have room to breathe */}
        <div className="flex h-[700px] w-full flex-col gap-3 sm:h-[600px] sm:gap-4 lg:h-[550px] lg:flex-row">
          {services.map((service, index) => {
            const isActive = active === index

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                animate={{ 
                  flex: isActive ? 5 : 1.2 
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                // Added min-h-[90px] so the collapsed cards never crush the text on mobile
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-[#174440] min-h-[90px] lg:min-h-0"
              >
                {/* Background Image */}
                <motion.img
                  src={service.image}
                  alt={service.title}
                  animate={{ 
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 0.8 : 0.4
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Gradient Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-80'
                  }`}
                />

                {/* Top Colored Dot - Changed to Absolute Positioning to save vertical space */}
                <div className={`absolute left-5 top-5 lg:left-8 lg:top-8 h-2.5 w-2.5 lg:h-3 lg:w-3 rounded-full ${service.dotColor} shadow-[0_0_10px_rgba(255,255,255,0.3)] z-20`} />

                {/* Bottom Content Area */}
                <div className="relative z-10 flex h-full flex-col justify-end p-5 lg:p-8">
                  
                  {/* Title */}
                  <h3 className="whitespace-pre-line text-lg sm:text-xl font-medium text-white lg:text-3xl">
                    {service.title}
                  </h3>

                  {/* Hidden Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? 'auto' : 0, 
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 12 : 0
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="mb-5 max-w-[400px] text-xs sm:text-sm leading-relaxed text-white/80 lg:text-base">
                      {service.description}
                    </p>
                    
                    <button className="flex items-center gap-2 rounded-md bg-[#D4B670] px-5 py-2.5 lg:px-6 lg:py-3 text-xs sm:text-sm font-semibold text-[#174440] transition-colors hover:bg-white">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </motion.div>
                  
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Services CTA */}
        <div className="mt-10 lg:mt-12 flex justify-center">
          <button className="rounded-full border border-[#174440]/20 bg-transparent px-8 py-3 text-sm font-medium text-[#174440] transition-all hover:bg-[#174440]/5 hover:border-[#174440]/40">
            View full department directory
          </button>
        </div>

      </div>
    </section>
  )
}