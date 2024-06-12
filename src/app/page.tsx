/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Typography from '@mui/material/Typography'
import axios from 'axios'

import Box from '@mui/system/Box'
import dynamic from 'next/dynamic'
// import Header from '@/components/Header'
import apiClient from '@/services/apiClient'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { getHomeBgRequest } from '@/utils/api-requests/home.request'

const Footer = dynamic(() => import('@/components/Footer'))
const SidePalmTree = dynamic(() => import('@/components/SidePalmTree'))
const OurCollection = dynamic(() => import('@/components/OurCollection'))
const Explore = dynamic(() => import('@/components/Explore'))
const About = dynamic(() => import('@/components/About'))
const TopBrands = dynamic(() => import('@/components/TopBrands'))
const Banner = dynamic(() => import('@/components/Banner'))
const OurServices = dynamic(() => import('@/components/OurServices'))

const Header = React.lazy(() => import('@/components/Header'))

// export const getHomeData = async () => {
//   try {
//     const response = await apiClient.get('/home')
//     return response.data
//   } catch (error: any) {
//     throw new Error(error)
//   }
// }

export default function Home() {
  // const data = await getHomeData()
  // const aboutMaldives = homeData?.aboutMaldivesShort
  const [loading, setLoading] = useState(false)
  const [homeData, setHomeData] = useState('' as any)

  const getHomeData = async () => {
    try {
      setLoading(true)
      const res = await axios.get('/api/home')
      const data = res?.data
      setLoading(false)
      if (res?.status === 200) {
        setHomeData(data?.data)
        localStorage.setItem('home', JSON.stringify(data?.data))
        localStorage.setItem(
          'headerData',
          JSON.stringify(data?.data?.header?.[0])
        )
      } else {
        // alert('Error occured while fetching about maldives data.')
        console.log('response about maldives', res)
      }
    } catch (error: any) {
      setLoading(false)
      console.log('error ', error)
    }
  }

  const getHomeBgData = async () => {
    try {
      const res = await getHomeBgRequest()
      const data = res?.data?.data
      if (res?.status === 200) {
        localStorage.setItem('homeBgId', JSON.stringify(data?.id))
      } else {
        console.log('response homebg ', res)
      }
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getHomeData()
    getHomeBgData()
  }, [])

  return (
    <Suspense fallback={<CustomLoader />}>
      {loading && <CustomLoader />}
      <Header />
      <Banner bannerData={homeData} />
      <Box
        sx={{
          position: 'relative',
          paddingTop: '10px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            mx: 'auto',
            mt: { xs: '60px', md: '120px' },
            zIndex: 1,
            color: 'var(--white)',
            px: { xs: '20px', md: '0px' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'var(--white)',
              textAlign: 'center',
              fontSize: { xs: '22px', md: '30px' },
              fontWeight: 400,
            }}
          >
            {homeData?.aboutMaldivesShort?.[0]?.title}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              textAlign: 'justify',
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '30px', md: '60px' },
              width: { xs: '100%', md: '750px' },
              mx: 'auto',
              fontFamily: 'century-gothic',
            }}
            dangerouslySetInnerHTML={{
              __html: homeData?.aboutMaldivesShort?.[0]?.description,
            }}
          >
            {/* Maldives is a small country located in the Indian Ocean consisting
            of 1250 islands and 62 atolls. Lorem ipsum Lorem ipsum dolor sit
            amet, Maldives is a small country located in the Indian Ocean
            consisting of 1250 island sand 62 at olls. */}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: { xs: '30px', md: '60px' },
              fontWeight: 400,
            }}
          >
            <Link
              href={homeData?.aboutMaldivesShort?.[0]?.link || '/'}
              className="readmore"
              style={{
                paddingTop: '5px',
                textDecoration: 'none',
                color: 'var(--white)',
                fontWeight: 'bold',
              }}
            >
              Read More
            </Link>
            <KeyboardArrowRightIcon
              sx={{
                fontSize: { xs: '24px', md: '30px' },
                fontWeight: 'bold',
                mt: '4px',
              }}
            />
          </Box>
        </Box>
        <SidePalmTree data={homeData?.sideImage?.[0]} />
        <OurServices services={homeData?.services?.[0]} />
      </Box>
      <About data={homeData?.aboutUsShort?.[0]} />
      <Explore wonders={homeData?.wonders?.[0]} />
      <OurCollection
        heading={homeData?.collections?.[0]?.title}
        button="block"
        iconShow="none"
        radius="0"
        bottomradius="0"
        collections={homeData?.collections?.[0]}
      />
      <TopBrands
        brands={homeData?.brands?.[0]}
        socialLinkSection={homeData?.socialLinkSection?.[0]}
      />
      <Footer footerData={homeData?.footer?.[0]} />
    </Suspense>
  )
}
