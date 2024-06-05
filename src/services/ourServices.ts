import prisma from '../../prisma'

interface OurServices {
  title: string
  icon: string
  homeBgId: string
  bgColor: string
}

export async function createOurService(data: OurServices) {
  const isExist = await prisma.services.findFirst()
  let result
  if (isExist) {
    result = await prisma.services.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.services.create({
      data: {
        title: data.title,
        icon: data.icon,
        bgColor: data.bgColor,
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

export async function getOurServices() {
  return prisma.services.findFirst()
}

export async function deleteOurService() {
  const isExist = await prisma.services.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.services.delete({
    where: {
      id: isExist.id,
    },
  })
}
