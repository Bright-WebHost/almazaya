'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Phone, MessageCircle, Mail,
  Check, Stethoscope, Heart, Baby, Sparkles,
  Brain, Users, Scissors, FlaskConical, AlertCircle, Home,
  HardHat, Microscope, ChevronDown
} from 'lucide-react'
import Link from 'next/link'

// ─── DECORATIVE COMPONENTS ────────────────────────────────────────────────────

// Animated SVG Blob
function AnimatedBlob({ 
  top, 
  left, 
  right,
  bottom,
  size = 200, 
  delay = 0, 
  opacity = 0.1 
}: { 
  top?: string; 
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  delay?: number;
  opacity?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      style={{ top, left, right, bottom, position: 'absolute', width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: opacity,
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 20 + delay, 
        repeat: Infinity,
        delay: delay
      }}
      className="pointer-events-none"
    >
      <defs>
        <filter id={`blob-${delay}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
        </filter>
      </defs>
      <circle cx="100" cy="100" r="80" fill="#D4B670" filter={`url(#blob-${delay})`} />
    </motion.svg>
  )
}

// Floating Circle with Border
function FloatingCircle({ 
  top, 
  left, 
  right,
  bottom,
  size = 100, 
  delay = 0, 
  borderColor = '#D4B670' 
}: { 
  top?: string; 
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  delay?: number;
  borderColor?: string;
}) {
  return (
    <motion.div
      style={{ top, left, right, bottom, position: 'absolute' }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay: delay }}
      className="pointer-events-none"
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `2px solid ${borderColor}`,
          opacity: 0.15,
        }}
      />
    </motion.div>
  )
}

// Animated Line
function AnimatedLine({ 
  x1, y1, x2, y2, 
  startPosition = 0,
  delay = 0 
}: { 
  x1: number; 
  y1: number; 
  x2: number; 
  y2: number; 
  startPosition?: number;
  delay?: number;
}) {
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  
  return (
    <motion.svg
      viewBox="0 0 1000 1000"
      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
      className="pointer-events-none"
    >
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#D4B670"
        strokeWidth="2"
        strokeDasharray={length}
        strokeDashoffset={length}
        initial={{ strokeDashoffset: length }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, delay, ease: 'easeInOut' }}
        opacity="0.3"
      />
    </motion.svg>
  )
}

// Decorative Grid Background
function DecorativeGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full opacity-5" style={{ minHeight: '100vh' }}>
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D4B670" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

// Animated Dot Pattern
function DotPattern({ count = 5, delay = 0 }: { count?: number; delay?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4,
            height: 4,
            background: '#D4B670',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: delay + i * 0.2
          }}
        />
      ))}
    </div>
  )
}

// Curved Decorative Line
function CurvedLine({ top, right, size = 300 }: { top: string; right: string; size?: number }) {
  return (
    <motion.svg
      viewBox="0 0 300 300"
      style={{ 
        position: 'absolute', 
        top, 
        right, 
        width: size, 
        height: size,
        pointerEvents: 'none'
      }}
      initial={{ opacity: 0, rotate: -20 }}
      animate={{ opacity: 0.3, rotate: 0 }}
      transition={{ duration: 1.5 }}
    >
      <path
        d="M 10,290 Q 150,50 290,10"
        fill="none"
        stroke="#D4B670"
        strokeWidth="2"
        strokeDasharray="10,5"
      />
    </motion.svg>
  )
}

// Hexagon Shape
function HexagonShape({ 
  top, 
  left, 
  right,
  bottom,
  size = 100, 
  delay = 0 
}: { 
  top?: string; 
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      style={{ 
        position: 'absolute', 
        top, 
        left,
        right,
        bottom,
        width: size, 
        height: size,
        pointerEvents: 'none'
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 15 + delay, repeat: Infinity, delay }}
    >
      <polygon
        points="50,10 90,30 90,70 50,90 10,70 10,30"
        fill="none"
        stroke="#A8D5D0"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </motion.svg>
  )
}

