import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createResorts, deleteResorts, getResorts } from '@/services/resorts'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getResorts()
    if (!result)
      return NextResponse.json({ message: 'No data found.', status: 404 })

    return NextResponse.json(
      { message: 'Data Fetched successfully', data: result, status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(req: Request) {
  const bodyData = await req.json()
  try {
    await connectToDatabase()

    const result = await createResorts(bodyData)
    if (!result)
      return NextResponse.json({ message: 'No data found', status: 404 })

    return NextResponse.json(
      { message: 'Data saved successfully.', data: result, status: 201 },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE() {
  try {
    await connectToDatabase()

    const result = await deleteResorts()
    if (result === 'NOT_FOUND')
      return NextResponse.json({
        message:
          'Filter deletion failed, please send correct filter id to delete.',
        status: 404,
      })

    return NextResponse.json({ message: 'Success', status: 201 })
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
