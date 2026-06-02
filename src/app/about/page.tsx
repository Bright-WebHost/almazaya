'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  Award, Target, Eye, Heart, ShieldCheck, Star, Users, CheckCircle2,
  ArrowRight, Phone, MessageCircle, Mail, Zap, TrendingUp, Globe, Stethoscope,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

// ─── DATA ──────────────────────────────────────────────────────────────────

const coreValues = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Selfless dedication to patient care and community health with genuine empathy.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'Striving for world-class outcomes in every procedure, diagnosis, and interaction.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    description: 'Maintaining the highest medical standards in every aspect of our service.',
  },
  {
    icon: TrendingUp,
    title: 'Dedication',
    description: 'Unwavering commitment to advancing healthcare and serving our patients.',
  },
  {
    icon: Star,
    title: 'Innovation',
    description: 'Embracing modern technology and best practices in medical care.',
  },
]

const stats = [
  { value: '2021', label: 'Year Established', icon: Target },
  { value: '80+', label: 'Healthcare Professionals', icon: Users },
  { value: '24/7', label: 'Emergency Support', icon: Heart },
  { value: '13+', label: 'Medical Specialties', icon: Stethoscope },
]

const facilities = [
  {
    title: 'Emergency Department',
    desc: '24/7 trauma care with MMSR-JHAH compliant ambulance fleet and rapid-response teams.',
    icon: AlertCircle,
    img: 'photo-1587351021759-3e566b6af7cc',
  },
  {
    title: 'Diagnostic Imaging',
    desc: 'State-of-the-art digital X-ray, ultrasound, and advanced imaging technology.',
    icon: Award,
    img: 'photo-1559757175-0eb30cd8c063',
  },
  {
    title: 'Medical Laboratory',
    desc: 'In-house pathology with fast, accurate results and comprehensive diagnostic panels.',
    icon: CheckCircle2,
    img: 'photo-1579154204601-01588f351e67',
  },
  {
    title: 'Specialist Clinics',
    desc: 'Dedicated departments for cardiology, pediatrics, OB/GYN, dermatology, and more.',
    icon: Globe,
    img: 'photo-1576091160399-112ba8d25d1d',
  },
]

const whyChooseUs = [
  {
    num: '01',
    title: 'Expert Medical Team',
    desc: 'Board-certified specialists with years of international experience in their fields.',
  },
  {
    num: '02',
    title: 'Modern Technology',
    desc: 'Latest diagnostic equipment and treatment protocols aligned with global standards.',
  },
  {
    num: '03',
    title: 'Patient-Centered Care',
    desc: 'Your comfort and privacy are paramount. We listen, we care, we deliver results.',
  },
  {
    num: '04',
    title: 'Industrial Expertise',
    desc: 'Saudi Aramco RAC approved with kingdom-wide on-site clinics and ambulances.',
  },
]

