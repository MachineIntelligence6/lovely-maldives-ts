/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { SampleNextArrow, SamplePrevArrow } from '@/components/OurServices'

const ExploreWorldSlider = (props: any) => {
  const { cards, handleDeleteCard, editModelShow } = props
  const settings = {
    centerMode: true,
    className: 'slick-center-mode',
    dots: true,
    centerPadding: '0px',
    // infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: cards.length >= 3 ? 3 : cards.length || 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '0px',
          slidesToShow: cards.length >= 3 ? 3 : cards.length || 1,
          slidesToScroll: 1,
          // infinite: true,
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
          autoplay: false,
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
          autoplay: false,
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
          autoplay: false,
        },
      },
    ],
  }
  return (
    <Box
      className="slider-container explore-slider"
      sx={{
        mt: { md: '60px', xs: '40px' },
        width: '100%',
      }}
    >
      <Slider {...settings}>
        {cards.map((data: any, index: number) => (
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
                  position: 'absolute',
                  top: '1rem',
                  right: '4rem',
                  width: '200px',
                  height: '30px',
                  maxWidth: '30px',
                  maxHeight: '30px',
                  zIndex: 999,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                }}
              >
                <Box
                  sx={{
                    width: '35px',
                    minWidth: '35px',
                    height: '35px',
                    maxHeight: '35px',
                    borderRadius: '50%',
                    bgcolor: 'var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => handleDeleteCard(index)}
                >
                  <DeleteIcon sx={{ color: 'white', fontSize: '14px' }} />
                </Box>
                <Box
                  sx={{
                    width: '35px',
                    minWidth: '35px',
                    height: '35px',
                    maxHeight: '35px',
                    borderRadius: '50%',
                    bgcolor: 'var(--darkBlue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => editModelShow(index)}
                >
                  <EditIcon sx={{ color: 'white', fontSize: '14px' }} />
                </Box>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={data.image}
                  alt="exploreImg"
                  width={300}
                  height={500}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* <Box
                component={Image}
                
              /> */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    backgroundImage:
                      // eslint-disable-next-line max-len
                      'linear-gradient(to bottom, rgba(150, 127, 93, 0.70), rgba(150, 127, 93, 0.20))',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.80)',
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
  )
}

export default ExploreWorldSlider
