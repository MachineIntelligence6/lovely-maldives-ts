import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllParams } from '@/utils/getIdParam'
import prisma from '../../../../../prisma'

export async function GET(req: Request) {
  const params = getAllParams(req.url)
  console.log('params ', params)
  const limit = Number(params.get('limit')) || 12

  try {
    await connectToDatabase()

    const hotels = await prisma.hotels.findMany({
      take: limit,
    })

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
