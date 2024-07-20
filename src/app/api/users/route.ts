import { NextResponse } from 'next/server'
import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllUsers, updateUserStatus } from '@/services/users'
import { getAllParams } from '@/utils/getIdParam'
import prisma from '../../../../prisma'

export async function GET(req: NextApiRequest) {
  try {
    await connectToDatabase()
    const result = await getAllUsers()
    if (!result)
      return NextResponse.json({ message: 'No data found.', status: 404 })

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

export async function PUT(req: Request) {
  const params = getAllParams(req.url)
  const id = params.get('id')
  const status = params.get('status')

  if (!id)
    return NextResponse.json({
      message: 'Please send id and status to update.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await updateUserStatus(id, status)
    if (!result)
      return NextResponse.json({
        message: 'No Data found, please add first.',
        status: 409,
      })

    return NextResponse.json(
      { message: 'Success', status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
