import prisma from '../../prisma'

// interface Theme {
//     fontfamily: string,
//     gradient: string,
// }

export async function createThemeConfig(data: any) {
  const isExist = await prisma.theme.findFirst()
  let result
  if (isExist) {
    result = await prisma.theme.update({
      where: {
        id: isExist.id,
      },
      data: {
        fontFamily: data.fontFamily,
        gradient: data.gradient,
      },
    })
  } else {
    result = await prisma.theme.create({
      data: {
        fontFamily: data.fontFamily,
        gradient: data.gradient,
      },
    })
  }

  return result
}

export async function getThemeConfig() {
  return prisma.theme.findFirst()
}

export async function deleteThemeConfig() {
  const isExist = await prisma.theme.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.theme.delete({
    where: {
      id: isExist.id,
    },
  })
}
