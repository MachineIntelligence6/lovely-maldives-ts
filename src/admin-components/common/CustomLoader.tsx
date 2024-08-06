import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import loaderImg from '../../../public/Images/lovely-maldives-logo-brown.png'

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
        backgroundColor: 'white', // Change to match your website's background color
      }}
    >
      {/* <CircularProgress
        size={50}
        thickness={4.5}
        sx={{ color: '#fff', marginBottom: 2 }}
      /> */}
      <Image
        src={loaderImg}
        alt="Loading..."
        className="loader-img"
        width={150}
        height={150}
      />{' '}
      <Typography
        variant="body1"
        color="#333333"
        sx={{ fontSize: '22px', fontWeight: '500', mt: 4 }}
      >
        Loading...
      </Typography>
      {/* Adjust the size as needed */}
    </Box>
  )
}

export default CustomLoader
