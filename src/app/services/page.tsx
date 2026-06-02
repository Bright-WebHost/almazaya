'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Phone, MessageCircle, Mail,
  Check, Stethoscope, Heart, Baby, Sparkles,
  Brain, Users, Scissors, FlaskConical, AlertCircle, Home,
  HardHat, Microscope
} from 'lucide-react'
import Link from 'next/link'

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
  { key: 'all',        label: 'All Services' },
  { key: 'specialties', label: 'Specialties' },
  { key: 'procedures', label: 'Procedures' },
  { key: 'emergency',  label: 'Emergency' },
]

const faqs = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'Walk-ins are welcome at any time for our Emergency department. For specialist consultations and procedures, booking ahead helps you get your preferred time with less waiting.',
  },
  {
    q: 'Which insurance providers do you accept?',
    a: 'We accept most major insurance networks in the Kingdom. Call 920013822 or bring your insurance card to reception before your visit so we can confirm your cover.',
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

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
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
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* Floating pill badges */}
      {[
        { label: 'Emergency 24/7',  top: '22%', right: '8%',  delay: 0.6 },
        { label: '13+ Specialties', top: '42%', right: '14%', delay: 0.8 },
        { label: 'RAC Compliant',   top: '62%', right: '6%',  delay: 1.0 },
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
            Healthcare for individuals, families, and the Kingdom's industrial workforce — all in one place in Dammam.
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

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {[
            { v: '13+',  l: 'Medical Specialties' },
            { v: '24/7', l: 'Emergency Care' },
            { v: '80+',  l: 'Clinical Staff' },
            { v: '18+',  l: 'Ambulances Active' },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-3xl font-semibold text-[#D4B670] md:text-4xl">{s.v}</p>
              <p className="mt-1 text-xs font-light tracking-wide text-white/40">{s.l}</p>
            </div>
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
    <div className="sticky top-0 z-40 border-b border-[#174440]/08 bg-[#FAF9F6]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center gap-2 overflow-x-auto px-6 py-3.5 lg:px-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className={`relative shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              active === f.key
                ? 'bg-[#174440] text-white shadow-sm'
                : 'border border-[#174440]/12 bg-white text-[#174440]/55 hover:border-[#174440]/25 hover:text-[#174440]'
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="ml-auto shrink-0 text-xs text-[#174440]/30">{count} services</span>
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

  return (
    <div ref={ref} className="group relative border-b border-[#174440]/07 last:border-0">

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch lg:grid-cols-2">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="relative h-[340px] w-full overflow-hidden lg:h-[500px]">
            <img
              src={`https://images.unsplash.com/${service.img}?auto=format&fit=crop&w=900&q=80`}
              alt={service.imgAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2724]/55 via-transparent to-transparent" />

            {/* Ghost number */}
            <span className="pointer-events-none absolute right-4 top-4 select-none font-serif text-[6rem] font-bold leading-none tracking-tighter text-white/08 lg:text-[8rem]">
              {service.num}
            </span>

            {/* Badge */}
            {service.badge && (
              <span className="absolute left-5 top-5 rounded-full bg-[#D4B670] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#174440]">
                {service.badge}
              </span>
            )}

            {/* Bottom bar */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-widest text-white/45">
                {service.sub}
              </p>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all group-hover:bg-[#D4B670] group-hover:ring-[#D4B670]">
                <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 36 : -36 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col justify-center px-6 py-12 lg:px-0 lg:py-16 ${
            isEven
              ? 'lg:order-2 lg:pl-14 lg:pr-10'
              : 'lg:order-1 lg:pl-10 lg:pr-14'
          }`}
        >
          {/* Index label */}
          <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4B670]">
            <span className="font-mono text-[#174440]/20">{service.num}</span>
            {service.sub}
          </p>

          {/* Title — last word italic serif */}
          <h2 className="mb-5 text-[clamp(1.9rem,3vw,2.9rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[#174440]">
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-serif italic text-[#174440]/60">
              {service.title.split(' ').slice(-1)[0]}
            </span>
          </h2>

          {/* Description */}
          <p className="mb-8 text-[0.94rem] font-light leading-relaxed text-[#174440]/58">
            {service.desc}
          </p>

          {/* Features */}
          <div className="mb-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {service.details.map((d) => (
              <div key={d} className="flex items-center gap-3">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D4B670]/22">
                  <Check className="h-2.5 w-2.5 text-[#174440]" strokeWidth={3} />
                </div>
                <span className="text-[0.82rem] font-medium text-[#174440]/70">{d}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="group/btn flex items-center gap-2 rounded-full bg-[#174440] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0f2e2b] hover:shadow-[0_8px_28px_rgba(23,68,64,0.22)] active:scale-[0.97]">
              Book Now
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2} />
            </button>
            <button className="group/lm flex items-center gap-1.5 text-sm font-medium text-[#174440]/50 transition-colors hover:text-[#174440]">
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-[#174440]/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-7 text-left"
        aria-expanded={open}
      >
        <div className="flex items-start gap-5">
          <span className="mt-0.5 shrink-0 font-mono text-xs text-[#174440]/22 select-none">
            0{index + 1}
          </span>
          <span className="text-base font-medium text-[#174440]">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="mt-0.5 shrink-0"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#174440]/15 text-[#174440]/40">
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
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="pb-8 pl-9 pr-10 text-[0.92rem] font-light leading-relaxed text-[#174440]/55">
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
    <section ref={ref} className="relative overflow-hidden bg-[#174440] py-28 lg:py-36">
      {/* Subtle background image with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=60"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-10"
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#174440] via-[#174440]/95 to-[#0d2320]" />
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#D4B670]/07 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
              <span className="h-px w-8 bg-[#D4B670]" />
              Contact Us
            </p>
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white">
              Can't find what<br />
              you're looking{' '}
              <span className="font-serif italic text-[#D4B670]">for?</span>
            </h2>
            <p className="mb-10 max-w-md text-base font-light leading-relaxed text-white/45">
              Talk to our team. We'll help you find the right service or specialist and book a time that works for you.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:920013822"
                className="flex items-center gap-2.5 rounded-full bg-[#D4B670] px-7 py-3.5 text-sm font-semibold text-[#174440] transition-all hover:bg-white active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Us
              </a>
              <a
                href="https://wa.me/920013822"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/65 transition-all hover:border-white/30 hover:text-white active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                WhatsApp
              </a>
              <a
                href="mailto:info@almazayamedical.com"
                className="flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/65 transition-all hover:border-white/30 hover:text-white active:scale-[0.97]"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                Email
              </a>
            </div>
          </motion.div>

          {/* Right — simple info blocks, no fake reviews */}
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
                value: '920013822',
                note: 'One number for appointments and all enquiries.',
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
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-white/07 bg-white/04 p-6 backdrop-blur-sm"
              >
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#D4B670]/70">
                  {c.label}
                </p>
                <p className="mb-2 text-xl font-semibold text-white">{c.value}</p>
                <p className="text-xs font-light leading-relaxed text-white/38">{c.note}</p>
              </div>
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

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. FILTER TABS */}
      <FilterBar active={activeFilter} onChange={setActiveFilter} count={filtered.length} />

      {/* 3. SERVICE ROWS */}
      <section className="bg-[#FAF9F6]">
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
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[360px_1fr] lg:gap-24">

            {/* Sticky left heading */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
                  <span className="h-px w-8 bg-[#D4B670]" />
                  FAQ
                </p>
                <h2 className="mb-5 text-3xl font-medium leading-tight tracking-[-0.02em] text-[#174440] lg:text-4xl">
                  Common questions about{' '}
                  <span className="font-serif italic text-[#174440]/60">our services</span>
                </h2>
                <p className="mb-8 text-sm font-light leading-relaxed text-[#174440]/45">
                  If your question isn't listed here, call us or send a message — we're happy to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#174440] underline underline-offset-4 decoration-[#D4B670]/50 transition-colors hover:text-[#D4B670]"
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