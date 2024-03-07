/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { Box, Typography, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import blog from '../../public/Images/landingTree.jpg'

export const popular = [{}, {}, {}, {}]
export default function BlogSlider() {
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
          centerPadding: '60px',
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
    <Container sx={{ maxWidth: '100% !important' }}>
      <Box
        sx={{ width: '100%', height: '100%', mt: { xs: '30px', md: '60px' } }}
      >
        <Slider {...settings}>
          {popular.map((data, index) => (
            <Box sx={{ position: 'relative' }} key={index}>
              <Image
                src={blog}
                alt="blog"
                className="collectionImg"
                style={{
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '30px',
                }}
              />
              {/* <Box sx={{width:{xs:'100%',md:"85%"},height:"100%",bgcolor:"rgba(150,127,93,0.3)",position:'absolute',top:'0',left:'0'}} ></Box> */}
              <Box
                sx={{
                  width: { xs: '100%', md: '85%' },
                  height: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'absolute',
                  color: 'white',
                  bottom: '0%',
                  left: '0',
                  fontSize: '12px',
                  fontWeight: '200',
                  zIndex: '99',
                  bgcolor: 'var(--blue)',
                  borderRadius: '0 0 30px  30px',
                  mt: '20px',
                }}
              >
                <Typography sx={{ px: 4, fontSize: '14px' }}>
                  04 Feb 2024
                </Typography>
                <Typography sx={{ px: 4, fontSize: '20px', mt: '20px' }}>
                  Seyta Opens Dhunthari Resort & Spa in the beautiful islands of
                  the Maldives.
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}
