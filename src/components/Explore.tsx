/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */

'use client'

import { Box, Typography, Container, Paper } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import exploreImg1 from '../../public/Images/exploreImg.jpg'
import exploreImg3 from '../../public/Images/explorImg2.jpg'
import exploreImg2 from '../../public/Images/exploreImg3.jpg'
import exploreImg4 from '../../public/Images/explorImg5.jpg'

export const datas = [
  {
    title: 'Get Lost In Nature',
    image: exploreImg1,
  },
  {
    title: 'Breathtaking Views',
    image: exploreImg3,
  },
  {
    title: 'Experience Other Worlds',
    image: exploreImg2,
  },
  {
    title: 'Breathtaking Views',
    image: exploreImg4,
  },
]
export default function Explore() {
  const settings = {
    centerMode: true,
    className: 'slick-center-mode',
    dots: true,
    centerPadding: '0px',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  }
  return (
    <Container
      sx={{
        px: { xs: '20px !important', md: '120px !important' },
        pt: { xs: '60px', md: '120px' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '22px', md: '30px' },
          color: 'var(--brown)',
          textAlign: 'center',
        }}
      >
        Explore A World Of Wonders
      </Typography>
      <Box
        className="slider-container"
        sx={{
          mt: { md: '60px', xs: '40px' },
          width: '100%',
        }}
      >
        <Slider {...settings}>
          {datas.map((data, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: 'white',
                width: '100%',
              }}
            >
              <Paper
                elevation={3}
                className="exploreImges"
                sx={{
                  color: 'white',
                  mx: 'auto',
                  width: {
                    xs: '98%',
                    sm: '93%',
                    md: '295px',
                    lg: '302px',
                    xl: '305px',
                  },
                  height: '400px',
                  borderRadius: '10px',
                  position: 'relative',
                }}
              >
                <Image
                  src={data.image}
                  alt="exploreImg"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  className="exploreImges"
                  sx={{
                    width: {
                      xs: '100%',
                      md: '295px',
                      lg: '302px',
                      xl: '305px',
                    },
                    height: '100%',
                    bgcolor: 'rgba(40,20,0,0.5)',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                  }}
                />
                <Typography
                  sx={{
                    width: '150px',
                    position: 'absolute',
                    color: 'white',
                    top: '20%',
                    left: { xs: '25%', md: '22%' },
                    fontSize: '30px',
                    textAlign: 'center',
                    fontWeight: 600,
                    opacity: '0.75',
                  }}
                >
                  {data.title}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}
