/* eslint-disable react/no-array-index-key */

import { Container, Box, Typography, Link, Button } from '@mui/material'
import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'

import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import IndividualSlider from '@/components/IndividualSlider'
import Footer from '@/components/Footer'
import OurCollection from '@/components/OurCollection'
import QuickFacts from '@/components/QuickFacts'
import ResortServices from '@/components/ResortServices'
import SocialSharer from '@/components/SocialSharer'
import DropdownButton from '@/components/DropdownButton'
import logo from '../../../../public/Images/logo.png'

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
        <BreadCrumb />
        <DropdownButton />
      </Container>
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
        }}
      >
        <Image
          src={logo}
          alt="logo"
          style={{ width: '200px', height: '200px' }}
        />
        <IndividualSlider />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 'auto',
            mt: '40px',
            color: 'var(--white)',
          }}
        >
          <Typography sx={{ fontSize: '24px' }}>
            One n Only Reethi Rah{' '}
          </Typography>
        </Box>
        <Box
          sx={{ textAlign: 'left', fontSize: '10px', color: 'var(--brown)' }}
        >
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
        </Box>
        <Typography
          sx={{ fontSize: '20px', display: { xs: 'none', ms: 'block' } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            mt: '20px',
            display: { xs: 'none', ms: 'block' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            mt: '20px',
            display: { xs: 'none', ms: 'block' },
          }}
        >
          <Link
            sx={{
              width: '100%',
              textDecoration: 'none',
              color: 'Var(--brown)',
              mx: 'auto',
              fontSize: '24px',
            }}
            href="/#"
          >
            MORE
          </Link>
        </Box>
        <QuickFacts />
        <ResortServices />
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 600,
            my: '40px',
            textAlign: 'center',
          }}
        >
          2- Presidential Room (Second Image’s title)
        </Typography>
        <IndividualSlider />
        <Typography
          sx={{ fontSize: '20px', mt: '20px', px: { xs: '16px', md: '120px' } }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            className="menuBtn"
            sx={{
              bgcolor: 'var(--brown)',
              color: 'white',
              px: '50px',
              mt: '40px',
            }}
            title="Enquire"
          >
            ENQUIRE
          </Button>
        </Box>
        <SocialSharer />
        <OurCollection
          heading="OTHER RECOMMENDATIONS"
          button="none"
          iconShow="flex"
          radius="30px"
          bottomradius="0 0 30px  30px"
        />
      </Container>
      <Footer />
    </Box>
  )
}
