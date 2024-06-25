/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import Header from './Header'

import banner from '../../public/Images/banner.jpg'
import banner2 from '../../public/Images/exploreImg4.jpg'
import banner3 from '../../public/Images/exploreImg.jpg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const imgUrl: any = [banner, banner2, banner3]
export const mobileImgUrl: any = [
  'Images/exploreImg2.jpg',
  'Images/explorImg2.jpg',
  'Images/explorImg5.jpg',
]

export default function Banner(props: any) {
  const { bannerData, themeData } = props
  const [data, setData] = useState('' as any)
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const [bgImgStyle, setBgImgStyle] = React.useState({
    backgroundImage: `${
      themeData?.gradient ||
      `linear-gradient(to bottom, rgba(150, 127, 93, 0.10),
     rgba(150, 127, 93, 0.20))`
    }, url('${banner}')`,
    backgroundSize: 'cover',
    backgroundPosition: '100%',
    width: '100%',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  })

  React.useEffect(() => {
    console.log('data jkhjksd ', data)
    const bannersLength = data?.bgImages?.length
    const bannerImages = data?.bgImages

    const randomIndexdev: number = Math.floor(Math.random() * bannersLength)

    const randomIndexmob: number = Math.floor(
      Math.random() * mobileImgUrl.length
    )
    if (lessThanMd) {
      setBgImgStyle({
        backgroundImage: `${
          themeData?.gradient ||
          `linear-gradient(to bottom, rgba(150, 127, 93, 0.10),
     rgba(150, 127, 93, 0.20))`
        }, url('${mobileImgUrl[randomIndexmob]}')`,
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      })
    } else {
      setBgImgStyle({
        backgroundImage: `${
          themeData?.gradient ||
          `linear-gradient(to bottom, rgba(150, 127, 93, 0.10),
     rgba(150, 127, 93, 0.20))`
        }, 
         url('${
           bannersLength > 0
             ? bannerImages[randomIndexdev]
             : imgUrl[randomIndexdev]?.src
         }')`,
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      })
    }
  }, [lessThanMd, data])
  console.log('banner data is ', data)
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('home') as any))
  }, [bannerData])

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
            height: { xs: '100%', md: '100%' },
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Box sx={{ pb: { xs: '10%', md: '6%' }, px: '10px' }}>
            <Typography sx={{ fontSize: { xs: '24px', md: '35px' } }}>
              {data?.title}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mt: '6px',
                fontSize: { md: '50px', xs: '35px' },
                fontWeight: 600,
              }}
            >
              {data?.subTitle}{' '}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
