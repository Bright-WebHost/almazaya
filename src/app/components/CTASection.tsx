// src/app/components/CTASection.tsx
'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'

export default function CTASection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    },
  }

  return (
    <section className="w-full bg-[#FAF9F6] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-350">
        <div className="relative overflow-hidden rounded-4xl border border-[#174440]/10 bg-[#174440] shadow-[0_30px_80px_rgba(23,68,64,0.18)] sm:rounded-[2.5rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,182,112,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute left-1/2 top-0 h-70 w-170 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4B670] blur-[120px]"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />

          <div className="relative z-10 grid gap-10 px-6 py-12 sm:px-10 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-14 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4B670]">
                <span className="h-px w-8 bg-[#D4B670]" />
                Need Support
              </p>
              <h2 className="max-w-xl text-[clamp(2.25rem,5vw,4.4rem)] font-medium leading-[0.96] tracking-[-0.03em] text-white">
                Modern care,{' '}
                <span className="font-serif italic text-[#F7E9C1]">clear next steps</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                A refined contact section that matches the rest of the site with a premium look, stronger hierarchy, and faster access to your team.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="tel:+966505387020"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#D4B670] px-6 py-3.5 text-sm font-semibold text-[#174440] transition-transform hover:-translate-y-0.5 hover:bg-[#F3E0B0]"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:-rotate-12" strokeWidth={2} />
                  Call Now
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/12"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.8} />
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  title: '24/7 Response',
                  text: 'Emergency care and fast triage when time matters most.',
                  icon: Phone,
                },
                {
                  title: 'WhatsApp Support',
                  text: 'Instant communication with the front desk team.',
                  icon: MessageCircle,
                },
                {
                  title: 'Direct Email',
                  text: 'Send questions, reports, or follow-up details.',
                  icon: Mail,
                },
                {
                  title: 'Premium Finish',
                  text: 'Green, gold, and glass-like layers that match the brand.',
                  icon: ArrowRight,
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  className="rounded-3xl border border-white/10 bg-white/7 p-5 backdrop-blur-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#D4B670]">
                    <card.icon className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}