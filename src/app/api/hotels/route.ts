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
  try {
    const bodyData = await req.json();

    // Validate input data
    if (!bodyData.id || !bodyData.title) {
      return NextResponse.json(
        { message: 'Please provide both hotel id and title to update.' },
        { status: 422 }
      );
    }

    // Validate sections data
    if (bodyData.sections) {
      bodyData.sections = bodyData.sections.map((section: any) => {
        return {
          ...section,
          images: Array.isArray(section.images) ? section.images : [], // Ensure images is always an array
          facts: Array.isArray(section.facts) ? section.facts : [], // Ensure facts is always an array
        };
      });
    }

    
    await connectToDatabase();

    // Check if the hotel exists
    const existingHotel = await prisma.hotels.findUnique({
      where: {
        id: bodyData.id,
      },
    });

    if (!existingHotel) {
      return NextResponse.json(
        { message: 'Hotel not found, please provide a correct hotel id to update.' },
        { status: 404 }
      );
    }

    // Update the hotel
    const updatedHotel = await prisma.hotels.update({
      where: {
        id: bodyData.id,
      },
      data: {
        title: bodyData.title,
        ratings: bodyData.ratings,
        sections: bodyData.sections,
      },
    });

    return NextResponse.json(
      { message: 'Hotel updated successfully', data: updatedHotel },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating hotel:', error);
    return NextResponse.json({ message: 'Error updating hotel', error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

























// export async function PUT(req: Request) {
//   try {
//     const bodyData = await req.json();

//     // Validate input data
//     if (!bodyData.id || !bodyData.title) {
//       return NextResponse.json(
//         { message: 'Please provide both hotel id and title to update.' },
//         { status: 422 }
//       );
//     }

//     // Validate sections data
//     if (bodyData.sections) {
//       const isValidSections = bodyData.sections.every((section: any) => {
//         // Check for mandatory fields
//         return (
//           section.type &&
//           (section.images || section.images === null) && // Allow null if images are optional
//           Array.isArray(section.facts)
//         );
//       });

//       if (!isValidSections) {
//         return NextResponse.json(
//           { message: 'Invalid sections data provided.' },
//           { status: 422 }
//         );
//       }
//     }

//     await connectToDatabase();

//     // Check if the hotel exists
//     const existingHotel = await prisma.hotels.findUnique({
//       where: {
//         id: bodyData.id,
//       },
//     });

//     if (!existingHotel) {
//       return NextResponse.json(
//         { message: 'Hotel not found, please provide a correct hotel id to update.' },
//         { status: 404 }
//       );
//     }

//     // Update the hotel
//     const updatedHotel = await prisma.hotels.update({
//       where: {
//         id: bodyData.id,
//       },
//       data: {
//         title: bodyData.title,
//         ratings: bodyData.ratings,
//         sections: bodyData.sections,
//       },
//     });

//     return NextResponse.json(
//       { message: 'Hotel updated successfully', data: updatedHotel },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error updating hotel:', error);
//     return NextResponse.json({ message: 'Error updating hotel', error }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }









// export async function PUT(req: Request) {
//   try {
//     const bodyData = await req.json();

//     // Validate input data
//     if (!bodyData.id || !bodyData.title) {
//       return NextResponse.json(
//         { message: 'Please provide both hotel id and title to update.' },
//         { status: 422 }
//       );
//     }

//     await connectToDatabase();

//     // Check if the hotel exists
//     const existingHotel = await prisma.hotels.findUnique({
//       where: {
//         id: bodyData.id,
//       },
//     });

//     if (!existingHotel) {
//       return NextResponse.json(
//         { message: 'Hotel not found, please provide a correct hotel id to update.' },
//         { status: 404 }
//       );
//     }

//     // Update the hotel
//     const updatedHotel = await prisma.hotels.update({
//       where: {
//         id: bodyData.id,
//       },
//       data: {
//         title: bodyData.title,
//         ratings: bodyData.ratings,
//         sections: bodyData.sections,
//       },
//     });

//     return NextResponse.json(
//       { message: 'Hotel updated successfully', data: updatedHotel },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error updating hotel:', error);
//     return NextResponse.json({ message: 'Error updating hotel', error }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }





// export async function PUT(req: Request) {
//   const bodyData = await req.json()
//   if (!bodyData.id || !bodyData.title)
//     return NextResponse.json(
//       { message: 'Please send hotel id to update.' },
//       { status: 422 }
//     )
//   try {
//     await connectToDatabase()

//     const isExist = await prisma.hotels.findFirst({
//       where: {
//         id: bodyData.id,
//       },
//     })

//     if (!isExist)
//       return NextResponse.json(
//         {
//           message: 'Hotel not found, please send correct Hotel id to update.',
//         },
//         { status: 404 }
//       )

//     const result = await prisma.hotels.update({
//       where: {
//         id: bodyData.id,
//       },
//       data: {
//         title: bodyData.title,
//         ratings: bodyData?.ratings,
//         sections: bodyData.sections,
//       },
//     })

//     return NextResponse.json(
//       { message: 'Hotel updated successfully', data: result, status: 200 },
//       { status: 201 }
//     )
//   } catch (error) {
//     console.log('Error', error)
//     return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
//   } finally {
//     await prisma.$disconnect()
//   }
// }




export async function DELETE(req: Request) {
  const id = getIdParam(req.url)
  if (!id)
    return NextResponse.json(
      { message: 'Please send hotel id to delete.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const result = await prisma.hotels.delete({
      where: {
        id,
      },
    })

    if (!result)
      return NextResponse.json(
        {
          message:
            'Hotel deletion failed, please send correct hotel id to delete.',
        },
        { status: 404 }
      )

    return NextResponse.json(
      { message: 'Deleted Successfuly' },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
