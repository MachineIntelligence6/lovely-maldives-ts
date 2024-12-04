/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Box, Typography, Button, Container } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import BoltIcon from '@mui/icons-material/Bolt'
import { useRouter } from 'next/navigation'

interface IOurCollectionProps {
  heading: string
  button: string
  iconShow: string
  radius: string
  bottomradius: string
}

const CollectionSlider = (props: any) => {
  const router = useRouter()
  const { collections, handleDeleteCard, editModelShow } = props

  const isFewItems = collections.length < 3

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
    centerPadding: isFewItems ? '0px' : '200px',
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
    <Box
      sx={{
        width: '100%',
        height: '100%',
        mt: '1rem',
      }}
      className="slider-container"
    >
      {collections?.length <= 2 ? (
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          {collections.map((collection: any, index: number) => (
            <Box
              sx={{
                position: 'relative',
                borderRadius: `0`,
                margin: '0 auto',
                maxWidth: '350px',
                cursor: "pointer",
              }}
              key={index}
              onClick={() => {
                router.push(`/resorts/${encodeURIComponent(collection?.title)}`)
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '1rem',
                  right: '4rem',
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
                    width: '35px',
                    minWidth: '35px',
                    height: '35px',
                    maxHeight: '35px',
                    borderRadius: '50%',
                    bgcolor: 'var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => handleDeleteCard(index)}
                >
                  <DeleteIcon sx={{ color: 'white', fontSize: '14px' }} />
                </Box>
                <Box
                  sx={{
                    width: '35px',
                    minWidth: '35px',
                    height: '35px',
                    maxHeight: '35px',
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

              <Image
                width={300}
                height={300}
                src={collection?.image || collection?.coverImage}
                alt="Resort item"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <Box
                sx={{
                  width: { xs: '100%', md: '100%' },
                  height: { xs: '250px', md: '300px' },
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  left: { xs: 0, md: '0px' },
                  '@media only screen and (min-width: 1600px)': {
                    left: '0px',
                  },
                }}
              />
              <Box
                sx={{
                  width: { xs: '100%', md: '100%' },
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '200',
                  zIndex: '99',
                  gap: 1,
                  py: '24px',
                  bgcolor: 'var(--darkBrown)',
                  borderRadius: { xs: '0px', md: `0px` },
                  margin: '0 auto',
                  marginTop: '-8px',
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
                    {collection?.title}
                  </Typography>
                  <BoltIcon sx={{ display: `none` }} />
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
        </Box>
      ) : (
        <Slider {...settings}>
          {collections.map((collection: any, index: number) => (
            <Box
              sx={{
                position: 'relative',
                borderRadius: `0`,
                margin: '0 auto',
                cursor: "pointer",
              }}
              key={index}
              onClick={() => {
                router.push(`/resorts/${encodeURIComponent(collection?.title)}`)
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '1rem',
                  right: '4rem',
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
                    width: '35px',
                    minWidth: '35px',
                    height: '35px',
                    maxHeight: '35px',
                    borderRadius: '50%',
                    bgcolor: 'var(--red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => handleDeleteCard(index)}
                >
                  <DeleteIcon sx={{ color: 'white', fontSize: '14px' }} />
                </Box>
                <Box
                  sx={{
                    width: '35px',
                    minWidth: '35px',
                    height: '35px',
                    maxHeight: '35px',
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

              <Image
                width={300}
                height={300}
                src={collection?.image || collection?.coverImage}
                alt="Resort item"
                style={{
                  width: '92%',
                  height: '300px',
                  objectFit: 'cover',
                  margin: '0 auto',
                }}
              />
              <Box
                sx={{
                  width: { xs: '100%', md: '92%' },
                  height: { xs: '250px', md: '300px' },
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  left: { xs: 0, md: '15px' },
                  '@media only screen and (min-width: 1600px)': {
                    left: '30px',
                  },
                }}
              />
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
                  borderRadius: { xs: '0px', md: `0px` },
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
                    {collection?.title}
                  </Typography>
                  <BoltIcon sx={{ display: `none` }} />
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
      )}
    </Box>
  )
}

export default CollectionSlider
