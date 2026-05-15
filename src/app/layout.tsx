// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navigation' // Make sure this path matches your actual file
import Footer from '@/app/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Al Mazaya Medical Complex | Healthcare in Dammam',
  description: 'Experience world-class healthcare with our expert doctors, modern facilities, and 24/7 emergency services.',
  keywords: 'hospital, medical, healthcare, doctors, emergency, Dammam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* Removed pt-20 and bg-white so the Hero can reach the absolute top */}
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}