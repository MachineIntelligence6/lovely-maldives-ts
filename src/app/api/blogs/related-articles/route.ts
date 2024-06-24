import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getAllParams } from '@/utils/getIdParam'
import prisma from '../../../../../prisma'

export async function GET(req: Request) {
  const params = getAllParams(req.url)
  console.log('params ', params)
  const id = params.get('id')
  try {
    await connectToDatabase()
    const findResult = await prisma.blogs.findFirst({ where: { id } as any })

    const result = await prisma.blogs.findMany({
      where: {
        category: findResult?.category,
        id: {
          not: id as any,
        },
      },
      take: 3,
    })
    console.log('result', result)
    if (!result)
      return NextResponse.json({
        message: 'No related blog article found.',
        status: 409,
      })

    return NextResponse.json(
      { message: 'Success', data: result, status: 200 },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json(
      { message: 'Error', data: error, status: 500 },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}
