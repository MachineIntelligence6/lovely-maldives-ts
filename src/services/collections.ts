import prisma from '../../prisma'

interface Collections {
  title: string
  image: string
  ratings: string
  homeBgId: string
}

export async function createOurCollection(data: Collections) {
  return prisma.ourCollections.create({
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

export async function getOurCollections() {
  return prisma.ourCollections.findMany()
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
