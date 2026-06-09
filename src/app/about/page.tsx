'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle, Shield, Award, Users } from 'lucide-react'

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
// Palette: cream #f5f0e8, forest-dark #1a3a36, forest-mid #2a6b5e, gold #c9a84c
// Typography: font-serif for display, system sans for body
// Signature: cross-hair corner brackets as structural section markers

// ─── SHARED DECORATIVE PRIMITIVES ─────────────────────────────────────────────

/** Corner bracket — placed at section corners for precision/blueprint feel */
function CornerBracket({ className = '', size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 8 L0 0 L8 0" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 0 L20 0 L20 8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M0 12 L0 20 L8 20" stroke="currentColor" strokeWidth="1.2" />
      <path d="M12 20 L20 20 L20 12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

/** Diamond mark — used as eyebrow/label decorators */
function DiamondMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="6" height="6" viewBox="0 0 6 6" fill="none">
      <rect x="3" y="0.5" width="3.5" height="3.5" transform="rotate(45 3 0.5)" fill="currentColor" />
    </svg>
  )
}

/** Architectural grid — replaces noisy dot grids with a cleaner line grid */
function LineGrid({ className = '', gap = 40, opacity = 0.03, color = '#1a3a36' }: {
  className?: string; gap?: number; opacity?: number; color?: string
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity }}
    >
      <defs>
        <pattern id={`linegrid-${gap}`} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <path d={`M ${gap} 0 L 0 0 0 ${gap}`} fill="none" stroke={color} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#linegrid-${gap})`} />
    </svg>
  )
}

