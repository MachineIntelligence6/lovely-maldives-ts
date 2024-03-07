import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

import localFont from 'next/font/local'
import Provider from './provider'

const centuryGothic = localFont({ src: './fonts/century-gothic/gothic.ttf' })

export const metadata: Metadata = {
  title: 'NextJS MUI typescript boilerplate',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>): ReactNode {
  return (
    <html lang="en">
      <body className={centuryGothic.className}>
        <Provider>{children}</Provider>
      </body>{' '}
    </html>
  )
}
