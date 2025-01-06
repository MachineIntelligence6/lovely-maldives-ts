/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllParams, getIdParam } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  const params = getAllParams(req.url)
  const page = Number(params.get('page')) || 1
  const limit = Number(params.get('limit')) || 20

  const skip = (page - 1) * limit
  try {
    await connectToDatabase()

    const result = await prisma.hotels.findMany({ take: limit, skip })
    const total = await prisma.hotels.count()

    if (!result)
      return NextResponse.json(
        { message: 'No hotel data found.' },
        { status: 404 }
      )

    return NextResponse.json(
      { message: 'Success', data: result, total },
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
  if (!bodyData?.title || !bodyData?.sections)
    return NextResponse.json({
      message: 'Please send complete hotel data to save.',
      status: 422,
    })
  try {
    await connectToDatabase()
    console.log('bodyData ', bodyData)
    // return
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

    console.log('hotel created:', result)

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
    return NextResponse.json({
      message: 'Please send hotel id to update.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const isExist = await prisma.hotels.findFirst({
      where: {
        id: bodyData.id,
      },
    })

    if (!isExist)
      return NextResponse.json({
        status: 404,
        message: 'Hotel not found, please send correct Hotel id to update.',
      })

    const resort = await prisma.resorts.findFirst({
      select: {
        id: true,
        resortSections: true,
      },
    })

    const imagesGallerySection = resort?.resortSections?.find(
      (item) => item.type === 'images_gallery'
    )

    if (imagesGallerySection) {
      const updatedResorts = imagesGallerySection.hotels?.map((hotel) => {
        if (hotel?.id === bodyData.id) {
          return {
            ...hotel,
            title: bodyData.title,
            ratings: bodyData?.ratings,
            sections: bodyData.sections,
          }
        }
        return hotel
      })

      await prisma.resorts.update({
        where: {
          id: resort?.id,
        },
        data: {
          resortSections: resort?.resortSections.map((section) => ({
            type: section.type,
            title: section.title || null,
            description: section.description || null,
            hotels:
              section.type === 'images_gallery'
                ? updatedResorts.map((hotel) => ({
                    id: hotel.id,
                    title: hotel.title,
                    ratings: hotel.ratings || '',
                    image: hotel.image || '',
                  }))
                : section.hotels,
          })),
        },
      })
    }

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

    return NextResponse.json({
      message: 'Hotel updated successfully',
      data: result,
      status: 200,
    })
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error, status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(req: Request) {
  const id = getIdParam(req.url)
  // if (!id)
  //   return NextResponse.json({
  //     message: 'Please send hotel id to delete.',
  //     status: 422,
  //   })
  // try {
  //   await connectToDatabase()

  //   const resort = await prisma.resorts.findFirst({
  //     select: {
  //       id: true,
  //       resortSections: true,
  //     },
  //   })

  console.log('resort=======>', id)

  // const result = await prisma.hotels.delete({
  //   where: {
  //     id,
  //   },
  // })

  // if (!result)
  //   return NextResponse.json({
  //     message:
  //       'Hotel deletion failed, please send correct hotel id to delete.',
  //     status: 404,
  //   })

  //   return NextResponse.json({ message: 'Deleted Successfuly', status: 200 })
  // } catch (error) {
  //   console.log('Error', error)
  //   return NextResponse.json({ message: 'Error', data: error, status: 500 })
  // } finally {
  //   await prisma.$disconnect()
  // }
}
