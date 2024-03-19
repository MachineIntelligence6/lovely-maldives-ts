import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Typography from '@mui/material/Typography'

import Box from '@mui/system/Box'
// import OurServices from '@/components/OurServices'
// import Banner from '@/components/Banner'
// import TopBrands from '@/components/TopBrands'
import dynamic from 'next/dynamic'
import Footer from '@/components/Footer'
// import About from '@/components/About'
// import Explore from '@/components/Explore'
// import OurCollection from '@/components/OurCollection'

import Header from '@/components/Header'
// import SidePalmTree from '@/components/SidePalmTree'

const SidePalmTree = dynamic(() => import('@/components/SidePalmTree'))
const OurCollection = dynamic(() => import('@/components/OurCollection'))
const Explore = dynamic(() => import('@/components/Explore'))
const About = dynamic(() => import('@/components/About'))
const TopBrands = dynamic(() => import('@/components/TopBrands'))
const Banner = dynamic(() => import('@/components/Banner'))
const OurServices = dynamic(() => import('@/components/OurServices'))

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Box
        sx={{
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
        <SidePalmTree />
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
