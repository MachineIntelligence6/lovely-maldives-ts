import prisma from '../../prisma'

interface Collections {
  title: string
  collections: [{ title: string; image: string; ratings: string }]
  homeBgId: string
}

export async function createOurCollection(data: Collections) {
  const isExist = await prisma.ourCollections.findFirst()
  let result
  if (isExist) {
    result = await prisma.ourCollections.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.ourCollections.create({
      data: {
        title: data.title,
        collections: data.collections,
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

export async function getOurCollections() {
  return prisma.ourCollections.findFirst()
}

export async function deleteOurCollection() {
  const isExist = await prisma.ourCollections.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.ourCollections.delete({
    where: {
      id: isExist.id,
    },
  })
}
