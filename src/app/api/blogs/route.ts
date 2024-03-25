import { customAlphabet } from 'nanoid'
import blog from '../../../../public/Images/landingTree.jpg'

const nanoid = customAlphabet('1234567890abcdef', 10)

export async function GET() {
  const blogPost = {
    id: nanoid,
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort',
  }

  return Response.json(blogPost)
}
