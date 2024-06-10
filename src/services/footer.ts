import prisma from '../../prisma'

interface Footer {
  title: string
  homeBgId: string
  columns: [
    { title: string; menus: [{ menu: string; link: string; icon: string }] },
  ]
}

export async function createFooter(data: Footer) {
  console.log('data is ', data)
  const isExist = await prisma.footer.findFirst()
  let result
  if (isExist) {
    result = await prisma.footer.update({
      where: {
        id: isExist.id,
      },
      data,
    })
  } else {
    result = await prisma.footer.create({
      data: {
        title: data?.title,
        columns: data?.columns,
        homeBg: {
          connect: {
            id: data?.homeBgId,
          },
        },
      },
    })
  }

  return result
}

export async function getFooter() {
  return prisma.footer.findFirst()
}

export async function deleteFooter() {
  const isExist = await prisma.footer.findFirst()
  if (!isExist) return 'NOT_FOUND'

  return prisma.footer.delete({
    where: {
      id: isExist.id,
    },
  })
}
