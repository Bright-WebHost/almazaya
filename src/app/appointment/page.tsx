'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Clock } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { Hero } from '@/app/components/Hero'
import { appointmentFormSchema, type AppointmentFormData } from '@/lib/validation'
import { DEPARTMENTS, DOCTORS } from '@/lib/constants'
import { generateBookingReference } from '@/lib/utils'

type FormStep = 1 | 2 | 3 | 4 | 'success'

export default function AppointmentPage() {
  const [step, setStep] = useState<FormStep>(1)
  const [bookingRef, setBookingRef] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
    mode: 'onBlur',
  })

  const selectedDept = watch('departmentId')
  const selectedDoctor = watch('doctorId')

  const filteredDoctors = selectedDept
    ? DOCTORS.filter((d) =>
        d.department ===
        DEPARTMENTS.find((dept) => dept.id === selectedDept)?.name
      )
    : []

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        setBookingRef(result.bookingReference || generateBookingReference())
        setStep('success')
        reset()
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const StepIndicator = ({ currentStep }: { currentStep: FormStep }) => {
    if (currentStep === 'success') return null
    const numStep = Number(currentStep) as 1 | 2 | 3 | 4
    return (
      <div className="flex items-center justify-center gap-4 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                s === numStep
                  ? 'bg-primary-600 text-white'
                  : s < numStep
                    ? 'bg-success text-white'
                    : 'bg-neutral-300 text-neutral-600'
              }`}
            >
              {s < numStep ? '✓' : s}
            </div>
            {s < 4 && (
              <div
                className={`w-8 h-1 ${s < numStep ? 'bg-success' : 'bg-neutral-300'}`}
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  if (step === 'success') {
    return (
      <>
        <Hero
          title="Appointment Confirmed"
          subtitle="Your booking has been successfully submitted"
          backgroundGradient
          ctaText={undefined}
        />

        <section className="py-16 md:py-24 bg-neutral-50">
          <Container className="max-w-2xl">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-dark mb-4">
                Appointment Confirmed!
              </h2>
              <p className="text-neutral-600 mb-6">
                Your appointment has been successfully booked. We will send a
                confirmation email shortly.
              </p>

              <div className="bg-neutral-50 rounded-lg p-6 mb-6 text-left">
                <p className="text-sm text-neutral-600 mb-2">
                  <span className="font-semibold">Booking Reference:</span>
                </p>
                <p className="text-2xl font-bold text-primary-600 mb-6">
                  {bookingRef}
                </p>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-semibold text-dark">Name:</span> John
                    Doe
                  </p>
                  <p>
                    <span className="font-semibold text-dark">Email:</span>{' '}
                    john@example.com
                  </p>
                  <p>
                    <span className="font-semibold text-dark">
                      Doctor:
                    </span>{' '}
                    Dr. Sarah Johnson
                  </p>
                  <p>
                    <span className="font-semibold text-dark">Date:</span> May 20,
                    2026
                  </p>
                  <p>
                    <span className="font-semibold text-dark">Time:</span> 2:00 PM
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  onClick={() => (window.location.href = '/')}
                >
                  Back to Home
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="flex-1"
                  onClick={() => window.print()}
                >
                  Download Confirmation
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </>
    )
  }

  return (
    <>
      <Hero
        title="Book Your Appointment"
        subtitle="Schedule a consultation with one of our doctors"
        backgroundGradient
        ctaText={undefined}
      />

      <section className="py-16 md:py-24 bg-neutral-50">
        <Container className="max-w-2xl">
          <StepIndicator currentStep={step} />

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Step 1: Select Department */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Select Department
                  </h2>
                  <div className="space-y-3 mb-6">
                    {DEPARTMENTS.map((dept) => (
                      <label
                        key={dept.id}
                        className="flex items-center p-4 border border-neutral-300 rounded-lg hover:border-primary-600 hover:bg-primary-50 cursor-pointer transition-all"
                      >
                        <input
                          type="radio"
                          {...register('departmentId')}
                          value={dept.id}
                          className="w-4 h-4 text-primary-600 cursor-pointer"
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-dark">{dept.name}</p>
                          <p className="text-sm text-neutral-600">
                            {dept.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.departmentId && (
                    <p className="text-error text-sm mb-4">
                      {errors.departmentId.message}
                    </p>
                  )}
                </div>
              )}

              {/* Step 2: Select Doctor */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Select Doctor
                  </h2>
                  {filteredDoctors.length > 0 ? (
                    <div className="space-y-3 mb-6">
                      {filteredDoctors.map((doctor) => (
                        <label
                          key={doctor.id}
                          className="flex items-center p-4 border border-neutral-300 rounded-lg hover:border-primary-600 hover:bg-primary-50 cursor-pointer transition-all"
                        >
                          <input
                            type="radio"
                            {...register('doctorId')}
                            value={doctor.id}
                            className="w-4 h-4 text-primary-600 cursor-pointer"
                          />
                          <div className="ml-4">
                            <p className="font-semibold text-dark">
                              {doctor.name}
                            </p>
                            <p className="text-sm text-primary-600">
                              {doctor.specialty}
                            </p>
                            <p className="text-sm text-neutral-600">
                              {doctor.experience} years experience
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-600">
                      Please select a department first
                    </p>
                  )}
                  {errors.doctorId && (
                    <p className="text-error text-sm mb-4">
                      {errors.doctorId.message}
                    </p>
                  )}
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Select Date & Time
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Appointment Date *
                      </label>
                      <input
                        type="date"
                        {...register('appointmentDate')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      />
                      {errors.appointmentDate && (
                        <p className="text-error text-sm mt-1">
                          {errors.appointmentDate.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Appointment Time *
                      </label>
                      <input
                        type="time"
                        {...register('appointmentTime')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      />
                      {errors.appointmentTime && (
                        <p className="text-error text-sm mt-1">
                          {errors.appointmentTime.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Duration *
                      </label>
                      <select
                        {...register('duration')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      >
                        <option value="thirty-min">30 minutes</option>
                        <option value="one-hour">1 hour</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Patient Details */}
              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">
                    Your Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('patientName')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      />
                      {errors.patientName && (
                        <p className="text-error text-sm mt-1">
                          {errors.patientName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register('patientEmail')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      />
                      {errors.patientEmail && (
                        <p className="text-error text-sm mt-1">
                          {errors.patientEmail.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        {...register('patientPhone')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      />
                      {errors.patientPhone && (
                        <p className="text-error text-sm mt-1">
                          {errors.patientPhone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        {...register('dateOfBirth')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      />
                      {errors.dateOfBirth && (
                        <p className="text-error text-sm mt-1">
                          {errors.dateOfBirth.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Gender *
                      </label>
                      <select
                        {...register('gender')}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Medical History
                      </label>
                      <textarea
                        {...register('medicalHistory')}
                        rows={3}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600/20 resize-none"
                        placeholder="Any relevant medical conditions or allergies"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        {...register('agreedToTerms')}
                        className="w-4 h-4 text-primary-600 rounded mt-1"
                      />
                      <label className="text-sm text-neutral-700">
                        I agree to the terms and conditions
                      </label>
                    </div>
                    {errors.agreedToTerms && (
                      <p className="text-error text-sm">
                        {errors.agreedToTerms.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-neutral-200">
                <Button
                  type="button"
                  variant="tertiary"
                  size="lg"
                  onClick={() => setStep(Math.max(step - 1, 1) as FormStep)}
                  disabled={step === 1}
                  className="flex-1"
                >
                  Previous
                </Button>
                {step < 4 ? (
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    onClick={() =>
                      setStep(Math.min(step + 1, 4) as FormStep)
                    }
                    className="flex-1"
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1"
                    isLoading={isSubmitting}
                  >
                    Confirm & Book
                  </Button>
                )}
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}
