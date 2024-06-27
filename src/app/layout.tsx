import 'reflect-metadata'

import type { Metadata } from 'next'
import './globals.css'
import 'react-quill/dist/quill.snow.css' // Include quill styles
import { ReactNode } from 'react'

import localFont from 'next/font/local'
import AuthProvider from '@/admin-components/auth/AuthProvider'
import Provider from './provider'

const centuryGothic = localFont({ src: './fonts/century-gothic/gothic.ttf' })

export const metadata: Metadata = {
  title: 'Lovely Maldives | Home',
  description:
    // eslint-disable-next-line max-len
    'Lovely Maldives, a distinguished travel agency from the Maldives strives to redene Luxury travel experiences in the Maldives.',
  icons: {
    icon: '/images/lovely-maldives-logo-brown.png',
    shortcut: '/images/lovely-maldives-logo-brown.png',
    apple: '/images/lovely-maldives-logo-brown.png',
    other: {
      rel: '/images/lovely-maldives-logo-brown.png',
      url: '/images/lovely-maldives-logo-brown.png.png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactNode {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={centuryGothic.className}>
        <AuthProvider>
          <Provider>{children}</Provider>
        </AuthProvider>
      </body>
    </html>
  )
}
