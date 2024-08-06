/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllParams } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  const params = getAllParams(req.url)
  const search = params.get('search')
  console.log('Search: ', search)
  try {
    await connectToDatabase()

    const blogsFilter = {
      OR: [
        { title: { contains: search, mode: 'insensitive' } as any },
        { description: { contains: search, mode: 'insensitive' } as any },
        { category: { contains: search, mode: 'insensitive' } as any },
      ],
    }

    const hotelSearchFilter = {
      OR: [
        { title: { contains: search, mode: 'insensitive' } as any },
        {
          sections: {
            some: {
              facts: {
                some: {
                  title: { contains: search, mode: 'insensitive' } as any,
                },
              },
            },
          },
        },
      ],
    }

    const [blogs, hotels] = await Promise.all([
      prisma.blogs.findMany({
        where: blogsFilter,
      }),
      prisma.hotels.findMany({
        where: hotelSearchFilter,
      }),
    ])

    const filteredHotels = [] as any
    hotels?.map((hot: any) => {
      hot?.sections?.map((sugg: any) => {
        if (sugg?.type === 'gallery_slider') {
          filteredHotels.push({
            ratings: hot?.ratings,
            coverImg: sugg?.images?.[0],
            title: hot.title,
            id: hot?.id,
          })
        }
      })
    })

    // Combine results
    const result = {
      blogs,
      hotels: filteredHotels,
    }

    if (!result)
      return NextResponse.json({ message: 'No blogs data found.', status: 409 })

    return NextResponse.json(
      { message: 'Success', data: result, status: 200 },
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