/** Tick ruler — horizontal strip of measurement ticks, used at section edges */
function TickRuler({ className = '', light = false }: { className?: string; light?: boolean }) {
  const stroke = light ? 'rgba(201,168,76,0.35)' : 'rgba(42,107,94,0.2)'
  const ticks = Array.from({ length: 40 })
  return (
    <svg className={`w-full ${className}`} height="10" viewBox="0 0 800 10" preserveAspectRatio="none">
      {ticks.map((_, i) => (
        <line
          key={i}
          x1={(i / 40) * 800}
          y1={i % 4 === 0 ? 0 : 4}
          x2={(i / 40) * 800}
          y2={10}
          stroke={stroke}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  )
}

/** Section Label — standardised eyebrow */
function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-2 lg:mb-3 justify-center">
      <DiamondMark className={light ? 'text-[#c9a84c]' : 'text-[#2a6b5e]'} />
      <p className={`text-[10px] lg:text-xs font-bold tracking-[0.22em] uppercase ${light ? 'text-[#c9a84c]' : 'text-[#2a6b5e]'}`}>
        {text}
      </p>
      <DiamondMark className={light ? 'text-[#c9a84c]' : 'text-[#2a6b5e]'} />
    </div>
  )
}

/** Slash divider — angled line, used between sections */
function SlashDivider({ flip = false, dark = false }: { flip?: boolean; dark?: boolean }) {
  const bg = dark ? '#1a3a36' : '#f5f0e8'
  const fill = dark ? '#f5f0e8' : '#1a3a36'
  return (
    <div className="w-full overflow-hidden" style={{ height: 32, background: bg }}>
      <svg viewBox="0 0 1440 32" preserveAspectRatio="none" className="w-full h-full">
        <polygon
          points={flip ? '0,32 1440,32 1440,0' : '0,0 1440,32 0,32'}
          fill={fill}
          fillOpacity="0.05"
        />
        <line x1="0" y1={flip ? 0 : 32} x2="1440" y2={flip ? 32 : 0} stroke={fill} strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    </div>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative bg-[#f5f0e8] overflow-hidden pt-16 lg:pt-0">
      {/* Architectural line grid */}
      <LineGrid gap={48} opacity={0.04} color="#1a3a36" />

      {/* Large diagonal rule lines — blueprint feel */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
        {/* Left diagonal */}
        <line x1="0" y1="100%" x2="15%" y2="0" stroke="#2a6b5e" strokeWidth="0.5" strokeOpacity="0.18" />
        {/* Right diagonal */}
        <line x1="100%" y1="0" x2="85%" y2="100%" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.14" />
        {/* Horizontal mid rule */}
        <line x1="0" y1="50%" x2="20%" y2="50%" stroke="#2a6b5e" strokeWidth="0.5" strokeOpacity="0.12" />
        <line x1="80%" y1="50%" x2="100%" y2="50%" stroke="#2a6b5e" strokeWidth="0.5" strokeOpacity="0.12" />
      </svg>

      {/* Corner brackets — four corners */}
      <CornerBracket className="absolute top-6 left-6 text-[#2a6b5e] opacity-25 hidden lg:block" size={28} />
      <CornerBracket className="absolute top-6 right-6 text-[#c9a84c] opacity-20 hidden lg:block" size={28} />
      <CornerBracket className="absolute bottom-6 left-6 text-[#2a6b5e] opacity-15 hidden lg:block" size={24} />
      <CornerBracket className="absolute bottom-6 right-6 text-[#c9a84c] opacity-15 hidden lg:block" size={24} />

      {/* Thin vertical rules on left/right — frame side panels */}
      <div className="hidden lg:block absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a6b5e]/12 to-transparent pointer-events-none" />
      <div className="hidden lg:block absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a6b5e]/12 to-transparent pointer-events-none" />

      {/* Side images */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[20%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-[8%] left-5 right-5 h-[42%] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#1a3a36]/10"
        >
          <img src="/about1.png" alt="Al Mazaya medical team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/30 to-transparent" />
          {/* Image corner bracket overlay */}
          <CornerBracket className="absolute top-2 left-2 text-white opacity-30" size={14} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[54%] left-5 right-5 h-[36%] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#1a3a36]/10"
        >
          <img src="/about2.png" alt="Clinical staff" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/30 to-transparent" />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[20%] pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[5%] left-5 right-5 h-[36%] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#1a3a36]/10"
        >
          <img src="/about3.png" alt="Emergency care" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/30 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-[45%] left-5 right-5 h-[45%] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#1a3a36]/10"
        >
          <img src="/about4.png" alt="Patient care" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/30 to-transparent" />
        </motion.div>
      </div>

      {/* Center content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[auto] lg:min-h-screen py-8 lg:py-16 px-5 text-center lg:mx-[22%]">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3 lg:mb-5"
        >
          <span className="h-px w-8 lg:w-14 bg-[#2a6b5e]/40" />
          <DiamondMark className="text-[#2a6b5e]" />
          <p className="text-[10px] lg:text-xs font-bold tracking-[0.22em] text-[#2a6b5e] uppercase">About Al Mazaya</p>
          <DiamondMark className="text-[#2a6b5e]" />
          <span className="h-px w-8 lg:w-14 bg-[#2a6b5e]/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[1.05] text-[#1a3a36] mb-3 lg:mb-4 tracking-tight"
        >
          Your Trusted Partner
          <br />
          <em className="text-[#2a6b5e]">in Health & Wellness</em>
        </motion.h1>

        {/* Signature gold rule — the one bold decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative flex items-center justify-center gap-2 mb-3 lg:mb-5 w-full"
        >
          <span className="h-px flex-1 max-w-[60px] lg:max-w-[100px] bg-gradient-to-r from-transparent to-[#c9a84c]/60" />
          <DiamondMark className="text-[#c9a84c]" />
          <span className="h-px w-10 bg-[#c9a84c]" />
          <DiamondMark className="text-[#c9a84c]" />
          <span className="h-px flex-1 max-w-[60px] lg:max-w-[100px] bg-gradient-to-l from-transparent to-[#c9a84c]/60" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm lg:text-lg text-[#1a3a36]/65 leading-relaxed mb-5 max-w-sm font-light"
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
            className="px-7 py-3.5 lg:px-8 lg:py-4 bg-[#2a6b5e] text-white rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a5040] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2a6b5e]/20 hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" /> Call Us
          </a>
          <a
            href="#story"
            className="px-7 py-3.5 lg:px-8 lg:py-4 border border-[#1a3a36]/25 text-[#1a3a36] rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a3a36]/5 transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap hover:-translate-y-0.5"
          >
            Our Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Mobile image grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="lg:hidden grid grid-cols-2 gap-3 mt-6 w-full max-w-[320px]"
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md ring-1 ring-[#1a3a36]/10">
            <img src="/about1.png" alt="Al Mazaya" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-md ring-1 ring-[#1a3a36]/10 mt-6">
            <img src="/about4.png" alt="Al Mazaya" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-[#1a3a36]/12 w-full max-w-[340px] lg:max-w-none mx-auto"
        >
          <div className="grid grid-cols-5 gap-2">
            {[
              { number: '~80', label: 'Employees' },
              { number: '25+', label: 'Nurses' },
              { number: '12', label: 'Drivers' },
              { number: '18', label: 'Ambulances' },
              { number: '2021', label: 'Founded' },
            ].map((stat, i) => (
              <div key={i} className="text-center relative">
                {/* Vertical separator except last */}
                {i > 0 && (
                  <div className="absolute -left-px top-1/4 h-1/2 w-px bg-[#1a3a36]/10" />
                )}
                <div className="text-sm lg:text-2xl font-bold text-[#c9a84c] mb-1">{stat.number}</div>
                <div className="text-[7px] lg:text-[10px] text-[#1a3a36]/50 font-medium tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom tick ruler */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <TickRuler />
      </div>
    </section>
  )
}

// ─── STORY / HISTORY ──────────────────────────────────────────────────────────
function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="story" ref={ref} className="py-6 lg:py-14 bg-[#f5f0e8] relative overflow-hidden">
      <LineGrid gap={56} opacity={0.025} color="#1a3a36" />

      {/* Side vertical rule */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a6b5e]/10 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent hidden lg:block" />

      <div className="mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 mb-6 lg:mb-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel text="Our History" />
            <h2 className="font-serif text-[clamp(2rem,4vw,4.2rem)] leading-tight text-[#1a3a36] tracking-tight">
              Our Journey
              <br />
              <em className="text-[#2a6b5e]">from clinic to kingdom</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xs lg:text-lg text-[#1a3a36]/65 font-light leading-relaxed"
          >
            Since founding Al Mazaya, industrial medical services have been offered and commissioned to contractor clients in construction and civil works — growing to a kingdom-wide presence serving Saudi Aramco and major industrial contractors.
          </motion.p>
        </div>

        {/* Timeline — 4 columns */}
        <div className="grid grid-cols-4 gap-0 border border-[#1a3a36]/12 rounded-2xl overflow-hidden shadow-sm">
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
              desc: 'Al Mazaya Advanced Medical Complex established in urban Dammam. Clinics: GP, Pediatrics, Dental, Dermatology, OB Gyne, and Occupational Medicine.',
              img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=85',
            },
            {
              year: '2024',
              title: 'RAC Certification',
              desc: 'Formally approved as a Saudi Aramco RAC provider under Johns Hopkins Aramco Operational Medicine. Valid through January 2027.',
              img: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=85',
            },
            {
              year: '2024',
              title: 'Fleet & Team Expansion',
              desc: 'Fleet grew to 18 ambulances — 10 H1 and 8 four-wheel-drive units — actively deployed across Saudi Arabia.',
              img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=85',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className={`relative group flex flex-col ${i < 3 ? 'border-r border-[#1a3a36]/12' : ''}`}
            >
              <div className="relative h-20 lg:h-52 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/75 via-[#1a3a36]/30 to-transparent" />
                <span className="absolute bottom-2 left-2 lg:bottom-4 lg:left-5 text-[8px] lg:text-sm font-bold text-[#c9a84c] tracking-widest">{item.year}</span>
                {/* Year underline accent */}
                <span className="absolute bottom-1.5 left-2 lg:bottom-3 lg:left-5 w-4 h-px bg-[#c9a84c]/60" />
              </div>
              <div className="p-2 lg:p-6 bg-[#f5f0e8] flex-1 relative">
                <span className="absolute top-2 right-2 lg:top-4 lg:right-4 text-[8px] lg:text-[10px] font-bold text-[#2a6b5e]/25 tracking-widest tabular-nums">0{i + 1}</span>
                <h3 className="text-[8px] lg:text-base font-bold text-[#1a3a36] mb-1 lg:mb-2 pr-4 leading-snug">{item.title}</h3>
                <p className="text-[#1a3a36]/60 font-light leading-snug lg:leading-relaxed text-[6px] lg:text-sm line-clamp-3 lg:line-clamp-none">{item.desc}</p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c]/20 to-[#c9a84c]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <TickRuler />
      </div>
    </section>
  )
}

// ─── MISSION & VISION ─────────────────────────────────────────────────────────
function MissionVisionSection() {
  return (
    <section className="relative min-h-[40vh] lg:min-h-[65vh] flex items-center overflow-hidden py-10 lg:py-0">
      <img
        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1800&q=85"
        alt="Al Mazaya team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a36]/92 via-[#1a3a36]/82 to-[#0d2420]/90" />

      {/* Line grid on dark */}
      <LineGrid gap={48} opacity={0.04} color="#ffffff" />

      {/* Diagonal accent lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#c9a84c" strokeWidth="0.4" strokeOpacity="0.08" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#c9a84c" strokeWidth="0.4" strokeOpacity="0.08" />
      </svg>

      {/* Top & bottom accent rules */}
      <div className="absolute top-0 left-0 right-0">
        <TickRuler light />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <TickRuler light />
      </div>

      {/* Gold horizontal rule mid */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent" />

      {/* Corner brackets */}
      <CornerBracket className="absolute top-5 left-5 text-[#c9a84c] opacity-20" size={24} />
      <CornerBracket className="absolute top-5 right-5 text-[#c9a84c] opacity-20" size={24} />
      <CornerBracket className="absolute bottom-5 left-5 text-[#c9a84c] opacity-15" size={20} />
      <CornerBracket className="absolute bottom-5 right-5 text-[#c9a84c] opacity-15" size={20} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8 w-full">
        {/* Vertical separator on desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/15 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4 lg:mb-5">
              <DiamondMark className="text-[#c9a84c]" />
              <span className="h-px w-8 bg-[#c9a84c]/50" />
              <p className="text-[9px] lg:text-xs font-bold tracking-[0.22em] text-[#c9a84c] uppercase">Our Mission</p>
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,3.4rem)] text-white leading-tight mb-3 lg:mb-4 tracking-tight">
              Comprehensive care that
              <em className="block text-[#c9a84c]">never compromises.</em>
            </h2>
            <p className="text-white/70 text-xs lg:text-base font-light leading-relaxed mb-5">
              Providing comprehensive healthcare services that align with local and international accreditation standards — keeping patients healthy and comfortable throughout their entire treatment.
            </p>
            <ul className="space-y-2.5 lg:space-y-3">
              {[
                'Keep taking care of patients',
                'Provide the best service for patients',
                'Ensure patients stay healthy and comfortable',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[10px] lg:text-sm font-light">
                  <DiamondMark className="text-[#c9a84c] mt-0.5 flex-none" />
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
            className="lg:pt-8"
          >
            <div className="flex items-center gap-3 mb-4 lg:mb-5">
              <DiamondMark className="text-[#c9a84c]" />
              <span className="h-px w-8 bg-[#c9a84c]/50" />
              <p className="text-[9px] lg:text-xs font-bold tracking-[0.22em] text-[#c9a84c] uppercase">Our Vision</p>
            </div>
            <h3 className="font-serif text-[clamp(1.5rem,2vw,2.8rem)] text-white leading-tight mb-1">
              Be ethically
            </h3>
            <h3 className="font-serif text-[clamp(1.8rem,2.2vw,3.6rem)] text-[#c9a84c] leading-tight mb-4 lg:mb-5 italic">
              "The best among the rest."
            </h3>
            <p className="text-white/70 text-xs lg:text-base font-light leading-relaxed mb-5">
              Our main focus is providing a broad selection of modern and advanced medical services that prioritize exceptional quality to enhance health outcomes.
            </p>
            <ul className="space-y-2.5 lg:space-y-3">
              {[
                'Continue to look after patients',
                'Give patients the best service possible',
                'Make sure patients are comfortable',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60 text-[10px] lg:text-sm font-light">
                  <DiamondMark className="text-[#c9a84c] mt-0.5 flex-none" />
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
    { stat: 'Quality', sub: 'Uncompromising adherence to the highest medical standards.', icon: '◇' },
    { stat: 'Safety', sub: 'Patient safety is our foundational priority in every protocol.', icon: '◈' },
    { stat: 'Efficiency', sub: 'Streamlined care delivery ensuring quick treatment times.', icon: '◉' },
    { stat: 'Reliability', sub: 'Consistent, dependable healthcare — available around the clock.', icon: '⊕' },
    { stat: 'Dedication', sub: 'A compassionate and competent team committed to your well-being.', icon: '◎' },
  ]

  return (
    <section className="py-8 lg:py-14 bg-[#f5f0e8] relative overflow-hidden">
      <LineGrid gap={48} opacity={0.03} color="#1a3a36" />

      {/* Horizontal rule across the middle */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a6b5e]/08 to-transparent hidden lg:block" />

      <div className="mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-10"
        >
          <SectionLabel text="Our Values" />
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            The principles behind
            <em className="text-[#2a6b5e]"> every decision</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-0 lg:border lg:border-[#1a3a36]/10 lg:rounded-2xl overflow-hidden lg:divide-x lg:divide-[#1a3a36]/10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center justify-start py-5 px-4 lg:py-10 lg:px-6 rounded-xl lg:rounded-none bg-white/50 hover:bg-white transition-all duration-300 group border border-[#1a3a36]/8 lg:border-0 hover:shadow-md lg:hover:shadow-none relative ${i === 4 ? 'col-span-2 sm:col-span-3 lg:col-span-1' : ''}`}
            >
              {/* Top gold accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c] to-[#c9a84c]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center lg:block hidden" />

              {/* Circle with architectural lines */}
              <div className="relative w-16 h-16 lg:w-28 lg:h-28 mb-4 lg:mb-5 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 112 112">
                  {/* Outer ring */}
                  <circle cx="56" cy="56" r="52" fill="none" stroke="#1a3a36" strokeWidth="0.8" strokeOpacity="0.1" />
                  {/* Inner ring */}
                  <circle cx="56" cy="56" r="38" fill="none" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="3 5" />
                  {/* Cross lines */}
                  <line x1="56" y1="4" x2="56" y2="18" stroke="#2a6b5e" strokeWidth="0.6" strokeOpacity="0.2" />
                  <line x1="56" y1="94" x2="56" y2="108" stroke="#2a6b5e" strokeWidth="0.6" strokeOpacity="0.2" />
                  <line x1="4" y1="56" x2="18" y2="56" stroke="#2a6b5e" strokeWidth="0.6" strokeOpacity="0.2" />
                  <line x1="94" y1="56" x2="108" y2="56" stroke="#2a6b5e" strokeWidth="0.6" strokeOpacity="0.2" />
                  {/* Corner ticks at 45° */}
                  <line x1="18" y1="18" x2="26" y2="26" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.2" />
                  <line x1="94" y1="18" x2="86" y2="26" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.2" />
                </svg>
                {/* Center dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c9a84c] opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="font-serif text-[10px] lg:text-sm font-bold text-[#1a3a36] text-center leading-tight px-1 relative z-10">{v.stat}</span>
              </div>
              <p className="text-[#1a3a36]/60 text-[9px] lg:text-xs font-light text-center leading-relaxed lg:max-w-[120px]">{v.sub}</p>
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
      tag: '24 / 7',
    },
    {
      title: 'Wheelchair & Handicap Access',
      desc: 'Dedicated handicapped parking bays, wheelchair-accessible ramps, and specially equipped ER stations ensure every patient receives dignified, barrier-free care.',
      img: '/modern.png',
      tag: 'Inclusive',
    },
    {
      title: 'Modern Multi-Specialty Clinics',
      desc: 'State-of-the-art clinic rooms invested in and upgraded since 2021 — equipped with the latest medical machines across all confirmed specialties.',
      img: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&q=85',
      tag: 'Advanced',
    },
    {
      title: 'MMSR-JHAH Ambulance Fleet',
      desc: 'A fleet of 10 H1 and 8 four-wheel-drive ambulances fully equipped to MMSR-JHAH standards — emergency response bags, Nitronox, Robert Shaw devices — with trained paramedic teams.',
      img: '/emergency.png',
      tag: '18 Units',
    },
  ]

  return (
    <section className="py-8 lg:py-14 bg-[#f5f0e8] relative overflow-hidden">
      <LineGrid gap={56} opacity={0.025} color="#1a3a36" />

      <div className="mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 lg:mb-10 text-center"
        >
          <SectionLabel text="Facilities" />
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight max-w-2xl mx-auto">
            State-of-the-art
            <em className="text-[#2a6b5e]"> facilities for all</em>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5 lg:gap-10">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`flex flex-col lg:flex-row items-center gap-5 lg:gap-14 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative h-52 sm:h-72 lg:h-[420px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg group ring-1 ring-[#1a3a36]/8">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a36]/55 via-transparent to-transparent" />
                {/* Tag badge */}
                <div className="absolute top-3 left-3 lg:top-5 lg:left-5 bg-[#c9a84c] text-[#1a3a36] text-[9px] lg:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  {f.tag}
                </div>
                {/* Corner bracket on image */}
                <CornerBracket className="absolute top-3 right-3 lg:top-5 lg:right-5 text-white opacity-25" size={16} />
                {/* Step number watermark */}
                <div className="absolute bottom-3 right-4 text-white/15 font-serif text-5xl lg:text-8xl font-bold leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center px-2 lg:px-6 text-center lg:text-left">
                {/* Eyebrow with diamond */}
                <div className={`flex items-center gap-3 mb-3 lg:mb-5 justify-center lg:justify-start ${i % 2 !== 0 ? 'lg:flex-row-reverse lg:justify-end' : ''}`}>
                  <DiamondMark className="text-[#c9a84c]" />
                  <span className="h-px w-10 bg-[#c9a84c]/50" />
                  <span className="text-[9px] font-bold tracking-widest text-[#c9a84c] uppercase tabular-nums">0{i + 1}</span>
                </div>
                <h3 className="text-lg lg:text-3xl font-bold text-[#1a3a36] mb-2 lg:mb-4 leading-tight">{f.title}</h3>
                <p className="text-[#1a3a36]/60 text-xs sm:text-sm lg:text-lg font-light leading-relaxed">{f.desc}</p>

                {/* Bottom rule */}
                <div className="mt-3 lg:mt-5 h-px bg-gradient-to-r from-[#2a6b5e]/15 via-[#c9a84c]/20 to-transparent" />
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
    <section ref={ref} className="py-8 lg:py-14 bg-[#1a3a36] relative overflow-hidden">
      {/* Line grid on dark */}
      <LineGrid gap={48} opacity={0.06} color="#ffffff" />

      {/* Angled structural lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
        <line x1="0" y1="100%" x2="25%" y2="0" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.06" />
        <line x1="100%" y1="0" x2="75%" y2="100%" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.06" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.3" strokeOpacity="0.03" />
      </svg>

      {/* Corner brackets */}
      <CornerBracket className="absolute top-6 left-6 text-[#c9a84c] opacity-18" size={28} />
      <CornerBracket className="absolute top-6 right-6 text-[#c9a84c] opacity-18" size={28} />

      {/* Top & bottom tick rules */}
      <div className="absolute top-0 left-0 right-0">
        <TickRuler light />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <TickRuler light />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/25 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6 lg:mb-10"
        >
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <DiamondMark className="text-[#c9a84c]" />
            <span className="h-px w-8 bg-[#c9a84c]/50" />
            <p className="text-[10px] lg:text-xs font-bold tracking-[0.22em] text-[#c9a84c] uppercase">MMSR-JHAH Compliance</p>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-white leading-tight tracking-tight max-w-3xl">
            Meeting the highest
            <em className="block text-[#c9a84c]">industrial medical standards</em>
          </h2>
          <p className="text-white/55 text-xs lg:text-base font-light leading-relaxed mt-3 lg:mt-5 max-w-2xl">
            Al Mazaya is committed to full compliance with the Minimum Medical Standards Requirements (MMSR) under Johns Hopkins Aramco Healthcare (JHAH) — ensuring quality, safety, efficiency, and reliability across all industrial clinic operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Staff Training */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] transition-colors duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c]/60 to-[#c9a84c]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/12 border border-[#c9a84c]/20 flex items-center justify-center mb-3">
              <Award className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-2">Staff Training Programs</h3>
            <p className="text-white/45 text-[11px] lg:text-sm font-light leading-relaxed mb-5">
              All clinical staff undergo comprehensive life-support certifications.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {trainings.map((t, i) => (
                <div key={i} className="bg-white/[0.04] rounded-xl p-2.5 lg:p-3 border border-white/[0.06] hover:border-[#c9a84c]/30 transition-colors">
                  <div className="text-[#c9a84c] font-bold text-[10px] lg:text-sm mb-0.5">{t.code}</div>
                  <div className="text-white/40 text-[8px] lg:text-[10px] font-light leading-tight">{t.full}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RAC Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] transition-colors duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c]/60 to-[#c9a84c]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/12 border border-[#c9a84c]/20 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-2">RAC Equipment</h3>
            <p className="text-white/45 text-[11px] lg:text-sm font-light leading-relaxed mb-5">
              Assets requisitioned to MMSR-JHAH Clinic specifications.
            </p>
            <ul className="space-y-2.5">
              {equipment.map((e, i) => (
                <li key={i} className="flex items-center gap-2.5 text-white/55 text-[10px] lg:text-sm font-light border-b border-white/[0.05] pb-2 last:border-0 last:pb-0">
                  <DiamondMark className="text-[#c9a84c] flex-none" />
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Competency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] transition-colors duration-300 relative overflow-hidden group md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c]/60 to-[#c9a84c]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
            <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/12 border border-[#c9a84c]/20 flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <h3 className="text-base lg:text-lg font-bold text-white mb-2">Competency Assess.</h3>
            <p className="text-white/45 text-[11px] lg:text-sm font-light leading-relaxed mb-5">
              Assessments cover all clinical staff and drivers.
            </p>
            <div className="space-y-3">
              {[
                { label: 'RN / EMS / MD', note: 'Clinical personnel' },
                { label: 'Drivers', note: 'Transport-trained' },
                { label: 'RAC Site Teams', note: 'Led by Team Leader' },
                { label: 'Disaster Resp.', note: 'Equipped to deploy' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/[0.07] pb-2.5 last:border-0 last:pb-0">
                  <div>
                    <div className="text-white/75 text-[10px] lg:text-sm font-medium">{item.label}</div>
                    <div className="text-white/30 text-[8px] lg:text-xs font-light">{item.note}</div>
                  </div>
                  <DiamondMark className="text-[#2a6b5e] flex-none" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Fleet highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-4 bg-gradient-to-r from-[#c9a84c]/8 via-[#c9a84c]/4 to-transparent border border-[#c9a84c]/18 rounded-2xl p-6 lg:p-10 relative overflow-hidden"
        >
          {/* Diagonal line in card */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#c9a84c" strokeWidth="0.5" strokeOpacity="0.08" />
          </svg>
          <CornerBracket className="absolute top-4 right-4 text-[#c9a84c] opacity-15" size={20} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                <DiamondMark className="text-[#c9a84c]" />
                <span className="h-px w-6 bg-[#c9a84c]/50" />
                <p className="text-[10px] lg:text-xs font-bold tracking-[0.22em] text-[#c9a84c] uppercase">Ambulance Fleet</p>
              </div>
              <h3 className="font-serif text-xl lg:text-3xl text-white mb-2 lg:mb-3">
                18 ambulances deployed kingdom-wide
              </h3>
              <p className="text-white/50 text-[11px] lg:text-sm font-light leading-relaxed">
                Our fleet comprises 10 H1 ambulances and 8 four-wheel-drive units — all equipped to MMSR-JHAH standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { n: '10', label: 'H1 Ambulances' },
                { n: '8', label: '4×4 Units' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-white/[0.04] rounded-xl border border-[#c9a84c]/12 relative overflow-hidden">
                  <CornerBracket className="absolute top-1 left-1 text-[#c9a84c] opacity-15" size={10} />
                  <div className="text-2xl lg:text-4xl font-bold text-[#c9a84c]">{item.n}</div>
                  <div className="text-white/40 text-[9px] lg:text-xs font-light mt-1">{item.label}</div>
                </div>
              ))}
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
    { name: 'Majan Construction', logo: '/logos/ohi.png' },
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
        className="group rounded-xl border border-[#1a3a36]/10 bg-white/60 p-3 lg:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/35 hover:bg-white hover:shadow-md relative overflow-hidden"
      >
        {/* Top line on hover */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c] to-[#c9a84c]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
        <div className="flex h-12 lg:h-16 items-center justify-center rounded-lg bg-[#f5f0e8] px-2 py-2 lg:px-4 lg:py-3">
          {client.logo ? (
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
            />
          ) : (
            <span className="font-serif text-sm lg:text-2xl text-[#1a3a36] tracking-tight">{initials}</span>
          )}
        </div>
        <div className="mt-2 lg:mt-3 text-center text-[8px] lg:text-xs font-semibold uppercase tracking-wide text-[#1a3a36]/60 truncate lg:whitespace-normal">
          {client.name}
        </div>
      </motion.div>
    )
  }

  return (
    <section className="py-8 lg:py-14 bg-[#f5f0e8] relative overflow-hidden">
      <LineGrid gap={52} opacity={0.025} color="#1a3a36" />

      {/* Vertical side rules */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2a6b5e]/08 to-transparent hidden lg:block" />
      <div className="absolute right-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a84c]/08 to-transparent hidden lg:block" />

      <div className="mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 lg:mb-10 text-center"
        >
          <SectionLabel text="Active Clients" />
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            Trusted by Saudi Arabia's
            <em className="block text-[#2a6b5e]"> leading industrial companies</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Aramco */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#1a3a36]/10 bg-white/55 p-5 lg:p-7 shadow-sm"
          >
            {/* Gold top bar */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c] to-[#c9a84c]/0" />
            <CornerBracket className="absolute bottom-3 right-3 text-[#c9a84c] opacity-12" size={16} />
            <div className="flex items-center justify-between gap-2 mb-5 lg:mb-6">
              <div>
                <p className="text-[9px] lg:text-xs font-bold tracking-[0.18em] text-[#2a6b5e] uppercase mb-1">Saudi Aramco Clients</p>
                <h3 className="font-serif text-lg lg:text-2xl text-[#1a3a36] leading-tight">Industrial partners</h3>
              </div>
              <div className="rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/8 px-3 py-1 text-[9px] lg:text-xs font-bold text-[#c9a84c]">
                6 accounts
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:gap-3">
              {aramcoClients.map((client, index) => renderClientMark(client, index))}
            </div>
          </motion.div>

          {/* Non-Aramco */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#1a3a36]/10 bg-white/55 p-5 lg:p-7 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#1a3a36]/0 via-[#1a3a36]/55 to-[#1a3a36]/0" />
            <CornerBracket className="absolute bottom-3 right-3 text-[#1a3a36] opacity-08" size={16} />
            <div className="flex items-center justify-between gap-2 mb-5 lg:mb-6">
              <div>
                <p className="text-[9px] lg:text-xs font-bold tracking-[0.18em] text-[#1a3a36]/50 uppercase mb-1">Non-Aramco Clients</p>
                <h3 className="font-serif text-lg lg:text-2xl text-[#1a3a36] leading-tight">Private sector partners</h3>
              </div>
              <div className="rounded-full border border-[#1a3a36]/15 bg-[#1a3a36]/5 px-3 py-1 text-[9px] lg:text-xs font-bold text-[#1a3a36]/55">
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
    { badge: 'MOH', title: 'Ministry of Health', subtitle: 'Licensed Base', year: '2021', achieved: true, logo: '/moh.png' },
    { badge: 'RAC', title: 'Saudi Aramco RAC', subtitle: 'Approved Unit', year: '2024', achieved: true, logo: '/aramco.png' },
    { badge: 'JHAH', title: 'MMSR Standards', subtitle: 'Fleet Compliant', year: '2024', achieved: true, logo: '/jhah.png' },
    { badge: 'ISO', title: 'ISO Certification', subtitle: 'In Pipeline', year: 'Pursuing', achieved: false, logo: '/iso.png' },
    { badge: 'CBAHI', title: 'CBAHI Quality', subtitle: 'In Pipeline', year: 'Pursuing', achieved: false, logo: '/cbahi.png' },
  ]

  return (
    <section className="py-8 lg:py-14 bg-[#f5f0e8] relative overflow-hidden">
      <LineGrid gap={48} opacity={0.025} color="#1a3a36" />

      <div className="mx-auto max-w-6xl px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-10"
        >
          <SectionLabel text="Certifications & Accreditations" />
          <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-[#1a3a36] leading-tight tracking-tight">
            An accredited and <em className="text-[#2a6b5e]">trusted institution</em>
          </h2>
          <p className="text-[#1a3a36]/45 text-xs lg:text-base font-light mt-3 max-w-xl mx-auto leading-relaxed">
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
              <div className={`relative w-full max-w-[160px] lg:max-w-none aspect-square flex items-center justify-center mb-3 rounded-2xl p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${cert.achieved ? 'bg-white/60 border border-[#1a3a36]/8 shadow-sm' : 'bg-white/25 border border-[#1a3a36]/5'}`}>
                {/* Inner architectural ring */}
                <div className={`absolute inset-3 rounded-xl border ${cert.achieved ? 'border-[#2a6b5e]/8' : 'border-[#c9a84c]/12 border-dashed'}`} />
                {/* Corner bracket marks */}
                <CornerBracket className={`absolute top-1.5 left-1.5 opacity-15 ${cert.achieved ? 'text-[#2a6b5e]' : 'text-[#c9a84c]'}`} size={10} />
                <img
                  src={cert.logo}
                  alt={`${cert.badge} Logo`}
                  className={`max-w-[68%] max-h-[68%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105 ${cert.achieved ? 'opacity-85' : 'opacity-45'}`}
                />
                {!cert.achieved && (
                  <div className="absolute top-2 right-2">
                    <span className="text-[8px] lg:text-[9px] text-[#c9a84c] font-bold tracking-wider uppercase border border-[#c9a84c]/35 rounded-full px-2 py-0.5 bg-white/85">
                      Soon
                    </span>
                  </div>
                )}
                {cert.achieved && (
                  <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#2a6b5e] flex items-center justify-center ring-2 ring-white/50">
                    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
              <h3 className="text-xs lg:text-sm font-bold text-[#1a3a36] leading-snug">{cert.title}</h3>
              <p className="text-[#2a6b5e] text-[9px] lg:text-[10px] font-bold mt-1 tracking-widest uppercase">
                {cert.badge}{cert.year !== 'Pursuing' && ` · ${cert.year}`}
              </p>
              <p className="text-[#1a3a36]/45 text-[9px] lg:text-xs font-light mt-0.5 leading-tight">{cert.subtitle}</p>
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
    <section className="py-8 lg:py-14 bg-[#f5f0e8] relative overflow-hidden">
      <LineGrid gap={40} opacity={0.03} color="#1a3a36" />

      {/* Large architectural X crossing the section */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#2a6b5e" strokeWidth="0.4" strokeOpacity="0.06" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#c9a84c" strokeWidth="0.4" strokeOpacity="0.06" />
      </svg>

      {/* Corner brackets at all 4 corners */}
      <CornerBracket className="absolute top-6 left-6 text-[#2a6b5e] opacity-18" size={28} />
      <CornerBracket className="absolute top-6 right-6 text-[#c9a84c] opacity-15" size={28} />
      <CornerBracket className="absolute bottom-6 left-6 text-[#2a6b5e] opacity-12" size={24} />
      <CornerBracket className="absolute bottom-6 right-6 text-[#c9a84c] opacity-12" size={24} />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2a6b5e]/25 to-transparent" />
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <TickRuler />
      </div>

      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SectionLabel text="Get Started" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-[clamp(2rem,4vw,4.4rem)] text-[#1a3a36] mb-2 lg:mb-4 leading-tight tracking-tight"
        >
          Ready for quality
          <br className="lg:hidden" />
          <em className="text-[#2a6b5e]"> healthcare?</em>
        </motion.h2>

        {/* Diamond rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-4 lg:mb-6"
        >
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
          <DiamondMark className="text-[#c9a84c]" />
          <span className="h-px w-8 bg-[#c9a84c]/70" />
          <DiamondMark className="text-[#c9a84c]" />
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xs lg:text-xl text-[#1a3a36]/55 font-light mb-6 lg:mb-8 max-w-sm lg:max-w-xl mx-auto leading-relaxed"
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
            className="w-full sm:w-auto px-7 py-3.5 lg:px-9 lg:py-4 bg-[#2a6b5e] text-white rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a5040] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-[#2a6b5e]/20 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" /> Call +966 50 538 7020
          </a>
          <a
            href="https://wa.me/966505387020"
            className="w-full sm:w-auto px-7 py-3.5 lg:px-9 lg:py-4 border-2 border-[#1a3a36] text-[#1a3a36] rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a3a36] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
          <a
            href="https://salla.sa/mazaya-clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 lg:px-9 lg:py-4 border border-[#1a3a36]/22 text-[#1a3a36]/60 rounded-full font-semibold text-xs lg:text-sm hover:bg-[#1a3a36]/5 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap hover:-translate-y-0.5"
          >
            Visit Our Store
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="text-[#1a3a36]/30 text-[9px] lg:text-xs mt-6 pt-4 border-t border-[#1a3a36]/8"
        >
          Al Mazaya Advanced Medical Complex • Dammam, King Saud Street, Eastern Province, Saudi Arabia
          <br />
          <span className="mt-1 inline-block font-medium text-[#2a6b5e]/55">salla.sa/mazaya-clinic</span>
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