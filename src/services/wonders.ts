import prisma from '../../prisma'

interface Wonders {
  title: string
  image: string
  homeBgId: string
}

export async function createWonders(data: Wonders) {
  return prisma.wonders.create({
    data: {
      title: data.title,
      image: data.image,
      homeBg: {
        connect: {
          id: data.homeBgId,
        },
      },
    },
  })
}

export async function getWonders() {
  return prisma.wonders.findMany()
}

export async function deleteWonders() {
  const isExist = await prisma.wonders.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.wonders.delete({
    where: {
      id: isExist.id,
    },
  })
}
