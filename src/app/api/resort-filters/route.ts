import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getIdParam } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await prisma.resortFilters.findMany()
    if (!result)
      return NextResponse.json({
        message: 'No resort filters data found.',
        status: 404,
      })

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
  if (!bodyData?.type || !bodyData?.filter)
    return NextResponse.json({
      message: 'Please send all fields ( type and filter ).',
      status: 422,
    })
  try {
    await connectToDatabase()

    const isExist = await prisma.resortFilters.findFirst({
      where: {
        type: bodyData.type,
        filter: bodyData.filter,
      },
    })

    if (isExist)
      return NextResponse.json({
        message: 'This Filter already exists.',
        status: 409,
      })

    const result = await prisma.resortFilters.create({
      data: bodyData,
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

export async function PUT(req: Request) {
  const bodyData = await req.json()
  if (!bodyData.id || !bodyData.type || !bodyData.filter)
    return NextResponse.json({
      message: 'Please send filter id to update.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const isExist = await prisma.resortFilters.findFirst({
      where: {
        id: bodyData.id,
      },
    })

    if (!isExist)
      return NextResponse.json({
        message: 'Filter not found, please send correct filter id to update.',
        status: 409,
      })

    const result = await prisma.resortFilters.update({
      where: {
        id: bodyData.id,
      },
      data: { type: bodyData.type, filter: bodyData.filter },
    })

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

export async function DELETE(req: Request) {
  const id = getIdParam(req.url)
  if (!id)
    return NextResponse.json({
      message: 'Please send filter id to delete.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await prisma.resortFilters.delete({
      where: {
        id,
      },
    })

    if (!result)
      return NextResponse.json({
        message:
          'Filter deletion failed, please send correct filter id to delete.',
        status: 409,
      })

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
