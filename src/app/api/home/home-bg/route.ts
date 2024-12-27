import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createHomeBg, getHomeBg } from '@/services/homeBg'
import prisma from '../../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getHomeBg()
    if (!result)
      return NextResponse.json({ message: 'No data found', status: 409 })

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
  try {
    const { title, subTitle, bgImages, mobileBgImages } = await req.json()

    if (!title || !Array.isArray(bgImages) || !Array.isArray(mobileBgImages)) {
      return NextResponse.json(
        { message: 'Invalid input data' },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const result = await createHomeBg({
      title,
      subTitle,
      bgImages,
      mobileBgImages,
    })

    return NextResponse.json(
      { message: 'Success', data: result },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
