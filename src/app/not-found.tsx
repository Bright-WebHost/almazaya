'use client'

import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] bg-neutral-50 py-20">
      <Container className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It may have been
            moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-12 border-t border-neutral-300">
          <h3 className="text-lg font-semibold text-dark mb-6">
            Helpful Links
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Doctors', href: '/doctors' },
              { label: 'About', href: '/about' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