// Triangle Shape
function TriangleShape({ top, right, size = 80, delay = 0 }: { 
  top: string; 
  right: string; 
  size?: number;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      style={{ 
        position: 'absolute', 
        top, 
        right, 
        width: size, 
        height: size,
        pointerEvents: 'none'
      }}
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, delay }}
    >
      <polygon
        points="50,10 90,90 10,90"
        fill="none"
        stroke="#D4B670"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </motion.svg>
  )
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

type FilterKey = 'all' | 'specialties' | 'procedures' | 'emergency'

const services = [
  {
    id: 1, num: '01',
    icon: AlertCircle,
    title: 'Emergency Services',
    sub: '24 / 7 Critical Care',
    tag: 'emergency' as FilterKey,
    badge: '24 / 7',
    desc: 'Round-the-clock emergency care with trained trauma teams, rapid-response ambulances meeting MMSR-JHAH standards, and a fully equipped ER facility in central Dammam.',
    details: ['24/7 Emergency Department', 'MMSR-JHAH Ambulance Fleet', 'Trauma & Life Support', 'Industrial RAC Response'],
    img: '/emergency.png',
    imgAlt: 'Emergency medical team',
  },
  {
    id: 2, num: '02',
    icon: Stethoscope,
    title: 'Dental & Cosmetic Dentistry',
    sub: 'Full-Spectrum Oral Care',
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: 'From routine checkups and restorations to cosmetic treatments — delivered by dental specialists in a modern environment.',
    details: ['General & Preventive Dentistry', 'Teeth Whitening & Veneers', 'Orthodontics', 'Oral Surgery'],
    img: 'photo-1629909613654-28e377c37b09',
    imgAlt: 'Modern dental clinic',
  },
  {
    id: 3, num: '03',
    icon: Heart,
    title: 'Cardiology',
    sub: 'Heart Health & Prevention',
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: 'Heart care with ECG analysis, echocardiography, and specialist-led preventive programmes tailored to your cardiac risk profile.',
    details: ['ECG & Holter Monitoring', 'Echocardiography', 'Stress Testing', 'Preventive Cardiology'],
    img: '/doctor.png',
    imgAlt: 'Cardiology diagnostics',
  },
  {
    id: 4, num: '04',
    icon: Baby,
    title: 'Pediatrics',
    sub: 'Children & Adolescent Health',
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: 'Care for children from newborn through adolescence — well-child visits, vaccinations, developmental checks, and sick care.',
    details: ['Well-Child Visits', 'Vaccination Programmes', 'Growth Monitoring', 'Sick Care'],
    img: 'photo-1559757148-5c350d0d3c56',
    imgAlt: 'Pediatric care',
  },
  {
    id: 5, num: '05',
    icon: Sparkles,
    title: 'Dermatology & Cosmetics',
    sub: 'Skin & Aesthetic Medicine',
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: 'Medical and aesthetic skin treatments — from chronic skin conditions and acne to cosmetic procedures — all by specialist doctors.',
    details: ['Medical Dermatology', 'Cosmetic Injectables', 'Laser & Light Therapy', 'Acne & Pigmentation'],
    img: 'photo-1616394584738-fc6e612e71b9',
    imgAlt: 'Dermatology treatment',
  },
  {
    id: 6, num: '06',
    icon: Brain,
    title: 'Internal Medicine',
    sub: 'Chronic & Complex Disease',
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: 'Diagnosis and long-term management of chronic and acute internal diseases — diabetes, hypertension, thyroid, and more.',
    details: ['Chronic Disease Management', 'Diabetes & Hypertension', 'Thyroid & Metabolic', 'Full Health Workups'],
    img: 'photo-1530026186672-2cd00ffc50fe',
    imgAlt: 'Internal medicine consultation',
  },
  {
    id: 7, num: '07',
    icon: Users,
    title: 'Obstetrics & Gynecology',
    sub: "Women's Health",
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: "Women's healthcare from prenatal visits and delivery support through gynecological diagnostics and postnatal care.",
    details: ['Prenatal & Antenatal Care', 'Gynecological Exams', 'Ultrasound Imaging', 'Postnatal Follow-up'],
    img: 'photo-1584515933487-779824d29309',
    imgAlt: "Women's health",
  },
  {
    id: 8, num: '08',
    icon: Scissors,
    title: 'General Surgery',
    sub: 'Surgical Care',
    tag: 'procedures' as FilterKey,
    badge: null,
    desc: 'Surgical care in modern, sterile environments — with experienced surgeons and proper post-operative monitoring.',
    details: ['Minor & Major Surgeries', 'Laparoscopic Procedures', 'Wound Management', 'Post-Op Monitoring'],
    img: 'photo-1551601651-2a8555f1a136',
    imgAlt: 'Surgical procedure',
  },
  {
    id: 9, num: '09',
    icon: Stethoscope,
    title: 'Urology',
    sub: 'Kidney, Bladder & Urinary Tract',
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: 'Care for kidney stones, urinary tract conditions, prostate health, and bladder issues — by specialist doctors.',
    details: ['Kidney Stone Treatment', 'Prostate Health', 'Urinary Tract Care', 'Specialist Consultations'],
    img: 'photo-1582750433449-648ed127bb54',
    imgAlt: 'Urology consultation',
  },
  {
    id: 10, num: '10',
    icon: Microscope,
    title: 'Radiology & Ultrasound',
    sub: 'Imaging Diagnostics',
    tag: 'procedures' as FilterKey,
    badge: null,
    desc: 'Diagnostic imaging with fast radiologist reporting — supporting accurate clinical decisions across all departments.',
    details: ['Digital X-Ray', 'Ultrasound & Doppler', 'Radiologist Reporting', 'Urgent Scan Priority'],
    img: 'photo-1559757175-0eb30cd8c063',
    imgAlt: 'Radiology imaging',
  },
  {
    id: 11, num: '11',
    icon: FlaskConical,
    title: 'Medical Laboratory',
    sub: 'Diagnostic Analysis',
    tag: 'procedures' as FilterKey,
    badge: null,
    desc: 'In-house laboratory with fast, accurate diagnostic panels — from routine blood work to pre-employment screenings.',
    details: ['Blood Analysis', 'Microbiology & Culture', 'Pathology Services', 'Pre-employment Panels'],
    img: 'photo-1579154204601-01588f351e67',
    imgAlt: 'Medical laboratory',
  },
  {
    id: 12, num: '12',
    icon: Home,
    title: 'Family Medicine',
    sub: 'Primary Care',
    tag: 'specialties' as FilterKey,
    badge: null,
    desc: 'Your first stop for all health concerns — routine checkups, vaccinations, and referrals to the right specialist.',
    details: ['Routine Health Checks', 'Vaccination Programmes', 'Chronic Care', 'Specialist Referrals'],
    img: 'photo-1505751172876-fa1923c5c528',
    imgAlt: 'Family medicine',
  },
  {
    id: 13, num: '13',
    icon: HardHat,
    title: 'Occupational Medicine',
    sub: 'Industrial Health',
    tag: 'specialties' as FilterKey,
    badge: 'RAC',
    desc: 'JHAH/MMSR-compliant industrial health services for construction and energy contractors — on-site clinics and ambulances across the Kingdom.',
    details: ['MMSR-JHAH Compliance', 'On-site Clinics', 'Ambulance Deployment', 'Pre-employment Medicals'],
    img: 'photo-1504439468489-c8920d796a29',
    imgAlt: 'Industrial health services',
  },
]

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all',         label: 'All Services' },
  { key: 'specialties', label: 'Specialties' },
  { key: 'procedures',  label: 'Procedures' },
  { key: 'emergency',   label: 'Emergency' },
]

