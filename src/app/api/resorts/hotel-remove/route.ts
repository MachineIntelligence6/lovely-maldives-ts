// import { NextResponse } from 'next/server'
// import prisma from '../../../../../prisma'

// export async function PATCH(req: Request) {
//   try {
//     const bodyData = await req.json()
//     const { resortSectionId, hotelId } = bodyData

//     if (!resortSectionId || !hotelId) {
//       return NextResponse.json(
//         { message: 'Please provide both resortSectionId and hotelId.' },
//         { status: 422 }
//       )
//     }

//     // Fetch the resort along with its sections
//     const resort = await prisma.resorts.findUnique({
//       where: { id: resortSectionId },
//       include: { resortSections: true },
//     })

//     if (!resort) {
//       return NextResponse.json(
//         { message: 'Resort section not found.' },
//         { status: 404 }
//       )
//     }

//     // Check if the hotel exists in any section
//     const hotelExists = resort.resortSections.some((section) =>
//       section.hotels.some((hotel) => hotel.id === hotelId)
//     )

//     if (!hotelExists) {
//       return NextResponse.json(
//         { message: 'Hotel not found in the specified resort sections.' },
//         { status: 404 }
//       )
//     }

//     // Update the specific section by removing the hotel
//     const updatedSections = resort.resortSections.map((section) => {
//       if (section.type === 'images_gallery') {
//         // Adjust this condition based on your section logic
//         return {
//           ...section,
//           hotels: section.hotels.filter((hotel) => hotel.id !== hotelId),
//         }
//       }
//       return section
//     })

//     // Save the updated sections back to the database
//     const updatedResort = await prisma.resorts.update({
//       where: { id: resort.id },
//       data: {
//         resortSections: updatedSections, // Replace the sections array with the updated one
//       },
//     })

//     return NextResponse.json(
//       { message: 'Hotel removed successfully', data: updatedResort },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.error('Error removing hotel:', error)
//     return NextResponse.json(
//       {
//         message: 'An error occurred while removing the hotel.',
//         error: (error as any).message,
//       },
//       { status: 500 }
//     )
//   } finally {
//     await prisma.$disconnect()
//   }
// }

import { NextResponse } from 'next/server'
import prisma from '../../../../../prisma'

export async function PATCH(req: Request) {
  try {
    const bodyData = await req.json()
    const { hotelId } = bodyData

    if (!hotelId) {
      return NextResponse.json(
        { message: 'Please provide the hotelId.' },
        { status: 422 }
      )
    }

    // Find the resort containing the hotel
    const resort = await prisma.resorts.findFirst({
      where: {
        resortSections: {
          some: {
            hotels: {
              some: {
                id: hotelId,
              },
            },
          },
        },
      },
    })

    if (!resort) {
      return NextResponse.json(
        { message: 'Hotel not found in any resort.' },
        { status: 404 }
      )
    }

    // Parse the `resortSections` field
    const resortSections = resort.resortSections as unknown as Array<{
      type: string
      title?: string
      description?: string
      hotels: Array<{
        id: string
        title: string
        ratings: string
        image: string
      }>
    }>

    // Update the sections by removing the hotel with the specified hotelId
    const updatedSections = resortSections.map((section) => {
      return {
        ...section,
        hotels: section.hotels.filter((hotel) => hotel.id !== hotelId),
      }
    })

    // Save the updated sections back to the database
    const updatedResort = await prisma.resorts.update({
      where: { id: resort.id },
      data: {
        resortSections: updatedSections,
      },
    })

    return NextResponse.json(
       {status: 200, message: 'Hotel removed successfully', data: updatedResort },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error removing hotel:', error)
    return NextResponse.json(
      {
        message: 'An error occurred while removing the hotel.',
        error: error.message,
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
