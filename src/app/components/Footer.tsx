// src/app/components/Footer.tsx
'use client'

import Link from 'next/link'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socialLinks = [FaFacebook, FaInstagram, FaLinkedin, FaTwitter]

// Sourced from your PDF profile
const services = [
  'General & Family Medicine', 
  'Obstetrics & Gynecology', 
  'Pediatric Clinics', 
  'Dental & Cosmetic'
]

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#174440] text-white">
      
      {/* Premium Cinematic Noise Texture */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Subtle Background Glow Effect */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#D4B670]/10 blur-[100px]"></div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 mb-16 lg:mb-24">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col">
            <Link href="/" className="mb-8 inline-block">
              {/* Real Logo integration */}
              <img 
                src="/logo.png" 
                alt="Al Mazaya Medical Complex" 
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 transition-opacity hover:opacity-100" 
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm font-light">
              Providing exceptional healthcare services for the Dammam community and the Kingdom's industrial sectors with compassion, quality, and expertise.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((Icon, i) => (
                <button
                  key={i}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-[#D4B670] hover:border-[#D4B670]"
                >
                  <Icon className="w-4 h-4 text-white transition-colors duration-300 group-hover:text-[#174440]" />
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Departments / Services */}
          <div>
            <h3 className="text-[#D4B670] font-semibold mb-8 text-xs uppercase tracking-[0.2em]">Departments</h3>
            <div className="flex flex-col space-y-4">
              {services.map((link) => (
                <Link
                  key={link}
                  href="#services"
                  className="group flex items-center text-white/70 transition-colors duration-300 hover:text-[#D4B670] text-sm font-light w-max"
                >
                  <span className="h-[1px] w-0 bg-[#D4B670] transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="text-[#D4B670] font-semibold mb-8 text-xs uppercase tracking-[0.2em]">Company</h3>
            <div className="flex flex-col space-y-4">
              {['About Us', 'Our Doctors', 'Contact', 'Careers', 'RAC Compliance'].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="group flex items-center text-white/70 transition-colors duration-300 hover:text-[#D4B670] text-sm font-light w-max"
                >
                  <span className="h-[1px] w-0 bg-[#D4B670] transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-[#D4B670] font-semibold mb-8 text-xs uppercase tracking-[0.2em]">Contact Us</h3>
            <div className="flex flex-col space-y-5">
              
              <div className="group flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 group-hover:bg-[#D4B670]/10">
                  <FiMapPin className="w-4 h-4 text-[#D4B670]" />
                </div>
                <p className="text-white/70 text-sm font-light leading-relaxed pt-2">
                  Uhud neighborhood,<br />King Saud St, Dammam
                </p>
              </div>

              <div className="group flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 group-hover:bg-[#D4B670]/10">
                  <FiPhone className="w-4 h-4 text-[#D4B670]" />
                </div>
                <a href="tel:+966505387020" className="text-white/70 hover:text-white text-sm font-light transition-colors">
                  +966 50 538 7020
                </a>
              </div>

              <div className="group flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors duration-300 group-hover:bg-[#D4B670]/10">
                  <FiMail className="w-4 h-4 text-[#D4B670]" />
                </div>
                <a href="mailto:info@mazayamedical.com" className="text-white/70 hover:text-white text-sm font-light transition-colors">
                  info@mazayamedical.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-white/50 text-xs font-light tracking-wide">
              &copy; {new Date().getFullYear()} Al Mazaya Advanced Medical Complex. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-white/50 hover:text-[#D4B670] text-xs font-light transition-colors tracking-wide">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/50 hover:text-[#D4B670] text-xs font-light transition-colors tracking-wide">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}