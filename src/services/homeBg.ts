import prisma from '../../prisma'

interface AboutMaldivesShortData {
  title: string
  subTitle: string
  bgImages: string[]
  mobileBgImages: string[]
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
  return prisma.homeBg.findFirst({
    include: {
      aboutMaldivesShort: true,
      services: true,
      aboutUsShort: true,
      wonders: true,
      collections: true,
      brands: true,
      socialLinkSection: true,
      header: true,
      footer: true,
      sideImage: true,
    },
  })
}
