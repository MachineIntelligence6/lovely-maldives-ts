import prisma from '../../prisma'

interface Wonders {
  title: string
  cards: [{ image: string; title: string }]
  homeBgId: string
}

export async function createWonders(data: Wonders) {
  const isExist = await prisma.wonders.findFirst()
  let result
  if (isExist) {
    result = await prisma.wonders.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.wonders.create({
      data: {
        title: data.title,
        cards: data.cards,
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

export async function getWonders() {
  return prisma.wonders.findFirst()
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
