import prisma from '../../prisma'

interface FAQS {
    title: string,
    description: string,
    categories: string[],
    policies: [{ question: string; answer: string }]
}

export async function createFAQS(data: FAQS) {
  const isExist = await prisma.fAQS.findFirst()
  let result
  if (isExist) {
    result = await prisma.fAQS.update({
      where: {
        id: isExist.id,
      },
      data: {
        title: data.title,
        policies: data.policies,
        description: data.description,
        categories: data.categories,
      },
    })
  } else {
    result = await prisma.fAQS.create({
      data: {
        title: data.title,
        policies: data.policies,
        description: data.description,
        categories: data.categories,
      },
    })
  }

  return result
}

export async function getFAQs() {
  return prisma.fAQS.findFirst()
}

export async function deleteFAQs() {
  const isExist = await prisma.fAQS.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.fAQS.delete({
    where: {
      id: isExist.id,
    },
  })
}
