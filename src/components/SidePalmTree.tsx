'use client'

import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import sidePalm from '../../public/Images/Palm_Minimal.png'

export default function SidePalmTree(props: any) {
  const { data } = props
  const theme = useTheme()
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ position: 'relative' }}>
      <Image
        src={data?.image || sidePalm}
        alt="Palm tree"
        width={lessThanMd ? 130.7 : 305}
        height={lessThanMd ? 121.6 : 283.6}
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
