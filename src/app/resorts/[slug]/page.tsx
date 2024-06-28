/* eslint-disable radix */
/* eslint-disable react/no-danger */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Rating,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import Image from 'next/image'

import { useEffect, useRef, useState, useTransition } from 'react'
import Slider from 'react-slick'
import { ModeOfTravel } from '@mui/icons-material'
import { useParams } from 'next/navigation'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FilterTray from '@/components/FilterTray'
import useApiStore from '@/stores/themeApiStore'
import SlugSlider from '@/components/SlugSlider'
import CustomLoader from '@/admin-components/common/CustomLoader'
import {
  getHotelRequest,
  getRecomendationsRequest,
} from '@/utils/api-requests/addHotels.request'
import GallerySlider from '@/components/resorts/GallerySlider'

export default function Resort() {
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  // const [readMore, setReadMore] = useState(false)
  // const [sliderMain1Nav, setSliderMain1Nav] = useState<Slider>()
  // const [sliderMain2Nav, setSliderMain2Nav] = useState<Slider>()
  // const sliderMain1Ref = useRef<Slider>()
  // const sliderMain2Ref = useRef<Slider>()

  const [sliderMain3Nav, setSliderMain3Nav] = useState<Slider>()
  const [sliderMain4Nav, setSliderMain4Nav] = useState<Slider>()
  const sliderMain3Ref = useRef<Slider>()
  const sliderMain4Ref = useRef<Slider>()
  const [hotel, setHotel] = useState('' as any)
  const [recomendations, setRecomendations] = useState([] as any)
  console.log('hotel --->>> ', hotel)
  console.log('recomendded --->>> ', recomendations)
  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  // const showExtraContent = () => {
  //   setReadMore(!readMore)
  // }

  const getResortSection = () => {
    const slug = params?.slug
    try {
      startTransition(async () => {
        const res = await getHotelRequest(slug)
        const data = res?.data
        if (data?.status === 200) {
          setHotel(data?.data?.[0])
        } else {
          console.log('response', res)
        }
      })
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  const getOtherRecomendations = async () => {
    try {
      const res = await getRecomendationsRequest()
      const data = res?.data
      if (data?.status === 200) {
        setRecomendations(data?.data)
      } else {
        console.log('response', res)
      }
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  useEffect(() => {
    // setSliderMain1Nav(sliderMain1Ref.current)
    // setSliderMain2Nav(sliderMain2Ref.current)

    setSliderMain3Nav(sliderMain3Ref.current)
    setSliderMain4Nav(sliderMain4Ref.current)
  }, [])

  useEffect(() => {
    getResortSection()
    getOtherRecomendations()
    fetchData()
  }, [])
  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' }, bgcolor: themeData?.bgColor }}>
      <Header />
      {isPending && <CustomLoader />}
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
                {hotel?.sections?.map((section: any, index: number) => {
                  if (section?.type === 'gallery_slider') {
                    // Initialize unique refs and state for each gallery_slider section
                    return (
                      <GallerySlider
                        key={index}
                        index={index}
                        section={section}
                      />
                    )
                  }
                  if (section?.type === 'description') {
                    return (
                      <Box
                        sx={{
                          mt: 3,
                          bgcolor: 'transparent',
                          '& *': {
                            bgcolor: 'transparent !important',
                          },
                        }}
                        dangerouslySetInnerHTML={{
                          __html: section.description,
                        }}
                      />
                    )
                  }
                  if (section?.type === 'title') {
                    return (
                      <Box
                        key={`title_${index}`}
                        sx={{ px: { xs: '24px', md: '0px' } }}
                      >
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
                          {section?.title}
                        </Typography>
                      </Box>
                    )
                  }
                  if (section?.type === 'ratings') {
                    return (
                      <Box
                        key={`ratings_${index}`}
                        sx={{ px: { xs: '24px', md: '0px' } }}
                      >
                        <Rating
                          name="size-medium"
                          defaultValue={parseInt(section?.ratings)}
                          precision={0.5}
                          sx={{ display: 'flex', m: 0, mb: 2, mt: 2 }}
                        />
                      </Box>
                    )
                  }
                  if (section?.type === 'facts') {
                    return (
                      <Grid key={`facts_${index}`} container spacing={2}>
                        {section?.facts?.map((fact: any, ind: number) => (
                          <Grid item xs={12} sm={6} key={ind}>
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
                                    {fact?.title}
                                  </Typography>
                                }
                                secondary={fact?.subTags?.map(
                                  (tag: string, i: number) => (
                                    <Typography
                                      key={i}
                                      paragraph
                                      sx={{
                                        fontSize: '0.875rem',
                                        color: '#666',
                                        mb: '2px',
                                      }}
                                    >
                                      ({tag})
                                    </Typography>
                                  )
                                )}
                                //   <Typography
                                //     paragraph
                                //     sx={{
                                //       fontSize: '0.875rem',
                                //       color: '#666',
                                //       mb: '2px',
                                //     }}
                                //   >
                                //     (20 minutes to reach the hotel)
                                //   </Typography>,
                                //   <Typography
                                //     paragraph
                                //     sx={{
                                //       fontSize: '0.875rem',
                                //       color: '#666',
                                //       mb: '2px',
                                //     }}
                                //   >
                                //     (20 minutes to reach the hotel)
                                //   </Typography>,
                                // ]}
                              />
                            </ListItem>
                          </Grid>
                        ))}
                      </Grid>
                    )
                  }
                  return null
                })}
              </Paper>
            </Grid>
          </Grid>
        </Box>
        {recomendations?.length > 0 && (
          <Box sx={{ mb: '40px' }}>
            <SlugSlider
              heading="OTHER RECOMMENDATIONS"
              button="none"
              iconShow="flex"
              radius="20px"
              bottomradius="0 0 20px 20px"
              recomendations={recomendations}
            />
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  )
}
