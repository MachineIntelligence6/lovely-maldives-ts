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
  recomendations: any
}
export default function OurCollection({
  heading,
  button,
  iconShow,
  radius,
  bottomradius,
  recomendations,
}: IOurCollectionProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    // centerMode: true,
    // centerPadding: '250px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          //   centerPadding: '250',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //   centerPadding: '90px',
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: 0,
        },
      },
    ],
  }
  console.log('recomendations ', recomendations)
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
        <Slider {...(settings as any)}>
          {recomendations.map((data: any, index: number) => (
            <Box
              sx={{
                position: 'relative',
                borderRadius: `${radius}`,
                margin: '0 auto',
              }}
              key={index}
            >
              {/* <Box
                component={Image}
                src={collectionImg}
                alt="Resort item"
                sx={{
                  width: { xs: '100%', md: '96%' },
                  height: { xs: '250px', md: '220px' },
                  objectFit: 'cover',
                  borderRadius: {
                    xs: '0px',
                    md: `${radius} ${radius} 0px 0px`,
                  },
                  margin: '0 auto',
                }}
              /> */}
              <Box
                sx={{
                  width: { xs: '100%', md: '96%' },
                  height: { xs: '250px', md: '300px' },
                  objectFit: 'cover',
                  overflow: 'hidden',
                  borderRadius: {
                    xs: '0px',
                    md: `${radius} ${radius} 0px 0px`,
                  },
                  margin: '0 auto',
                  cursor: 'pointer',
                }}
              >
                <Image
                  src={data?.image || collectionImg}
                  alt="image"
                  width={400}
                  height={500}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '96%' },
                  height: { xs: '250px', md: '220px' },
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  borderRadius: {
                    xs: '0px',
                    md: `${radius} ${radius} 0px 0px`,
                  },
                  left: { xs: 0, md: '6.5px' },
                }}
              />
              <Box
                sx={{
                  width: { xs: '100%', md: '96%' },
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '200',
                  zIndex: '99',
                  gap: 1,
                  py: '10px',
                  bgcolor: 'var(--darkBrown)',
                  borderRadius: { xs: '0px', md: `${bottomradius}` },
                  margin: '0 auto',
                }}
              >
                <Box
                  sx={{
                    // mt: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    height: 'auto',
                    px: 3,
                  }}
                >
                  <Typography sx={{ fontSize: '20px' }}>
                    {data?.title}{' '}
                  </Typography>
                  <BoltIcon sx={{ display: `${iconShow}`, mt: '2px' }} />
                </Box>
                <Box sx={{ textAlign: 'left', fontSize: '10px', px: 3 }}>
                  {[...Array(parseInt(data?.ratings, 10))].map(
                    (_: any, ind: number) => (
                      <StarRateIcon key={`_${index}_${ind}`} />
                    )
                  )}
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
            aria-label="All hotels"
          >
            All Hotels
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
