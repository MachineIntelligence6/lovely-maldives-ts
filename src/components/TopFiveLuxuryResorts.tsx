/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Box, Typography, Button, Container, Stack } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import AddIcon from '@mui/icons-material/Add'
import BoltIcon from '@mui/icons-material/Bolt'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import collectionImg from '../../public/Images/collectionImg.jpg'

// interface ITopFiveLuxuryResortsProps {
//   heading: string
//   button: string
//   iconShow: string
//   radius: string
//   bottomradius: string
//   resorts: any,
//   isAdminSide: boolean,
//   title: string,
//   handleChange: any
// }
export default function TopFiveLuxuryResorts(props: any) {
  const {
    heading,
    button,
    iconShow,
    radius,
    bottomradius,
    resorts,
    isAdminSide,
    title,
    handleChange,
    handleShowModal,
  } = props

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
    <Container sx={{ maxWidth: '100% !important', px: '0px !important' }}>
      {isAdminSide ? (
        <>
          <TextFieldWraper
            label="Title"
            placeholder="Enter Title."
            value={title}
            name="title"
            onChange={handleChange}
          />
          <Stack direction="row" justifyContent="end">
            <Button
              variant="outlined"
              sx={{
                border: '1px solid var(--brown)',
                mt: 1,
                textTransform: 'capitalize',
              }}
              onClick={handleShowModal}
              disabled={resorts?.length >= 5}
            >
              <Stack direction="row" alignItems="center" gap="10px">
                <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
                <Typography variant="body1" color="var(--brown)">
                  Add Hotel
                </Typography>
              </Stack>
            </Button>
          </Stack>
        </>
      ) : (
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
      )}

      <Box
        sx={{
          width: '100%',
          height: '100%',
          mt: { xs: '30px', md: '60px' },
        }}
      >
        <Slider {...settings}>
          {resorts?.map((data: any, index: number) => (
            <Box
              sx={{
                position: 'relative',
                borderRadius: `${radius}`,
                margin: '0 auto',
              }}
              key={index}
            >
              <Box
                component={Image}
                src={collectionImg}
                alt="Resort item"
                sx={{
                  width: { xs: '100%', md: '96%' },
                  height: { xs: '250px', md: '300px' },
                  objectFit: 'cover',
                  borderRadius: {
                    xs: '0px',
                    md: `${radius} ${radius} 0px 0px`,
                  },
                  margin: '0 auto',
                }}
              />
              <Box
                sx={{
                  width: { xs: '100%', md: '96%' },
                  height: { xs: '250px', md: '300px' },
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  left: { xs: 0, md: '8px' },
                  '@media only screen and (min-width: 1600px)': {
                    left: '11px',
                  },
                  borderRadius: {
                    xs: '0px',
                    md: `${radius} ${radius} 0px 0px`,
                  },
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 'auto',
                    px: 4,
                  }}
                >
                  <Typography sx={{ fontSize: '20px' }}>
                    {data?.title ? data?.title : 'One n Only Reethi Rah'}{' '}
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
            aria-label="All hotels"
          >
            All Hotels
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
