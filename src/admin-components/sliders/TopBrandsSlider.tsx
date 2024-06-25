/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import StarRateIcon from '@mui/icons-material/StarRate'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Image from 'next/image'

import { SampleNextArrow, SamplePrevArrow } from '@/components/OurServices'

const TopBrandsSlider = (props: any) => {
  const { brands, handleDeleteBrand, editModelShow } = props
  const settings = {
    centerMode: true,
    className: 'slick-center-mode',
    dots: true,
    centerPadding: '0px',
    // infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: brands.length >= 4 ? 4 : brands.length || 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '0px',
          slidesToShow: brands.length >= 4 ? 4 : brands.length || 1,
          slidesToScroll: 1,
          // infinite: true,
          dots: true,
          centerMode: true,
          initialSlide: 1,
          arrows: true,
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
    <Box
      className="topBrandSlider"
      sx={{
        width: { md: '100%', lg: '100%' },
        mt: { md: '60px', xs: '40px' },
      }}
    >
      <Box component={Slider} {...settings}>
        {brands?.map((brand: any, index: number) => (
          <Box
            key={index}
            // sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap:'90px' }}
          >
            <Box
              className="brandSlider"
              sx={{
                width: { xs: '93%', md: 'calc(65% + 9px)' },
                height: { xs: '250px', md: '210px' },
                maxWidth: '165px',
                background: 'var(--brown)',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                position: 'relative',
                mx: { xs: 'auto', md: '30px' },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '.5rem',
                  right: '2.5rem',
                  width: '200px',
                  height: '30px',
                  maxWidth: '30px',
                  maxHeight: '30px',
                  zIndex: 999,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                }}
              >
                <Box
                  sx={{
                    width: '25px',
                    minWidth: '25px',
                    height: '25px',
                    maxHeight: '25px',
                    borderRadius: '50%',
                    bgcolor: 'var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => handleDeleteBrand(index)}
                >
                  <DeleteIcon sx={{ color: 'white', fontSize: '14px' }} />
                </Box>
                <Box
                  sx={{
                    width: '25px',
                    minWidth: '25px',
                    height: '25px',
                    maxHeight: '25px',
                    borderRadius: '50%',
                    bgcolor: 'var(--darkBlue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => editModelShow(index)}
                >
                  <EditIcon sx={{ color: 'white', fontSize: '14px' }} />
                </Box>
              </Box>
              <Box
                sx={{
                  pt: '30%',
                  height: '50%',
                }}
              >
                <Box sx={{ width: '70px', height: '50px', overflow: 'hidden' }}>
                  <Image
                    src={brand?.logo}
                    alt="brand-logo"
                    width={100}
                    height={80}
                    style={{
                      width: '70px',
                      height: '50px',
                      // objectFit: 'cover',
                    }}
                  />
                </Box>
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
                  {brand.ratings}
                </Typography>
                <StarRateIcon sx={{ fontSize: '18px', mb: '5px' }} />
                <Typography
                  sx={{ fontSize: '12px', fontWeight: 200, mb: '4px' }}
                >
                  {brand?.tag}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TopBrandsSlider
