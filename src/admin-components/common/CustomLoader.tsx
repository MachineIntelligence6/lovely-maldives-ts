import React from 'react'
import { CircularProgress, Box } from '@mui/material'

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
        backgroundColor: 'rgba(0,0,0,0.5)', // Change to match your website's background color
      }}
    >
      <CircularProgress
        size={50}
        thickness={4.5}
        sx={{ color: '#fff', marginBottom: 2 }}
      />
      {/* <Image src="/logo.png" alt="Loading..." width={150} height={50} />{' '} */}
      {/* Adjust the size as needed */}
    </Box>
  )
}

export default CustomLoader
