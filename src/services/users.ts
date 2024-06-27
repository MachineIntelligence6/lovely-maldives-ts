import { getSession } from 'next-auth/react'
import prisma from '../../prisma'

export async function getAllUsers() {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      status: true,
      isAdmin: true,
    },
  })
}

export async function updateUserStatus(id: string, status: any) {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      status,
    },
  })
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
