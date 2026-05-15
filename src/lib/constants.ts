export const BRAND_COLORS = {
  primary: '#2C5F5D',
  primaryDark: '#1f4544',
  accent: '#F5E6D3',
  dark: '#1a3a3a',
  lightGray: '#F8F9FA',
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
}

export const DEPARTMENTS = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: 'Heart',
    description: 'Heart and cardiovascular system care',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: 'Brain',
    description: 'Nervous system and brain disorders',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: 'Baby',
    description: 'Child health and development',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: 'Bone',
    description: 'Bone and joint disorders',
  },
  {
    id: 'general-surgery',
    name: 'General Surgery',
    icon: 'Scalpel',
    description: 'Surgical procedures and treatments',
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    icon: 'Skin',
    description: 'Skin conditions and treatments',
  },
]

export const SERVICES = [
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    description: '24/7 emergency medical services',
    icon: 'AlertCircle',
  },
  {
    id: 'diagnostic',
    title: 'Diagnostic Services',
    description: 'Advanced imaging and lab testing',
    icon: 'Activity',
  },
  {
    id: 'surgery',
    title: 'Surgical Services',
    description: 'State-of-the-art surgical facilities',
    icon: 'Scissors',
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation',
    description: 'Physical therapy and recovery care',
    icon: 'Zap',
  },
  {
    id: 'maternity',
    title: 'Maternity Care',
    description: 'Pregnancy and childbirth services',
    icon: 'Heart',
  },
  {
    id: 'mental-health',
    title: 'Mental Health',
    description: 'Psychiatric and counseling services',
    icon: 'Smile',
  },
]

export const DOCTORS = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    qualifications: ['MD', 'Board Certified Cardiology'],
    experience: 15,
    rating: 4.8,
    reviewCount: 234,
    image: '/images/doctors/doctor-1.jpg',
    department: 'Cardiology',
    bio: 'Dr. Johnson specializes in preventive cardiology and cardiac interventions.',
    languages: ['English', 'Spanish'],
  },
  {
    id: 'doc-2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    qualifications: ['MD', 'Board Certified Neurology'],
    experience: 12,
    rating: 4.7,
    reviewCount: 189,
    image: '/images/doctors/doctor-2.jpg',
    department: 'Neurology',
    bio: 'Dr. Chen focuses on neurological disorders and treatment.',
    languages: ['English', 'Mandarin'],
  },
  {
    id: 'doc-3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    qualifications: ['MD', 'Board Certified Pediatrics'],
    experience: 10,
    rating: 4.9,
    reviewCount: 312,
    image: '/images/doctors/doctor-3.jpg',
    department: 'Pediatrics',
    bio: 'Dr. Rodriguez is dedicated to comprehensive child healthcare.',
    languages: ['English', 'Spanish', 'Portuguese'],
  },
]

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/contact', label: 'Contact' },
]
