import prisma from '../../prisma'

export async function createResorts(data: any) {
  const isExist = await prisma.resorts.findFirst()
  let result
  if (isExist) {
    result = await prisma.resorts.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.resorts.create({
      data,
    })
  }

  return result
}

export async function getResorts() {
  return prisma.resorts.findFirst()
}

export async function deleteResorts() {
  const isExist = await prisma.resorts.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.resorts.delete({
    where: {
      id: isExist.id,
    },
  })
}
