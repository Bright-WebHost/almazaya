'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, ChevronRight, Shield, Award, Users, Clock } from 'lucide-react'

// ─── HERO ─────────────────────────────────────────────────────────────────────
// Stats corrected from PDF page 6:
// ~80 employees, 25 nurses, 12 drivers, 10 H1 + 8 (4x4) = 18 ambulances, founded 2021

function HeroSection() {
  return (
    <section className="relative bg-[#f5f0e8] overflow-hidden">
      {/* Desktop side images — using neutral medical imagery that doesn't misrepresent the clinic */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[25%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[8%] left-5 right-5 h-[42%] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=85"
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
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=85"
            alt="Clinical staff"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[25%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[5%] left-5 right-5 h-[36%] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=85"
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
            src="https://images.unsplash.com/photo-1576669801945-3ebbc9b3e33b?w=600&q=85"
            alt="Patient care"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Center content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen py-24 px-6 text-center lg:mx-[26%]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-5"
        >
          About Al Mazaya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] text-[#1a3a36] mb-5 tracking-tight"
        >
          Your Trusted Partner
          <br />
          <em className="text-[#2a6b5e]">in Health & Wellness</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base lg:text-lg text-[#1a3a36]/70 leading-relaxed mb-10 max-w-sm font-light"
        >
          A private medical complex in urban Dammam serving all patient populations — from families to Saudi Arabia's industrial workforce — since 2021.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-xs sm:max-w-none"
        >
          <a
            href="tel:920013822"
            className="px-7 py-3.5 bg-[#2a6b5e] text-white rounded-full font-semibold text-sm hover:bg-[#1a5040] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Book Appointment
          </a>
          <a
            href="#story"
            className="px-7 py-3.5 border border-[#1a3a36]/30 text-[#1a3a36] rounded-full font-semibold text-sm hover:bg-[#1a3a36]/5 transition-colors duration-300 flex items-center justify-center gap-2 group"
          >
            Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Mobile image strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="lg:hidden grid grid-cols-2 gap-3 mt-12 w-full max-w-sm"
        >
          {[
            'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&q=80',
            'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80',
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] shadow-md">
              <img src={src} alt="Al Mazaya" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Stats — all directly from PDF page 6 */}
        {/* ~80 employees | 25 nurses | 12 drivers | 18 ambulances (10 H1 + 8 4x4) | founded 2021 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-5 gap-3 mt-10 pt-8 border-t border-[#1a3a36]/15 w-full max-w-sm lg:max-w-none"
        >
          {[
            { number: '~80', label: 'Employees' },
            { number: '25+', label: 'Nurses' },
            { number: '12', label: 'Drivers' },
            { number: '18', label: 'Ambulances' },
            { number: '2021', label: 'Founded' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-lg lg:text-2xl font-bold text-[#c9a84c] mb-1">{stat.number}</div>
              <div className="text-[9px] lg:text-[10px] text-[#1a3a36]/55 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── STORY / HISTORY ──────────────────────────────────────────────────────────
// From PDF page 8: 2020 first industrial clinic, 2021 complex founded, 2024 more nurses hired
// Added RAC org chart milestone (Jan 2024, valid to Jan 2027)

function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="story" ref={ref} className="py-20 lg:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-tight text-[#1a3a36] tracking-tight"
          >
            Our Journey
            <br />
            <em className="text-[#2a6b5e]">from clinic to kingdom</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base lg:text-lg text-[#1a3a36]/70 font-light leading-relaxed"
          >
            Since founding Al Mazaya, industrial medical services have been offered and commissioned to contractor clients in construction and civil works — growing to a kingdom-wide presence serving Saudi Aramco and major industrial contractors.
          </motion.p>
        </div>

        {/* 4-milestone timeline — all dates confirmed by PDF */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#1a3a36]/15 rounded-2xl overflow-hidden">
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
              className={`relative group flex flex-col ${i < 3 ? 'md:border-r border-b md:border-b-0 border-[#1a3a36]/15' : ''}`}
            >
              <div className="relative h-40 lg:h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#1a3a36]/40" />
                <span className="absolute top-4 left-5 text-xs font-bold text-white/80 tracking-widest uppercase">{item.year}</span>
              </div>
              <div className="p-5 lg:p-7 bg-[#f5f0e8] flex-1">
                <h3 className="text-base lg:text-lg font-bold text-[#1a3a36] mb-2">{item.title}</h3>
                <p className="text-[#1a3a36]/65 font-light leading-relaxed text-xs lg:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MISSION & VISION ─────────────────────────────────────────────────────────
// Verbatim from PDF pages 10–11
// Vision tagline: "BE ETHICALLY 'THE BEST AMONG THE REST'" — PDF page 11, restored here

function MissionVisionSection() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1800&q=85"
        alt="Al Mazaya team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a3a36]/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* MISSION — from PDF page 10 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-5">Our Mission</p>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] text-white leading-tight mb-5 tracking-tight">
              Comprehensive care that
              <em className="block text-[#c9a84c]">never compromises.</em>
            </h2>
            <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed mb-5">
              Providing comprehensive healthcare services that align with local and international accreditation standards — keeping patients healthy and comfortable throughout their entire treatment.
            </p>
            <ul className="space-y-2">
              {[
                'Keep taking care of patients',
                'Provide the best service for patients',
                'Ensure patients stay healthy and comfortable while undergoing treatment',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-white/65 text-sm font-light">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-none" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VISION — from PDF page 11, including the key tagline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-14"
          >
            <p className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-5">Our Vision</p>
            {/* Exact tagline from PDF page 11 */}
            <h3 className="font-serif text-2xl lg:text-3xl text-white leading-tight mb-2">
              Be ethically
            </h3>
            <h3 className="font-serif text-2xl lg:text-4xl text-[#c9a84c] leading-tight mb-5 italic">
              "The best among the rest."
            </h3>
            <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed mb-5">
              Our main focus is providing a broad selection of modern and advanced medical services that prioritize exceptional quality to enhance health outcomes. We aim to become your preferred healthcare provider.
            </p>
            <ul className="space-y-2">
              {[
                'Continue to look after patients',
                'Give patients the best service possible',
                'Make sure patients are comfortable and healthy while receiving treatment',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-white/65 text-sm font-light">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-none" />
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

// ─── CORE VALUES — from PDF page 5 (MMSR framing: quality, safety, efficiency, reliability) ───
// PDF page 12 confirms: Experience, State-of-Art Equipment, Compassionate Team, Seeking ISO/CBAHI

function CoreValuesSection() {
  const values = [
    { stat: 'Quality', sub: 'Uncompromising adherence to the highest medical standards in every procedure.' },
    { stat: 'Safety', sub: 'Patient safety is our foundational priority, embedded in every protocol.' },
    { stat: 'Efficiency', sub: 'Streamlined care delivery ensuring the right treatment reaches every patient, on time.' },
    { stat: 'Reliability', sub: 'Consistent, dependable healthcare — available around the clock, every day.' },
    { stat: 'Dedication', sub: 'A compassionate and competent medical team committed to your well-being.' },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-4">Our Values</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            The principles behind
            <em className="text-[#2a6b5e]"> every decision</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 divide-x divide-y lg:divide-y-0 divide-[#1a3a36]/12 border border-[#1a3a36]/12 rounded-2xl overflow-hidden">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-10 px-4 lg:py-16 lg:px-6 bg-[#f5f0e8] hover:bg-white transition-colors duration-300"
            >
              <div className="relative w-28 h-28 lg:w-36 lg:h-36 mb-5 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <circle cx="72" cy="72" r="68" fill="none" stroke="#1a3a36" strokeWidth="1.5" strokeOpacity="0.15" />
                </svg>
                <span className="font-serif text-base lg:text-lg font-bold text-[#1a3a36] text-center leading-tight px-2">{v.stat}</span>
              </div>
              <p className="text-[#1a3a36]/60 text-xs font-light text-center leading-relaxed max-w-[120px]">{v.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── OUR SERVICES ─────────────────────────────────────────────────────────────
// ONLY services confirmed in PDF page 14:
// Dental, Dermatology, Pediatrics, General Medicine, OB Gyne, Occupational Medicine (RAC)
// + Emergency (from PDF page 13 facilities) + Ambulance services (PDF page 14)
// REMOVED: Cardiology, General Surgery, Urology, Radiology/Imaging, Lab — NOT in PDF

function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      title: 'Emergency & Trauma (24/7)',
      desc: 'Round-the-clock emergency department with wheelchair-accessible ramps, new stretchers, and dedicated ER facilities for all patients including those with special needs.',
      img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=700&q=85',
    },
    {
      title: 'General Medicine',
      desc: 'Comprehensive GP services for all patient populations including children, adults, and the elderly — serving the whole family with primary care.',
      img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&q=85',
    },
    {
      title: 'Pediatrics',
      desc: 'Dedicated paediatric care for infants, children and adolescents by specialist physicians focused on child health and development.',
      img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&q=85',
    },
    {
      title: 'Dental & Cosmetic Dentistry',
      desc: 'Full dental services from routine care to cosmetic procedures using the latest equipment and techniques for optimal oral health.',
      img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e55?w=700&q=85',
    },
    {
      title: 'Dermatology & Cosmetics',
      desc: 'Advanced dermatological care and cosmetic treatments delivered by certified specialists using modern procedures and technology.',
      img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=85',
    },
    {
      title: 'OB / Gynaecology',
      desc: 'Obstetrics and gynaecology services providing expert care for women throughout pregnancy, postpartum, and all stages of life.',
      img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&q=85',
    },
    {
      title: 'Occupational / Industrial Health',
      desc: 'Saudi Aramco RAC-approved on-site clinics, pre-employment medicals, and remote-area healthcare for industrial contractors kingdom-wide.',
      img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=700&q=85',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#f5f0e8] overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-3">Our Specialties</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
              Care for
              <em className="text-[#2a6b5e]"> every stage of life</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base lg:text-lg text-[#1a3a36]/65 font-light leading-relaxed"
          >
            From GP and family medicine to industrial occupational health — our specialties are built around the real needs of every patient population we serve.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-5 text-[#1a3a36]/50"
        >
          <div className="flex gap-1">
            <span className="w-6 h-[2px] bg-[#1a3a36]/30 rounded-full" />
            <span className="w-6 h-[2px] bg-[#2a6b5e] rounded-full" />
            <span className="w-6 h-[2px] bg-[#1a3a36]/30 rounded-full" />
          </div>
          <span className="text-xs font-medium flex items-center gap-1">
            Swipe to explore all services <ChevronRight className="w-3 h-3" />
          </span>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative flex-none w-[80vw] sm:w-[55vw] lg:w-[calc(33.333%-11px)] snap-start rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute top-5 left-5 z-10 w-2.5 h-2.5 rounded-full bg-[#c9a84c]" />
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/90 via-[#1a3a36]/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/75 text-sm font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── KEY METRICS ──────────────────────────────────────────────────────────────
// All figures directly from PDF page 6

function MetricsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 divide-x divide-y lg:divide-y-0 divide-[#1a3a36]/15 border border-[#1a3a36]/15 rounded-2xl overflow-hidden">
          {[
            { number: '~80', label: 'Clinical & Non-Clinical Employees' },
            { number: '25+', label: 'Nurses in Industrial Services' },
            { number: '12', label: 'Drivers in Industrial Areas' },
            { number: '10+8', label: 'H1 & 4×4 Ambulances' },
            { number: '24/7', label: 'Emergency Coverage' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-10 px-4 lg:py-16 lg:px-6 bg-[#f5f0e8] hover:bg-white transition-colors duration-300"
            >
              <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center mb-4">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 144 144">
                  <circle cx="72" cy="72" r="68" fill="none" stroke="#1a3a36" strokeWidth="1.5" strokeOpacity="0.15" />
                </svg>
                <div className="text-xl lg:text-2xl font-bold text-[#1a3a36] text-center leading-tight">{metric.number}</div>
              </div>
              <p className="text-[#1a3a36]/60 text-[10px] font-light text-center leading-snug max-w-[90px]">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FACILITIES ───────────────────────────────────────────────────────────────
// From PDF pages 13–14 and 22–24:
// ER 24/7, handicapped/wheelchair facilities, modern clinics, ambulance fleet
// REMOVED: "Advanced Diagnostic Equipment" — not mentioned in PDF

function FacilitiesSection() {
  const facilities = [
    {
      num: '01',
      title: 'Emergency Services 24/7',
      desc: 'Our ER operates around the clock with dedicated emergency rooms, modern stretchers, and full accessibility for all patients — including those with special needs.',
      img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=85',
    },
    {
      num: '02',
      title: 'Wheelchair & Handicap Access',
      desc: 'Dedicated handicapped parking bays, wheelchair-accessible ramps, and specially equipped ER stations ensure every patient receives dignified, barrier-free care.',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=85',
    },
    {
      num: '03',
      title: 'Modern Multi-Specialty Clinics',
      desc: 'State-of-the-art clinic rooms invested in and upgraded since 2021 — equipped with the latest medical machines across all confirmed specialties.',
      img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&q=85',
    },
    {
      num: '04',
      title: 'MMSR-JHAH Ambulance Fleet',
      desc: 'A fleet of 10 H1 and 8 four-wheel-drive ambulances fully equipped to MMSR-JHAH standards — emergency response bags, Nitronox, Robert Shaw devices — with trained paramedic teams.',
      img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=700&q=85',
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-4">Facilities</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#1a3a36] leading-tight tracking-tight max-w-2xl">
            State-of-the-art
            <em className="text-[#2a6b5e]"> facilities for all</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute top-5 left-5 z-10 w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center">
                <span className="text-xs font-bold text-white">{f.num}</span>
              </div>
              <div className="relative h-60 lg:h-72 overflow-hidden">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/90 via-[#1a3a36]/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-white/75 text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── MMSR-JHAH COMPLIANCE — NEW SECTION ───────────────────────────────────────
// Entirely from PDF pages 25–28 — this was missing from the original About page
// Covers: staff training programs, equipment, competency assessments, RAC investment

function MMSRSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const trainings = [
    { code: 'BLS', full: 'Basic Life Support' },
    { code: 'FA', full: 'First Aid' },
    { code: 'ACLS', full: 'Advanced Cardiovascular Life Support' },
    { code: 'PHTLS', full: 'Pre-Hospital Trauma Life Support' },
  ]

  const equipment = [
    'Emergency Response Bags',
    'Nitronox Pain Relief Systems',
    'Robert Shaw Devices',
    'Extrication & Spine Boards',
    'Disaster Response Consumables',
    'MMSR-JHAH Standard Kits',
  ]

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#1a3a36]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-4">MMSR-JHAH Compliance</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-white leading-tight tracking-tight max-w-3xl">
            Meeting the highest
            <em className="block text-[#c9a84c]">industrial medical standards</em>
          </h2>
          <p className="text-white/65 text-base lg:text-lg font-light leading-relaxed mt-5 max-w-2xl">
            Al Mazaya is committed to full compliance with the Minimum Medical Standards Requirements (MMSR) under Johns Hopkins Aramco Healthcare (JHAH) — ensuring quality, safety, efficiency, and reliability across all industrial clinic operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Staff Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="bg-white/8 border border-white/10 rounded-2xl p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center mb-5">
              <Award className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Staff Training Programs</h3>
            <p className="text-white/55 text-sm font-light leading-relaxed mb-5">
              All clinical staff and drivers undergo comprehensive life-support and competency certification programs.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {trainings.map((t, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/8">
                  <div className="text-[#c9a84c] font-bold text-sm mb-0.5">{t.code}</div>
                  <div className="text-white/50 text-[10px] font-light leading-tight">{t.full}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RAC Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white/8 border border-white/10 rounded-2xl p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">RAC-Standard Equipment</h3>
            <p className="text-white/55 text-sm font-light leading-relaxed mb-5">
              Assets requisitioned and maintained to MMSR-JHAH Remote Area Clinic specifications. Staff are trained on all equipment.
            </p>
            <ul className="space-y-2">
              {equipment.map((e, i) => (
                <li key={i} className="flex items-center gap-2 text-white/65 text-sm font-light">
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
            className="bg-white/8 border border-white/10 rounded-2xl p-7"
          >
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Full Competency Assessment</h3>
            <p className="text-white/55 text-sm font-light leading-relaxed mb-5">
              Regular competency assessments cover all clinical staff and drivers — including vehicle extrication techniques and emergency response protocols.
            </p>
            <div className="space-y-3 mt-4">
              {[
                { label: 'RN / EMS / EMT / MD', note: 'On-site clinical personnel' },
                { label: 'Drivers', note: 'Extrication & transport-trained' },
                { label: 'RAC Site Teams', note: 'Led by Mr. Bruce Vinu, Sr. Team Leader' },
                { label: 'Disaster Response', note: 'Always equipped & ready to deploy' },
              ].map((item, i) => (
                <div key={i} className="border-b border-white/8 pb-3 last:border-0 last:pb-0">
                  <div className="text-white/80 text-sm font-medium">{item.label}</div>
                  <div className="text-white/40 text-xs font-light">{item.note}</div>
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
          className="mt-6 bg-white/5 border border-[#c9a84c]/20 rounded-2xl p-7 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <p className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-3">Ambulance Fleet</p>
              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3">
                18 ambulances deployed kingdom-wide
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Our fleet comprises 10 H1 ambulances and 8 four-wheel-drive units — all equipped to MMSR-JHAH standards with emergency bags, Nitronox pain relief systems, Robert Shaw devices, and trained paramedic crews. New Toyota Hardtop and Hyundai H1 models added in 2024.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-[#c9a84c]">10</div>
                <div className="text-white/50 text-xs font-light mt-1">H1 Ambulances</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-[#c9a84c]">8</div>
                <div className="text-white/50 text-xs font-light mt-1">4×4 Units</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── CLIENTS SECTION ──────────────────────────────────────────────────────────
// Exact client names from PDF page 9
// Aramco: NSH-Gulf Asia Saipem, MCCL-MacDomatte, Majan Construction, Abaja-Saipem,
//         Sino-Hydro Doosan, Sinopec
// Non-Aramco: Al Sharif Group, Al Sharif Group & KEC Ltd, AAC Gen.Cont.Est, Expertise

function ClientsSection() {
  const aramcoClients = [
    { name: 'NSH-Gulf Asia Saipem', logo: '/logos/nsh.png' },
    { name: 'MCCL-MacDomatte', logo: '/logos/MCCL_LOGO_22FEB2020-removebg-preview.png' },
    { name: 'Majan Construction' },
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
        className="group rounded-2xl border border-[#1a3a36]/12 bg-white/75 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 hover:bg-white"
      >
        <div className="flex h-16 items-center justify-center rounded-xl bg-[#f5f0e8] px-4 py-3">
          {client.logo ? (
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            />
          ) : (
            <span className="font-serif text-2xl text-[#1a3a36] tracking-tight">{initials}</span>
          )}
        </div>
        <div className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-[#1a3a36]/70">
          {client.name}
        </div>
      </motion.div>
    )
  }

  return (
    <section className="py-20 lg:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-4">Active Clients</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            Trusted by Saudi Arabia's
            <em className="block text-[#2a6b5e]">leading industrial companies</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-[#1a3a36]/12 bg-white/60 p-6 lg:p-7 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#c9a84c]" />
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-2">Saudi Aramco Clients</p>
                <h3 className="font-serif text-2xl text-[#1a3a36] leading-tight">Industrial partners</h3>
              </div>
              <div className="rounded-full border border-[#1a3a36]/10 bg-[#f5f0e8] px-3 py-1 text-xs font-semibold text-[#1a3a36]/70">
                6 accounts
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {aramcoClients.map((client, index) => renderClientMark(client, index))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-[#1a3a36]/12 bg-white/60 p-6 lg:p-7 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#1a3a36]" />
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#1a3a36]/60 uppercase mb-2">Non-Aramco Clients</p>
                <h3 className="font-serif text-2xl text-[#1a3a36] leading-tight">Private sector partners</h3>
              </div>
              <div className="rounded-full border border-[#1a3a36]/10 bg-[#f5f0e8] px-3 py-1 text-xs font-semibold text-[#1a3a36]/70">
                4 accounts
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-6">
              {nonAramcoClients.map((client, index) => renderClientMark(client, index))}
            </div>
            <div className="pt-5 border-t border-[#1a3a36]/12 space-y-3">
              {[
                'Experience in Industrial Medicine',
                'State-of-the-Art New Equipment',
                'Compassionate & Competent Medical Team',
                'Actively Seeking ISO & CBAHI Certifications',
              ].map((strength, index) => (
                <div key={index} className="flex items-center gap-3 text-[#1a3a36]/65 text-sm font-light">
                  <span className="text-[#c9a84c] font-bold">✓</span> {strength}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
// Corrected from PDF:
// - MOH licensed (2021, confirmed — institution legally operating)
// - MMSR-JHAH compliant (confirmed throughout PDF)
// - Saudi Aramco RAC approved (org chart effective Jan 2024)
// - ISO: actively seeking (PDF page 12: "Seeking for ISO certifications")
// - CBAHI: actively pursuing (PDF page 12: "Seeking for... CBAHI")
// REMOVED speculative "2023" year from SAR badge

function CertificationsSection() {
  const certs = [
    {
      badge: 'MOH',
      color: '#2a6b5e',
      title: 'Ministry of Health',
      subtitle: 'Licensed & Fully Operational',
      year: '2021',
      achieved: true,
    },
    {
      badge: 'RAC',
      color: '#1a3a36',
      title: 'Saudi Aramco RAC',
      subtitle: 'Approved Healthcare Provider',
      year: '2024',
      achieved: true,
    },
    {
      badge: 'JHAH',
      color: '#3a7a6e',
      title: 'MMSR-JHAH Standards',
      subtitle: 'Ambulance & ER Compliant',
      year: '2024',
      achieved: true,
    },
    {
      badge: 'ISO',
      color: '#c9a84c',
      title: 'ISO Certification',
      subtitle: 'Actively Pursuing',
      year: 'In Progress',
      achieved: false,
    },
    {
      badge: 'CBAHI',
      color: '#8a7340',
      title: 'CBAHI Accreditation',
      subtitle: 'Actively Pursuing',
      year: 'In Progress',
      achieved: false,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-20"
        >
          <p className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-4">Certifications & Accreditations</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            An accredited and
            <em className="text-[#2a6b5e]"> trusted institution</em>
          </h2>
          <p className="text-[#1a3a36]/55 text-base lg:text-lg font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Al Mazaya complies with and often exceeds international healthcare benchmarks. ISO and CBAHI certifications are actively being pursued.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center mb-3 relative overflow-hidden shadow-sm"
                style={{ backgroundColor: cert.color }}
              >
                {/* Subtle diagonal pattern texture */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
                    backgroundSize: '12px 12px',
                  }}
                />
                {/* "In progress" overlay for non-achieved */}
                {!cert.achieved && (
                  <div className="absolute inset-0 bg-black/20 flex items-end justify-center pb-2">
                    <span className="text-[8px] text-white/70 font-medium tracking-widest uppercase border border-white/30 rounded-full px-2 py-0.5">
                      Pursuing
                    </span>
                  </div>
                )}
                <span className="relative text-2xl lg:text-3xl font-black text-white tracking-wider mb-1">{cert.badge}</span>
                <span className="relative text-[9px] text-white/65 font-medium tracking-widest uppercase">{cert.year}</span>
              </div>
              <h3 className="text-xs lg:text-sm font-bold text-[#1a3a36] leading-snug">{cert.title}</h3>
              <p className="text-[#1a3a36]/50 text-[10px] font-light mt-1 leading-tight">{cert.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── LEADERSHIP ───────────────────────────────────────────────────────────────
// All names from PDF page 7 — R.A.C. Organizational Chart
// Top 4: CEO, COO, Managing Director, RAC Projects Director
// Secondary (Operations layer) also shown

function LeadershipSection() {
  const senior = [
    { name: 'Mr. Marzouq Al Baqami', role: 'Chief Executive Officer', initial: 'MA' },
    { name: 'Mss. Nourah Al Mouharb', role: 'Chief Operation Officer', initial: 'NM' },
    { name: 'Dr. Sharf Al Hamad', role: 'Managing Executive Director', initial: 'SH' },
    { name: 'Mr. Joisee James Samuel', role: 'RAC Projects Director', initial: 'JS' },
  ]

  const operations = [
    { name: 'Mr. Amro Younis', role: 'RAC Administrative Officer & Finance', initial: 'AY' },
    { name: 'Dr. Pervez Iqbal', role: 'Clinical Operations Manager', initial: 'PI' },
    { name: 'Mr. Sharwin Penalba', role: 'RAC Sites Supervisor', initial: 'SP' },
    { name: 'Mr. Bruce Vinu', role: 'Senior Team Leader', initial: 'BV' },
  ]

  return (
    <section className="py-20 lg:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-4">Leadership</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] text-[#1a3a36] leading-tight tracking-tight max-w-xl">
            The team
            <em className="text-[#2a6b5e]"> behind Al Mazaya</em>
          </h2>
        </motion.div>

        {/* Senior leadership */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {senior.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 lg:p-7 bg-white rounded-2xl border border-[#1a3a36]/10 hover:border-[#2a6b5e]/30 transition-colors duration-300 text-center"
            >
              <div className="w-14 h-14 lg:w-18 lg:h-18 rounded-full bg-[#1a3a36] flex items-center justify-center mx-auto mb-4"
                style={{ width: '3.5rem', height: '3.5rem' }}>
                <span className="text-base font-bold text-white">{leader.initial}</span>
              </div>
              <h3 className="text-xs lg:text-sm font-bold text-[#1a3a36] mb-1 leading-snug">{leader.name}</h3>
              <p className="text-[#2a6b5e] text-[10px] lg:text-xs font-medium">{leader.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Operations layer */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {operations.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="p-5 lg:p-6 bg-[#f5f0e8] rounded-2xl border border-[#1a3a36]/10 hover:bg-white transition-colors duration-300 text-center"
            >
              <div
                className="w-10 h-10 rounded-full bg-[#2a6b5e]/15 flex items-center justify-center mx-auto mb-3"
              >
                <span className="text-xs font-bold text-[#2a6b5e]">{leader.initial}</span>
              </div>
              <h3 className="text-[11px] lg:text-xs font-bold text-[#1a3a36] mb-1 leading-snug">{leader.name}</h3>
              <p className="text-[#1a3a36]/50 text-[10px] font-light leading-tight">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
// Phone: 920013822 (confirmed from ambulance photos in PDF)
// Address: Dammam, King Saud Street (confirmed PDF page 7 org chart footer)
// Website: salla.sa/mazaya-clinic (confirmed PDF pages 3 and 29)

function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f5f0e8]">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-widest text-[#2a6b5e] uppercase mb-5"
        >
          Get Started
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] text-[#1a3a36] mb-5 leading-tight tracking-tight"
        >
          Ready for quality
          <em className="text-[#2a6b5e]"> healthcare?</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base lg:text-xl text-[#1a3a36]/65 font-light mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Schedule your appointment today — we're available 24/7 for emergencies at Al Mazaya Advanced Medical Complex, Dammam.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="tel:920013822"
            className="px-8 py-4 bg-[#2a6b5e] text-white rounded-full font-semibold text-sm hover:bg-[#1a5040] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call 920013822
          </a>
          <a
            href="https://wa.me/966920013822"
            className="px-8 py-4 border-2 border-[#1a3a36] text-[#1a3a36] rounded-full font-semibold text-sm hover:bg-[#1a3a36]/5 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
          <a
            href="https://salla.sa/mazaya-clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#1a3a36]/25 text-[#1a3a36]/70 rounded-full font-semibold text-sm hover:bg-[#1a3a36]/5 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Visit Our Store
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="text-[#1a3a36]/40 text-xs mt-10 pt-8 border-t border-[#1a3a36]/10"
        >
          Al Mazaya Advanced Medical Complex • Dammam, King Saud Street, Eastern Province, Saudi Arabia
          <br />
          <span className="mt-1 inline-block">salla.sa/mazaya-clinic</span>
        </motion.p>
      </div>
    </section>
  )
}

// ─── PAGE ASSEMBLY ─────────────────────────────────────────────────────────────
// Section order follows the website plan (PAGE 3: ABOUT US):
// Hero → Story → Mission/Vision → Core Values → Services → Facilities →
// Metrics → MMSR (NEW) → Clients → Certifications → Leadership → CTA

export default function AboutPage() {
  return (
    <main className="bg-[#f5f0e8]" style={{ fontFamily: "'Georgia', serif" }}>
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ServicesSection />
      <FacilitiesSection />
      <MetricsSection />
      <MMSRSection />       {/* NEW — from PDF pages 25-28, was completely missing */}
      <ClientsSection />
      <CertificationsSection />
      <LeadershipSection />
      <CTASection />
    </main>
  )
}