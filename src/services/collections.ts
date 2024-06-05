import prisma from '../../prisma'

interface Collections {
  title: string
  image: string
  ratings: string
  homeBgId: string
}

export async function createCollection(data: Collections) {
  const isExist = await prisma.collections.findFirst()
  let result
  if (isExist) {
    result = await prisma.collections.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.collections.create({
      data: {
        title: data.title,
        image: data.image,
        ratings: data.ratings,
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

export async function getCollections() {
  return prisma.collections.findFirst()
}

export async function deleteCollection() {
  const isExist = await prisma.collections.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.collections.delete({
    where: {
      id: isExist.id,
    },
  })
}
