import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import {
  createSideImage,
  deleteSideImage,
  getSideImage,
} from '@/services/sideImage'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getSideImage()
    if (!result)
      return NextResponse.json({ message: 'No data found.', status: 404 })

    return NextResponse.json(
      { message: 'Success', data: result, status: 200 },
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
  const { image, homeBgId } = await req.json()
  if (!image || !homeBgId)
    return NextResponse.json({
      message: 'Please enter all fields',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await createSideImage({ image, homeBgId })
    if (!result)
      return NextResponse.json({ message: 'No data found', status: 404 })

    return NextResponse.json(
      { message: 'Success', data: result, status: 201 },
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

    const result = await deleteSideImage()
    if (result === 'NOT_FOUND')
      return NextResponse.json({
        message:
          'Filter deletion failed, please send correct filter id to delete.',
        status: 409,
      })

    return NextResponse.json(
      { message: 'Success', status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
