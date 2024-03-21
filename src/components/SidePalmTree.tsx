'use client'

import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import sidePalm from '../../public/Images/Palm_Minimal.png'

export default function SidePalmTree() {
  const theme = useTheme()
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ position: 'relative' }}>
      <Image
        src={sidePalm}
        alt="Palm tree"
        width={lessThanMd ? 140 : 305}
        height={lessThanMd ? 130.4 : 283.6}
        className="rightPalm"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 99,
          transform: 'translateY(-30%)',
        }}
      />
    </Box>
  )
}
