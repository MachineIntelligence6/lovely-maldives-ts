import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== 'POST')
    return NextResponse.json(
      { message: 'Only post request allowed' },
      { status: 400 }
    )
  const { email, password } = await req.json()
  if (!email || !password)
    return NextResponse.json(
      { message: 'Please enter all fields.' },
      { status: 400 }
    )
  if (!process.env.SECRET_KEY) {
    throw new Error('Missing SECRET_KEY environment variable')
  }

  const token = jwt.sign({ _id: email }, process.env.SECRET_KEY)
  try {
    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'failed: error' }, { status: 500 })
  }
}