// app/components/IntroSection.tsx
'use client'

import { Award, Users, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  {
    icon: Users,
    number: '80+',
    label: 'Professionals',
    description: 'A dedicated clinical and non-clinical workforce.',
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Emergency Care',
    description: 'Round-the-clock ER facility and ambulance fleet.',
  },
  {
    icon: ShieldCheck,
    number: 'RAC',
    label: 'Aramco Approved',
    description: 'Certified provider for Industrial Remote Area Clinics.',
  },
  {
    icon: Award,
    number: '2021',
    label: 'Established',
    description: 'Building community trust through quality healthcare.',
  },
]

export default function IntroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F6] py-16 md:py-24 lg:py-32">
      
      {/* Subtle Background Elements */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#D4B670]/10 blur-[100px] md:blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] -translate-x-1/3 translate-y-1/4 rounded-full bg-[#174440]/5 blur-[80px] md:blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        
        {/* Editorial Layout: Left Text, Right Accent */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 items-end">
          
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '40px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 md:mb-8 h-[2px] bg-[#D4B670]"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2rem] sm:text-[2.5rem] font-medium leading-[1.1] tracking-tight text-[#174440] md:text-[4rem] lg:text-[4.5rem]"
            >
              Your trusted partner in <br className="hidden md:block" />
              <span className="font-serif italic text-[#174440]/80">health and wellness.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 lg:pb-3">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-base md:text-lg font-light leading-relaxed text-[#174440]/80"
            >
              Serving the Dammam community and the Kingdom’s industrial sectors. We provide comprehensive medical services prioritizing patient care, safety, and excellence.
            </motion.p>
          </div>

        </div>

        {/* Floating Stats Grid - Responsive 2x2 on Mobile */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 pt-4 md:pt-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/40 bg-white/60 backdrop-blur-sm p-5 sm:p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_rgba(23,68,64,0.06)]"
              >
                {/* Top Right Decorative Arrow - Hidden on small mobile to save space */}
                <div className="absolute right-4 top-4 sm:right-6 sm:top-6 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 hidden sm:block">
                  <ArrowRight className="h-5 w-5 text-[#D4B670]" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 sm:mb-8 md:mb-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#FAF9F6] border border-[#174440]/5 transition-colors duration-500 group-hover:bg-[#174440] group-hover:border-transparent">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#174440] transition-colors duration-500 group-hover:text-[#D4B670]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-1 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#174440]">
                      {stat.number}
                    </div>
                    <h3 className="mb-2 sm:mb-3 text-[10px] sm:text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#D4B670]">
                      {stat.label}
                    </h3>
                    <p className="text-xs sm:text-sm font-light leading-relaxed text-[#174440]/70 line-clamp-3 sm:line-clamp-none">
                      {stat.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle bottom border highlight on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4B670] transition-all duration-500 group-hover:w-full"></div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}