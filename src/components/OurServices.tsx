/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import useMediaQuery from '@mui/material/useMediaQuery'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import Image from 'next/image'

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

export default function OurServices(props: any) {
  const { services } = props
  console.log('services ', services)
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const settings = {
    className: 'services-slider',
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    autoplay: false,
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
        {services?.title}
      </Typography>
      <Typography
        sx={{
          color: services?.subTitleColor
            ? services?.subTitleColor
            : 'var(--brown)',
          textAlign: 'center',
          mt: { xs: '15px', md: '30px' },
          fontSize: { xs: '20px', md: '26px' },
        }}
      >
        {services?.subTitle}
      </Typography>
      <Box className="slider-container" sx={{ mt: { xs: '30px', md: '60px' } }}>
        <Slider {...settings}>
          {services?.services?.map((item: any, index: number) => (
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
                    src={item?.bgImage}
                    alt="exploreImg"
                    width={400}
                    height={500}
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
                      textAlign: 'left',
                    }}
                  >
                    {item.caption}
                  </Typography>
                </Box>
              ) : (
                <Paper
                  elevation={3}
                  className="expSlider"
                  sx={{
                    bgcolor: services?.cardBgcolor || 'var(--blue)',
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
                    <Image
                      src={item?.icon}
                      alt="exploreImg"
                      width={35}
                      height={35}
                      style={{
                        objectFit: 'cover',
                        filter: 'brightness(1)',
                      }}
                    />
                    <Typography
                      sx={{
                        mt: '30px',
                        fontSize: '16px',
                        textAlign: 'center',
                        width: '115px',
                        textTransform: 'uppercase',
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
