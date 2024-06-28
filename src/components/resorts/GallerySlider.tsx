/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Box } from '@mui/material'
import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import bannerImg from '../../../public/Images/collectionImg.jpg'

const GallerySlider = (props: any) => {
  const { index, section } = props

  const mainSlider1 = {
    dots: false,
    arrows: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const thumbnailSlider1 = {
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    autoplay: false,
    centerPadding: '0px',
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  const sliderMain1Ref = useRef(null)
  const sliderMain2Ref = useRef(null)
  const [sliderMain1Nav, setSliderMain1Nav] = useState(null)
  const [sliderMain2Nav, setSliderMain2Nav] = useState(null)

  return (
    <Box
      key={`gallery_slider_${index}`}
      sx={{
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        mt: 3,
        overflow: 'hidden',
      }}
      className="slider-container-1"
    >
      {/* Main Slider */}
      <Slider
        asNavFor={sliderMain2Nav as any} // Sync with thumbnail slider
        ref={(slider: any) => {
          if (slider) {
            sliderMain1Ref.current = slider
            if (!sliderMain1Nav) {
              setSliderMain1Nav(slider) // Set initial nav reference for main slider
            }
          }
        }}
        {...mainSlider1}
      >
        {section?.images?.map((image: any, ind: number) => (
          <Box
            key={ind}
            className="main-slider-1"
            sx={{ position: 'relative' }}
          >
            <Image
              src={image ?? bannerImg}
              alt="Picture of the author"
              width={500}
              height={200}
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: 1.6,
              }}
            />
            <Box
              sx={{
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(150,127,93,0.5)',
                position: 'absolute',
                top: '0',
                left: '0',
              }}
            />
          </Box>
        ))}
      </Slider>

      {/* Thumbnail Slider */}
      <Slider
        asNavFor={sliderMain1Nav as any} // Sync with main slider
        ref={(slider: any) => {
          if (slider) {
            sliderMain2Ref.current = slider
            if (!sliderMain2Nav) {
              setSliderMain2Nav(slider) // Set initial nav reference for thumbnail slider
            }
          }
        }}
        focusOnSelect
        swipeToSlide
        {...thumbnailSlider1}
      >
        {section?.images?.map((image: any, ind: number) => (
          <Box
            key={ind}
            className="sub-slider-1"
            sx={{
              p: 0,
              px: '4px',
              display: 'block',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            >
              <Image
                src={image || bannerImg}
                alt="Picture of the author"
                width={100}
                height={100}
                style={{
                  width: '100%',
                  aspectRatio: '1.6',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: '90.5%', md: '96.5%' },
                height: '100%',
                bgcolor: 'rgba(150,127,93,0.5)',
                position: 'absolute',
                top: '0',
                left: '4px',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default GallerySlider
