import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const Loading = () => {
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
      <Image
        src="/images/lovely-maldives-logo-brown.png"
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
    </Box>
  )
}

export default Loading
