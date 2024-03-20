/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Box,
  Typography,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import WifiIcon from '@mui/icons-material/Wifi'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import EditNoteIcon from '@mui/icons-material/EditNote'
import WifiPasswordIcon from '@mui/icons-material/WifiPassword'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

// import 'react-multi-carousel/lib/styles.css'

import Image from 'next/image'
import exploreImg1 from '../../public/Images/exploreImg.jpg'
import exploreImg3 from '../../public/Images/explorImg2.jpg'
import exploreImg2 from '../../public/Images/exploreImg3.jpg'
import exploreImg4 from '../../public/Images/explorImg5.jpg'
// import SparkleImg from './SparkleImg'

export const data = [
  {
    title: 'TRAVEL COUNSELING ',
    icon: <WifiIcon sx={{ fontSize: '40px' }} />,
    description:
      'We do all types of travel related services to all our customers.',
    image: exploreImg1,
  },
  {
    title: 'VIP YOUR CITY',
    icon: <NoteAltIcon sx={{ fontSize: '40px' }} />,
    description:
      'We do all types of travel related services to all our customers.',
    image: exploreImg3,
  },
  {
    title: 'HOTEL BOOKING',
    icon: <EditNoteIcon sx={{ fontSize: '40px' }} />,
    description:
      'We do all types of travel related services to all our customers.',
    image: exploreImg2,
  },
  {
    title: 'VIP YOUR CITY',
    icon: <WifiPasswordIcon sx={{ fontSize: '40px' }} />,
    description:
      'We do all types of travel related services to all our customers.',
    image: exploreImg4,
  },
  {
    title: 'VIP AIRPORT CONCIERGE SERVICE',
    icon: <LaptopMacIcon sx={{ fontSize: '40px' }} />,
    description:
      'We do all types of travel related services to all our customers.',
    image: exploreImg1,
  },
  {
    title: 'HOTEL BOOKING',
    icon: <PhonelinkRingIcon sx={{ fontSize: '40px' }} />,
    description:
      'We do all types of travel related services to all our customers.',
    image: exploreImg3,
  },
]
export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <ArrowForwardIosIcon
      className={className}
      sx={{
        ...style,
        display: 'block',
        color: { xs: 'white !important', md: 'var(--blue) !important' },
        fontSize: '35px !important ',
        width: '35px !important',
        height: '35px !important',
        top: '41% !important',
      }}
      onClick={onClick}
    />
  )
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <ArrowBackIosNewIcon
      className={className}
      sx={{
        ...style,
        display: 'block',
        color: { xs: 'white !important', md: 'var(--blue) !important' },
        fontSize: ' 35px !important ',
        width: '35px !important',
        height: '35px !important',
        top: '41% !important',
      }}
      onClick={onClick}
    />
  )
}

export default function OurServices() {
  const theme = useTheme()
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // }

  const settings = {
    className: 'services-slider',
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        px: { xs: '0px !important', md: '120px !important' },
        mt: { xs: '120px !important', md: '120px !important' },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'var(--white)',
          textAlign: 'center',
          mt: { xs: '60px', md: '120px' },
          fontSize: { xs: '22px', md: '30px' },
        }}
      >
        OUR SERVICES
      </Typography>
      <Typography
        sx={{
          color: 'var(--brown)',
          textAlign: 'center',
          mt: { xs: '15px', md: '30px' },
          fontSize: { xs: '20px', md: '26px' },
        }}
      >
        Towards Excellence
      </Typography>
      <Box className="slider-container" sx={{ mt: { xs: '30px', md: '60px' } }}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Box
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              sx={{
                width: '100%',
                px: '6px',
                mb: 0,
              }}
            >
              {lessThanMd ? (
                <Box
                  sx={{
                    height: '50vh',
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={item.image}
                    alt="exploreImg"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.7)',
                    }}
                  />
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(150, 127, 93, 0.5)',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      color: 'white',
                      top: '10%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '16px',
                      fontWeight: 600,
                      opacity: 0.9,
                      zIndex: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      position: 'absolute',
                      color: 'white',
                      bottom: '10%',
                      left: '50%',
                      transform: 'translateX(-30%)',
                      fontSize: '16px',
                      // fontWeight: 600,
                      opacity: 0.9,
                      zIndex: 2,
                      textAlign: 'justify',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ) : (
                <Paper
                  elevation={3}
                  className="expSlider"
                  sx={{
                    bgcolor: 'var(--blue)',
                    color: 'white',
                    mx: 'auto',
                    width: {
                      xs: '90%',
                      sm: '90%',
                      md: '200px',
                      lg: '150px',
                    },
                    height: '180px',
                    borderRadius: '30px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      py: '45px',
                    }}
                  >
                    <Typography>{item.icon}</Typography>
                    <Typography
                      sx={{
                        mt: '20px',
                        fontSize: '16px',
                        textAlign: 'center',
                        width: '100px',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Paper>
              )}
            </Box>
          ))}
        </Slider>
      </Box>
      {/* <SparkleImg /> */}
    </Container>
  )
}
