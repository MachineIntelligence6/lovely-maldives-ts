import prisma from '../../prisma'

interface SideImage {
  image: string
  homeBgId: string
}

export async function createSideImage(data: SideImage) {
  const isExist = await prisma.sideImage.findFirst()
  let result
  if (isExist) {
    result = await prisma.sideImage.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.sideImage.create({
      data: {
        image: data?.image,
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

export async function getSideImage() {
  return prisma.sideImage.findFirst()
}

export async function deleteSideImage() {
  const isExist = await prisma.sideImage.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.sideImage.delete({
    where: {
      id: isExist.id,
    },
  })
}
