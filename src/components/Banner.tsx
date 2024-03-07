'use client'

import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Header from './Header'

import banner from '../../public/Images/banner.jpg'
import banner2 from '../../public/Images/exploreImg4.jpg'
import banner3 from '../../public/Images/exploreImg.jpg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const imgUrl: any = [banner, banner2, banner3]

export default function Banner() {
  const [bgImage, setBgImage] = useState('')

  useEffect(() => {
    const randomIndex: number = Math.floor(Math.random() * imgUrl.length)
    setBgImage(imgUrl[randomIndex])
  }, [])

  const bgStyle = {
    // eslint-disable-next-line max-len
    backgroundImage: `linear-gradient(to bottom, rgba(150, 127, 93, 0.10), rgba(150, 127, 93, 0.65)), url('${bgImage.src}')`,
    backgroundSize: 'cover',
    backgroundPosition: '100%',
    width: '100%',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  }

  return (
    <Box sx={{ ...bgStyle }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.5)',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: { xs: '85%', md: '70%' },
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontSize: { xs: '30px', md: '35px' } }}>
            Welcome to Lovely Maldives
          </Typography>
          <Typography
            variant="h1"
            sx={{ mt: '40px', fontSize: '50px', fontWeight: 600 }}
          >
            Essence of Pure Luxury{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
