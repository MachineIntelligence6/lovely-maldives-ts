import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllParams, getIdParam } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  const params = getAllParams(req.url)
  const category = params.get('category')?.replace('-', ' ')
  const page = Number(params.get('page')) || 1
  const limit = Number(params.get('limit')) || 20
  const skip = (page - 1) * limit

  try {
    await connectToDatabase()

    let result
    if (category && category !== 'all blogs') {
      result = await prisma.blogs.findMany({
        where: {
          category: {
            contains: category,
            mode: 'insensitive',
          },
        },
        take: limit,
        skip,
      })
    } else {
      result = await prisma.blogs.findMany({ take: limit, skip })
    }
    const totalBlogs = await prisma.blogs.count()

    if (!result)
      return NextResponse.json({ message: 'No blogs data found.', status: 409 })

    return NextResponse.json(
      { message: 'Success', data: result, totalBlogs, status: 200 },
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
  if (
    !bodyData?.category ||
    !bodyData?.description ||
    !bodyData?.title ||
    !bodyData?.metatags ||
    !bodyData?.coverImage
  )
    return NextResponse.json({
      message: 'Please send complete blog data to save.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const isExist = await prisma.blogs.findFirst({
      where: {
        category: bodyData.category,
        title: bodyData.title,
        description: bodyData.description,
        coverImage: bodyData.coverImage,
      },
    })

    if (isExist)
      return NextResponse.json({
        message: 'This blog already created.',
        status: 409,
      })

    const result = await prisma.blogs.create({
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
  if (!bodyData.id || !bodyData.category)
    return NextResponse.json({
      message: 'Please send blog id to update.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const isExist = await prisma.blogs.findFirst({
      where: {
        id: bodyData.id,
      },
    })

    if (!isExist)
      return NextResponse.json({
        message: 'Blog not found, please send correct blog id to update.',
        status: 404,
      })

    const result = await prisma.blogs.update({
      where: {
        id: bodyData.id,
      },
      data: {
        category: bodyData.category,
        title: bodyData.title,
        description: bodyData.description,
        coverImage: bodyData.coverImage,
      },
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
      message: 'Please send blog id to delete.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await prisma.blogs.delete({
      where: {
        id,
      },
    })

    if (!result)
      return NextResponse.json({
        message: 'Blog deletion failed, please send correct blog id to delete.',
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
