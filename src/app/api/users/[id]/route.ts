import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../../prisma'

export async function DELETE(req: Request, route: { [key: string]: any }) {
  const { params } = route
  const { id } = params
  console.log('id ', id)
  if (!id)
    return NextResponse.json({
      message: 'Please send id to delete user.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await prisma.user.delete({
      where: { id },
    })

    if (!result)
      return NextResponse.json({ message: 'No hotel data found.', status: 409 })

    return NextResponse.json(
      { message: 'User deleted successfully.', data: result, status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
