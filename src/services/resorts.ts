import prisma from '../../prisma'

export async function createResorts(data: any) {
  const isExist = await prisma.resorts.findFirst()
  let result
  if (isExist) {
    result = await prisma.resorts.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.resorts.create({
      data,
    })
  }

  return result
}

export async function getResorts() {
  return prisma.resorts.findFirst()
}

export async function deleteResorts() {
  const isExist = await prisma.resorts.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.resorts.delete({
    where: {
      id: isExist.id,
    },
  })
}

/* eslint-disable array-callback-return */
// import { NextResponse } from 'next/server'
// import { connectToDatabase } from '@/helpers/server-helpers'
// import { createResorts, deleteResorts, getResorts } from '@/services/resorts'
// import prisma from '../../../../prisma'

// export async function GET() {
//   try {
//     await connectToDatabase()

//     const result = await getResorts()
//     if (!result)
//       return NextResponse.json({ message: 'No data found.', status: 404 })
//     console.log('Results ', result)

//     let galleryIds
//     let sliderIds

//     result?.resortSections?.map((re: any) => {
//       if (re?.type === 'gallery_images') {
//         console.log('Re ', re)
//         galleryIds = re?.hotels
//       }
//       if (re?.type === 'gallery_slider') {
//         console.log('Re 1', re)
//         sliderIds = re?.hotels
//       }
//     })
//     console.log('galleryIds', galleryIds)
//     console.log('sliderIds', sliderIds)

//     return NextResponse.json(
//       { message: 'Success', data: result, status: 200 },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.log('Error', error)
//     return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// export async function POST(req: Request) {
//   const bodyData = await req.json()
//   if (!bodyData?.resortSections || bodyData?.resortSections?.length === 0)
//     return NextResponse.json({ message: 'No data found', status: 404 })

//   // let sections = []
//   // resortSections?.map((sec: any) => {
//   //   if(sec?.type=== "gallery_slider" || sec?.type=== "gallery_images"){

//   //   }
//   // })
//   try {
//     await connectToDatabase()

//     const result = await createResorts(bodyData)
//     if (!result)
//       return NextResponse.json({ message: 'No data found', status: 404 })

//     return NextResponse.json(
//       { message: 'Success', data: result, status: 201 },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.log('Error', error)
//     return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
//   } finally {
//     await prisma.$disconnect()
//   }
// }

// export async function DELETE() {
//   try {
//     await connectToDatabase()

//     const result = await deleteResorts()
//     if (result === 'NOT_FOUND')
//       return NextResponse.json({
//         message:
//           'Filter deletion failed, please send correct filter id to delete.',
//         status: 404,
//       })

//     return NextResponse.json({ message: 'Success', status: 201 })
//   } catch (error) {
//     console.log('Error', error)
//     return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
//   } finally {
//     await prisma.$disconnect()
//   }
// }
