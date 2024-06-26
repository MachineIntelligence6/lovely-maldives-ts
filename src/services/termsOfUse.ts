import prisma from '../../prisma'

interface TermOfUse {
  title: string
  description: string
}

export async function createTermsOfUse(data: TermOfUse) {
  const isExist = await prisma.termsOfUse.findFirst()
  let result
  if (isExist) {
    result = await prisma.termsOfUse.update({
      where: {
        id: isExist.id,
      },
      data: {
        title: data.title,
        description: data.description,
      },
    })
  } else {
    result = await prisma.termsOfUse.create({
      data: {
        title: data.title,
        description: data.description,
      },
    })
  }

  return result
}

export async function getTermsOfUse() {
  return prisma.termsOfUse.findFirst()
}

export async function deleteTermsOfUse() {
  const isExist = await prisma.termsOfUse.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.termsOfUse.delete({
    where: {
      id: isExist.id,
    },
  })
}
