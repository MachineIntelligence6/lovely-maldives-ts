import prisma from '../../prisma'

interface Brands {
  title: string
  description: string
  bgColor: string
  ratings: string
  homeBgId: string
}

export async function createBrand(data: Brands) {
  const isExist = await prisma.brands.findFirst({
    where: {
      title: data.title,
      description: data.description,
      ratings: data.ratings,
      bgColor: data.bgColor,
    },
  })

  if (isExist) return 'This brand already exists'

  return prisma.brands.create({
    data: {
      title: data.title,
      description: data.description,
      ratings: data.ratings,
      bgColor: data.bgColor,
      homeBg: {
        connect: {
          id: data.homeBgId,
        },
      },
    },
  })
}

export async function getBrands() {
  return prisma.brands.findMany()
}

export async function deleteBrand() {
  const isExist = await prisma.brands.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.brands.delete({
    where: {
      id: isExist.id,
    },
  })
}
