import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Box
      sx={{
        py: '20px',
        pl: '18px',
        pr: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        priority
        src="/logo.png"
        alt="logo"
        width={150}
        height={70}
        style={{
          width: '150px',
          height: '70px',
          objectFit: 'contain',
        }}
      />
    </Box>
  )
}

export default Logo
