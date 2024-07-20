import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await prisma.aboutUs.findFirst()
    if (!result)
      return NextResponse.json({
        message: 'No about us data found',
        status: 409,
      })

    return NextResponse.json(
      { message: 'Success', data: result, status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json(
      { message: 'Error', data: error, status: 500 },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(req: Request) {
  const bodyData = await req.json()
  if (!bodyData?.description)
    return NextResponse.json(
      { message: 'Please send description of about us.' },
      { status: 422 }
    )
  let result
  try {
    await connectToDatabase()

    const isExist = await prisma.aboutUs.findFirst()

    if (isExist) {
      result = await prisma.aboutUs.update({
        where: {
          id: isExist.id,
        },
        data: bodyData,
      })
    } else {
      result = await prisma.aboutUs.create({
        data: bodyData,
      })
    }

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
