import prisma from '../../prisma'

export async function getHomeSections() {
  return prisma.homeBg.findMany({
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
}
