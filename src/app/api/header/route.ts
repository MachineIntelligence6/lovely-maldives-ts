import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/helpers/server-helpers'
import { createHeader, getHeader } from '@/services/header'
import prisma from '../../../../prisma'

export async function GET() {
  try {
    await connectToDatabase()

    const result = await getHeader()
    if (!result)
      return NextResponse.json({ message: 'No header data found', status: 409 })

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
  const {
    heroUrl,
    otherUrl,
    heroWidth,
    otherWidth,
    heroHeight,
    otherHeight,
    heroBgcolor,
    otherBgcolor,
    homeBgId,
    menus,
    menusBgcolor,
  } = bodyData

  try {
    await connectToDatabase()

    const result = await createHeader({
      heroLogo: heroUrl,
      otherLogo: otherUrl,
      heroWidth: heroWidth?.toString(),
      otherWidth: otherWidth?.toString(),
      heroHeight: heroHeight?.toString(),
      otherHeight: otherHeight?.toString(),
      heroBgcolor,
      otherBgcolor,
      homeBgId,
      menus,
      menusBgcolor,
    })

    if (!result)
      return NextResponse.json({
        message: 'Header data not saved, please try again',
        status: 422,
      })

    return NextResponse.json(
      { message: 'Header data saved successfully.', data: result, status: 201 },
      { status: 201 }
    )
  } catch (error) {
    console.log('Error', error)
    return NextResponse.json({ message: 'Error', data: error }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