const faqs = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'Walk-ins are welcome at any time for our Emergency department. For specialist consultations and procedures, booking ahead helps you get your preferred time with less waiting.',
  },
  {
    q: 'Which insurance providers do you accept?',
    a: 'We accept most major insurance networks in the Kingdom. Call +966 50 538 7020 or bring your insurance card to reception before your visit so we can confirm your cover.',
  },
  {
    q: 'Are industrial health services available outside Dammam?',
    a: 'Yes. Our industrial health team operates on-site clinics and deploys ambulances across project sites all over the Kingdom — for both Aramco and non-Aramco contractors.',
  },
  {
    q: 'How long do lab results take?',
    a: 'Routine results are usually ready within a few hours on the same day. Urgent panels are handled immediately. Our team will let you know as soon as your results are ready.',
  },
]

// ─── PROGRESS SCROLL INDICATOR ────────────────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-[#D4B670] via-[#A8D5D0] to-[#D4B670] origin-left z-50"
    />
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0e2724]">

      {/* Decorative Background Elements */}
      <AnimatedBlob top="-10%" left="-5%" size={300} delay={0} opacity={0.08} />
      <AnimatedBlob top="40%" right="-8%" size={250} delay={2} opacity={0.06} />
      <FloatingCircle top="15%" left="10%" size={150} delay={0} borderColor="#A8D5D0" />
      <FloatingCircle top="60%" right="8%" size={120} delay={1} borderColor="#D4B670" />
      <HexagonShape top="20%" right="5%" size={100} delay={0} />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#D4B670" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* BG photo with parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
          alt="Al Mazaya Medical Complex"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0e2724]/95 via-[#0e2724]/70 to-[#0e2724]/20" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0e2724]/80 via-transparent to-transparent" />
      </motion.div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#D4B670]/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#A8D5D0]/05 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Noise grain */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* Floating pill badges with enhanced animations */}
      {[
        { label: 'Emergency 24/7',  top: '22%', right: '8%',  delay: 0.6 },
        { label: '13+ Specialties', top: '42%', right: '14%', delay: 0.8 },
        { label: 'RAC Compliant',   top: '62%', right: '6%',  delay: 1.0 },
      ].map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, x: 20, y: 0 }}
          animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
          transition={{ 
            duration: 0.7, 
            delay: b.delay,
            y: { duration: 3, repeat: Infinity, delay: b.delay }
          }}
          style={{ top: b.top, right: b.right }}
          className="absolute z-20 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-lg shadow-lg shadow-[#D4B670]/10 lg:flex hover:bg-white/15 transition-colors"
        >
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: b.delay }}
            className="h-2 w-2 rounded-full bg-[#D4B670] shadow-lg shadow-[#D4B670]/60"
          />
          {b.label}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 mx-auto flex min-h-screen max-w-350 flex-col justify-end px-6 pb-16 pt-36 lg:px-10 lg:pb-20"
      >
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex items-center gap-2 text-xs text-white/35"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#D4B670]">Home</Link>
          <span>/</span>
          <span className="text-white/60">Services</span>
        </motion.nav>

        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4B670]"
          >
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-[#D4B670]"
            />
            Al Mazaya Advanced Medical Complex
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-white"
          >
            Comprehensive<br />
            <span className="font-serif italic text-white/70">Medical</span>{' '}
            <span className="bg-linear-to-r from-[#D4B670] to-[#A8D5D0] bg-clip-text text-transparent">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-8 max-w-lg text-base font-light leading-relaxed text-white/55 md:text-lg"
          >
            Healthcare for individuals, families, and the Kingdom's industrial workforce — all in one place in Dammam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="group relative flex items-center gap-2.5 rounded-full bg-[#D4B670] px-7 py-3.5 text-sm font-semibold text-[#174440] transition-all overflow-hidden hover:shadow-[0_0_40px_rgba(212,182,112,0.5)] active:scale-[0.97]">
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative">Contact Us</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
            <a href="tel:+966505387020" className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-[#D4B670]">
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              +966 50 538 7020
            </a>
          </motion.div>
        </div>

        {/* Stat strip with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 sm:grid-cols-4"
        >
          {[
            { v: '13+',  l: 'Medical Specialties' },
            { v: '24/7', l: 'Emergency Care' },
            { v: '80+',  l: 'Clinical Staff' },
            { v: '18+',  l: 'Ambulances Active' },
          ].map((s, i) => (
            <motion.div 
              key={s.l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <p className="text-3xl font-semibold bg-linear-to-r from-[#D4B670] to-[#A8D5D0] bg-clip-text text-transparent md:text-4xl">{s.v}</p>
              <p className="mt-1 text-xs font-light tracking-wide text-white/40">{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}

// ─── FILTER BAR ───────────────────────────────────────────────────────────────

function FilterBar({ active, onChange, count }: {
  active: FilterKey
  onChange: (k: FilterKey) => void
  count: number
}) {
  return (
    <div className="sticky top-0 z-40 border-b border-[#174440]/08 bg-[#FAF9F6]/95 backdrop-blur-xl shadow-sm shadow-[#174440]/05">
      {/* Decorative circles on filter bar */}
      <div className="absolute top-0 left-4 w-2 h-2 rounded-full bg-[#D4B670]/20" />
      <div className="absolute bottom-0 right-8 w-1.5 h-1.5 rounded-full bg-[#A8D5D0]/20" />

      <div className="mx-auto flex max-w-350 items-center gap-2 overflow-x-auto px-6 py-3.5 lg:px-10">
        {filters.map((f, i) => (
          <motion.button
            key={f.key}
            onClick={() => onChange(f.key)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`relative shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              active === f.key
                ? 'bg-[#174440] text-white shadow-lg shadow-[#174440]/20'
                : 'border border-[#174440]/15 bg-white text-[#174440]/60 hover:border-[#174440]/30 hover:text-[#174440] hover:shadow-md hover:shadow-[#174440]/05'
            }`}
          >
            {f.label}
            {active === f.key && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 rounded-full bg-[#174440] -z-10"
                transition={{ type: 'spring', stiffness: 380, damping: 40 }}
              />
            )}
          </motion.button>
        ))}
        <span className="ml-auto shrink-0 text-xs text-[#174440]/40 font-medium">{count} services</span>
      </div>
    </div>
  )
}

