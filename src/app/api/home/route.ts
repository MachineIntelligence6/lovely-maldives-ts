import { NextResponse } from 'next/server'
import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getHomeSections } from '@/services/homeSections'
import prisma from '../../../../prisma'

export async function GET(req: NextApiRequest,
  res: NextApiResponse) {
  try {
    await connectToDatabase()
    console.log('home data is fetching...')
    const result = await getHomeSections(req, res)
    console.log('home data is: ', result)
    if (!result)
      return NextResponse.json({ message: 'No data found', status: 409 })

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
