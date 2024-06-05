import prisma from '../../prisma'

interface AboutMaldivesShortData {
  title: string
  subTitle: string
  bgImages: string[]
}

export async function createHomeBg(data: AboutMaldivesShortData) {
  const isExist = await prisma.homeBg.findFirst()
  let result
  if (isExist) {
    result = await prisma.homeBg.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.homeBg.create({
      data,
    })
  }

  return result
}

export async function getHomeBg() {
  return prisma.homeBg.findFirst()
}
