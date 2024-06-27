import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getIdParam } from '@/utils/getIdParam'
import prisma from '../../../../../prisma'

export async function DELETE(req: Request, route: { [key: string]: any }) {
  const { params } = route
  const { id } = params
  if (!id)
    return NextResponse.json({
      message: 'Please send id to delete.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await prisma.emailSubscription.delete({
      where: {
        id,
      },
    })

    if (!result)
      return NextResponse.json({
        message: 'Deletion failed, please send correct id to delete.',
        status: 404,
      })

    return NextResponse.json(
      { message: 'Deleted Successfuly', status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
