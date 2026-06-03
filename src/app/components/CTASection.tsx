// src/app/components/CTASection.tsx
'use client'

import { motion, Variants } from 'framer-motion'
import { Phone, MessageCircle, Mail } from 'lucide-react'

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
    // Reduced outer bottom padding from pb-32 to pb-16/20
    <section className="w-full bg-[#FAF9F6] px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Floating Dark Card Container - Reduced internal vertical padding from py-32 to py-16/20 */}
        <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-[#174440] px-6 py-12 shadow-2xl sm:px-12 md:px-16 lg:py-20 text-center">
          
          {/* Breathing Ambient Glow Effect */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-[100%] bg-[#D4B670] blur-[100px]"
          />
          
          {/* Premium Noise Texture */}
          <div 
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4B670]"
            >
              Take The Next Step
            </motion.p>
            
            {/* Reduced bottom margin from mb-12 to mb-8 */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mb-8 sm:mb-10 text-[2.25rem] font-medium leading-[1.1] tracking-tight text-white sm:text-[3rem] md:text-[4rem]"
            >
              Ready to Book <br />
              <span className="font-serif italic text-white/80">Your Appointment?</span>
            </motion.h2>

            {/* Buttons Container */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row sm:flex-wrap"
            >
              
              {/* Primary Action: Call Now */}
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#D4B670] px-8 py-4 text-sm sm:text-base font-semibold text-[#174440] shadow-[0_0_30px_rgba(212,182,112,0.25)] transition-all hover:bg-white hover:shadow-[0_0_50px_rgba(255,255,255,0.35)]"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                <span>Call Now</span>
              </motion.button>

              {/* Secondary Action: WhatsApp */}
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366]"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Chat</span>
              </motion.button>

              {/* Tertiary Action: Email */}
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-transparent px-8 py-4 text-sm sm:text-base font-medium text-white/70 transition-all hover:bg-white/5 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}