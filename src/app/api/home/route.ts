import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { getHomeSections } from '@/services/homeSections'
import prisma from '../../../../prisma'

export async function GET() {
  console.log('before connection to db')
  try {
    await connectToDatabase()
    console.log('after connection to db')

    const result = await getHomeSections()
    console.log('after get homeSection servuce')
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
