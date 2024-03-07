'use client'

import { Box, Container, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Header from '@/components/Header'
import OurCollection from '@/components/OurCollection'
import Footer from '@/components/Footer'
import ResortsGallery from '@/components/Gallery'
import BreadCrumb from '@/components/BreadCrumb'
import DropdownButton from '@/components/DropdownButton'
// icons

export default function page() {
  return (
    <Box sx={{ pt: { xs: '0px', md: '190px' } }}>
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
        sx={{ maxWidth: '100% !important', mt: { xs: '60px', md: '100px' } }}
      >
        <Box sx={{ px: { xs: '16px', md: '120px' }, color: 'var(--white)' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '26px', md: '50px' },
              textAlign: 'center',
              mt: '120px',
            }}
          >
            ALL RESORTS
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '40px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '300px',
                mx: 'auto',
                color: 'black',
              }}
            >
              <Typography>Share:</Typography>
              <FacebookRoundedIcon />
              <TwitterIcon />
              <EmailIcon />
              <WhatsAppIcon />
            </Box>
          </Box>
          <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography
              sx={{
                mt: '60px',
                fontSize: '24px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              There are over 150+ resorts in the Maldives. Here at Lovely
              Maldives, we are curating one of the nest resorts in the Maldives.
            </Typography>
            <Typography
              sx={{
                mt: '10px',
                fontSize: '24px',
                display: { xs: 'none', md: 'block' },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Box>
        </Box>
        <OurCollection
          heading="TOP FIVE LUXURY RESORTS"
          button="none"
          iconShow="flex"
          radius="30px"
          bottomradius="0 0 30px  30px"
        />
        <Box>
          <ResortsGallery />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
