/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Box,
  Typography,
  TextField,
  Container,
  IconButton,
} from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import StarRateIcon from '@mui/icons-material/StarRate'
import Image from 'next/image'
// import Diversity2Icon from '@mui/icons-material/Diversity2'
import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import SendIcon from '@mui/icons-material/Send'
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
    title: 'Lovely Store',
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
    title: 'Lovely Store',
    starNum: 7,
    description: 'ultra luxury',
  },
]
export default function TopBrands() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: '90px',
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '90px',
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
        sx={{
          width: { md: '100%', lg: '100%' },
          mt: { md: '60px', xs: '40px' },
        }}
      >
        <Slider {...settings}>
          {datas.map((data, index) => (
            <Box key={index}>
              <Box
                className="brandSlider"
                sx={{
                  width: { xs: '93%', md: '85%' },
                  height: { xs: '250px', md: '220px' },
                  background: 'var(--brown)',
                  color: 'white',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  pb: 2,
                }}
              >
                <Typography
                  sx={{
                    pt: '50px',
                    fontSize: '18px',
                    fontWeight: 600,
                    width: { xs: '100px', md: '150px' },
                    textAlign: 'center',
                  }}
                >
                  {data.title}
                </Typography>
                <Box
                  sx={{
                    fontSize: '12px',
                    fontWeight: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: '20px',
                  }}
                >
                  <Typography sx={{ fontSize: '18px', fontWeight: 200 }}>
                    {data.starNum}
                  </Typography>
                  <StarRateIcon sx={{ fontSize: '18px' }} />
                  <Typography sx={{ fontSize: '12px', fontWeight: 200 }}>
                    {data.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
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
              Let’s Plan Your Journey
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
                alignItems: 'center',
              }}
            >
              Say Hi on
              <Link
                href="/"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  paddingBottom: '5px',
                  borderBottom: '1px solid white',
                  marginLeft: '10px',
                }}
              >
                {' '}
                WhatsApp{' '}
              </Link>
              <KeyboardArrowRightIcon sx={{ fontSize: '45px' }} />
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: { xs: '40px', md: '60px' },
            width: { xs: '100%', md: '55%' },
            // height: { xs: '250px', md: '350px' },
            mx: 'auto',
            py: '50px',
            borderRadius: { xs: '0', md: '25px' },
            position: 'relative',
            bgcolor: 'var(--blue)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src="/Images/lovely-maldives-logo-white.png"
            height={31}
            width={40}
            alt="Logo subscribe mailing"
            // style={{ marginTop: '8%' }}
          />
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 200,
              textAlign: 'center',
              mt: '20px',
              px: 4,
            }}
          >
            Subscribe to get the latest news and offers by Lovely Maldives
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: '20px',
              width: { xs: '70%', md: '60%' },
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              placeholder="Enter email address"
              multiline
              className="input"
              sx={{
                borderRadius: '10px',
                background: 'white',
                width: '100%',
              }}
            />
            <IconButton
              aria-label="subscribe"
              sx={{
                position: 'absolute',
                right: { xs: '70px', md: '22%' },
                // transform: 'translateY(-50%)',
                // bgcolor: 'primary.main',
                color: 'primary.main',
                borderRadius: '0 10px 10px 0',
                '&:hover': {
                  color: 'primary.dark',
                  background: 'none',
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
          {/* <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter email adress"
              multiline
              className="input"
              // maxRows={10}
              sx={{
                // bgcolor: 'white',
                mt: '20px',
                borderRadius: '10px',
                width: '60%',
                position: 'relative',
              }}
            />
            <SendIcon
              sx={{
                cursor: 'pointer',
                // color: 'var(--blue)',
              }}
            />
          </Box> */}
        </Box>
      </Box>
    </Container>
  )
}
