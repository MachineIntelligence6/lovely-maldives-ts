import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createBrand, deleteBrand, getBrands } from '@/services/brands'
import prisma from '../../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getBrands()
    if (!result)
      return NextResponse.json({ message: 'No data found' }, { status: 200 })

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
  const { title, description, ratings, homeBgId, bgColor } = await req.json()

  if (!title || !homeBgId || !ratings)
    return NextResponse.json({
      message: 'Please send all field to save data.',
      status: 422,
    })

  try {
    await connectToDatabase()

    const result = await createBrand({
      title,
      description,
      ratings: ratings.toString(),
      homeBgId,
      bgColor,
    })
    if (!result)
      return NextResponse.json(
        { message: 'Brand creation failed, please try again' },
        { status: 500 }
      )

    return NextResponse.json(
      { message: 'Brand created successfully.', data: result, status: 201 },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(req: Request) {
  try {
    await connectToDatabase()
    const result = await deleteBrand()
    if (result === 'NOT_FOUND')
      return NextResponse.json({ message: 'No data found.' }, { status: 404 })

    return NextResponse.json({ message: 'Success' }, { status: 201 })
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
