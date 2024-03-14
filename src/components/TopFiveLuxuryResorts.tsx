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
import collectionImg from '../../public/Images/collectionImg.jpg'

export const datas = [{}, {}, {}, {}, {}]

interface ITopFiveLuxuryResortsProps {
  heading: string
  button: string
  iconShow: string
  radius: string
  bottomradius: string
}
export default function TopFiveLuxuryResorts({
  heading,
  button,
  iconShow,
  radius,
  bottomradius,
}: ITopFiveLuxuryResortsProps) {
  const settings = {
    // className: 'center',
    // centerPadding: '60px',
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: false,
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
          slidesToShow: 2,
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
      //   {
      //     breakpoint: 1300,
      //     settings: {
      //       slidesToShow: 3,
      //     },
      //   },
    ],
  }
  return (
    <Container sx={{ maxWidth: '100% !important', px: '0px !important' }}>
      <Typography
        variant="h2"
        sx={{
          color: 'var(--white)',
          textAlign: 'center',
          fontSize: { xs: '22px', md: '30px' },
          fontWeight: 400,
          mt: { xs: '60px', md: '120px' },
          textTransform: 'uppercase',
        }}
      >
        {heading}
      </Typography>

      <Box
        sx={{
          width: '100%',
          height: '100%',
          mt: { xs: '30px', md: '60px' },
        }}
        className="slider-container"
      >
        <Slider {...settings}>
          {datas.map((data, index) => (
            <Box
              sx={{ position: 'relative', borderRadius: `${radius}` }}
              key={index}
            >
              <Box
                component={Image}
                src={collectionImg}
                alt="Resort item"
                sx={{
                  width: { xs: '100%', md: '96%' },
                  height: { xs: '300px', md: '400px' },
                  objectFit: 'cover',
                  borderRadius: { xs: '0px', md: `${radius}` },
                }}
              />
              <Box
                sx={{
                  width: { xs: '100%', md: '96%' },
                  height: { xs: '40%', md: '30%' },
                  display: 'flex',
                  flexDirection: 'column',
                  // justifyContent: 'space-around',
                  position: 'absolute',
                  color: 'white',
                  bottom: '0%',
                  left: '0',
                  fontSize: '12px',
                  fontWeight: '200',
                  zIndex: '99',
                  gap: 1,
                  bgcolor: 'var(--darkBrown)',
                  borderRadius: { xs: '0px', md: `${bottomradius}` },
                }}
              >
                <Box
                  sx={{
                    mt: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    height: 'auto',
                  }}
                >
                  <Typography sx={{ px: 4, fontSize: '20px' }}>
                    One n Only Reethi Rah{' '}
                  </Typography>
                  <BoltIcon sx={{ display: `${iconShow}` }} />
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
        <Box sx={{ textAlign: 'center' }}>
          <Button
            sx={{
              bgcolor: 'var(--brown)',
              color: 'white',
              width: 'auto',
              mx: 'auto',
              mt: { xs: '40px', md: '60px' },
              px: { xs: '40px', md: '80px' },
              py: { xs: 1, md: 2 },
              textAlign: 'center',
              fontSize: '18px',
              display: `${button}`,
              '&:hover': {
                backgroundColor: 'var(--blue) !important',
              },
            }}
          >
            All Hotels
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
