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
  const { title, subTitle, bgImages } = await req.json()
  try {
    await connectToDatabase()

    const result = await createHomeBg({
      title,
      subTitle,
      bgImages,
    })

    if (!result) return NextResponse.json({ message: 'Error' }, { status: 500 })

    return NextResponse.json(
      { message: 'Success', data: result },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
