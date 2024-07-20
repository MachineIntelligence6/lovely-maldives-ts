import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import {
  createAboutMaldivesShort,
  deleteAboutMaldivesShort,
  getAboutMaldivesShort,
} from '@/services/aboutMaldivesShort'
import prisma from '../../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getAboutMaldivesShort()
    if (!result)
      return NextResponse.json(
        { message: 'No data found', status: 404 },
        { status: 200 }
      )

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
  const { title, link, description, homeBgId } = bodyData
  if (!description || !title || !link)
    return NextResponse.json({
      message: 'Please send all field to save data.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await createAboutMaldivesShort({
      title,
      link,
      description,
      homeBgId,
    })

    if (!result) return NextResponse.json({ message: 'Error', status: 500 })
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

export async function DELETE(req: Request) {
  try {
    await connectToDatabase()

    const result = await deleteAboutMaldivesShort()
    if (result === 'NOT_FOUND')
      return NextResponse.json({ message: 'No data found.' }, { status: 404 })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
