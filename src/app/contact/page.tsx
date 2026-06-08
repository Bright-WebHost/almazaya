'use client'

import React, { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { Hero } from '@/app/components/Hero'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our healthcare team"
        backgroundGradient
        ctaText={undefined}
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Phone</h3>
                  <a href="tel:+966505387020" className="block text-neutral-600 hover:text-primary-600">
                    +966 50 538 7020
                  </a>
                  <a href="tel:0138211212" className="block text-neutral-600 hover:text-primary-600">
                    013 821 1212
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Email</h3>
                  <a href="mailto:info@mazayamedical.co" className="text-neutral-600 hover:text-primary-600">
                    info@mazayamedical.co
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-1">Address</h3>
                  <p className="text-neutral-600">Uhud neighborhood</p>
                  <p className="text-neutral-600">King Saud St</p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-dark mb-4">
                  Operating Hours
                </h3>
                <div className="space-y-2 text-sm text-neutral-600">
                  <p>
                    <span className="font-medium">Monday - Friday:</span> 8am - 6pm
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 9am - 2pm
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                  <p className="pt-2 border-t border-neutral-300 mt-2">
                    <span className="font-medium text-error">
                      Emergency 24/7
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {submitStatus === 'success' && (
                  <div className="bg-success/10 border border-success text-success p-4 rounded-lg">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-error/10 border border-error text-error p-4 rounded-lg">
                    Something went wrong. Please try again.
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-error text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-error text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Subject *
                  </label>
                  <select
                    {...register('subject')}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="consultation">Consultation Request</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  {errors.subject && (
                    <p className="text-error text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 resize-none"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="text-error text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="rounded-2xl border border-primary-100 bg-primary-50/60 p-4 shadow-sm">
                  <p className="mb-3 text-sm text-neutral-600">
                    Send your message directly to our team and we’ll get back to you soon.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full bg-[#174540]! text-white! hover:bg-[#174540]/90! focus:ring-[#174540]/30!"
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
