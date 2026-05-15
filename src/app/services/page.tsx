// src/app/services/page.tsx
'use client'

import { motion } from 'framer-motion'
// FIXED: Changed 'Microscopic' to 'Microscope'
import { AlertCircle, Activity, Scissors, Stethoscope, Microscope, HeartPulse, Check } from 'lucide-react'

// Authentic Al Mazaya Services List
const detailedServices = [
  {
    icon: AlertCircle,
    title: 'Emergency Care',
    description: 'Our 24/7 emergency department is equipped to handle all medical emergencies with trained trauma specialists and state-of-the-art life support equipment.',
    features: ['24/7 ER Facility', 'Rapid Response Ambulance Fleet', 'Trauma Management', 'Industrial RAC Support'],
  },
  {
    icon: Activity,
    title: 'Diagnostic & Radiology',
    description: 'Advanced imaging and diagnostic services to accurately pinpoint and monitor your health conditions with the highest clarity.',
    features: ['Ultrasound Department', 'X-Ray Imaging', 'Advanced Screenings', 'Immediate Reporting'],
  },
  {
    icon: Scissors,
    title: 'Surgical Services',
    description: 'Comprehensive surgical capabilities featuring experienced surgeons and impeccably sanitized, modern operating environments.',
    features: ['General Surgery', 'Minor Procedures', 'Post-Op Care', 'Sterile Environment Protocol'],
  },
  {
    icon: Stethoscope,
    title: 'General & Family Medicine',
    description: 'Dedicated primary care for all ages. We focus on preventive health, routine checkups, and chronic disease management.',
    features: ['Routine Checkups', 'Vaccinations', 'Chronic Illness Management', 'Health Consultations'],
  },
  {
    // FIXED: Using the correct icon name here
    icon: Microscope,
    title: 'Laboratory Testing',
    description: 'Fully integrated, high-tech medical analysis laboratories delivering fast and highly accurate test results.',
    features: ['Blood Analysis', 'Pathology', 'Microbiology', 'Pre-employment Screenings'],
  },
  {
    icon: HeartPulse,
    title: 'Specialized Clinics',
    description: 'A wide array of specialized medical departments tailored to meet the specific healthcare needs of our community.',
    features: ['Dental & Cosmetic', 'Obstetrics & Gynecology', 'Pediatrics', 'Cardiology & Dermatology'],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* 1. INNER PAGE HERO SECTION */}
      <section className="relative overflow-hidden bg-[#174440] pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Cinematic Noise & Glow */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#D4B670]/20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4B670]"
          >
            Al Mazaya Medical Complex
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-[5rem]"
          >
            Our <span className="font-serif italic text-white/80">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/70"
          >
            Comprehensive, evidence-based healthcare solutions for you, your family, and the Kingdom's industrial workforce.
          </motion.p>
        </div>
      </section>

      {/* 2. DETAILED SERVICES GRID */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[#174440] md:text-5xl">
              Service <span className="font-serif italic text-[#174440]/80">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {detailedServices.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group rounded-[2rem] border border-[#174440]/10 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:border-[#D4B670]/50 hover:shadow-[0_20px_40px_rgba(212,182,112,0.1)] lg:p-12"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF9F6] transition-colors group-hover:bg-[#174440]">
                    <Icon className="h-6 w-6 text-[#174440] transition-colors group-hover:text-[#D4B670]" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="mb-4 text-2xl font-medium text-[#174440]">
                    {service.title}
                  </h3>
                  
                  <p className="mb-8 text-base font-light leading-relaxed text-[#174440]/70">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4B670]/20">
                          <Check className="h-3 w-3 text-[#174440]" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-[#174440]/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM PAGE CTA */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-10 lg:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#D4B670] px-8 py-20 text-center shadow-2xl lg:py-24">
          {/* Subtle overlay for the gold background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-6 text-3xl font-medium tracking-tight text-[#174440] md:text-5xl">
              Ready to experience <br />
              <span className="font-serif italic text-[#174440]/80">quality healthcare?</span>
            </h2>
            <p className="mb-10 text-lg font-light text-[#174440]/80">
              Schedule an appointment with our board-certified specialists today.
            </p>
            <button className="rounded-full bg-[#174440] px-10 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#174440] hover:shadow-xl">
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}