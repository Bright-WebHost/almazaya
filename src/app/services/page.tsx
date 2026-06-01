'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Phone, MessageCircle, Mail,
  ChevronDown, Check, Stethoscope, Heart, Baby, Sparkles,
  Brain, Users, Scissors, FlaskConical, AlertCircle, Home,
  HardHat, Microscope
} from 'lucide-react'
import Link from 'next/link'

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const TEAL   = '#174440'
const GOLD   = '#D4B670'
const CREAM  = '#FAF9F6'
const CREAM2 = '#F3F0EA'

// ─── DATA ────────────────────────────────────────────────────────────────────
type FilterKey = 'all' | 'specialties' | 'procedures' | 'emergency'

const services = [
  {
    id: 1, num: '01',
    icon: AlertCircle,
    title: 'Emergency Services',
    sub: '24 / 7 Critical Care',
    tag: 'emergency' as FilterKey,
    badge: '24 / 7',
    color: '#1a3a36',
    desc: 'Round-the-clock emergency care with trained trauma teams, rapid-response ambulances meeting MMSR-JHAH standards, and a fully equipped ER facility in central Dammam.',
    details: ['24/7 Emergency Department', 'MMSR-JHAH Ambulance Fleet', 'Trauma & Life Support', 'Industrial RAC Response'],
    img: 'photo-1587351021759-3e566b6af7cc',
    imgAlt: 'Emergency medical team',
  },
  {
    id: 2, num: '02',
    icon: Stethoscope,
    title: 'Dental & Cosmetic Dentistry',
    sub: 'Full-Spectrum Oral Care',
    tag: 'specialties' as FilterKey,
    badge: null,
    color: '#1e4a44',
    desc: 'From preventive dentistry and restorations to smile-transforming cosmetic treatments — delivered by board-certified dental specialists in a calm, modern environment.',
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
    color: '#173c38',
    desc: 'Comprehensive heart care with advanced ECG analysis, echocardiography, and specialist-led preventive programmes tailored to your individual cardiac risk profile.',
    details: ['ECG & Holter Monitoring', 'Echocardiography', 'Stress Testing', 'Preventive Cardiology'],
    img: 'photo-1576091160399-112ba8d25d1d',
    imgAlt: 'Cardiology diagnostics',
  },
  {
    id: 4, num: '04',
    icon: Baby,
    title: 'Pediatrics',
    sub: 'Children & Adolescent Health',
    tag: 'specialties' as FilterKey,
    badge: null,
    color: '#1a4540',
    desc: 'Expert, compassionate care for children from newborn through adolescence — covering well-child visits, vaccinations, developmental assessments, and sick care.',
    details: ['Well-Child & Developmental Visits', 'Vaccination Programmes', 'Growth Monitoring', 'Paediatric Sick Care'],
    img: 'photo-1559757148-5c350d0d3c56',
    imgAlt: 'Pediatric care',
  },
  {
    id: 5, num: '05',
    icon: Sparkles,
    title: 'Dermatology & Cosmetics',
    sub: 'Skin, Hair & Aesthetic Medicine',
    tag: 'specialties' as FilterKey,
    badge: null,
    color: '#163e3a',
    desc: 'Medical dermatology and aesthetic skin treatments — from chronic conditions and acne to advanced cosmetic procedures — all under one specialist roof.',
    details: ['Medical Dermatology', 'Cosmetic Injectables', 'Laser & Light Therapy', 'Acne & Pigmentation'],
    img: 'photo-1616394584738-fc6e612e71b9',
    imgAlt: 'Dermatology treatment',
  },
  {
    id: 6, num: '06',
    icon: Brain,
    title: 'Internal Medicine',
    sub: 'Complex & Chronic Disease',
    tag: 'specialties' as FilterKey,
    badge: null,
    color: '#1b4640',
    desc: 'Expert diagnosis and long-term management of complex chronic and acute internal diseases — diabetes, hypertension, thyroid, and more — for adult patients.',
    details: ['Chronic Disease Management', 'Diabetes & Hypertension', 'Thyroid & Metabolic', 'Comprehensive Workups'],
    img: 'photo-1530026186672-2cd00ffc50fe',
    imgAlt: 'Internal medicine consultation',
  },
  {
    id: 7, num: '07',
    icon: Users,
    title: 'Obstetrics & Gynecology',
    sub: "Women's Health Across All Stages",
    tag: 'specialties' as FilterKey,
    badge: null,
    color: '#174440',
    desc: "Comprehensive women's healthcare from prenatal visits and delivery support through gynaecological diagnostics and postnatal care — by female-led specialists.",
    details: ['Prenatal & Antenatal Care', 'Gynaecological Exams', 'Ultrasound Imaging', 'Postnatal Follow-up'],
    img: 'photo-1584515933487-779824d29309',
    imgAlt: "Women's health",
  },
  {
    id: 8, num: '08',
    icon: Scissors,
    title: 'General Surgery',
    sub: 'Precision Surgical Care',
    tag: 'procedures' as FilterKey,
    badge: null,
    color: '#153c38',
    desc: 'Skilled surgical care in modern, sterile operating environments — with experienced surgeons and attentive post-operative monitoring for a smooth recovery.',
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
    color: '#1a4540',
    desc: 'Specialised urological care for kidney stones, urinary tract conditions, prostate health, and bladder issues — delivered with precision and discretion.',
    details: ['Kidney Stone Treatment', 'Prostate Health', 'Urinary Tract Care', 'Specialist Consultations'],
    img: 'photo-1582750433449-648ed127bb54',
    imgAlt: 'Urology consultation',
  },
  {
    id: 10, num: '10',
    icon: Microscope,
    title: 'Radiology & Ultrasound',
    sub: 'Advanced Imaging Diagnostics',
    tag: 'procedures' as FilterKey,
    badge: null,
    color: '#183e3a',
    desc: 'High-resolution diagnostic imaging with immediate radiologist reporting — supporting accurate, timely clinical decisions across every speciality.',
    details: ['Digital X-Ray', 'Ultrasound & Doppler', 'Radiologist Reporting', 'Urgent Scan Prioritisation'],
    img: 'photo-1559757175-0eb30cd8c063',
    imgAlt: 'Radiology imaging',
  },
  {
    id: 11, num: '11',
    icon: FlaskConical,
    title: 'Medical Laboratory',
    sub: 'Precise Diagnostic Analysis',
    tag: 'procedures' as FilterKey,
    badge: null,
    color: '#1c4642',
    desc: 'Fully equipped in-house laboratory delivering fast, accurate diagnostic panels — from routine blood work to pre-employment and microbiology screenings.',
    details: ['Haematology & Biochemistry', 'Microbiology & Culture', 'Pathology Services', 'Pre-employment Panels'],
    img: 'photo-1579154204601-01588f351e67',
    imgAlt: 'Medical laboratory',
  },
  {
    id: 12, num: '12',
    icon: Home,
    title: 'Family Medicine',
    sub: 'Your Primary Care Home',
    tag: 'specialties' as FilterKey,
    badge: null,
    color: '#164240',
    desc: 'Your first point of contact for all health concerns — preventive care, routine checkups, vaccinations, and referral to the right specialist when needed.',
    details: ['Preventive Health Checks', 'Vaccination Programmes', 'Chronic Care Management', 'Specialist Referrals'],
    img: 'photo-1505751172876-fa1923c5c528',
    imgAlt: 'Family medicine',
  },
  {
    id: 13, num: '13',
    icon: HardHat,
    title: 'Occupational Medicine',
    sub: 'Industrial & Workforce Health',
    tag: 'specialties' as FilterKey,
    badge: 'RAC',
    color: '#143c38',
    desc: 'JHAH/MMSR-compliant industrial health services for construction and energy contractors — on-site clinics, ambulance deployment, and pre-employment medicals across the Kingdom.',
    details: ['MMSR-JHAH Compliance', 'On-site Industrial Clinics', 'Ambulance Deployment', 'Pre-employment Medicals'],
    img: 'photo-1609188076864-c35269136b09',
    imgAlt: 'Occupational medicine',
  },
]

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Services' },
  { key: 'specialties', label: 'Specialties' },
  { key: 'procedures', label: 'Procedures' },
  { key: 'emergency', label: 'Emergency' },
]

