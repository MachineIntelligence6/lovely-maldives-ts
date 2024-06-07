/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Box, Typography, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import StarRateIcon from '@mui/icons-material/StarRate'
import Image from 'next/image'
// import Diversity2Icon from '@mui/icons-material/Diversity2'
import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import MailBox from './MailBox'
import journeyImg from '../../public/Images/explorImg3.jpg'

export const datas = [
  {
    title: 'Joali',
    starNum: 7,
    description: '',
  },
  {
    title: 'Hilton',
    starNum: 5,
    description: '',
  },
  {
    title: 'Lovely Resort',
    starNum: 6,
    description: 'ultra luxury',
  },
  {
    title: 'Hilton',
    starNum: 5,
    description: '',
  },
  {
    title: 'Joali',
    starNum: 7,
    description: '',
  },
  {
    title: 'Lovely Resort',
    starNum: 7,
    description: 'ultra luxury',
  },
]
export default function TopBrands(props: any) {
  const { brands, socialLinkSection } = props
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          // centerPadding: '80px',
          // centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '95px',
          centerMode: true,
        },
      },
    ],
  }
  return (
    <Container sx={{ px: { xs: '0px !important', md: '120px !important' } }}>
      <Typography
        sx={{
          fontSize: { xs: '22px', md: '30px' },
          color: 'var(--white)',
          textAlign: 'center',
          mt: { xs: '60px', md: '120px' },
        }}
      >
        TOP BRANDS
      </Typography>

      <Box
        className="topBrandSlider"
        sx={{
          width: { md: '100%', lg: '100%' },
          mt: { md: '60px', xs: '40px' },
        }}
      >
        <Box component={Slider} {...settings}>
          {brands.map((brand: any, index: number) => (
            <Box
              key={index}
              // sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap:'90px' }}
            >
              <Box
                className="brandSlider"
                sx={{
                  width: { xs: '93%', md: 'calc(65% + 9px)' },
                  height: { xs: '250px', md: '210px' },
                  background: 'var(--brown)',
                  color: 'white',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  mx: { xs: 'auto', md: '30px' },
                  // pb: 2,
                }}
              >
                <Box
                  sx={{
                    pt: { xs: '50%', md: '40%' },
                    height: '50%',
                  }}
                >
                  <Typography
                    sx={{
                      width: '100px',
                      fontSize: '26px',
                      textAlign: 'center',
                      fontWeight: 600,
                    }}
                  >
                    {brand?.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontSize: '12px',
                    fontWeight: 200,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    height: '50%',
                    pb: 2,
                  }}
                >
                  <Typography sx={{ fontSize: '18px', fontWeight: 200 }}>
                    {brand?.ratings}
                  </Typography>
                  <StarRateIcon sx={{ fontSize: '18px', mb: '5px' }} />
                  <Typography
                    sx={{ fontSize: '12px', fontWeight: 200, mb: '4px' }}
                  >
                    {brand?.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            mt: { xs: '40px', md: '60px' },
            width: { xs: '100%', md: '70%' },
            height: { xs: '350px', md: '450px' },
            mx: 'auto',
            borderRadius: { xs: '10px', md: '70px' },
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <Image
            src={journeyImg}
            alt="journey"
            className="imgRadius"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          <Box
            sx={{
              width: '100%',
              height: { xs: '350px', md: '450px' },
              borderRadius: { xs: '0px', md: '70px' },
              bgcolor: 'rgba(150,127,93,0.5)',
              position: 'absolute',
              top: '0',
              left: '0',
            }}
          >
            <Typography
              sx={{
                pt: { xs: '25%', md: '16%' },
                color: 'white',
                fontSize: { md: '45px', xs: '35px' },
                fontWeight: 600,
                width: '300px',
                textAlign: 'center',
                mx: 'auto',
              }}
            >
              {socialLinkSection?.title}
            </Typography>
            <Typography
              sx={{
                pt: '5%',
                color: 'white',
                fontSize: { xs: '22px', md: '30px' },
                fontWeight: 600,
                justifyContent: 'center',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              Say Hi on
              <Link
                href={socialLinkSection?.link}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  paddingBottom: '5px',
                  borderBottom: '1px solid white',
                  marginLeft: '10px',
                }}
              >
                {' '}
                {socialLinkSection?.socialMedia}{' '}
              </Link>
              <KeyboardArrowRightIcon sx={{ fontSize: '45px' }} />
            </Typography>
          </Box>
        </Box>
        <MailBox />
      </Box>
    </Container>
  )
}
