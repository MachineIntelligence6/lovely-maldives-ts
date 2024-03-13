'use client'

import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Typography from '@mui/material/Typography'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import OurServices from '@/components/OurServices'
import Banner from '@/components/Banner'
import TopBrands from '@/components/TopBrands'
import Footer from '@/components/Footer'
import About from '../components/About'
import Explore from '../components/Explore'
import OurCollection from '../components/OurCollection'

import Header from '../components/Header'

export default function Home() {
  const theme = useTheme()
  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <Header />
      <Banner />
      <Box sx={{ paddingTop: '10px' }}>
        <Box
          sx={{
            position: 'relative',
            mx: 'auto',
            mt: { xs: '60px', md: '120px' },
            zIndex: '1',
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
            ABOUT MALDIVES
          </Typography>
          <Typography
            sx={{
              textAlign: 'justify',
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '30px', md: '60px' },
              width: { xs: '100%', md: '750px' },
              mx: 'auto',
            }}
          >
            Maldives is a small country located in the Indian Ocean consisting
            of 1250 islands and 62 atolls. Lorem ipsum Lorem ipsum dolor sit
            amet, Maldives is a small country located in the Indian Ocean
            consisting of 1250 island sand 62 at olls.
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
              href="/"
              className="readmore"
              style={{
                paddingTop: '5px',
                textDecoration: 'none',
                color: 'var(--white)',
              }}
            >
              Read More{' '}
            </Link>
            <KeyboardArrowRightIcon
              sx={{
                fontSize: { xs: '24px', md: '30px' },
                mt: { xs: '6px', md: '7px' },
              }}
            />
          </Box>
        </Box>
        {/* <Image
          src={sidetree}
          alt="sidetree"
          className="sideTree"
          style={{
            position: "absolute",
            width: "auto",
            top: "30%",
            zIndex: "-1",
            objectFit: "cover",
          }}
        /> */}
        <Image
          src="/Images/palm.png"
          alt="Palm tree"
          width={lessThanMd ? 180 : 350}
          height={lessThanMd ? 180 : 350}
          className="rightPalm"
          style={{
            position: 'absolute',
            top: lessThanMd ? '141%' : '132%',
            right: 0,
            zIndex: 99,
          }}
        />
        <OurServices />
      </Box>
      <About />
      <Explore />
      <OurCollection
        heading="Our Collection"
        button="block"
        iconShow="none"
        radius="0"
        bottomradius="0"
      />
      <TopBrands />
      <Footer />
    </>
  )
}
