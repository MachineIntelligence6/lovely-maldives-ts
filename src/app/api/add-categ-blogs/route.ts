/* eslint-disable array-callback-return */
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../prisma'

export async function POST(req: Request) {
  const bodyData = await req.json()
  if (!bodyData?.category || !bodyData?.ids || bodyData?.ids?.length === 0)
    return NextResponse.json({
      message: 'Please send complete blog data to save.',
      status: 422,
    })
  try {
    await connectToDatabase()
    let result
    if (bodyData?.blogSecId) {
      result = await prisma.categoryBlogs.update({
        where: {
          id: bodyData?.blogSecId,
        },
        data: {
          category: bodyData.category,
          ids: bodyData?.ids,
        },
      })
    } else {
      const isExist = await prisma.categoryBlogs.findFirst({
        where: {
          category: bodyData.category,
        },
      })

      if (isExist) {
        result = await prisma.categoryBlogs.update({
          where: {
            id: isExist.id,
          },
          data: {
            category: bodyData.category,
            ids: bodyData?.ids,
          },
        })
      } else {
        result = await prisma.categoryBlogs.create({
          data: {
            category: bodyData.category,
            ids: bodyData?.ids,
          },
        })
      }
    }

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

export async function GET(req: Request, res: Response) {
  try {
    await connectToDatabase()

    const blogData = [] as any

    const result = await prisma.categoryBlogs.findMany()

    await Promise.all(
      result.map(async (re, index) => {
        if (re?.ids?.length > 0) {
          const response = await prisma.blogs.findMany({
            where: {
              id: {
                in: re?.ids,
              },
            },
            take: 20,
          })

          // Push into blogData with the original index to maintain order
          blogData[index] = {
            category: re?.category,
            blogs: response,
            id: re?.id,
          }
        }
      })
    )

    return NextResponse.json({ data: blogData, status: 200 }, { status: 200 })
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
