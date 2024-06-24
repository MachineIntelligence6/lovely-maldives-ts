// import { NextResponse } from "next/server"
// import { connectToDatabase } from "@/helpers/server-helpers"
// import { getAllParams } from "@/utils/getIdParam"
// import prisma from "../../../../../prisma"

// export async function GET(req: Request) {
//   const params = getAllParams(req.url)
//   console.log('params ', params)
//   const page = Number(params.get('page')) || 1
//   const limit = Number(params.get('limit')) || 20
//   const skip = (page - 1) * limit

//   try {
//     await connectToDatabase()

//     const result = await prisma.blogs.findMany({take: 5, category: ''})
//     const totalBlogs = await prisma.blogs.count()

//     if (!result)
//       return NextResponse.json({ message: 'No blogs data found.', status: 409 })

//     return NextResponse.json(
//       { message: 'Success', data: result, totalBlogs, status: 200 },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.log('Error', error)
//     return NextResponse.json(
//       { message: 'Error', data: error, status: 500 },
//       { status: 500 }
//     )
//   } finally {
//     await prisma.$disconnect()
//   }
// }
