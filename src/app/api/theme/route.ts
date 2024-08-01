import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createThemeConfig, getThemeConfig } from '@/services/theme'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getThemeConfig()
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
  try {
    await connectToDatabase()

    const result = await createThemeConfig(bodyData)
    if (!result)
      return NextResponse.json({ message: 'No data found', status: 404 })

    return NextResponse.json(
      {
        message: 'Theme configuration saved successfully.',
        data: result,
        status: 201,
      },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE() {
  try {
    await connectToDatabase()

    const result = await getThemeConfig()
    if (!result)
      return NextResponse.json({
        message: 'No Data found, please add first.',
        status: 409,
      })

    return NextResponse.json(
      { message: 'Success', status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
