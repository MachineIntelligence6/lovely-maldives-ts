/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */

'use client'

import { Box, Typography, Container, Paper } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { SampleNextArrow, SamplePrevArrow } from './OurServices'
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
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
          textTransform: 'uppercase',
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
                sx={{
                  color: 'white',
                  mx: 'auto',
                  width: '98%',
                  height: '400px',
                  position: 'relative',
                  textAlign: 'center',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Box
                    component={Image}
                    src={data.image}
                    alt="exploreImg"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.7)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      color: 'white',
                      top: '20%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '20px',
                      fontWeight: 600,
                      zIndex: 2,
                    }}
                  >
                    {data.title}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}
