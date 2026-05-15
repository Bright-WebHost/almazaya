import { NextRequest, NextResponse } from 'next/server'
import { appointmentFormSchema } from '@/lib/validation'
import { generateBookingReference } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the data
    const validatedData = appointmentFormSchema.parse(body)

    // In a real application, you would:
    // 1. Check doctor availability
    // 2. Save appointment to database
    // 3. Send confirmation email
    // 4. Add to calendar
    // 5. Implement payment processing if needed

    const bookingReference = generateBookingReference()

    console.log('Appointment booking:', {
      bookingReference,
      ...validatedData,
    })

    return NextResponse.json(
      {
        success: true,
        bookingReference,
        message: 'Appointment booked successfully',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Appointment booking error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while booking. Please try again.',
      },
      { status: 400 }
    )
  }
}
