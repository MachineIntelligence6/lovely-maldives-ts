import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../../prisma'

export async function GET(req: Request, route: { [key: string]: any }) {
  const { params } = route
  const { slug } = params
  try {
    await connectToDatabase()

    const result = await prisma.hotels.findMany({
      where: { title: slug },
    })

    if (!result)
      return NextResponse.json({ message: 'No hotel data found.', status: 409 })

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
