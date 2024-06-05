import prisma from '../../prisma'

interface AboutusShort {
  title: string
  description: string
  promises: string[]
  homeBgId: string
}

export async function createAboutusShort(data: AboutusShort) {
  const isExist = await prisma.aboutUsShort.findFirst()
  let result
  if (isExist) {
    result = await prisma.aboutUsShort.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.aboutUsShort.create({
      data: {
        title: data.title,
        description: data.description,
        promises: data.promises,
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

export async function getAboutusShort() {
  return prisma.aboutUsShort.findFirst()
}

export async function deleteAboutusShort() {
  const isExist = await prisma.aboutUsShort.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.aboutUsShort.delete({
    where: {
      id: isExist.id,
    },
  })
}
