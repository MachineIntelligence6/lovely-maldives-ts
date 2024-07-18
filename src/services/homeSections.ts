import prisma from '../../prisma'

export async function getHomeSections() {
  const result = await prisma.homeBg.findFirst({
    include: {
      aboutMaldivesShort: true,
      services: true,
      aboutUsShort: true,
      wonders: true,
      brands: true,
      socialLinkSection: true,
      header: true,
      footer: true,
      sideImage: true,
    },
  })
  return result
}
