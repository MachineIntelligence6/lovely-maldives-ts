import prisma from '../../prisma'

interface OurServices {
  title: string
  icon: string
  homeBgId: string
  bgColor: string
}

export async function createOurService(data: OurServices) {
  return prisma.services.create({
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

export async function getOurServices() {
  return prisma.services.findMany()
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
