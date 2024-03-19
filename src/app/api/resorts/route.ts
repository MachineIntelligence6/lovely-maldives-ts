import { Resort } from '@/app/api/resorts/resort'

export async function GET() {
  return Response.json({ data: 'Resorts API' })
}

export async function POST() {
  const newResort = new Resort({ name: 'The Demo Resort' })
  await newResort.save()
  return Response.json({ data: newResort })
}
