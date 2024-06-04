import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await prisma.header.findFirst()
    if (!result)
      return NextResponse.json(
        { message: 'No header data found' },
        { status: 404 }
      )

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

export async function POST(req: Request) {
  const bodyData = await req.json()

  let result
  try {
    await connectToDatabase()

    const isExist = await prisma.header.findFirst()

    if (isExist) {
      result = await prisma.header.update({
        where: {
          id: isExist.id,
        },
        data: bodyData,
      })
    } else {
      result = await prisma.header.create({
        data: bodyData,
      })
    }

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
