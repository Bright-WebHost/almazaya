// src/app/components/WhyChooseSection.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, UserCheck, Building2, HeartPulse } from 'lucide-react'

const features = [
  {
    id: '01',
    title: '24/7 Emergency',
    shortTitle: 'Care',
    description: 'Always available when you need us. Our rapid-response ambulance fleet and dedicated ER facility are operational round-the-clock.',
    icon: Clock,
    image: '/emergency.png',
  },
  {
    id: '02',
    title: 'Expert',
    shortTitle: 'Doctors',
    description: 'A highly qualified and experienced team of specialists dedicated to delivering precise diagnoses and your complete wellbeing.',
    icon: UserCheck,
    image: '/doctor.png',
  },
  {
    id: '03',
    title: 'Modern',
    shortTitle: 'Facility',
    description: 'Outfitted with the latest medical equipment and cutting-edge healthcare technology to ensure world-class treatment.',
    icon: Building2,
    image: '/modern.png',
  },
  {
    id: '04',
    title: 'Patient',
    shortTitle: 'Focused',
    description: 'Your health, comfort, and safety are our absolute priorities at every single step of your care journey.',
    icon: HeartPulse,
    image: '/petient.png',
  },
]

export default function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    // Aggressively reduced top padding (pt-12 -> pt-4 and lg:pt-20 -> lg:pt-8)
    <section className="relative w-full bg-[#FAF9F6] pt-4 pb-16 lg:pt-8 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl font-medium tracking-tight text-[#174440] sm:text-3xl md:text-5xl lg:text-[4rem]">
            Why Choose <span className="font-serif italic text-[#174440]/80">Al Mazaya?</span>
          </h2>
        </div>

        <div className="flex flex-row gap-4 sm:gap-8 lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column - Sticky Media Container */}
          <div className="w-[40%] lg:w-auto lg:col-span-5 relative z-10">
            <div className="sticky top-20 sm:top-24 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-xl sm:rounded-[2rem] bg-[#174440] shadow-2xl">
              
              {features.map((feature, index) => {
                const isActive = activeIndex === index
                const ActiveIcon = feature.icon

                return (
                  <motion.div
                    key={feature.id}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 1.08,
                      zIndex: isActive ? 10 : 0
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="absolute inset-0 h-full w-full will-change-[opacity,transform]"
                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      loading="eager" 
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#174440]/95 via-[#174440]/30 to-transparent" />

                    <motion.div 
                      initial={false}
                      animate={{ 
                        y: isActive ? 0 : 20, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.4, delay: isActive ? 0.1 : 0, ease: 'easeOut' }}
                      className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/10 bg-white/10 p-2 sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:p-4 md:bottom-6 md:left-6 md:right-6 md:p-6 lg:bottom-8 lg:left-8 lg:right-8 backdrop-blur-md"
                    >
                      <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#D4B670] sm:mb-2 sm:h-8 sm:w-8 md:mb-3 md:h-10 md:w-10">
                        <ActiveIcon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#174440]" strokeWidth={1.5} />
                      </div>
                      <p className="hidden text-[10px] font-light leading-relaxed text-white sm:block sm:text-xs md:text-sm lg:text-base">
                        {feature.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )
              })}

            </div>
          </div>

          {/* Right Column - Interactive List */}
          <div className="w-[60%] lg:w-auto lg:col-span-7 relative z-0 flex flex-col justify-center">
            
            <div className="flex w-full flex-col border-t border-[#174440]/10 mb-10 lg:mb-16">
              {features.map((feature, index) => {
                const isActive = activeIndex === index

                return (
                  <motion.div
                    key={feature.id}
                    onViewportEnter={() => setActiveIndex(index)}
                    viewport={{ margin: "-30% 0px -30% 0px" }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    className="group flex w-full cursor-pointer flex-col items-start gap-1 sm:gap-2 lg:flex-row lg:items-center lg:gap-8 border-b border-[#174440]/10 py-4 sm:py-6 lg:py-8"
                  >
                    
                    <span className={`text-[10px] sm:text-xs font-bold transition-colors duration-300 md:text-base ${
                      isActive ? 'text-[#D4B670]' : 'text-[#174440]/40'
                    }`}>
                      {feature.id}
                    </span>

                    <h3 className="flex flex-col text-lg sm:text-2xl md:text-3xl lg:text-[4rem] font-medium leading-[1.1] sm:leading-[1.05] lg:leading-[0.9] tracking-tight">
                      
                      <span className={`transition-all duration-300 ${
                        isActive 
                          ? 'text-[#174440]' 
                          : 'text-transparent [-webkit-text-stroke:1px_rgba(23,68,64,0.3)] group-hover:[-webkit-text-stroke:1px_rgba(212,182,112,0.8)]'
                      }`}>
                        {feature.title}
                      </span>
                      
                      <span className={`font-serif italic transition-all duration-300 ${
                        isActive 
                          ? 'text-[#174440]/80' 
                          : 'text-transparent [-webkit-text-stroke:1px_rgba(23,68,64,0.3)] group-hover:[-webkit-text-stroke:1px_rgba(212,182,112,0.8)]'
                      }`}>
                        {feature.shortTitle}
                      </span>

                    </h3>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}