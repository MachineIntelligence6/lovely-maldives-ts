import prisma from '../../prisma'

export const connectToDatabase = async () => {
  try {
    await prisma.$connect()
  } catch (error) {
    console.log('error ', error)
    throw new Error('unable to connect.')
  }
}