// ─── SERVICE ROW ──────────────────────────────────────────────────────────────

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isEven = index % 2 === 0
  const Icon = service.icon
  const imageSrc = service.img.startsWith('/')
    ? service.img
    : `https://images.unsplash.com/${service.img}?auto=format&fit=crop&w=900&q=80`

  return (
    <div ref={ref} className="group relative border-b border-[#174440]/07 last:border-0">

      {/* Decorative elements */}
      {isInView && (
        <>
          <FloatingCircle 
            top={isEven ? "20%" : "60%"} 
            left={isEven ? "5%" : "85%"} 
            size={80} 
            delay={0} 
            borderColor="#D4B670"
          />
          <HexagonShape 
            top={isEven ? "70%" : "15%"} 
            left={isEven ? "90%" : "2%"} 
            size={60} 
            delay={0}
          />
        </>
      )}

      {/* Decorative divider line with number */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-350 px-6 lg:px-10 origin-left"
      >
        <div className="relative h-px bg-linear-to-r from-[#174440]/0 via-[#D4B670]/30 to-[#174440]/0 mb-8 mt-8">
          <span className="absolute -top-3 left-0 px-2 bg-[#FAF9F6] text-[#D4B670] text-xs font-mono font-bold tracking-widest">
            {service.num}
          </span>
          {/* Dots along the line */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#D4B670]/40"
              style={{ top: '-3px', left: `${25 * (i + 1)}%` }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
          ))}
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-350 grid-cols-1 items-stretch lg:grid-cols-2">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden group/image ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="relative h-75 w-full overflow-hidden lg:h-110">
            <img
              src={imageSrc}
              alt={service.imgAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-[1.06]"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0e2724]/60 via-[#0e2724]/20 to-transparent" />

            {/* Decorative shapes on image */}
            <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/15 rounded-lg" />
            <div className="absolute bottom-8 left-6 w-8 h-8 border border-white/20 rounded-full" />

            {/* Ghost number */}
            <span className="pointer-events-none absolute right-4 top-4 select-none font-serif text-[6rem] font-bold leading-none tracking-tighter text-white/08 lg:text-[8rem]">
              {service.num}
            </span>

            {/* Badge with floating animation */}
            {service.badge && (
              <motion.span 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute left-5 top-5 rounded-full bg-linear-to-r from-[#D4B670] to-[#A8D5D0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#0e2724] shadow-lg shadow-[#D4B670]/40"
              >
                {service.badge}
              </motion.span>
            )}

            {/* Hover overlay with service highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-linear-to-t from-[#0e2724]/95 via-[#0e2724]/70 to-transparent flex flex-col justify-end p-6 pointer-events-none"
            >
              <p className="text-white/80 text-sm font-light line-clamp-2">{service.sub}</p>
            </motion.div>

            {/* Bottom bar */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-widest text-white/50">
                {service.sub}
              </p>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/30 backdrop-blur-sm transition-all group-hover/image:bg-[#D4B670] group-hover/image:ring-[#D4B670] group-hover/image:shadow-lg group-hover/image:shadow-[#D4B670]/40 cursor-pointer"
              >
                <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 36 : -36 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col justify-center px-6 py-9 lg:px-0 lg:py-12 relative ${
            isEven
              ? 'lg:order-2 lg:pl-14 lg:pr-10'
              : 'lg:order-1 lg:pl-10 lg:pr-14'
          }`}
        >
          {/* Decorative background circle */}
          <motion.div
            className="absolute -z-10 top-0 right-0 w-32 h-32 rounded-full bg-[#D4B670]/05 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Index label */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4B670]"
          >
            <span className="font-mono text-[#174440]/20">{service.num}</span>
            {service.sub}
          </motion.p>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="mb-4 text-[clamp(1.9rem,3vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[#174440]"
          >
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-serif italic text-[#174440]/60">
              {service.title.split(' ').slice(-1)[0]}
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-6 text-[0.94rem] font-light leading-relaxed text-[#174440]/58"
          >
            {service.desc}
          </motion.p>

          {/* Features with staggered animation */}
          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.details.map((d, i) => (
              <motion.div 
                key={d}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 group/item cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4B670]/25 group-hover/item:bg-[#D4B670]/40 transition-colors mt-0.5"
                >
                  <Check className="h-3 w-3 text-[#174440]" strokeWidth={3} />
                </motion.div>
                <span className="text-[0.82rem] font-medium text-[#174440]/70 group-hover/item:text-[#174440] transition-colors">{d}</span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative border-b border-[#174440]/10 last:border-0 hover:bg-[#174440]/02 transition-colors duration-300"
    >

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-0.5 shrink-0 font-mono text-xs text-[#D4B670] select-none font-bold"
          >
            0{index + 1}
          </motion.span>
          <span className="text-base font-medium text-[#174440] group-hover:text-[#174440]/80 transition-colors">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="mt-0.5 shrink-0"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#174440]/20 text-[#174440]/50 group-hover:border-[#D4B670]/50 group-hover:text-[#D4B670] transition-all bg-[#174440]/02 group-hover:bg-[#D4B670]/05">
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
          </div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-13 pr-10 text-[0.92rem] font-light leading-relaxed text-[#174440]/60 bg-linear-to-r from-[#D4B670]/05 to-transparent">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#174440] py-20 lg:py-28">
      {/* Decorative blobs and shapes */}
      <AnimatedBlob top="5%" left="2%" size={280} delay={0} opacity={0.12} />
      <AnimatedBlob bottom="10%" right="3%" size={250} delay={3} opacity={0.08} />
      <FloatingCircle top="25%" right="10%" size={180} delay={1} borderColor="#A8D5D0" />
      <HexagonShape top="60%" left="5%" size={120} delay={2} />

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#D4B670]/15 blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#A8D5D0]/08 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Subtle background image with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=60"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-10"
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-linear-to-br from-[#174440] via-[#174440]/95 to-[#0d2320]" />

      <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4B670]"
            >
              <motion.span 
                initial={{ width: 0 }}
                animate={isInView ? { width: 32 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-[#D4B670]"
              />
              Contact Us
            </motion.p>
            <h2 className="mb-5 text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white">
              Can't find what<br />
              you're looking{' '}
              <span className="font-serif italic text-[#D4B670]">for?</span>
            </h2>
            <p className="mb-8 max-w-md text-base font-light leading-relaxed text-white/45">
              Talk to our team. We'll help you find the right service or specialist and book a time that works for you.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+966505387020"
                className="relative group overflow-hidden flex items-center gap-2.5 rounded-full bg-[#D4B670] px-7 py-3.5 text-sm font-semibold text-[#174440] transition-all hover:shadow-lg hover:shadow-[#D4B670]/50 active:scale-[0.97]"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Phone className="h-4 w-4 relative" strokeWidth={2} />
                <span className="relative">Call Us</span>
              </a>
              <a
                href="https://wa.me/966505387020"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/75 transition-all hover:border-[#D4B670] hover:text-white hover:bg-white/05 hover:shadow-lg hover:shadow-[#D4B670]/20 active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                WhatsApp
              </a>
              <a
                href="mailto:info@mazayamedical.co"
                className="flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/75 transition-all hover:border-[#D4B670] hover:text-white hover:bg-white/05 hover:shadow-lg hover:shadow-[#D4B670]/20 active:scale-[0.97]"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                Email
              </a>
            </div>
          </motion.div>

          {/* Right — info blocks with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {[
              {
                label: 'Emergency',
                value: '24 / 7',
                note: 'No appointment needed. Walk in any time.',
              },
              {
                label: 'Phone',
                value: '+966 50 538 7020',
                note: 'Primary line for appointments and enquiries.',
              },
              {
                label: 'Location',
                value: 'Dammam',
                note: 'Urban Dammam. Wheelchair accessible facilities.',
              },
              {
                label: 'Industrial Sites',
                value: 'Kingdom-wide',
                note: 'On-site clinics deployed across contractor projects.',
              },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(212, 182, 112, 0.15)' }}
                className="rounded-2xl border border-white/10 bg-white/06 p-6 backdrop-blur-lg transition-all hover:border-white/20 cursor-pointer group relative"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#D4B670]/30 rounded-tr-2xl" />
                
                <motion.p 
                  className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#D4B670]/80 group-hover:text-[#D4B670] transition-colors"
                >
                  {c.label}
                </motion.p>
                <p className="mb-2 text-xl font-semibold text-white">{c.value}</p>
                <p className="text-xs font-light leading-relaxed text-white/45 group-hover:text-white/55 transition-colors">{c.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filtered =
    activeFilter === 'all'
      ? services
      : services.filter((s) => s.tag === activeFilter)

  return (
    <main className="min-h-screen bg-[#FAF9F6]">

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. FILTER TABS */}
      <FilterBar active={activeFilter} onChange={setActiveFilter} count={filtered.length} />

      {/* 3. SERVICE ROWS */}
      <section className="bg-[#FAF9F6] relative">
        {/* Background decorations */}
        <FloatingCircle top="10%" left="5%" size={200} delay={0} borderColor="#D4B670" />
        <HexagonShape top="50%" right="8%" size={150} delay={1} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {filtered.map((s, i) => (
              <ServiceRow key={s.id} service={s} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. FAQ */}
      <section className="py-14 lg:py-20 relative">
        {/* Decorative elements in FAQ */}
        <FloatingCircle top="20%" left="8%" size={120} delay={2} borderColor="#A8D5D0" />

        <div className="mx-auto max-w-350 px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[360px_1fr] lg:gap-20">

            {/* Sticky left heading */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    transition={{ duration: 0.6 }}
                    className="h-px bg-[#D4B670]"
                  />
                  FAQ
                </p>
                <h2 className="mb-4 text-3xl font-medium leading-tight tracking-[-0.02em] text-[#174440] lg:text-4xl">
                  Common questions about{' '}
                  <span className="font-serif italic text-[#174440]/60">our services</span>
                </h2>
                <p className="mb-6 text-sm font-light leading-relaxed text-[#174440]/45">
                  If your question isn't listed here, call us or send a message — we're happy to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#174440] underline underline-offset-4 decoration-[#D4B670]/50 transition-colors hover:text-[#D4B670] hover:decoration-[#D4B670]"
                >
                  Contact us
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
              </motion.div>
            </div>

            {/* Accordion list */}
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTASection />

    </main>
  )
}