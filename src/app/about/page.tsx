'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, ChevronRight, Shield, Award, Users } from 'lucide-react'

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-[#f5f0e8] overflow-hidden pt-20 lg:pt-0">
      {/* Side images — Hidden on mobile, visible on lg and up to maintain clean layout */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[20%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[8%] left-5 right-5 h-[42%] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/about1.png"
            alt="Al Mazaya medical team"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[54%] left-5 right-5 h-[36%] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/about2.png"
            alt="Clinical staff"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[20%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[5%] left-5 right-5 h-[36%] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/about3.png"
            alt="Emergency care"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-[45%] left-5 right-5 h-[45%] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/about4.png"
            alt="Patient care"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Center content - Adapted for mobile spacing */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[auto] lg:min-h-screen py-10 lg:py-24 px-5 text-center lg:mx-[26%]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] lg:text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-3 lg:mb-5"
        >
          About Al Mazaya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.1] text-[#1a3a36] mb-4 lg:mb-5 tracking-tight"
        >
          Your Trusted Partner
          <br />
          <em className="text-[#2a6b5e]">in Health & Wellness</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm lg:text-lg text-[#1a3a36]/70 leading-relaxed mb-8 max-w-sm font-light"
        >
          A private medical complex in urban Dammam serving all patient populations — from families to Saudi Arabia's industrial workforce — since 2021.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-[280px] sm:max-w-none"
        >
          <a
            href="tel:+966505387020"
            className="px-6 py-3.5 lg:px-7 lg:py-3.5 bg-[#2a6b5e] text-white rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a5040] transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Book Appointment
          </a>
          <a
            href="#story"
            className="px-6 py-3.5 lg:px-7 lg:py-3.5 border border-[#1a3a36]/30 text-[#1a3a36] rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a3a36]/5 transition-colors duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            Our Story <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Mobile specific image grid - hidden on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="lg:hidden grid grid-cols-2 gap-3 mt-10 w-full max-w-[320px]"
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md">
            <img src="/about1.png" alt="Al Mazaya" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md mt-6">
            <img src="/about4.png" alt="Al Mazaya" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-5 gap-2 mt-10 lg:mt-10 pt-6 lg:pt-8 border-t border-[#1a3a36]/15 w-full max-w-[340px] lg:max-w-none mx-auto"
        >
          {[
            { number: '~80', label: 'Employees' },
            { number: '25+', label: 'Nurses' },
            { number: '12', label: 'Drivers' },
            { number: '18', label: 'Ambulances' },
            { number: '2021', label: 'Founded' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-sm lg:text-2xl font-bold text-[#c9a84c] mb-1">{stat.number}</div>
              <div className="text-[7px] lg:text-[10px] text-[#1a3a36]/55 font-medium tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── STORY / HISTORY ──────────────────────────────────────────────────────────
function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="story" ref={ref} className="py-8 lg:py-16 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 mb-8 lg:mb-12 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-serif text-[clamp(2rem,4vw,4.5rem)] leading-tight text-[#1a3a36] tracking-tight"
          >
            Our Journey
            <br />
            <em className="text-[#2a6b5e]">from clinic to kingdom</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xs lg:text-lg text-[#1a3a36]/70 font-light leading-relaxed"
          >
            Since founding Al Mazaya, industrial medical services have been offered and commissioned to contractor clients in construction and civil works — growing to a kingdom-wide presence serving Saudi Aramco and major industrial contractors.
          </motion.p>
        </div>

        {/* 4-milestone timeline forced into 1 row on mobile */}
        <div className="grid grid-cols-4 gap-0 border border-[#1a3a36]/15 rounded-xl lg:rounded-2xl overflow-hidden">
          {[
            {
              year: '2020',
              title: 'First Industrial Clinic',
              desc: 'Al Mazaya launched its first industrial clinic project, commissioning on-site healthcare to contractor clients in construction and civil works across the Kingdom.',
              img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=85',
            },
            {
              year: '2021',
              title: 'Medical Complex Founded',
              desc: 'Al Mazaya Advanced Medical Complex established in urban Dammam. Clinics: GP, Pediatrics, Dental, Dermatology, OB Gyne, and Occupational Medicine — serving all patient populations.',
              img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=85',
            },
            {
              year: '2024',
              title: 'RAC Certification',
              desc: 'Formally approved as a Saudi Aramco RAC provider under Johns Hopkins Aramco Operational Medicine. RAC org chart approved January 2024, valid through January 2027.',
              img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=85',
            },
            {
              year: '2024',
              title: 'Fleet & Team Expansion',
              desc: 'Additional nurses hired under Industrial Services. Fleet grew to 18 ambulances — 10 H1 and 8 four-wheel-drive units — actively deployed across Saudi Arabia.',
              img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=85',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className={`relative group flex flex-col ${i < 3 ? 'border-r border-[#1a3a36]/15' : ''}`}
            >
              <div className="relative h-20 lg:h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#1a3a36]/40" />
                <span className="absolute top-1 left-2 lg:top-4 lg:left-5 text-[6px] lg:text-xs font-bold text-white/80 tracking-widest uppercase">{item.year}</span>
              </div>
              <div className="p-2 lg:p-7 bg-[#f5f0e8] flex-1">
                <h3 className="text-[8px] lg:text-lg font-bold text-[#1a3a36] mb-1 lg:mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-[#1a3a36]/65 font-light leading-tight lg:leading-relaxed text-[6px] lg:text-sm line-clamp-3 lg:line-clamp-none">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MISSION & VISION ─────────────────────────────────────────────────────────
function MissionVisionSection() {
  return (
    <section className="relative min-h-[40vh] lg:min-h-[70vh] flex items-center overflow-hidden py-12 lg:py-0">
      <img
        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1800&q=85"
        alt="Al Mazaya team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a3a36]/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[9px] lg:text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-2 lg:mb-5">Our Mission</p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,3.5rem)] text-white leading-tight mb-3 lg:mb-5 tracking-tight">
              Comprehensive care that
              <em className="block text-[#c9a84c]">never compromises.</em>
            </h2>
            <p className="text-white/75 text-xs lg:text-lg font-light leading-relaxed mb-4 lg:mb-5">
              Providing comprehensive healthcare services that align with local and international accreditation standards — keeping patients healthy and comfortable throughout their entire treatment.
            </p>
            <ul className="space-y-2 lg:space-y-2">
              {[
                'Keep taking care of patients',
                'Provide the best service for patients',
                'Ensure patients stay healthy and comfortable',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-2 lg:gap-2 text-white/65 text-[10px] lg:text-sm font-light">
                  <span className="mt-1 w-1.5 h-1.5 lg:mt-1.5 lg:w-1.5 lg:h-1.5 rounded-full bg-[#c9a84c] flex-none" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-14"
          >
            <p className="text-[9px] lg:text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-2 lg:mb-5">Our Vision</p>
            <h3 className="font-serif text-[clamp(1.5rem,2vw,3rem)] text-white leading-tight mb-1 lg:mb-2">
              Be ethically
            </h3>
            <h3 className="font-serif text-[clamp(1.8rem,2.2vw,4rem)] text-[#c9a84c] leading-tight mb-3 lg:mb-5 italic">
              "The best among the rest."
            </h3>
            <p className="text-white/75 text-xs lg:text-lg font-light leading-relaxed mb-4 lg:mb-5">
              Our main focus is providing a broad selection of modern and advanced medical services that prioritize exceptional quality to enhance health outcomes. We aim to become your preferred healthcare provider.
            </p>
            <ul className="space-y-2 lg:space-y-2">
              {[
                'Continue to look after patients',
                'Give patients the best service possible',
                'Make sure patients are comfortable',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-2 lg:gap-2 text-white/65 text-[10px] lg:text-sm font-light">
                  <span className="mt-1 w-1.5 h-1.5 lg:mt-1.5 lg:w-1.5 lg:h-1.5 rounded-full bg-[#c9a84c] flex-none" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── CORE VALUES ──────────────────────────────────────────────────────────────
function CoreValuesSection() {
  const values = [
    { stat: 'Quality', sub: 'Uncompromising adherence to the highest medical standards.', color: 'bg-[#2a6b5e]/10' },
    { stat: 'Safety', sub: 'Patient safety is our foundational priority in every protocol.', color: 'bg-[#c9a84c]/10' },
    { stat: 'Efficiency', sub: 'Streamlined care delivery ensuring quick treatment times.', color: 'bg-[#1a3a36]/10' },
    { stat: 'Reliability', sub: 'Consistent, dependable healthcare — available around the clock.', color: 'bg-[#2a6b5e]/10' },
    { stat: 'Dedication', sub: 'A compassionate and competent team committed to your well-being.', color: 'bg-[#c9a84c]/10' },
  ]

  return (
    <section className="py-12 lg:py-16 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <p className="text-[10px] lg:text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-2 lg:mb-4">Our Values</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            The principles behind
            <em className="text-[#2a6b5e]"> every decision</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-0 lg:border lg:border-[#1a3a36]/12 lg:rounded-2xl overflow-hidden lg:divide-x lg:divide-[#1a3a36]/12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center justify-start py-6 px-3 lg:py-16 lg:px-6 rounded-xl lg:rounded-none ${v.color} hover:bg-white transition-colors duration-300 ${i === 4 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''}`}
            >
              <div className="relative w-16 h-16 lg:w-36 lg:h-36 mb-3 lg:mb-5 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <circle cx="72" cy="72" r="68" fill="none" stroke="#1a3a36" strokeWidth="1.5" strokeOpacity="0.15" />
                </svg>
                <span className="font-serif text-[10px] lg:text-lg font-bold text-[#1a3a36] text-center leading-tight px-1">{v.stat}</span>
              </div>
              <p className="text-[#1a3a36]/70 text-[9px] lg:text-xs font-light text-center leading-relaxed lg:max-w-[120px]">{v.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FACILITIES ───────────────────────────────────────────────────────────────
function FacilitiesSection() {
  const facilities = [
    {
      title: 'Emergency Services 24/7',
      desc: 'Our ER operates around the clock with dedicated emergency rooms, modern stretchers, and full accessibility for all patients — including those with special needs.',
      img: '/hero/hero1.png',
    },
    {
      title: 'Wheelchair & Handicap Access',
      desc: 'Dedicated handicapped parking bays, wheelchair-accessible ramps, and specially equipped ER stations ensure every patient receives dignified, barrier-free care.',
      img: '/modern.png',
    },
    {
      title: 'Modern Multi-Specialty Clinics',
      desc: 'State-of-the-art clinic rooms invested in and upgraded since 2021 — equipped with the latest medical machines across all confirmed specialties.',
      img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&q=85',
    },
    {
      title: 'MMSR-JHAH Ambulance Fleet',
      desc: 'A fleet of 10 H1 and 8 four-wheel-drive ambulances fully equipped to MMSR-JHAH standards — emergency response bags, Nitronox, Robert Shaw devices — with trained paramedic teams.',
      img: '/emergency.png',
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-16 text-center"
        >
          <p className="text-[10px] lg:text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-2 lg:mb-4">Facilities</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight max-w-2xl mx-auto">
            State-of-the-art
            <em className="text-[#2a6b5e]"> facilities for all</em>
          </h2>
        </motion.div>

        {/* Alternating Layout Design */}
        <div className="flex flex-col gap-6 lg:gap-12">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-10 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 relative h-48 sm:h-64 lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-md">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#1a3a36]/10" />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 lg:px-8 text-center lg:text-left">
                <h3 className="text-lg lg:text-3xl font-bold text-[#1a3a36] mb-2 lg:mb-4 leading-tight">{f.title}</h3>
                <p className="text-[#1a3a36]/70 text-xs sm:text-sm lg:text-lg font-light leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



// ─── MMSR-JHAH COMPLIANCE ─────────────────────────────────────────────────────
function MMSRSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const trainings = [
    { code: 'BLS', full: 'Basic Life Support' },
    { code: 'FA', full: 'First Aid' },
    { code: 'ACLS', full: 'Advanced Life Support' },
    { code: 'PHTLS', full: 'Pre-Hospital Trauma' },
  ]

  const equipment = [
    'Emergency Response Bags',
    'Nitronox Pain Relief',
    'Robert Shaw Devices',
    'Extrication Boards',
    'Disaster Consumables',
    'MMSR-JHAH Standard Kits',
  ]

  return (
    <section ref={ref} className="py-12 lg:py-16 bg-[#1a3a36]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 lg:mb-12"
        >
          <p className="text-[10px] lg:text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-2 lg:mb-4">MMSR-JHAH Compliance</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-white leading-tight tracking-tight max-w-3xl">
            Meeting the highest
            <em className="block text-[#c9a84c]">industrial medical standards</em>
          </h2>
          <p className="text-white/65 text-xs lg:text-lg font-light leading-relaxed mt-3 lg:mt-5 max-w-2xl">
            Al Mazaya is committed to full compliance with the Minimum Medical Standards Requirements (MMSR) under Johns Hopkins Aramco Healthcare (JHAH) — ensuring quality, safety, efficiency, and reliability across all industrial clinic operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Staff Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="bg-white/8 border border-white/10 rounded-2xl p-6 lg:p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center mb-4 lg:mb-5">
              <Award className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-2">Staff Training Programs</h3>
            <p className="text-white/55 text-[11px] lg:text-sm font-light leading-relaxed mb-4 lg:mb-5">
              All clinical staff undergo comprehensive life-support certifications.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {trainings.map((t, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-2 lg:p-3 border border-white/8">
                  <div className="text-[#c9a84c] font-bold text-[10px] lg:text-sm mb-0.5">{t.code}</div>
                  <div className="text-white/50 text-[8px] lg:text-[10px] font-light leading-tight">{t.full}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RAC Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white/8 border border-white/10 rounded-2xl p-6 lg:p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center mb-4 lg:mb-5">
              <Shield className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-2">RAC Equipment</h3>
            <p className="text-white/55 text-[11px] lg:text-sm font-light leading-relaxed mb-4 lg:mb-5">
              Assets requisitioned to MMSR-JHAH Clinic specifications.
            </p>
            <ul className="space-y-2 lg:space-y-2">
              {equipment.map((e, i) => (
                <li key={i} className="flex items-center gap-2 text-white/65 text-[10px] lg:text-sm font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-none" />
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Competency Assessments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-white/8 border border-white/10 rounded-2xl p-6 lg:p-7 md:col-span-2 lg:col-span-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center mb-4 lg:mb-5">
              <Users className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-2">Competency Assess.</h3>
            <p className="text-white/55 text-[11px] lg:text-sm font-light leading-relaxed mb-4 lg:mb-5">
              Assessments cover all clinical staff and drivers.
            </p>
            <div className="space-y-3 mt-4">
              {[
                { label: 'RN/EMS/MD', note: 'Clinical personnel' },
                { label: 'Drivers', note: 'Transport-trained' },
                { label: 'RAC Site Teams', note: 'Led by Team Leader' },
                { label: 'Disaster Resp.', note: 'Equipped to deploy' },
              ].map((item, i) => (
                <div key={i} className="border-b border-white/8 pb-2 lg:pb-3 last:border-0 last:pb-0">
                  <div className="text-white/80 text-[10px] lg:text-sm font-medium">{item.label}</div>
                  <div className="text-white/40 text-[8px] lg:text-xs font-light">{item.note}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ambulance fleet highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 bg-white/5 border border-[#c9a84c]/20 rounded-2xl p-6 lg:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <p className="text-[10px] lg:text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-2 lg:mb-3">Ambulance Fleet</p>
              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 lg:mb-3">
                18 ambulances deployed kingdom-wide
              </h3>
              <p className="text-white/60 text-[11px] lg:text-sm font-light leading-relaxed">
                Our fleet comprises 10 H1 ambulances and 8 four-wheel-drive units — all equipped to MMSR-JHAH standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="text-center p-3 lg:p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-[#c9a84c]">10</div>
                <div className="text-white/50 text-[9px] lg:text-xs font-light mt-1">H1 Ambulances</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl lg:text-3xl font-bold text-[#c9a84c]">8</div>
                <div className="text-white/50 text-[9px] lg:text-xs font-light mt-1">4×4 Units</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── CLIENTS SECTION ──────────────────────────────────────────────────────────
function ClientsSection() {
  const aramcoClients = [
    { name: 'NSH-Gulf Asia Saipem', logo: '/logos/nsh.png' },
    { name: 'MCCL-MacDomatte', logo: '/logos/MCCL_LOGO_22FEB2020-removebg-preview.png' },
    { name: 'Majan Construction',logo:'/logos/ohi.png' },
    { name: 'Abaja-Saipem', logo: '/logos/abaja.png' },
    { name: 'Sino-Hydro & Doosan', logo: '/logos/doosan.png' },
    { name: 'Sinopec', logo: '/logos/sinopec.png' },
  ]
  const nonAramcoClients = [
    { name: 'Al Sharif Group', logo: '/logos/al.png' },
    { name: 'Al Sharif Group & KEC Ltd', logo: '/logos/ASG.png' },
    { name: 'AAC Gen.Cont.Est', logo: '/logos/003.png' },
    { name: 'Expertise', logo: '/logos/expertise.png' },
  ]

  const renderClientMark = (client: { name: string; logo?: string }, index: number) => {
    const initials = client.name
      .split(' ')
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 3)
      .join('')

    return (
      <motion.div
        key={client.name}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        className="group rounded-xl lg:rounded-2xl border border-[#1a3a36]/12 bg-white/75 p-3 lg:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 hover:bg-white"
      >
        <div className="flex h-12 lg:h-16 items-center justify-center rounded-lg lg:rounded-xl bg-[#f5f0e8] px-2 py-2 lg:px-4 lg:py-3">
          {client.logo ? (
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            />
          ) : (
            <span className="font-serif text-sm lg:text-2xl text-[#1a3a36] tracking-tight">{initials}</span>
          )}
        </div>
        <div className="mt-2 lg:mt-3 text-center text-[8px] lg:text-xs font-semibold uppercase tracking-wide text-[#1a3a36]/70 truncate lg:whitespace-normal">
          {client.name}
        </div>
      </motion.div>
    )
  }

  return (
    <section className="py-12 lg:py-16 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 lg:mb-12 text-center lg:text-left"
        >
          <p className="text-[10px] lg:text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-2 lg:mb-4">Active Clients</p>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            Trusted by Saudi Arabia's
            <em className="block lg:inline text-[#2a6b5e]"> leading industrial companies</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#1a3a36]/12 bg-white/60 p-5 lg:p-7 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#c9a84c]" />
            <div className="flex items-center justify-between gap-2 mb-5 lg:mb-6">
              <div>
                <p className="text-[9px] lg:text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-1 lg:mb-2">Saudi Aramco Clients</p>
                <h3 className="font-serif text-lg lg:text-2xl text-[#1a3a36] leading-tight">Industrial partners</h3>
              </div>
              <div className="rounded-full border border-[#1a3a36]/10 bg-[#f5f0e8] px-3 py-1 text-[9px] lg:text-xs font-semibold text-[#1a3a36]/70">
                6 accounts
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:gap-3">
              {aramcoClients.map((client, index) => renderClientMark(client, index))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#1a3a36]/12 bg-white/60 p-5 lg:p-7 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#1a3a36]" />
            <div className="flex items-center justify-between gap-2 mb-5 lg:mb-6">
              <div>
                <p className="text-[9px] lg:text-xs font-bold tracking-widest text-[#1a3a36]/60 uppercase mb-1 lg:mb-2">Non-Aramco Clients</p>
                <h3 className="font-serif text-lg lg:text-2xl text-[#1a3a36] leading-tight">Private sector partners</h3>
              </div>
              <div className="rounded-full border border-[#1a3a36]/10 bg-[#f5f0e8] px-3 py-1 text-[9px] lg:text-xs font-semibold text-[#1a3a36]/70">
                4 accounts
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {nonAramcoClients.map((client, index) => renderClientMark(client, index))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
function CertificationsSection() {
  const certs = [
    { 
      badge: 'MOH', 
      title: 'Ministry of Health', 
      subtitle: 'Licensed Base', 
      year: '2021', 
      achieved: true,
      logo: '/moh.png'
    },
    { 
      badge: 'RAC', 
      title: 'Saudi Aramco RAC', 
      subtitle: 'Approved Unit', 
      year: '2024', 
      achieved: true,
      logo: '/aramco.png'
    },
    { 
      badge: 'JHAH', 
      title: 'MMSR Standards', 
      subtitle: 'Fleet Compliant', 
      year: '2024', 
      achieved: true,
      logo: '/jhah.png'
    },
    { 
      badge: 'ISO', 
      title: 'ISO Certification', 
      subtitle: 'In Pipeline', 
      year: 'Pursuing', 
      achieved: false,
      logo: '/iso.png'
    },
    { 
      badge: 'CBAHI', 
      title: 'CBAHI Quality', 
      subtitle: 'In Pipeline', 
      year: 'Pursuing', 
      achieved: false,
      logo: '/cbahi.png' 
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 lg:mb-16"
        >
          <p className="text-[10px] lg:text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-2 lg:mb-4">
            Certifications & Accreditations
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            An accredited and <em className="text-[#2a6b5e]">trusted institution</em>
          </h2>
          <p className="text-[#1a3a36]/55 text-xs lg:text-lg font-light mt-3 lg:mt-4 max-w-xl mx-auto leading-relaxed">
            Al Mazaya complies with and often exceeds international healthcare benchmarks. ISO and CBAHI certifications are actively being pursued.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center text-center group ${i === 4 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''}`}
            >
              <div className="relative w-full max-w-[160px] lg:max-w-none aspect-square flex items-center justify-center mb-3 lg:mb-4 bg-white/40 rounded-2xl border border-[#1a3a36]/5 shadow-sm p-4">
                {/* mix-blend-multiply makes baked-in white backgrounds disappear into the background */}
                <img 
                  src={cert.logo} 
                  alt={`${cert.badge} Logo`} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Pursuing Badge */}
                {!cert.achieved && (
                  <div className="absolute top-2 right-2 lg:top-3 lg:right-3">
                    <span className="text-[8px] lg:text-[10px] text-[#c9a84c] font-bold tracking-widest uppercase border border-[#c9a84c]/40 rounded-full px-2 py-1 lg:px-3 bg-white/90 shadow-sm">
                      Pursuing
                    </span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xs lg:text-base font-bold text-[#1a3a36] leading-snug">
                {cert.title}
              </h3>
              
              <p className="text-[#2a6b5e] text-[9px] lg:text-[11px] font-bold mt-1 lg:mt-1.5 tracking-widest uppercase">
                {cert.badge} {cert.year !== 'Pursuing' && `• ${cert.year}`}
              </p>
              
              <p className="text-[#1a3a36]/60 text-[10px] lg:text-xs font-light mt-0.5 lg:mt-1 leading-tight">
                {cert.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-12 lg:py-16 bg-[#f5f0e8]">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] lg:text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-3 lg:mb-5"
        >
          Get Started
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-[clamp(2rem,4vw,4.5rem)] text-[#1a3a36] mb-3 lg:mb-5 leading-tight tracking-tight"
        >
          Ready for quality
          <br className="lg:hidden" />
          <em className="text-[#2a6b5e]"> healthcare?</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xs lg:text-xl text-[#1a3a36]/65 font-light mb-8 lg:mb-10 max-w-sm lg:max-w-xl mx-auto leading-relaxed"
        >
          Schedule your appointment today — we're available 24/7 for emergencies at Al Mazaya Advanced Medical Complex, Dammam.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center"
        >
          <a
            href="tel:+966505387020"
            className="w-full sm:w-auto px-6 py-3.5 lg:px-8 lg:py-4 bg-[#2a6b5e] text-white rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a5040] transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 lg:w-4 lg:h-4" /> Call +966 50 538 7020
          </a>
          <a
            href="https://wa.me/966505387020"
            className="w-full sm:w-auto px-6 py-3.5 lg:px-8 lg:py-4 border-2 border-[#1a3a36] text-[#1a3a36] rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a3a36]/5 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 lg:w-4 lg:h-4" /> WhatsApp Us
          </a>
          <a
            href="https://salla.sa/mazaya-clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 lg:px-8 lg:py-4 border border-[#1a3a36]/25 text-[#1a3a36]/70 rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a3a36]/5 transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Visit Our Store
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="text-[#1a3a36]/40 text-[9px] lg:text-xs mt-10 lg:mt-12 pt-6 lg:pt-8 border-t border-[#1a3a36]/10"
        >
          Al Mazaya Advanced Medical Complex • Dammam, King Saud Street, Eastern Province, Saudi Arabia
          <br />
          <span className="mt-1 lg:mt-2 inline-block font-medium">salla.sa/mazaya-clinic</span>
        </motion.p>
      </div>
    </section>
  )
}
export default function AboutPage() {
  return (
    <main className="bg-[#f5f0e8]" style={{ fontFamily: "'Georgia', serif" }}>
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <FacilitiesSection />
      
      <MMSRSection />
      <ClientsSection />
      <CertificationsSection />
      <CTASection />
    </main>
  )
}