import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(req: Request, res: NextResponse) {
  if (req.method !== 'POST')
    return NextResponse.json(
      { message: 'Only post request allowed' },
      { status: 400 }
    )
  const { name, email, password } = await req.json()
  if (!name || !email || !password)
    return NextResponse.json(
      { message: 'Please enter all fields.' },
      { status: 400 }
    )
  const hashedPassword = await bcrypt.hash(password, 10)
  console.log('hashedPassword ', hashedPassword)
  try {
    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ message: 'failed: error' }, { status: 500 })
  }
}