const faqs = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: "Walk-ins are welcome at any time for our 24/7 Emergency department. For specialist consultations and planned procedures, booking ahead secures your preferred time and minimises waiting.",
  },
  {
    q: 'Which insurance providers does Al Mazaya accept?',
    a: 'We accept most major insurance networks in the Kingdom. Contact reception with your insurance card or call 920013822 before your visit to confirm your cover.',
  },
  {
    q: 'Are industrial health services available outside Dammam?',
    a: 'Yes. Our industrial health division operates on-site clinics and deploys ambulances across project sites Kingdom-wide — serving Aramco and non-Aramco contractors under JHAH/RAC standards.',
  },
  {
    q: 'How quickly can I get my lab results?',
    a: 'Routine results are typically ready within a few hours on the same day. Emergency panels are prioritised immediately. Our team will contact you as soon as results are ready.',
  },
]

// ─── HERO PARALLAX ───────────────────────────────────────────────────────────
function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY   = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#0e2724]">
      {/* BG photo with parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
          alt="Al Mazaya Medical Complex"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2724]/95 via-[#0e2724]/70 to-[#0e2724]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2724]/80 via-transparent to-transparent" />
      </motion.div>

      {/* Noise grain */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* Floating pill badges */}
      {[
        { label: 'Emergency 24/7', top: '22%', right: '8%', delay: 0.6 },
        { label: '13+ Specialties', top: '42%', right: '14%', delay: 0.8 },
        { label: 'RAC Compliant', top: '62%', right: '6%', delay: 1.0 },
      ].map((b) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: b.delay }}
          style={{ top: b.top, right: b.right }}
          className="absolute z-20 hidden items-center gap-2 rounded-full border border-white/15 bg-white/08 px-4 py-2 text-sm font-medium text-white backdrop-blur-md lg:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4B670]" />
          {b.label}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-20 pt-36 lg:px-10 lg:pb-28"
      >
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 flex items-center gap-2 text-xs text-white/35"
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
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4B670]"
          >
            <span className="h-px w-8 bg-[#D4B670]" />
            Al Mazaya Advanced Medical Complex
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-white"
          >
            Comprehensive<br />
            <span className="font-serif italic text-white/70">Medical</span>{' '}
            <span className="text-[#D4B670]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-10 max-w-lg text-base font-light leading-relaxed text-white/55 md:text-lg"
          >
            Evidence-based healthcare for individuals, families, and the Kingdom's industrial workforce — under one roof in Dammam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="group flex items-center gap-2.5 rounded-full bg-[#D4B670] px-7 py-3.5 text-sm font-semibold text-[#174440] transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(212,182,112,0.4)] active:scale-[0.97]">
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
            <a href="tel:920013822" className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white">
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              920013822
            </a>
          </motion.div>
        </div>

        {/* Stat strip — bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {[
            { v: '13+', l: 'Medical Specialties' },
            { v: '24/7', l: 'Emergency Care' },
            { v: '80+', l: 'Clinical Staff' },
            { v: '18+', l: 'Ambulances' },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-semibold text-[#D4B670] md:text-4xl">{s.v}</p>
              <p className="mt-1 text-xs font-light tracking-wide text-white/40">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 pt-2"
        >
          <div className="h-2 w-0.5 rounded-full bg-white/50" />
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
    <div className="sticky top-0 z-40 border-b border-[#174440]/08 bg-[#FAF9F6]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 overflow-x-auto px-6 py-4 scrollbar-hide lg:px-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className={`relative shrink-0 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              active === f.key
                ? 'bg-[#174440] text-white'
                : 'border border-[#174440]/12 bg-white text-[#174440]/60 hover:border-[#174440]/30 hover:text-[#174440]'
            }`}
          >
            {active === f.key && (
              <motion.span layoutId="filter-bg" className="absolute inset-0 rounded-full bg-[#174440]" />
            )}
            <span className="relative z-10">{f.label}</span>
          </button>
        ))}
        <span className="ml-auto shrink-0 text-xs text-[#174440]/35">{count} services</span>
      </div>
    </div>
  )
}

// ─── CINEMATIC SERVICE ROW ────────────────────────────────────────────────────
function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })
  const isEven = index % 2 === 0
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className="group relative border-b border-[#174440]/08 last:border-0"
    >
      {/* Full row hover bg */}
      <div className="absolute inset-0 bg-[#174440]/0 transition-colors duration-500 group-hover:bg-[#174440]/[0.02]" />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-0 px-6 py-0 lg:grid-cols-2 lg:px-10">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="relative h-[380px] w-full overflow-hidden lg:h-[520px]">
            <img
              src={`https://images.unsplash.com/${service.img}?auto=format&fit=crop&w=900&q=80`}
              alt={service.imgAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2724]/60 via-transparent to-transparent" />

            {/* Number overlay */}
            <div className="absolute right-5 top-5">
              <span className="font-serif text-[5rem] font-bold leading-none tracking-tighter text-white/10 select-none lg:text-[7rem]">
                {service.num}
              </span>
            </div>

            {/* Badge */}
            {service.badge && (
              <div className="absolute left-5 top-5 rounded-full bg-[#D4B670] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#174440]">
                {service.badge}
              </div>
            )}

            {/* Bottom label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-white/50">{service.sub}</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 transition-all group-hover:bg-[#D4B670] group-hover:ring-[#D4B670]">
                <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col justify-center px-0 py-12 ${
            isEven ? 'lg:order-2 lg:pl-16 lg:pr-0' : 'lg:order-1 lg:pr-16 lg:pl-0'
          }`}
        >
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4B670]">
            <span className="font-mono text-[#174440]/25">{service.num}</span>
            {service.sub}
          </p>

          <h2 className="mb-5 text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[#174440]">
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-serif italic text-[#174440]/65">
              {service.title.split(' ').slice(-1)}
            </span>
          </h2>

          <p className="mb-8 text-base font-light leading-relaxed text-[#174440]/60 lg:text-[0.95rem]">
            {service.desc}
          </p>

          {/* Feature list */}
          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.details.map((d) => (
              <div key={d} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4B670]/20">
                  <Check className="h-2.5 w-2.5 text-[#174440]" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium text-[#174440]/75">{d}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="group/btn flex items-center gap-2 rounded-full bg-[#174440] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0f2e2b] hover:shadow-[0_8px_30px_rgba(23,68,64,0.25)] active:scale-[0.97]">
              Book Now
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2} />
            </button>
            <button className="group/lm flex items-center gap-1.5 text-sm font-medium text-[#174440]/55 transition-colors hover:text-[#174440]">
              Learn More
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/lm:-translate-y-0.5 group-hover/lm:translate-x-0.5" strokeWidth={2} />
            </button>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-[#174440]/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-7 text-left"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <span className="mt-0.5 font-mono text-xs text-[#174440]/25 select-none">
            0{index + 1}
          </span>
          <span className="text-base font-medium text-[#174440] md:text-lg">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="mt-0.5 shrink-0"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#174440]/15 text-[#174440]/50 transition-colors group-hover:border-[#D4B670]">
            <span className="text-lg leading-none">+</span>
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
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="pb-8 pl-9 pr-14 text-sm font-light leading-relaxed text-[#174440]/55 md:text-base">
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
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#174440] py-28 lg:py-36">
      {/* Parallax bg image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=70"
          alt="Al Mazaya"
          className="h-full w-full object-cover opacity-15"
        />
      </motion.div>

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#174440] via-[#174440]/90 to-[#0e2724]" />
      <div className="pointer-events-none absolute left-1/3 top-0 z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#D4B670]/08 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4B670]">
              <span className="h-px w-8 bg-[#D4B670]" />
              Get In Touch
            </p>
            <h2 className="mb-6 text-[clamp(2.2rem,4.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              Can't find what<br />
              you're looking{' '}
              <span className="font-serif italic text-[#D4B670]">for?</span>
            </h2>
            <p className="mb-8 max-w-md text-base font-light leading-relaxed text-white/50">
              Contact our team — we'll help you find the right specialist, service, or appointment time. We're here whenever you need us.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:920013822"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-[#D4B670] px-7 py-3.5 text-sm font-semibold text-[#174440] transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(212,182,112,0.4)] active:scale-[0.97]">
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Us
              </a>
              <a href="https://wa.me/920013822" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/70 transition-all hover:border-white/35 hover:text-white active:scale-[0.97]">
                <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                WhatsApp
              </a>
              <a href="mailto:info@almazayamedical.com"
                className="flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/70 transition-all hover:border-white/35 hover:text-white active:scale-[0.97]">
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                Email
              </a>
            </div>
          </motion.div>

          {/* Right — testimonial/trust card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/05 p-8 backdrop-blur-md lg:p-10"
          >
            <div className="mb-6 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-[#D4B670]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="mb-6 text-lg font-light italic leading-relaxed text-white/70">
              "Al Mazaya's emergency team responded within minutes to our site incident. Professional, fully equipped, exactly what we needed."
            </blockquote>
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4B670]/20 text-sm font-bold text-[#D4B670]">
                JR
              </div>
              <div>
                <p className="text-sm font-medium text-white">James R.</p>
                <p className="text-xs text-white/40">HSE Manager, SAIPEM Contractor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filtered = activeFilter === 'all'
    ? services
    : services.filter((s) => s.tag === activeFilter)

  return (
    <main className="min-h-screen bg-[#FAF9F6]">

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. FILTER */}
      <FilterBar active={activeFilter} onChange={setActiveFilter} count={filtered.length} />

      {/* 3. SERVICE ROWS */}
      <section className="bg-[#FAF9F6]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((s, i) => (
              <ServiceRow key={s.id} service={s} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. FAQ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:gap-24">

            {/* Sticky heading */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4B670]">
                  <span className="h-px w-8 bg-[#D4B670]" />
                  FAQ
                </p>
                <h2 className="mb-5 text-3xl font-medium leading-tight tracking-[-0.02em] text-[#174440] md:text-4xl">
                  Questions about{' '}
                  <span className="font-serif italic text-[#174440]/65">our services?</span>
                </h2>
                <p className="mb-8 text-sm font-light leading-relaxed text-[#174440]/50">
                  Answers to the most common questions. For anything more specific, our team is always ready to help.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#174440] underline underline-offset-4 decoration-[#D4B670]/60 hover:text-[#D4B670] transition-colors">
                  Contact support
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
              </motion.div>
            </div>

            {/* Accordions */}
            <div>
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection />

    </main>
  )
}