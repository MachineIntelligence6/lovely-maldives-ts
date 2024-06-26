import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getIdParam } from '@/utils/getIdParam'
import { createTermsOfUse } from '@/services/termsOfUse'
import prisma from '../../../../prisma'

export async function GET(req: Request) {
  try {
    await connectToDatabase()

    const result = await prisma.termsOfUse.findFirst()

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

export async function POST(req: Request) {
  const bodyData = await req.json()
  if (!bodyData?.title || !bodyData?.description)
    return NextResponse.json({
      message: 'Please send complete data to save.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await createTermsOfUse(bodyData)

    return NextResponse.json(
      {
        message: 'Terms and Conditions updated successfully.',
        data: result,
        status: 201,
      },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error, status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function DELETE(req: Request) {
  const id = getIdParam(req.url)
  console.log('id is ', id)
  if (!id)
    return NextResponse.json(
      { message: 'Please send id to delete.' },
      { status: 422 }
    )
  try {
    await connectToDatabase()

    const result = await prisma.termsOfUse.delete({
      where: {
        id,
      },
    })

    if (!result)
      return NextResponse.json({
        message: 'Deletion failed, please send correct id to delete.',
        status: '404',
      })

    return NextResponse.json(
      { message: 'Deleted Successfuly', status: 200 },
      { status: 20 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
