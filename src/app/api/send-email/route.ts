import { NextResponse, NextRequest } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
  }

  const { name, email, number, message } = await req.json()

  try {
    // Construct the EmailJS API request payload
    const payload = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Your service ID
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Your template ID
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, // Your public key
      accessToken: process.env.NEXT_PUBLIC_EMAILJS_PRIVATE_KEY, // Your private key (if required)
      template_params: {
        to_email: 'ahmad.gurmani06@gmail.com', // Recipient email
        from_email: email,
        subject: 'Lovely Maldives',
        name,
        email,
        number,
        message,
      },
    }

    // Make the API call to EmailJS from server-side
    const response = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      payload
    )

    // Return success response to client
    return NextResponse.json(
      { message: 'Email sent successfully', data: response.data },
      { status: 200 }
    )
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('EmailJS Error:', error.response?.data || error.message)
    } else {
      console.error('Unexpected Error:', error)
    }

    // Return error response to client
    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: error.response?.data || error.message,
      },
      { status: 500 }
    )
  }
}
