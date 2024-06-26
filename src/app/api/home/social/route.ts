import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import {
  createSocialSection,
  deleteSocialSection,
  getSocialSection,
} from '@/services/social'
import prisma from '../../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getSocialSection()
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
  const { title, socialMedia, homeBgId, link, image } = await req.json()

  if (!title || !homeBgId || !socialMedia || !link || !image)
    return NextResponse.json({
      message: 'Please send all field to save data.',
      status: 422,
    })

  try {
    await connectToDatabase()

    const result = await createSocialSection({
      title,
      link,
      homeBgId,
      socialMedia,
      image,
    })
    if (!result)
      return NextResponse.json({
        message: 'Data not saved, please try again.',
        status: 422,
      })

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
    const result = await deleteSocialSection()
    if (result === 'NOT_FOUND')
      return NextResponse.json({ message: 'No data found.' }, { status: 404 })

    return NextResponse.json({ message: 'Success' }, { status: 201 })
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
