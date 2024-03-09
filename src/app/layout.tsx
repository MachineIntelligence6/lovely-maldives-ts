import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

import localFont from 'next/font/local'
import Provider from './provider'

const centuryGothic = localFont({ src: './fonts/century-gothic/gothic.ttf' })

export const metadata: Metadata = {
  title: 'Lovely Maldives | Home',
  description:
    // eslint-disable-next-line max-len
    'Lovely Maldives, a distinguished travel agency from the Maldives strives to redene Luxury travel experiences in the Maldives.',
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
      </body>
    </html>
  )
}
