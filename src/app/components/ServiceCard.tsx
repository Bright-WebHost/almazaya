'use client'

import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href = '#',
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg border-l-6 border-l-primary-600 p-6 shadow-subtle hover:shadow-lg transition-all duration-200 hover:scale-105">
      <div className="mb-4">
        <Icon className="w-12 h-12 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 hover:underline transition-colors"
      >
        Learn More →
      </Link>
    </div>
  )
}
