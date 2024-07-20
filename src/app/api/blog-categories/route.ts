import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getIdParam } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await prisma.blogCategories.findMany()
    if (!result)
      return NextResponse.json(
        { message: 'No categories data found.' },
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
  if (!bodyData?.category)
    return NextResponse.json(
      { message: 'Please send blog category.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const isExist = await prisma.blogCategories.findFirst({
      where: {
        category: bodyData.category,
      },
    })

    if (isExist)
      return NextResponse.json(
        { message: 'This Category already exists.' },
        { status: 409 }
      )

    const result = await prisma.blogCategories.create({
      data: bodyData,
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

export async function PUT(req: Request) {
  const bodyData = await req.json()
  if (!bodyData.id || !bodyData.category)
    return NextResponse.json(
      { message: 'Please send category id to update.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const isExist = await prisma.blogCategories.findFirst({
      where: {
        id: bodyData.id,
      },
    })

    if (!isExist)
      return NextResponse.json(
        {
          message:
            'Category not found, please send correct category id to update.',
        },
        { status: 404 }
      )

    const result = await prisma.blogCategories.update({
      where: {
        id: bodyData.id,
      },
      data: { category: bodyData.category },
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
  if (!id)
    return NextResponse.json(
      { message: 'Please send category id to delete.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const result = await prisma.blogCategories.delete({
      where: {
        id,
      },
    })

    if (!result)
      return NextResponse.json(
        {
          message:
            'Category deletion failed, please send correct category id to delete.',
        },
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
