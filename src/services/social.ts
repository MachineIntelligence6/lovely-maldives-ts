import prisma from '../../prisma'

interface SocialSection {
  title: string
  socialMedia: string
  link: string
  homeBgId: string
}

export async function createSocialSection(data: SocialSection) {
  const isExist = await prisma.socialLinkSection.findFirst()
  let result
  if (isExist) {
    result = await prisma.socialLinkSection.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.socialLinkSection.create({
      data: {
        title: data.title,
        socialMedia: data.socialMedia,
        link: data.link,
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

export async function getSocialSection() {
  return prisma.socialLinkSection.findFirst()
}

export async function deleteSocialSection() {
  const isExist = await prisma.socialLinkSection.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.socialLinkSection.delete({
    where: {
      id: isExist.id,
    },
  })
}
