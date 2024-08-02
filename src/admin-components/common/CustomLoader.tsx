import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

const CustomLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      {/* <CircularProgress
        size={50}
        thickness={4.5}
        sx={{ color: '#000', marginBottom: 2 }}
      /> */}
      <Image
        src="/favicon.png"
        alt="Loading..."
        width={400}
        height={400}
        className='custom-loader-image'
        style={{ objectFit: 'contain', width: '200px', height: '200px' }}
      />{' '}
      {/* Adjust the size as needed */}
    </Box>
  )
}

export default CustomLoader
