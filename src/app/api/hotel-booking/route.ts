import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../prisma'

// GET: Retrieve all bookings with pagination
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 10
  const skip = (page - 1) * limit

  try {
    await connectToDatabase()

    const bookings = await prisma.hotelBookings.findMany({
      take: limit,
      skip,
    })

    const totalBookings = await prisma.hotelBookings.count()

    if (!bookings || bookings.length === 0) {
      return NextResponse.json(
        { message: 'No bookings found.', status: 404 },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        message: 'Success',
        data: bookings,
        totalBookings,
        status: 200,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { message: 'Error fetching bookings.', data: error, status: 500 },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

// POST: Create a new booking
export async function POST(req: Request) {
  const bodyData = await req.json()

  const requiredFields = [
    'name',
    'email',
    'phone',
    'checkInDate',
    'checkOutDate',
    'totalGuest',
    'totalRooms',
  ]
  const missingFields = requiredFields.filter((field) => !bodyData[field])

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        message: `Missing fields: ${missingFields.join(', ')}`,
        status: 422,
      },
      { status: 422 }
    )
  }

  try {
    await connectToDatabase()

    // Optional: Check for duplicate bookings
    const isDuplicate = await prisma.hotelBookings.findFirst({
      where: {
        name: bodyData.name,
        email: bodyData.email,
        checkInDate: new Date(bodyData.checkInDate),
        checkOutDate: new Date(bodyData.checkOutDate),
      },
    })

    if (isDuplicate) {
      return NextResponse.json(
        { message: 'Duplicate booking found.', status: 409 },
        { status: 409 }
      )
    }

    const newBooking = await prisma.hotelBookings.create({
      data: {
        name: bodyData.name,
        email: bodyData.email,
        phone: bodyData.phone,
        checkInDate: new Date(bodyData.checkInDate),
        checkOutDate: new Date(bodyData.checkOutDate),
        totalGuest: parseInt(bodyData.totalGuest, 10),
        totalRooms: parseInt(bodyData.totalRooms, 10),
      },
    })

    return NextResponse.json(
      {
        message: 'Booking created successfully.',
        data: newBooking,
        status: 201,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { message: 'Error creating booking.', data: error, status: 500 },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

// DELETE: Delete a booking by ID
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json(
      { message: 'Booking ID is required.', status: 400 },
      { status: 400 }
    )
  }

  try {
    await connectToDatabase()

    const booking = await prisma.hotelBookings.findUnique({
      where: { id },
    })

    if (!booking) {
      return NextResponse.json(
        { message: 'Booking not found.', status: 404 },
        { status: 404 }
      )
    }

    await prisma.hotelBookings.delete({
      where: { id },
    })

    return NextResponse.json(
      {
        message: 'Booking deleted successfully.',
        status: 200,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting booking:', error)
    return NextResponse.json(
      { message: 'Error deleting booking.', data: error, status: 500 },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
