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

export type ContactMessage = {
  id: string
  name: string
  email: string
  phone?: string
  subject: 'general' | 'consultation' | 'feedback'
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
