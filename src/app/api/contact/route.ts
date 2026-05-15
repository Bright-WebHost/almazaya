import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the data
    const validatedData = contactFormSchema.parse(body)

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user

    // For now, we'll just return success
    console.log('Contact form submission:', validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Message received. We will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again.',
      },
      { status: 400 }
    )
  }
}
