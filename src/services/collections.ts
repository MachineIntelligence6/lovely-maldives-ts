import prisma from '../../prisma'

interface Collections {
  title: string
  ids: string[]
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
        ids: data.ids,
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
  const result = await prisma.ourCollections.findFirst()
  console.log('result ids ', result)
  if (!result) return 'NOT_FOUND'
  const data = await prisma.hotels.findMany({
    where: {
      id: {
        in: result?.ids,
      },
    },
    take: 12,
  })

  console.log('searched collections ', data)

  const filtered = data.map((hotel: any) => {
    // Find the first section with images
    const imageSection = hotel.sections.find(
      (section: any) => section.images && section.images.length > 0
    )
    // Get the first image if available
    const firstImage = imageSection ? imageSection.images[0] : null

    return {
      id: hotel.id,
      title: hotel.title,
      ratings: hotel.ratings,
      coverImage: firstImage,
    }
  })

  return { title: result.title, collections: filtered }
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
