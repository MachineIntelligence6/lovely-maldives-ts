'use client'

import { Container, Box, Typography } from '@mui/material'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import MailBox from '@/components/MailBox'

function page() {
  return (
    <Box sx={{ mt: { md: '180px', xs: '100px' } }}>
      <Header />
      <Container sx={{ maxWidth: { xs: '90%', md: '90%' } }}>
        <BreadCrumb />
      </Container>
      <Container
        sx={{
          maxWidth: '80%',
          px: 0,
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
          color: 'var(--white)',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '24px', md: '35px' },
            textAlign: 'center',
            mt: '60px',
          }}
        >
          CONTACT US
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            textAlign: 'center',
            mt: '60px',
            display: { xs: 'none', md: 'block' },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est Century Gothic.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            textAlign: 'center',
            mt: '40px',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          asperiores quas autem. Repellat est nam tempora adipisci ab. Error,
          nam?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            fontWeight: 600,
            textAlign: 'center',
            mt: { xs: '16px', md: '20px' },
          }}
        >
          Call (+9607694545)
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            textAlign: 'center',
            mt: '40px',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          asperiores quas autem. Repellat est nam tempora adipisci ab. Error,
          nam?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            fontWeight: 600,
            textAlign: 'center',
            width: '300px',
            mx: 'auto',
            mt: { xs: '16px', md: '20px' },
          }}
        >
          Address Name, Road, 20021, Sample, City Name, Hulhumale’ Maldives
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            textAlign: 'center',
            mt: '40px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Send us an
          email here.
        </Typography>
      </Container>
      <ContactForm />
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}

export default page
