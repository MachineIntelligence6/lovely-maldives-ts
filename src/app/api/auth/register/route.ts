import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { connectToDatabase } from '@/helpers/server-helpers'
import prisma from '../../../../../prisma'

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== 'POST')
    return NextResponse.json({
      message: 'Only post request allowed',
      status: 400,
    })
  const { name, email, password, role } = await req.json()
  if (!name || !email || !password)
    return NextResponse.json({
      message: 'Please enter all fields.',
      status: 422,
    })
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await connectToDatabase()

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || 'user',
        isAdmin: false,
      },
    })
    return NextResponse.json(
      { data: user, message: 'Success' },
      { status: 201 }
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
