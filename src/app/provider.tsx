/* eslint-disable max-len */

'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import React from 'react'

const centuryGothic = '/fonts/century-gothic/gothic.ttf'

const theme = createTheme({
  typography: {
    fontFamily: 'Century Gothic',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Century Gothic';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${centuryGothic}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
})
interface IProviderProps {
  children: React.ReactNode
}

export default function Provider({
  children,
}: IProviderProps): React.ReactNode {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
