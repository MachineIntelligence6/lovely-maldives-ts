/* eslint-disable array-callback-return */
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllParams } from '@/utils/getIdParam'
import { getResorts } from '@/services/resorts'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  const params = getAllParams(req.url)

  const page = Number(params.get('page')) || 1
  const limit = Number(params.get('limit')) || 20
  const skip = (page - 1) * limit

  try {
    await connectToDatabase()

    const allIds = [] as any
    const resorts = await getResorts()
    resorts?.resortSections?.map((sec) => {
      if (sec?.type === 'images_gallery' || sec?.type === 'images_slider') {
        sec?.hotels?.map((hotel) => {
          allIds.push(hotel?.id)
        })
      }
    })

    let hotels
    if ((allIds?.length as any) > 0 && allIds?.[0] !== '') {
      hotels = await prisma.hotels.findMany({
        where: {
          id: {
            notIn: allIds,
          },
        },
        take: limit,
        skip,
      })
    } else {
      hotels = await prisma.hotels.findMany({
        take: limit,
        skip,
      })
    }
    const total = await prisma.hotels.count()

    if (!hotels || hotels?.length === 0)
      return NextResponse.json({ message: 'No hotel data found.', status: 404 })

    const result = hotels.map((hotel: any) => {
      // Find the first section with images
      const imageSection = hotel.sections.find(
        (section: any) => section.images && section.images.length > 0
      )
      // Get the first image if available
      const firstImage = imageSection ? imageSection.images[0] : null

      return {
        id: hotel.id,
        title: hotel.title,
        ratings: hotel.ratings,
        image: firstImage,
      }
    })

    return NextResponse.json(
      { message: 'Success', data: result, total, status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
