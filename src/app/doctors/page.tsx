// src/app/doctors/page.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, CalendarPlus } from 'lucide-react'

// Real departments from Al Mazaya PDF
const departments = [
  'All Departments',
  'General & Family Medicine',
  'Obstetrics & Gynecology',
  'Pediatric Clinics',
  'Dental & Cosmetic',
  'Internal Medicine',
  'Cardiology',
]

// Premium placeholder data mapping to your actual departments
const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Al-Rashid',
    specialty: 'Senior Consultant',
    department: 'Obstetrics & Gynecology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800',
    experience: '15+ Years',
  },
  {
    id: '2',
    name: 'Dr. Ahmed Hassan',
    specialty: 'Consultant Cardiologist',
    department: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800',
    experience: '20+ Years',
  },
  {
    id: '3',
    name: 'Dr. Fatima Zahra',
    specialty: 'Pediatric Specialist',
    department: 'Pediatric Clinics',
    image: 'https://images.unsplash.com/photo-1594824436951-7f12bc58ec53?q=80&w=800',
    experience: '12+ Years',
  },
  {
    id: '4',
    name: 'Dr. Khalid Mansour',
    specialty: 'Family Medicine Consultant',
    department: 'General & Family Medicine',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800',
    experience: '18+ Years',
  },
  {
    id: '5',
    name: 'Dr. Reem Abdullah',
    specialty: 'Cosmetic Dentist',
    department: 'Dental & Cosmetic',
    image: 'https://images.unsplash.com/photo-1606260362099-c0f24fc64e01?q=80&w=800',
    experience: '10+ Years',
  },
  {
    id: '6',
    name: 'Dr. Omar Tariq',
    specialty: 'Internal Medicine Specialist',
    department: 'Internal Medicine',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800',
    experience: '14+ Years',
  },
]

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDept, setSelectedDept] = useState('All Departments')

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDept = selectedDept === 'All Departments' || doctor.department === selectedDept
    return matchesSearch && matchesDept
  })

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* 1. INNER PAGE HERO SECTION */}
      <section className="relative overflow-hidden bg-[#174440] pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div 
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#D4B670]/20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4B670]"
          >
            Expert Care
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-[5rem]"
          >
            Meet Our <span className="font-serif italic text-white/80">Specialists</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/70"
          >
            Highly qualified and experienced medical professionals dedicated to delivering precise diagnoses and your complete wellbeing.
          </motion.p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER BAR */}
      <section className="relative -mt-8 z-20 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[2rem] bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#174440]/5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            
            {/* Search Input */}
            <div className="relative md:col-span-7 lg:col-span-8">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#174440]/40" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-14 w-full rounded-2xl border border-[#174440]/10 bg-[#FAF9F6] pl-14 pr-6 text-base text-[#174440] placeholder:text-[#174440]/40 focus:border-[#D4B670] focus:outline-none focus:ring-1 focus:ring-[#D4B670] transition-all"
              />
            </div>

            {/* Department Dropdown */}
            <div className="relative md:col-span-5 lg:col-span-4">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="h-14 w-full appearance-none rounded-2xl border border-[#174440]/10 bg-[#FAF9F6] pl-6 pr-14 text-base text-[#174440] focus:border-[#D4B670] focus:outline-none focus:ring-1 focus:ring-[#D4B670] transition-all cursor-pointer"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none text-[#174440]/40" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. DOCTORS GRID */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          
          {filteredDoctors.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
              <AnimatePresence>
                {filteredDoctors.map((doctor) => (
                  <motion.div
                    key={doctor.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#174440]/5 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(23,68,64,0.08)]"
                  >
                    {/* Image Container with Hover Scale */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#174440]/5">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Floating Department Tag */}
                      <div className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#174440] shadow-sm">
                        {doctor.department}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-6 lg:p-8">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs font-medium text-[#D4B670] uppercase tracking-wider">
                          {doctor.experience}
                        </span>
                      </div>
                      
                      <h3 className="mb-2 text-2xl font-medium text-[#174440]">
                        {doctor.name}
                      </h3>
                      <p className="mb-8 text-sm font-light text-[#174440]/70">
                        {doctor.specialty}
                      </p>

                      {/* Action Button */}
                      <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border border-[#174440]/20 bg-transparent py-3.5 text-sm font-medium text-[#174440] transition-all group-hover:bg-[#174440] group-hover:text-white group-hover:border-[#174440]">
                        <CalendarPlus className="h-4 w-4" />
                        Book Appointment
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            // Empty State
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                <Search className="h-8 w-8 text-[#174440]/20" />
              </div>
              <h3 className="mb-2 text-2xl font-medium text-[#174440]">No specialists found</h3>
              <p className="text-[#174440]/60">We couldn't find any doctors matching your current search criteria.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedDept('All Departments') }}
                className="mt-8 rounded-full bg-[#D4B670] px-8 py-3 text-sm font-medium text-[#174440] transition-colors hover:bg-white hover:shadow-md"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

        </div>
      </section>
    </main>
  )
}