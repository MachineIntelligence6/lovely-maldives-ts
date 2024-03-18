/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useState } from 'react'
import { Box, Container, Paper } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import resorts from '../../public/Images/collectionImg.jpg'

export const datas = [{}, {}, {}, {}]
export default function IndividualSlider() {
  const [nav1, setNav1] = useState<any>(null)
  const [nav2, setNav2] = useState<any>(null)

  return (
    <Container sx={{ maxWidth: '100% !important' }}>
      <Box className="slider-container" sx={{ width: '100%' }}>
        <Slider
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          autoplay
          arrows={false}
        >
          {datas.map((data, index) => (
            <Box key={index} sx={{ width: '100%' }}>
              <Paper
                elevation={3}
                className=""
                sx={{
                  color: 'white',
                  width: '100%',
                  height: '500px',
                  borderRadius: '10px',
                  position: 'relative',
                }}
              >
                <Image
                  src={resorts}
                  alt="resorts"
                  style={{
                    width: '100%',
                    height: '101%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    width: '100%',
                    height: '101%',
                    bgcolor: 'rgba(40,20,0,0.5)',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                  }}
                />
              </Paper>
            </Box>
          ))}
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={4}
          swipeToSlide
          focusOnSelect
          autoplay
          arrows={false}
        >
          {datas.map((data, index) => (
            <Box
              key={index}
              sx={{ bgcolor: 'black', width: '100%', overFlow: 'hidden' }}
            >
              <Paper
                elevation={3}
                className="exploreImges"
                sx={{
                  color: 'white',
                  mx: 'auto',
                  width: { xs: '98%', md: '200px', lg: '260px' },
                  height: '200px',
                  position: 'relative',
                }}
              >
                <Image
                  src={resorts}
                  alt="resorts"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    margin: '15px 0',
                  }}
                />
                <Box
                  className="exploreImges"
                  sx={{
                    width: { xs: '100%', md: '230px', lg: '260px' },
                    height: '100%',
                    bgcolor: 'rgba(40,20,0,0.5)',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                  }}
                />
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}
