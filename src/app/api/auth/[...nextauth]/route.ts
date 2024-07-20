// export { GET, POST } from '@/config/auth'
// export const runtime = 'edge' // optional

// export const runtime = 'nodejs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../../../prisma'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials: any) {
        if (!credentials || !credentials.email || !credentials.password)
          return null

        try {
          const user = await prisma.user.findFirst({
            where: { email: credentials.email },
          })
          if (!user) {
            return null
          }

          if (user.status !== 'Approved')
            throw new Error('You are not approved yet. Please contact admin.')

          const isMatched = await bcrypt.compare(
            credentials.password,
            user?.password
          )

          if (!isMatched) return null

          return user
        } catch (error) {
          console.log('error ', error)
          return null
        } finally {
          await prisma.$disconnect()
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    // maxAge: 4 * 60 * 60,
    // generateSessionToken: () => {
    //     return randomUUID?.() ?? randomBytes(32).toString("hex")
    // },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/admin/login',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