// ─── HERO SECTION ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#174440] pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#D4B670]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 right-0 z-0 h-[350px] w-[350px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[#D4B670]/08 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center min-h-[600px] lg:min-h-[700px]">
          
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#D4B670]"
            >
              <span className="h-px w-8 bg-[#D4B670]" />
              Our Story
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="mb-8 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white"
            >
              Transforming Healthcare<br />
              <span className="font-serif italic text-[#D4B670]">Since 2021</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-8 max-w-md text-base font-light leading-relaxed text-white/65 lg:text-lg"
            >
              Al Mazaya is committed to delivering world-class healthcare with compassion, excellence, and innovation at every touchpoint of care.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-10 flex flex-wrap gap-6"
            >
              {[
                { num: '2021', label: 'Founded' },
                { num: '80+', label: 'Experts' },
                { num: '24/7', label: 'Care' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl lg:text-4xl font-semibold text-[#D4B670]">{stat.num}</p>
                  <p className="text-xs font-light text-white/45 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#story" className="group flex items-center gap-2.5 rounded-full bg-[#D4B670] px-7 py-3.5 text-sm font-semibold text-[#174440] transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(212,182,112,0.3)] active:scale-[0.97]">
                Learn Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
              </a>
              <a href="tel:920013822" className="flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white">
                <Phone className="h-4 w-4" strokeWidth={1.8} />
                Call Us
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Visual section with image and accent cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[550px]"
          >
            {/* Main image */}
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900"
                alt="Al Mazaya Team"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#174440]/40 via-transparent to-transparent" />
            </div>

            {/* Floating accent cards */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl border border-[#D4B670]/20 max-w-xs lg:max-w-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D4B670] mb-2">
                RAC Approved
              </p>
              <p className="text-sm font-light text-[#174440]/70">
                Saudi Aramco certified with kingdom-wide industrial healthcare services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -top-4 -right-6 rounded-2xl bg-[#D4B670]/15 border border-[#D4B670]/40 backdrop-blur-sm p-5 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#D4B670]/30 flex items-center justify-center">
                  <Star className="h-5 w-5 text-[#D4B670]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-white/60 uppercase tracking-widest">
                    Excellence
                  </p>
                  <p className="text-sm font-medium text-white">World-Class Care</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── OUR STORY SECTION ─────────────────────────────────────────────────────

function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="story" ref={ref} className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
              <span className="h-px w-8 bg-[#D4B670]" />
              Our Journey
            </p>
            <h2 className="mb-8 text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[#174440]">
              A <span className="font-serif italic text-[#174440]/70">Legacy</span> of Care and <span className="font-serif italic text-[#D4B670]">Excellence</span>
            </h2>
            <div className="space-y-6 text-[0.95rem] font-light leading-relaxed text-[#174440]/65">
              <p>
                Founded in 2021, Al Mazaya Advanced Medical Complex was established with a singular vision: to provide world-class healthcare services that meet international standards while remaining deeply rooted in the Dammam community.
              </p>
              <p>
                What began as a localized medical center has rapidly evolved into a trusted healthcare institution. Today, we serve not just urban patients, but have expanded significantly to support the Kingdom's industrial sectors through our Saudi Aramco RAC-approved services.
              </p>
              <p>
                Our growth has been driven by a simple philosophy: put patients first, invest in expert staff, and never compromise on quality. Every facility we open, every specialist we recruit, and every service we add reflects our commitment to this mission.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: 'Modern Facilities', value: 'Dammam Urban & Remote' },
                { label: 'Expert Team', value: '80+ Professionals' },
              ].map((h) => (
                <div key={h.label} className="rounded-xl bg-white p-6 border border-[#174440]/08 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#D4B670]/70 mb-1">
                    {h.label}
                  </p>
                  <p className="text-lg font-semibold text-[#174440]">{h.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] lg:h-[500px] shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000"
              alt="Modern Medical Facility"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#174440]/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── MISSION & VISION ──────────────────────────────────────────────────────

function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 z-0 bg-white" />
      <div className="pointer-events-none absolute right-0 top-1/2 z-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#D4B670]/08 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]"
          >
            <span className="h-px w-8 bg-[#D4B670]" />
            Foundation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-[#174440]"
          >
            Mission & <span className="font-serif italic text-[#D4B670]">Vision</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-[2.5rem] bg-gradient-to-br from-[#174440] to-[#0f2e2b] p-10 lg:p-16 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/05 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4B670]/15 border border-[#D4B670]/30 group-hover:border-[#D4B670]/60 transition-colors duration-300">
                <Target className="h-8 w-8 text-[#D4B670]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl lg:text-3xl font-medium text-white">Our Mission</h3>
              <p className="text-base lg:text-lg font-light leading-relaxed text-white/70 group-hover:text-white/80 transition-colors">
                To provide comprehensive, compassionate healthcare services that exceed international standards while remaining accessible to every patient, from urban dwellers to industrial workers across the Kingdom.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-[2.5rem] bg-gradient-to-br from-[#FAF9F6] to-white p-10 lg:p-16 border border-[#174440]/10 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4B670]/05 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4B670]/15 border border-[#D4B670]/30 group-hover:border-[#D4B670]/60 transition-colors duration-300">
                <Eye className="h-8 w-8 text-[#D4B670]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-5 text-2xl lg:text-3xl font-medium text-[#174440]">Our Vision</h3>
              <p className="text-base lg:text-lg font-light leading-relaxed text-[#174440]/70 group-hover:text-[#174440]/80 transition-colors">
                To become the region's premier medical destination—recognized for clinical excellence, innovation, and unwavering commitment to patient wellbeing while actively advancing Saudi Vision 2030 through expanded industrial healthcare services.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── STATS SECTION ─────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#174440]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="h-full w-full object-cover opacity-05"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#174440] via-[#174440]/95 to-[#0d2320]" />
      <div className="pointer-events-none absolute left-0 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-[#D4B670]/08 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="mb-5 flex justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4B670]/15 border border-[#D4B670]/30 group-hover:border-[#D4B670]/60 transition-colors">
                    <Icon className="h-6 w-6 text-[#D4B670]" strokeWidth={1.5} />
                  </div>
                </motion.div>
                <div className="mb-2 text-4xl lg:text-5xl font-semibold text-[#D4B670]">
                  {stat.value}
                </div>
                <p className="text-xs lg:text-sm font-light uppercase tracking-wider text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CORE VALUES ──────────────────────────────────────────────────────────

function CoreValuesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
            <span className="h-px w-8 bg-[#D4B670]" />
            Core Values
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-[#174440]">
            Principles that <span className="font-serif italic text-[#D4B670]">Guide Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {coreValues.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-white p-8 shadow-sm border border-[#174440]/05 hover:shadow-lg hover:border-[#D4B670]/20 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4B670]/03 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <motion.div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4B670]/15 group-hover:bg-[#D4B670]/25 transition-colors duration-300"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                  >
                    <Icon className="h-6 w-6 text-[#D4B670]" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="mb-3 text-lg font-semibold text-[#174440] group-hover:text-[#D4B670] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#174440]/65 group-hover:text-[#174440]/75 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── FACILITIES SECTION ───────────────────────────────────────────────────

function FacilitiesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white border-t border-[#174440]/05">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
            <span className="h-px w-8 bg-[#D4B670]" />
            Facilities
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-[#174440]">
            State-of-the-Art <span className="font-serif italic text-[#D4B670]">Infrastructure</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-[300px] w-full overflow-hidden lg:h-[350px]">
                  <img
                    src={`https://images.unsplash.com/${facility.img}?auto=format&fit=crop&w=900&q=80`}
                    alt={facility.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#174440]/90 via-[#174440]/40 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4B670]/20 backdrop-blur-sm border border-[#D4B670]/40 group-hover:bg-[#D4B670]/40 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-[#D4B670]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold text-white">{facility.title}</h3>
                    <p className="text-sm font-light leading-relaxed text-white/80">{facility.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── WHY CHOOSE US ────────────────────────────────────────────────────────

function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAF9F6]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
            <span className="h-px w-8 bg-[#D4B670]" />
            Why Al Mazaya
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-[#174440]">
            Why Patients <span className="font-serif italic text-[#D4B670]">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white p-10 lg:p-12 shadow-sm border border-[#174440]/05 hover:shadow-lg hover:border-[#D4B670]/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4B670]/05 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-300" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl lg:text-6xl font-bold text-[#D4B670]/15 group-hover:text-[#D4B670]/25 transition-colors">{item.num}</span>
                </div>
                <h3 className="mb-3 text-xl lg:text-2xl font-semibold text-[#174440] group-hover:text-[#D4B670] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base font-light leading-relaxed text-[#174440]/65 group-hover:text-[#174440]/75 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── ACCREDITATIONS ───────────────────────────────────────────────────────

function AccreditationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#174440]/05">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
            <span className="h-px w-8 bg-[#D4B670]" />
            Recognition
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-[#174440]">
            Trusted & <span className="font-serif italic text-[#D4B670]">Certified</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {[
            {
              icon: ShieldCheck,
              title: 'Saudi Aramco RAC Approved',
              desc: 'Authorized Remote Area Clinic provider (Code: 10110003) with kingdom-wide industrial healthcare deployment.',
            },
            {
              icon: Award,
              title: 'Ministry of Health Licensed',
              desc: 'Fully compliant with all Saudi Arabian health regulations and national accreditation standards.',
            },
            {
              icon: CheckCircle2,
              title: 'MMSR-JHAH Compliant',
              desc: 'Industrial health services meet the highest occupational safety and medical response standards.',
            },
            {
              icon: Star,
              title: 'Quality Committed',
              desc: 'Pursuing CBAHI certification and ISO standards to ensure continuous quality improvement.',
            },
          ].map((cert, idx) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-br from-[#FAF9F6] to-white p-10 lg:p-12 border border-[#174440]/08 hover:border-[#D4B670]/30 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4B670]/03 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <motion.div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4B670]/15 group-hover:bg-[#D4B670]/25 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="h-7 w-7 text-[#D4B670]" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="mb-3 text-lg font-semibold text-[#174440] group-hover:text-[#D4B670] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-[#174440]/65 group-hover:text-[#174440]/75 transition-colors">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CTA SECTION ──────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden py-28 lg:py-36 bg-[#174440]">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=60"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-08"
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#174440] via-[#174440]/95 to-[#0d2320]" />
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#D4B670]/08 blur-[120px]" />

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
              Ready for better health?
            </p>
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.6rem)] font-medium leading-[1.06] tracking-[-0.02em] text-white">
              Schedule Your <span className="font-serif italic text-[#D4B670]">Appointment</span> Today
            </h2>
            <p className="mb-10 max-w-md text-base font-light leading-relaxed text-white/50">
              Connect with our team and take the first step toward better health. Whether you need emergency care or a routine checkup, we're here for you.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:920013822"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#D4B670] px-8 py-4 text-sm font-semibold text-[#174440] transition-all hover:bg-white hover:shadow-lg active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Now
              </a>
              <a
                href="https://wa.me/920013822"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white active:scale-[0.97]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                WhatsApp
              </a>
              <a
                href="mailto:info@almazayamedical.com"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white/80 transition-all hover:border-white/40 hover:text-white active:scale-[0.97]"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
                Email
              </a>
            </div>
          </motion.div>

          {/* Right — Info blocks */}
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
                note: 'Walk-in anytime. No appointment needed.',
              },
              {
                label: 'Main Line',
                value: '920013822',
                note: 'Available for all inquiries and bookings.',
              },
              {
                label: 'Location',
                value: 'Dammam',
                note: 'Fully accessible facilities in central Dammam.',
              },
              {
                label: 'Industrial',
                value: 'Kingdom-wide',
                note: 'RAC services deployed across all regions.',
              },
            ].map((c) => (
              <motion.div
                key={c.label}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/05 p-6 backdrop-blur-sm hover:bg-white/08 transition-colors duration-300"
              >
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#D4B670]/80">
                  {c.label}
                </p>
                <p className="mb-2 text-xl font-semibold text-white">{c.value}</p>
                <p className="text-xs font-light leading-relaxed text-white/40">{c.note}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <StatsSection />
      <CoreValuesSection />
      <FacilitiesSection />
      <WhyChooseUsSection />
      <AccreditationsSection />
      <CTASection />
    </main>
  )
}