import prisma from '../../prisma'

export async function getHomeSections() {
  let sections = {} as any
  sections = await prisma.homeBg.findFirst()
  sections.aboutMaldivesShort = [await prisma.aboutMaldivesShort.findFirst()]
  sections.services = [await prisma.services.findFirst()]
  sections.aboutUsShort = [await prisma.aboutUsShort.findFirst()]
  sections.wonders = [await prisma.wonders.findFirst()]
  sections.brands = [await prisma.brands.findFirst()]
  sections.socialLinkSection = [await prisma.socialLinkSection.findFirst()]
  sections.header = [await prisma.header.findFirst()]
  sections.footer = [await prisma.footer.findFirst()]
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
