import prisma from '../../prisma'

interface AboutMaldivesShortData {
  title: string
  description: string
  homeBgId: string
}

export async function createAboutMaldivesShort(data: AboutMaldivesShortData) {
  const isExist = await prisma.aboutMaldivesShort.findFirst()
  let result
  if (isExist) {
    result = await prisma.aboutMaldivesShort.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.aboutMaldivesShort.create({
      data: {
        title: data.title,
        description: data.description,
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

export async function getAboutMaldivesShort() {
  return prisma.aboutMaldivesShort.findFirst()
}

export async function deleteAboutMaldivesShort() {
  const isExist = await prisma.aboutMaldivesShort.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.aboutMaldivesShort.delete({
    where: {
      id: isExist.id,
    },
  })
}
