// src/app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Award, Target, Eye, Heart, ShieldCheck, Star, Users, CheckCircle2 } from 'lucide-react'

// Real data from Al Mazaya PDF Profile
const coreValues = [
  { title: 'Giving', description: 'Selfless dedication to patient care and community health.' },
  { title: 'Positivity', description: 'Fostering a healing environment through optimistic and compassionate care.' },
  { title: 'Quality', description: 'Maintaining rigorous medical standards in every procedure and diagnosis.' },
  { title: 'Dedication', description: 'Unwavering commitment to our profession and our patients.' },
  { title: 'Excellence', description: 'Striving for world-class outcomes in both urban and industrial healthcare.' },
]

const stats = [
  { value: '2021', label: 'Year Established' },
  { value: '80+', label: 'Healthcare Professionals' },
  { value: '24/7', label: 'Emergency Support' },
  { value: '100%', label: 'RAC Compliant' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* 1. INNER PAGE HERO SECTION */}
      <section className="relative overflow-hidden bg-[#174440] pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#D4B670]/20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4B670]"
          >
            Our Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-[5rem]"
          >
            About <span className="font-serif italic text-white/80">Al Mazaya</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. THE AL MAZAYA STORY */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            
            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-medium tracking-tight text-[#174440] md:text-5xl">
                A legacy of <span className="font-serif italic text-[#174440]/80">care.</span>
              </h2>
              <p className="mb-6 text-lg font-light leading-relaxed text-[#174440]/70">
                Established in 2021, Al Mazaya Advanced Medical Complex was founded with a singular mission: to provide world-class healthcare services to the Dammam community and the Kingdom's industrial sectors.
              </p>
              <p className="text-lg font-light leading-relaxed text-[#174440]/70">
                What began as a localized medical center has rapidly evolved into a trusted healthcare institution. Today, we are proud to be an approved Remote Area Clinic (RAC) provider for Saudi Aramco, extending our expert emergency and outpatient services far beyond urban borders.
              </p>
            </motion.div>

            {/* Image / Graphic Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] w-full overflow-hidden rounded-[2rem] lg:h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000" 
                alt="Modern Medical Facility" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#174440]/20 mix-blend-multiply"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (Split Cards) */}
      <section className="bg-white py-20 lg:py-32 border-y border-[#174440]/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] bg-[#FAF9F6] p-10 lg:p-16 border border-[#174440]/5"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#174440]">
                <Target className="h-6 w-6 text-[#D4B670]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-3xl font-medium text-[#174440]">Our Mission</h3>
              <p className="text-lg font-light leading-relaxed text-[#174440]/70">
                To provide comprehensive healthcare services that align with local and international accreditation standards, ensuring patients stay healthy, safe, and comfortable while undergoing treatment.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2rem] bg-[#174440] p-10 lg:p-16 text-white"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4B670]">
                <Eye className="h-6 w-6 text-[#174440]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-3xl font-medium">Our Vision</h3>
              <p className="text-lg font-light leading-relaxed text-white/80">
                To maintain a first-class position among the elite medical centers in the Kingdom, actively participating in achieving Saudi Vision 2030 by extending our services from urban clinics to robust Industrial Services.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. STATS BAR */}
      <section className="py-16 bg-[#174440] text-center lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mb-2 text-4xl font-medium text-[#D4B670] lg:text-6xl">{stat.value}</div>
                <p className="text-sm font-light uppercase tracking-wider text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-[#174440] md:text-5xl">
              Our Core <span className="font-serif italic text-[#174440]/80">Values</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#174440]/5"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#D4B670]" />
                <div>
                  <h3 className="mb-2 text-xl font-medium text-[#174440]">{value.title}</h3>
                  <p className="text-sm font-light text-[#174440]/70 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACCREDITATIONS (Saudi Aramco RAC Focus) */}
      <section className="bg-white py-20 border-t border-[#174440]/5 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <h2 className="mb-12 text-2xl font-medium tracking-tight text-[#174440] md:text-4xl">
            Trusted & Accredited
          </h2>
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
            <div className="flex flex-col items-center max-w-xs">
              <ShieldCheck className="mb-4 h-16 w-16 text-[#D4B670]" strokeWidth={1} />
              <h3 className="mb-2 text-lg font-medium text-[#174440]">Saudi Aramco RAC</h3>
              <p className="text-sm font-light text-[#174440]/70">Approved Service Provider for Industrial Remote Area Clinics (Code: 10110003)</p>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <Award className="mb-4 h-16 w-16 text-[#D4B670]" strokeWidth={1} />
              <h3 className="mb-2 text-lg font-medium text-[#174440]">Ministry of Health</h3>
              <p className="text-sm font-light text-[#174440]/70">Fully licensed and compliant with all Saudi Arabian health regulations.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}