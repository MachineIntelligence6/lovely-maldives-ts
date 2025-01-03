'use client'

import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

const PageNotFound = () => {
  const router = useRouter()

  const handle404Click = () => {
    router.push('/')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 3,
        minHeight: '100vh',
        bgcolor: '#967F5D80',
      }}
    >
      <Typography
        sx={{
          fontSize: '99px',
          fontWeight: 600,
          letterSpacing: '10px',
          lineHeight: '75px',
        }}
      >
        404
      </Typography>
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 500,
          letterSpacing: '2px',
        }}
      >
        Page Not Found
      </Typography>
      <Button
        sx={{
          bgcolor: '#967F5D',
          color: '#FFF',
          borderRadius: '4px',
          p: '8px 16px',
          fontSize: '16px',
          fontWeight: 600,
          letterSpacing: '4px',
          '&:hover': {
            bgcolor: '#5D7496',
          },
        }}
        onClick={handle404Click}
      >
        Go Home
      </Button>
    </Box>
  )
}

export default PageNotFound
