/* eslint-disable react/no-array-index-key */
import Diversity2Icon from '@mui/icons-material/Diversity2'

import { Container, Box, Typography } from '@mui/material'
// import Image from 'next/image'

import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
// import IndividualSlider from '@/components/IndividualSlider'
import Footer from '@/components/Footer'
// import OurCollection from '@/components/OurCollection'
// import QuickFacts from '@/components/QuickFacts'
// import ResortServices from '@/components/ResortServices'
// import SocialSharer from '@/components/SocialSharer'
import DropdownButton from '@/components/DropdownButton'
import TopFiveLuxuryResorts from '@/components/TopFiveLuxuryResorts'

export default function page() {
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
        <BreadCrumb linkName2="Resorts" linkName="Home" path="/resorts" />
        <DropdownButton />
      </Container>
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '22px', md: '30px' },
            fontWeight: '400',
            textAlign: 'center',
          }}
        >
          ABOUT US
        </Typography>
        <Box>
          <Box sx={{ textAlign: 'center' }}>
            {/* <Image
                src="/Images/maldivesLogo.png"
                height={60}
                width={100}
                alt="Lovely Maldives"
              /> */}
            <Diversity2Icon
              sx={{
                fontSize: '55px',
                mt: { xs: '30px', md: '60px' },
                color: 'var(--brown)',
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '30px', md: '60px' },
              textAlign: 'justify',
              px: { xs: '20px', md: '0' },
            }}
          >
            Lovely Maldives, a distinguished travel agency from the Maldives
            strives to redene Luxury travel experiences in the Maldives. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
        <TopFiveLuxuryResorts
          heading="TOP FIVE LUXURY RESORTS          "
          button="none"
          iconShow="flex"
          radius="30px"
          bottomradius="0 0 30px  30px"
        />

        {/* <OurCollection
          heading="OTHER RECOMMENDATIONS"
          button="none"
          iconShow="flex"
          radius="30px"
          bottomradius="0 0 30px  30px"
        /> */}
      </Container>
      <Footer />
    </Box>
  )
}
