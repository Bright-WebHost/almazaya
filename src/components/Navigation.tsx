// app/components/Navbar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <span className="text-white font-bold text-lg">AM</span>
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-gray-900 text-sm">Al Mazaya</span>
              <span className="text-xs text-emerald-600 font-semibold">Medical Complex</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Doctors', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-500 to-teal-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+966505387020"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold text-sm">Call Now</span>
            </a>
            <Link href="/contact" className="px-6 py-2 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {['Home', 'About', 'Services', 'Doctors', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
              >
                {item}
              </Link>
            ))}
            <div className="px-4 pt-3 flex flex-col gap-2">
              <Link href="/contact" className="w-full px-4 py-2 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold text-center">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
