import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllParams, getIdParam } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  try {
    await connectToDatabase()

    const result = await prisma.hotels.findFirst()

    if (!result)
      return NextResponse.json(
        { message: 'No hotel data found.' },
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

export async function POST(req: Request) {
  const bodyData = await req.json()
  console.log('hotels', bodyData)
  if (!bodyData?.title || !bodyData?.sections)
    return NextResponse.json({
      message: 'Please send complete hotel data to save.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const isExist = await prisma.hotels.findFirst({
      where: {
        title: bodyData.title,
      },
    })

    if (isExist)
      return NextResponse.json({
        message: 'This hotel already created.',
        status: 409,
      })

    const result = await prisma.hotels.create({
      data: bodyData,
    })

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

export async function PUT(req: Request) {
  const bodyData = await req.json()
  if (!bodyData.id || !bodyData.title)
    return NextResponse.json(
      { message: 'Please send blog id to update.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const isExist = await prisma.hotels.findFirst({
      where: {
        id: bodyData.id,
      },
    })

    if (!isExist)
      return NextResponse.json(
        {
          message: 'Hotel not found, please send correct Hotel id to update.',
        },
        { status: 404 }
      )

    const result = await prisma.hotels.update({
      where: {
        id: bodyData.id,
      },
      data: {
        title: bodyData.title,
        ratings: bodyData?.ratings,
        sections: bodyData.sections,
      },
    })

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

export async function DELETE(req: Request) {
  const id = getIdParam(req.url)
  console.log('id is ', id)
  if (!id)
    return NextResponse.json(
      { message: 'Please send hotel id to delete.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const result = await prisma.hotels.delete({
      where: {
        id,
      },
    })

    console.log('result ', result)

    if (!result)
      return NextResponse.json(
        {
          message:
            'Hotel deletion failed, please send correct hotel id to delete.',
        },
        { status: 404 }
      )

    return NextResponse.json(
      { message: 'Deleted Successfuly' },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
