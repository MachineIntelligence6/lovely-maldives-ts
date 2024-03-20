'use client'

import { useState, useEffect } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Header from './Header'

import banner from '../../public/Images/banner.jpg'
import banner2 from '../../public/Images/exploreImg4.jpg'
import banner3 from '../../public/Images/exploreImg.jpg'
// import mobilebanner from '../../public/Images/exploreImg2.jpg'
// import mobilebanner2 from '../../public/Images/explorImg2.jpg'
// import mobilebanner3 from '../../public/Images/explorImg5.jpg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const imgUrl: any = [banner, banner2, banner3]
export const mobileImgUrl: any = [
  'Images/exploreImg2.jpg',
  'Images/explorImg2.jpg',
  'Images/explorImg5.jpg',
]

export default function Banner() {
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const [bgImgStyle, setBgImgStyle] = useState({
    backgroundImage: `linear-gradient(to bottom, rgba(150, 127, 93, 0.10),
     rgba(150, 127, 93, 0.20)), url('${banner}')`,
    backgroundSize: 'cover',
    backgroundPosition: '100%',
    width: '100%',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  })

  useEffect(() => {
    const randomIndexdev: number = Math.floor(Math.random() * imgUrl.length)
    const randomIndexmob: number = Math.floor(
      Math.random() * mobileImgUrl.length
    )

    if (lessThanMd) {
      setBgImgStyle({
        backgroundImage: `linear-gradient(to bottom, rgba(150, 127, 93, 0.10),
         rgba(150, 127, 93, 0.20)), url('${mobileImgUrl[randomIndexmob]}')`,
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      })
    } else {
      setBgImgStyle({
        backgroundImage: `linear-gradient(to bottom, rgba(150, 127, 93, 0.10),
         rgba(150, 127, 93, 0.20)), url('${imgUrl[randomIndexdev].src}')`,
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      })
    }
  }, [lessThanMd])

  return (
    <Box sx={{ backgroundColor: 'lightgray', ...bgImgStyle }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(150, 127, 93,0.5)',
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
          <Typography sx={{ fontSize: { xs: '24px', md: '35px' } }}>
            Welcome to Lovely Maldives
          </Typography>
          <Typography
            variant="h1"
            sx={{
              mt: '40px',
              fontSize: { md: '50px', xs: '35px' },
              fontWeight: 600,
            }}
          >
            Essence of Pure Luxury{' '}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
