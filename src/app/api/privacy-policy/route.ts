import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createPrivacyPolicy, getPrivacyPolicy } from '@/services/privacyPolicy'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  try {
    await connectToDatabase()

    const result = await getPrivacyPolicy()

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
    !bodyData?.policies ||
    bodyData.policies?.length === 0
  )
    return NextResponse.json({
      message: 'Please send complete data to save.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await createPrivacyPolicy(bodyData)

    return NextResponse.json(
      { message: 'Success', data: result, status: 201 },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error, status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
