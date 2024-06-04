import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../../prisma'

export async function GET(req: Request, route: { [key: string]: any }) {
  console.log('route ', route)
  const { params } = route
  const { slug } = params
  try {
    await connectToDatabase()

    const result = await prisma.blogs.findFirst({ where: { title: slug } })
    if (!result)
      return NextResponse.json(
        { message: 'No blog data found.' },
        { status: 404 }
      )

    return NextResponse.json(
      { message: 'Success', data: result },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
