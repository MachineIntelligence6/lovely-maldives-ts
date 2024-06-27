'use client'

import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const SuccessMsg = (props: any) => {
  const { open, handleSearchModelOpen, message, type } = props
  return (
    <Box
      sx={{
        position: 'fixed',
        top: open ? 0 : '50%',
        left: open ? 0 : '50%',
        right: open ? 0 : '50%',
        bottom: open ? 0 : '50%',
        bgcolor: 'rgba(0,0,0,0.5)',
        transition: 'all .1s ease-in-out',
        zIndex: 99999,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '280px', md: '450px' },
          position: 'relative',
          bgcolor: 'white',
          borderRadius: '6px',
          p: 2,
        }}
      >
        <Typography
          variant="body1"
          color={type === 'error' ? 'var(--red)' : 'var(--brown)'}
          sx={{
            fontSize: { xs: '24px', md: '35px' },
            mb: 3,
            fontWeight: 'bold',
          }}
        >
          {type === 'success' ? 'Congratulations!' : 'Error'}
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontSize: { xs: '16px', md: '18px' },
            textAlign: 'center',
            fontFamily: 'Public Sans !important',
          }}
        >
          {message}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            sx={{
              bgcolor: 'var(--brown)',
              mt: 3,
              color: 'white',
              width: '60px',
              height: '36px',
              '&:hover': {
                bgcolor: 'var(--brown)',
              },
            }}
            onClick={handleSearchModelOpen}
          >
            OK
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SuccessMsg
