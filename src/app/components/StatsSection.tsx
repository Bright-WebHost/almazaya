// src/app/components/StatsSection.tsx
'use client'

import { FiUsers, FiClock, FiAward, FiCheckCircle } from 'react-icons/fi'

const stats = [
  {
    icon: FiUsers,
    number: '80+',
    label: 'Healthcare Professionals',
    description: 'Experienced doctors and medical staff',
  },
  {
    icon: FiClock,
    number: '24/7',
    label: 'Emergency Services',
    description: 'Always available for urgent care',
  },
  {
    icon: FiAward,
    number: '2021',
    label: 'Year Established',
    description: 'Building excellence in healthcare',
  },
  {
    icon: FiCheckCircle,
    number: '100%',
    label: 'Patient Satisfaction',
    description: 'Committed to your wellbeing',
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Al Mazaya?
          </h2>
          <p className="text-lg text-gray-600">
            We combine expertise, compassion, and cutting-edge technology to deliver exceptional healthcare outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                {/* Content */}
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}