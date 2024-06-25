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
  collections: any
}
export default function OurCollection({
  heading,
  button,
  iconShow,
  radius,
  bottomradius,
  collections,
}: IOurCollectionProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
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
          {collections?.map((collection: any, index: number) => (
            <Box
              sx={{
                // position: 'relative',
                borderRadius: `${radius}`,
                margin: '0 auto',
              }}
              key={index}
            >
              <Box
                component="div"
                sx={{
                  width: { xs: '100%', md: '92%' },
                  height: { xs: '250px', md: '300px' },
                  objectFit: 'cover',
                  borderRadius: {
                    xs: '0px',
                    md: `${radius} ${radius} 0px 0px`,
                  },
                  margin: '0 auto',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(150,127,93,0.5)',
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    zIndex: '1',
                    left: 0,
                    // '@media only screen and (min-width: 1600px)': {
                    //   left: '30px',
                    // },
                  }}
                />
                <Image
                  src={collection?.coverImage}
                  alt="Resort item"
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 600px) 100vw, 50vw"
                />
              </Box>
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
                  borderRadius: { xs: '0px', md: `${bottomradius}` },
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
                    {collection?.title}{' '}
                  </Typography>
                  <BoltIcon sx={{ display: `${iconShow}` }} />
                </Box>
                <Box sx={{ textAlign: 'left', fontSize: '10px', px: 4 }}>
                  {[...Array(parseInt(collection?.ratings, 10))].map(
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
            aria-label="All Hotels"
          >
            All Hotels
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
