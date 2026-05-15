export type Doctor = {
  id: string
  name: string
  specialty: string
  qualifications: string[]
  experience: number
  rating: number
  reviewCount: number
  image: string
  department: string
  bio?: string
  languages?: string[]
  availability?: {
    day: string
    startTime: string
    endTime: string
  }[]
}

export type Service = {
  id: string
  title: string
  description: string
  icon: string
  department?: string
}

export type Appointment = {
  id: string
  patientName: string
  patientEmail: string
  patientPhone: string
  doctorId: string
  date: Date
  time: string
  duration: 'thirty-min' | 'one-hour'
  medicalHistory?: string
  insuranceInfo?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  phone?: string
  subject: 'general' | 'appointment' | 'feedback'
  message: string
  createdAt: Date
  status: 'new' | 'read' | 'responded'
}

export type Department = {
  id: string
  name: string
  description: string
  icon: string
  doctors?: Doctor[]
}
