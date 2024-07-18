import prisma from '../../prisma'

export async function getHomeSections(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-store')

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
