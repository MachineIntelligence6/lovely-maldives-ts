import prisma from '../../prisma'

interface Header {
  heroLogo: string
  otherLogo: string
  heroWidth: string
  otherWidth: string
  heroHeight: string
  otherHeight: string
  heroBgcolor: string
  otherBgcolor: string
  homeBgId: string
  menus: [{ menu: string; link: string }]
  menusBgcolor: string
}

export async function createHeader(data: Header) {
  const isExist = await prisma.header.findFirst()
  let result
  if (isExist) {
    result = await prisma.header.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    console.log('data ', data)
    result = await prisma.header.create({
      data: {
        heroLogo: data?.heroLogo,
        otherLogo: data?.otherLogo,
        heroWidth: data?.heroWidth,
        otherWidth: data?.otherWidth,
        heroHeight: data?.heroHeight,
        otherHeight: data?.otherHeight,
        heroBgcolor: data?.heroBgcolor,
        otherBgcolor: data?.otherBgcolor,
        menus: data?.menus,
        menusBgcolor: data?.menusBgcolor,
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

export async function getHeader() {
  return prisma.header.findFirst()
}

export async function deleteheader() {
  const isExist = await prisma.header.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.header.delete({
    where: {
      id: isExist.id,
    },
  })
}
