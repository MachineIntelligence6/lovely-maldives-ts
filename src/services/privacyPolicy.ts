import prisma from '../../prisma'

interface PrivacyPolicy {
  title: string
  policies: [{ question: string; answer: string }]
}

export async function createPrivacyPolicy(data: PrivacyPolicy) {
  const isExist = await prisma.privacyPolicy.findFirst()
  let result
  if (isExist) {
    result = await prisma.privacyPolicy.update({
      where: {
        id: isExist.id,
      },
      data: {
        title: data.title,
        policies: data.policies,
      },
    })
  } else {
    result = await prisma.privacyPolicy.create({
      data: {
        title: data.title,
        policies: data.policies,
      },
    })
  }

  return result
}

export async function getPrivacyPolicy() {
  return prisma.privacyPolicy.findFirst()
}

export async function deletePrivacyPolicy() {
  const isExist = await prisma.privacyPolicy.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.privacyPolicy.delete({
    where: {
      id: isExist.id,
    },
  })
}
