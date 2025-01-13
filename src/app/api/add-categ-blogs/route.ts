/* eslint-disable array-callback-return */
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../prisma'
import { getAllParams } from '@/utils/getIdParam'

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

export async function GET(req: Request) {
  const params = getAllParams(req.url)
  const category = params.get('category')
  try {
    await connectToDatabase()
    console.log('testing... ', category)
    const uniqueCategories = await prisma.blogs.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
      where: {
        AND: [
          {
            category: {
              not: '',
            },
          },
        ],
      },
    })

    const categoryBlogs = await prisma.categoryBlogs.findMany()

    const blogData = await Promise.all(
      categoryBlogs.map(async (categ) => {
        if (!categ.ids || categ.ids.length === 0) {
          return {
            category: categ.category,
            blogs: [],
            id: categ.id,
          }
        }

        const blogs = await prisma.blogs.findMany({
          where: {
            id: {
              in: categ.ids,
            },
          },

          take: 20,
        })

        return {
          category: categ.category,
          blogs,
          id: categ.id,
        }
      })
    )

    return NextResponse.json(
      {
        categories: uniqueCategories.map((item) => item.category),
        data: blogData,
        status: 200,
      },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
