/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Box, Typography, Button, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import BoltIcon from '@mui/icons-material/Bolt'

interface IOurCollectionProps {
  heading: string
  button: string
  iconShow: string
  radius: string
  bottomradius: string
}

const CollectionSlider = (props: any) => {
  const { collections, handleDeleteCard } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '200px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
    ],
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        mt: '1rem',
      }}
      className="slider-container"
    >
      <Slider {...settings}>
        {collections.map((collection: any, index: number) => (
          <Box
            sx={{
              position: 'relative',
              borderRadius: `0`,
              margin: '0 auto',
            }}
            key={index}
          >
            <Image
              width={300}
              height={300}
              src={URL.createObjectURL(collection?.image)}
              alt="Resort item"
              style={{
                width: '92%',
                height: '300px',
                objectFit: 'cover',
                margin: '0 auto',
              }}
            />
            <Box
              sx={{
                width: { xs: '100%', md: '92%' },
                height: { xs: '250px', md: '300px' },
                bgcolor: 'rgba(150,127,93,0.5)',
                position: 'absolute',
                top: '0',
                left: { xs: 0, md: '15px' },
                '@media only screen and (min-width: 1600px)': {
                  left: '30px',
                },
              }}
            />
            <Box
              sx={{
                width: { xs: '100%', md: '92%' },
                display: 'flex',
                flexDirection: 'column',
                color: 'white',
                fontSize: '12px',
                fontWeight: '200',
                zIndex: '99',
                gap: 1,
                py: '24px',
                bgcolor: 'var(--darkBrown)',
                borderRadius: { xs: '0px', md: `0px` },
                margin: '0 auto',
              }}
            >
              <Box
                sx={{
                  // mt: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  height: 'auto',
                }}
              >
                <Typography sx={{ px: 4, fontSize: '20px' }}>
                  {collection?.title}
                </Typography>
                <BoltIcon sx={{ display: `none` }} />
              </Box>
              <Box sx={{ textAlign: 'left', fontSize: '10px', px: 4 }}>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default CollectionSlider
