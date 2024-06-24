import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createFooter, getFooter } from '@/services/footer'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getFooter()
    if (!result)
      return NextResponse.json({ message: 'No footer data found', status: 409 })

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
  const { title, menus, homeBgId } = bodyData
  if (!homeBgId)
    return NextResponse.json({
      message: 'Please enter all fields to save footer data.',
      status: 422,
    })
  try {
    await connectToDatabase()

    const result = await createFooter({ title, columns: menus, homeBgId })
    if (!result)
      return NextResponse.json({
        message: 'Footer data not saved, please try again',
        status: 422,
      })

    return NextResponse.json(
      { message: 'Success', data: result, status: 201 },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
