import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createFAQS, getFAQs } from '@/services/faqs'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  try {
    await connectToDatabase()

    const result = await getFAQs()

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
  if (
    !bodyData?.title ||
    !bodyData?.faqs ||
    bodyData.faqs?.length === 0 ||
    !bodyData?.description
  )
    return NextResponse.json({
      message: 'Please send complete data to save.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await createFAQS(bodyData)

    return NextResponse.json(
      { message: 'FAQs data saved successfully.', data: result, status: 201 },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error, status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
