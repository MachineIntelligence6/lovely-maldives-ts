import prisma from '../../prisma'

interface Brands {
  title: string
  bgColor: string
  brands: [{ logo: string; ratings: string; tag: string }]
  homeBgId: string
}

export async function createBrand(data: Brands) {
  console.log('brands ', data?.brands)
  const isExist = await prisma.brands.findFirst()
  let result
  if (isExist) {
    result = await prisma.brands.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.brands.create({
      data: {
        title: data.title,
        brands: data?.brands,
        bgColor: data.bgColor,
        homeBg: {
          connect: {
            id: data.homeBgId,
          },
        },
      },
    })
  }

  return result
}

export async function getBrands() {
  return prisma.brands.findFirst()
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
