import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getIdParam } from '@/utils/getIdParam'
import { createTermsOfUse } from '@/services/termsOfUse'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  try {
    await connectToDatabase()

    const result = await prisma.emailSubscription.findMany()

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
  const bodyData = await req.json()
  console.log('body data ', bodyData)
  if (!bodyData?.email)
    return NextResponse.json({
      message: 'Please enter email to subscribe.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const isExist = await prisma.emailSubscription.findFirst({
      where: { email: bodyData.email },
    })
    if (isExist)
      return NextResponse.json({
        message: 'Email already subscribed.',
        status: 409,
      })

    const result = await prisma.emailSubscription.create({
      data: { email: bodyData.email },
    })
    if (!result)
      return NextResponse.json({
        message: 'Subscription failed, please try again later.',
        status: 409,
      })

    return NextResponse.json(
      {
        message: 'Subscribed successfully.',
        data: result,
        status: 201,
      },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error, status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
