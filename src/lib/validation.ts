import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.enum(['general', 'appointment', 'feedback']),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
})

export const appointmentFormSchema = z.object({
  patientName: z.string().min(2, 'Name must be at least 2 characters'),
  patientEmail: z.string().email('Invalid email address'),
  patientPhone: z.string().min(10, 'Phone must be at least 10 characters'),
  dateOfBirth: z.string(),
  gender: z.enum(['male', 'female', 'other']),
  departmentId: z.string().min(1, 'Please select a department'),
  doctorId: z.string().min(1, 'Please select a doctor'),
  appointmentDate: z.string(),
  appointmentTime: z.string(),
  duration: z.enum(['thirty-min', 'one-hour']),
  medicalHistory: z.string().optional(),
  insuranceInfo: z.string().optional(),
  agreedToTerms: z.boolean().refine(val => val === true, 'You must agree to terms'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>
