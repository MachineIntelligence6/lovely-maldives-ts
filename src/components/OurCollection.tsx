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

interface IOurCollectionProps {
  heading: string
  button: string
  iconShow: string
  radius: string
  bottomradius: string
}
export default function OurCollection({
  heading,
  button,
  iconShow,
  radius,
  bottomradius,
}: IOurCollectionProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: '90px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
    ],
  }
  return (
    <Container sx={{ maxWidth: '100% !important', px: '20px !important' }}>
      <Typography
        sx={{
          fontSize: { xs: '22px', md: '30px' },
          color: 'var(--white)',
          textAlign: 'center',
          mt: { xs: '60px', md: '120px' },
          textTransform: 'uppercase',
        }}
      >
        {heading}
      </Typography>

      <Box
        sx={{ width: '100%', height: '100%', mt: { xs: '30px', md: '60px' } }}
      >
        <Slider {...settings}>
          {datas.map((data, index) => (
            <Box
              sx={{ position: 'relative', borderRadius: `${radius}` }}
              key={index}
            >
              <Image
                src={collectionImg}
                alt="collection"
                className="collectionImg"
                style={{
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: `${radius}`,
                }}
              />
              <Box
                sx={{
                  width: { xs: '100%', md: '85%' },
                  height: '100%',
                  bgcolor: 'rgba(150,127,93,0.3)',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  borderRadius: `${radius}`,
                }}
                className="zoomImg"
              />
              <Box
                className="collectionText"
                sx={{
                  width: { xs: '100%', md: '85%' },
                  height: '40%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  position: 'absolute',
                  color: 'white',
                  bottom: '0%',
                  left: '0',
                  fontSize: '12px',
                  fontWeight: '200',
                  zIndex: '99',
                  bgcolor: 'var(--darkBrown)',
                  borderRadius: `${bottomradius}`,
                }}
              >
                <Box
                  sx={{
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
            className="buttonHover"
            sx={{
              bgcolor: 'var(--brown)',
              color: 'white',
              width: 'auto',
              mx: 'auto',
              mt: { xs: '40px', md: '120px' },
              px: { xs: '40px', md: '80px' },
              py: { xs: 1, md: 2 },
              textAlign: 'center',
              fontSize: '18px',
              display: `${button}`,
            }}
          >
            All Hotels
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
