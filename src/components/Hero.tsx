// app/components/HeroSection.tsx
'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative pt-28 pb-20 flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-emerald-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-emerald-700">
                🏥 Saudi Aramco Certified Healthcare Provider
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner in{' '}
              <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                Health & Wellness
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience world-class healthcare with our team of expert doctors, modern facilities, and 24/7 emergency services. Your health is our top priority.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {[
                '24/7 Emergency Services',
                'Expert Medical Team',
                'Modern Equipment & Technology',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="group px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-lg font-bold text-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { number: '80+', label: 'Healthcare Professionals' },
                { number: '2021', label: 'Year Established' },
                { number: '24/7', label: 'Emergency Services' },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-full min-h-96 lg:min-h-screen">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop"
              alt="Medical Professional"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
              style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            />
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-2xl backdrop-blur-md w-72 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-gray-900">Expert Care</p>
                  <p className="text-sm text-gray-600">Trusted by thousands</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
