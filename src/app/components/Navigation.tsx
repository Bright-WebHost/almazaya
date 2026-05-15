// src/app/components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Updated hrefs to point to actual pages instead of ID sections
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex w-full justify-center px-4 pt-6 pointer-events-none">
      
      <div
        className={`pointer-events-auto flex w-full max-w-[1400px] items-center justify-between rounded-full border px-6 py-3 transition-all duration-500 lg:px-8 ${
          scrolled
            ? 'border-[#174440]/10 bg-white/90 shadow-[0_8px_32px_rgba(23,68,64,0.05)] backdrop-blur-2xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        
        {/* Left: Real Logo from Public Folder */}
        <Link href="/" className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="Al Mazaya Medical Complex" 
            className="h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Center: Desktop Menu */}
        <div className="hidden items-center gap-10 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[15px] font-medium transition-colors duration-300 hover:text-[#D4B670] ${
                scrolled ? 'text-[#174440]/80' : 'text-white/90'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Book Appointment CTA */}
        <div className="hidden items-center lg:flex">
          <button className={`rounded-full px-7 py-3 text-[15px] font-medium transition-all duration-300 ${
            scrolled 
              ? 'bg-[#174440] text-white hover:bg-[#113330] hover:shadow-[0_4px_20px_rgba(23,68,64,0.3)]' 
              : 'bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20'
          }`}>
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-full p-2 transition-colors lg:hidden hover:bg-black/5 ${
            scrolled ? 'text-[#174440]' : 'text-white'
          }`}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute left-4 right-4 top-24 pointer-events-auto overflow-hidden rounded-3xl border border-[#174440]/10 bg-white/95 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#174440]/5 py-4 text-base font-medium text-[#174440]/90 hover:text-[#D4B670]"
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-6 w-full rounded-full bg-[#174440] px-5 py-4 text-sm font-medium text-white hover:bg-[#113330]">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}