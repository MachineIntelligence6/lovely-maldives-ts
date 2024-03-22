/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Rating,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import { ModeOfTravel } from '@mui/icons-material'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import OurCollection from '@/components/OurCollection'
import FilterTray from '@/components/FilterTray'
import SocialSharer from '@/components/SocialSharer'
import SlugSlider from '@/components/SlugSlider'
import bannerImg from '../../../../public/Images/collectionImg.jpg'

export default function Resort() {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [amenities, setAmenities] = useState([...Array(8)])
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

  const [readMore, setReadMore] = useState(false)
  const [sliderMain1Nav, setSliderMain1Nav] = useState<Slider>()
  const [sliderMain2Nav, setSliderMain2Nav] = useState<Slider>()
  const sliderMain1Ref = useRef<Slider>()
  const sliderMain2Ref = useRef<Slider>()

  const [sliderMain3Nav, setSliderMain3Nav] = useState<Slider>()
  const [sliderMain4Nav, setSliderMain4Nav] = useState<Slider>()
  const sliderMain3Ref = useRef<Slider>()
  const sliderMain4Ref = useRef<Slider>()

  const showExtraContent = () => {
    setReadMore(!readMore)
  }

  useEffect(() => {
    setSliderMain1Nav(sliderMain1Ref.current)
    setSliderMain2Nav(sliderMain2Ref.current)

    setSliderMain3Nav(sliderMain3Ref.current)
    setSliderMain4Nav(sliderMain4Ref.current)
  }, [])
  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' } }}>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <BreadCrumb />
        <FilterTray />
      </Container>
      <Container
        sx={{
          minWidth: '100% !important',
          px: { xs: '0px', md: '120px' },
        }}
      >
        <Box
          sx={{ minWidth: '100% !important', px: { xs: '0px', md: '120px' } }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'start' },
              mt: '2rem',
            }}
          >
            <Image
              src="/Images/logo-colored.png"
              alt="Resort Logo"
              width={100}
              height={60}
            />
          </Box>

          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Paper elevation={0} sx={{ background: 'transparent' }}>
                <Box
                  sx={{
                    background: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 3,
                    overflow: 'hidden',
                  }}
                  className="slider-container-1"
                >
                  <Slider
                    asNavFor={sliderMain2Nav}
                    ref={(slider) => {
                      if (slider) {
                        sliderMain1Ref.current = slider
                      }
                    }}
                    {...mainSlider1}
                  >
                    {amenities.map((val) => (
                      <Box
                        key={val}
                        className="main-slider-1"
                        sx={{ position: 'relative' }}
                      >
                        <Image
                          src={bannerImg}
                          alt="Picture of the author"
                          style={{ width: '100%', height: 'auto' }}
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
                  <Slider
                    asNavFor={sliderMain1Nav}
                    ref={(slider) => {
                      if (slider) {
                        sliderMain2Ref.current = slider
                        setSliderMain2Nav(slider)
                      }
                    }}
                    focusOnSelect
                    swipeToSlide
                    {...thumbnailSlider1}
                  >
                    {amenities.map((val) => (
                      <Box
                        sx={{
                          p: 0,
                          px: '4px',
                          display: 'block',
                          position: 'relative',
                        }}
                        key={val}
                        className="sub-slider-1"
                      >
                        <Box
                          component={Image}
                          src={bannerImg}
                          alt="Picture of the author"
                          sx={{
                            // width: 'calc(100% - 10px)',
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                          }}
                        />
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
                <Box sx={{ px: { xs: '24px', md: '0px' } }}>
                  <Typography
                    variant="h2"
                    sx={{
                      m: 0,
                      mt: 4,
                      fontSize: { xs: '22px', md: '30px' },
                      // color: 'var(--white)',
                      textTransform: 'uppercase',
                    }}
                  >
                    One n Only Reethi Rah
                  </Typography>
                  <Rating
                    name="size-medium"
                    defaultValue={2.4}
                    precision={0.5}
                    sx={{ display: 'flex', m: 0, mb: 2, mt: 2 }}
                  />
                  <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                    Qui reprehenderit reprehenderit elit sunt commodo
                    adipisicing labore. Non nulla dolor in minim nulla proident
                    sint. Laboris pariatur cupidatat ex aliquip ut adipisicing
                    occaecat in ea esse nisi reprehenderit culpa. Quis commodo
                    in cupidatat commodo magna. Commodo excepteur ipsum proident
                    nisi laborum do officia enim.
                  </Typography>
                  <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                    Qui reprehenderit reprehenderit elit sunt commodo
                    adipisicing labore. Non nulla dolor in minim nulla proident
                    sint. Laboris pariatur cupidatat ex aliquip ut adipisicing
                    occaecat in ea esse nisi reprehenderit culpa. Quis commodo
                    in cupidatat commodo magna. Commodo excepteur ipsum proident
                    nisi laborum do officia enim.
                  </Typography>
                </Box>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  background: 'transparent',
                  textAlign: 'center',
                  px: { xs: '24px', md: '0px' },
                }}
              >
                {!readMore && (
                  <Button
                    sx={{
                      mt: 5,
                      color: 'var(--brown)',
                      backgroundColor: 'transparent',
                      fontWeight: 600,
                      ':hover': {
                        backgroundColor: 'transparent',
                      },
                      fontSize: '1.4rem',
                    }}
                    variant="text"
                    onClick={showExtraContent}
                    aria-label="More"
                  >
                    More
                  </Button>
                )}
              </Paper>
              {readMore && (
                <>
                  <Paper
                    elevation={0}
                    sx={{
                      background: 'transparent',
                      pt: 6,
                      px: { xs: '24px', md: '0px' },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        m: 0,
                        mb: 2,
                        mt: 5,
                        fontSize: { xs: '22px', md: '30px' },
                        textTransform: 'uppercase',
                      }}
                    >
                      Quick Facts
                    </Typography>

                    <Grid container spacing={2}>
                      {amenities.map((val, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <ListItem
                            sx={{
                              p: 0,
                              display: 'flex',
                              alignItems: 'start',
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '30px', mt: 1.2 }}>
                              <ModeOfTravel />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                                  30km from airport
                                </Typography>
                              }
                              secondary={[
                                <Typography
                                  paragraph
                                  sx={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                    mb: '2px',
                                  }}
                                >
                                  (20 minutes to reach the hotel)
                                </Typography>,
                                <Typography
                                  paragraph
                                  sx={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                    mb: '2px',
                                  }}
                                >
                                  (20 minutes to reach the hotel)
                                </Typography>,
                              ]}
                            />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid>
                    <hr />

                    <Typography
                      variant="h2"
                      sx={{
                        m: 0,
                        mb: 2,
                        mt: 5,
                        fontSize: { xs: '22px', md: '30px' },
                        textTransform: 'uppercase',
                      }}
                    >
                      HOTEL AMINETIES
                    </Typography>

                    <Grid container spacing={2}>
                      {amenities.map((val, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <ListItem
                            sx={{
                              p: 0,
                              display: 'flex',
                              alignItems: 'start',
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: '30px', mt: 1.2 }}>
                              <ModeOfTravel />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                                  30km from airport
                                </Typography>
                              }
                              secondary={[
                                <Typography
                                  paragraph
                                  sx={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                    mb: '2px',
                                  }}
                                >
                                  (20 minutes to reach the hotel)
                                </Typography>,
                                <Typography
                                  paragraph
                                  sx={{
                                    fontSize: '0.875rem',
                                    color: '#666',
                                    mb: '2px',
                                  }}
                                >
                                  (20 minutes to reach the hotel)
                                </Typography>,
                              ]}
                            />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{ background: 'transparent', mt: 5 }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        m: 0,
                        mb: 2,
                        mt: 5,
                        px: { xs: '24px', md: '0px' },
                        fontSize: { xs: '22px', md: '30px' },
                        // color: 'var(--white)',
                        textTransform: 'uppercase',
                      }}
                    >
                      2- Presidential Room
                    </Typography>
                    <Box
                      sx={{
                        background: '#000',
                        display: 'flex',
                        flexDirection: 'column',
                        // gap: '10px',
                        // pb: '10px',
                        mt: 3,
                        overflow: 'hidden',
                      }}
                      className="slider-container-2"
                    >
                      <Slider
                        asNavFor={sliderMain4Nav}
                        ref={(slider) => {
                          if (slider) {
                            sliderMain3Ref.current = slider
                            setSliderMain3Nav(slider)
                          }
                        }}
                        {...mainSlider1} // You might want to adjust this configuration if it's specific to slider 2
                      >
                        {amenities.map((val, index) => (
                          <Box
                            key={index}
                            className="main-slider-2"
                            sx={{ position: 'relative' }}
                          >
                            {' '}
                            {/* Changed key to use index */}
                            <Image
                              src={bannerImg}
                              alt="Picture of the author"
                              style={{ width: '100%', height: 'auto' }}
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
                      <Slider
                        asNavFor={sliderMain3Nav}
                        ref={(slider) => {
                          if (slider) {
                            sliderMain4Ref.current = slider
                            setSliderMain4Nav(slider)
                          }
                        }}
                        {...thumbnailSlider1}
                      >
                        {amenities.map((val, index) => (
                          <Box
                            sx={{
                              p: 0,
                              px: '4px',
                              display: 'block',
                              position: 'relative',
                            }}
                            key={index}
                            className="sub-slider-2"
                          >
                            <Image
                              src={bannerImg}
                              alt="Picture of the author"
                              style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                              }}
                            />
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
                    <Box sx={{ px: { xs: '24px', md: '0px' } }}>
                      <Rating
                        name="size-medium"
                        defaultValue={2}
                        sx={{ display: 'flex', mt: 4 }}
                      />
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: '22px', md: '30px' },
                          // color: 'var(--white)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          m: 0,
                          mt: 2,
                          mb: 2,
                        }}
                      >
                        One n Only Reethi Rah
                      </Typography>
                      <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                        Qui reprehenderit reprehenderit elit sunt commodo
                        adipisicing labore. Non nulla dolor in minim nulla
                        proident sint. Laboris pariatur cupidatat ex aliquip ut
                        adipisicing occaecat in ea esse nisi reprehenderit
                        culpa. Quis commodo in cupidatat commodo magna. Commodo
                        excepteur ipsum proident nisi laborum do officia enim.
                      </Typography>
                      <Typography paragraph sx={{ fontSize: '1.125rem' }}>
                        Qui reprehenderit reprehenderit elit sunt commodo
                        adipisicing labore. Non nulla dolor in minim nulla
                        proident sint. Laboris pariatur cupidatat ex aliquip ut
                        adipisicing occaecat in ea esse nisi reprehenderit
                        culpa. Quis commodo in cupidatat commodo magna. Commodo
                        excepteur ipsum proident nisi laborum do officia enim.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 4,
                        mb: 4,
                      }}
                    >
                      <Button
                        title="Enquire"
                        sx={{
                          color: 'white',
                          bgcolor: 'var(--brown)',
                          px: 3,
                          py: 1.5,
                          fontSize: '1.2rem !important',
                          '&:hover': {
                            backgroundColor: 'var(--blue) !important',
                          },
                        }}
                        aria-label="Enquire"
                      >
                        ENQUIRE
                      </Button>
                    </Box>
                    <Box>
                      <SocialSharer />
                    </Box>
                  </Paper>
                </>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mb: '40px' }}>
          <SlugSlider
            heading="OTHER RECOMMENDATIONS"
            button="none"
            iconShow="flex"
            radius="20px"
            bottomradius="0 0 20px 20px"
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
