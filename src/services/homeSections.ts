import prisma from '../../prisma'

export async function getHomeSections() {
  const sections = {} as any
  sections.data = await prisma.homeBg.findFirst()
  sections.data.aboutMaldivesShort = [
    await prisma.aboutMaldivesShort.findFirst(),
  ]
  sections.data.services = [await prisma.services.findFirst()]
  sections.data.aboutUsShort = [await prisma.aboutUsShort.findFirst()]
  sections.data.wonders = [await prisma.wonders.findFirst()]
  sections.data.brands = [await prisma.brands.findFirst()]
  sections.data.socialLinkSection = [await prisma.socialLinkSection.findFirst()]
  sections.data.header = [await prisma.header.findFirst()]
  sections.data.footer = [await prisma.footer.findFirst()]
  // const result = await prisma.homeBg.findFirst({
  //   include: {
  //     aboutMaldivesShort: true,
  //     services: true,
  //     aboutUsShort: true,
  //     wonders: true,
  //     brands: true,
  //     socialLinkSection: true,
  //     header: true,
  //     footer: true,
  //     sideImage: true,
  //   },
  // })
  console.log('sections: ', sections)
  return sections
}
