'use client'

import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'

export default function SidePalmTree() {
  const theme = useTheme()
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ position: 'relative' }}>
      <Image
        src="/Images/palm_Minimal.png"
        alt="Palm tree"
        width={lessThanMd ? 153.5 : 341.2}
        height={lessThanMd ? 204.6 : 454.6}
        className="rightPalm"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 99,
          // transform: 'translateY(-30%)',
        }}
      />
    </Box>
  )
}
