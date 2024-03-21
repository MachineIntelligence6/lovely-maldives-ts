'use client'

import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import sidePalm from '../../public/Images/Palm_Minimal.png'

export default function SidePalmTree() {
  const theme = useTheme()
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        position: 'absolute',
        right: '0',
        top: '27%',
        width: '40%',
        overflow: 'hidden',
      }}
    >
      <Image
        src={sidePalm}
        alt="Palm tree"
        width={lessThanMd ? 153.5 : 341.2}
        height={lessThanMd ? 204.6 : 454.6}
        className="rightPalm"
        style={{
          // position: 'absolute',
          // top: 0,
          // right: 0,
          zIndex: 99,
          // transform: 'translateX(100% , 30%)',
        }}
      />
    </Box>
  )
}
