'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { Button } from '@/components/common/Button'
import { Doctor } from '@/lib/types'

interface DoctorCardProps extends Doctor {}

export function DoctorCard({
  id,
  name,
  specialty,
  qualifications,
  rating,
  reviewCount,
  image,
}: DoctorCardProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="bg-white rounded-lg shadow-subtle hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div className="relative h-64 w-full bg-neutral-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-2">{specialty}</p>
        <p className="text-sm text-neutral-600 mb-4">
          {qualifications.join(', ')}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill={i < fullStars ? '#2C5F5D' : i === fullStars && hasHalfStar ? '#2C5F5D' : 'none'}
                stroke="#2C5F5D"
              />
            ))}
          </div>
          <span className="text-sm text-neutral-600">
            {rating} ({reviewCount} reviews)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="primary" size="sm" className="flex-1">
            Book
          </Button>
          <Link
            href={`/doctors/${id}`}
            className="flex-1 px-3 py-2 border-2 border-primary-600 text-primary-600 rounded-lg text-center font-medium hover:bg-primary-50 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  )
}
