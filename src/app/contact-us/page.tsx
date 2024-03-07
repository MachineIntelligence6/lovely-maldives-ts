'use client'

import { Container, Box, Typography, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Diversity2Icon from '@mui/icons-material/Diversity2'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

function page() {
  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' } }}>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          color: 'var(--white)',
        }}
      >
        <BreadCrumb linkName2="Contact us" linkName="Home" path="/contact-us" />
        <Typography
          sx={{
            fontSize: { xs: '35px', md: '50px' },
            textAlign: 'center',
            mt: '60px',
          }}
        >
          CONTACT US
        </Typography>
        <Typography
          sx={{
            fontSize: '25px',
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
        <Typography sx={{ fontSize: '25px', textAlign: 'center', mt: '40px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          asperiores quas autem. Repellat est nam tempora adipisci ab. Error,
          nam?
        </Typography>
        <Typography
          sx={{
            fontSize: '25px',
            fontWeight: 600,
            textAlign: 'center',
            mt: '20px',
          }}
        >
          Call (+9607694545)
        </Typography>
        <Typography sx={{ fontSize: '25px', textAlign: 'center', mt: '40px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          asperiores quas autem. Repellat est nam tempora adipisci ab. Error,
          nam?
        </Typography>
        <Typography
          sx={{
            fontSize: '25px',
            fontWeight: 600,
            textAlign: 'center',
            width: '300px',
            mx: 'auto',
            mt: '20px',
          }}
        >
          Address Name, Road, 20021, Sample, City Name, Hulhumale’ Maldives
        </Typography>
        <Typography sx={{ fontSize: '25px', textAlign: 'center', mt: '40px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Send us an
          email here.
        </Typography>
      </Container>
      <ContactForm />
      <Box
        sx={{
          mt: { xs: '60px', md: '120px' },
          width: { xs: '90%', md: '55%' },
          height: { xs: '250px', md: '350px' },
          mx: 'auto',
          borderRadius: '25px',
          position: 'relative',
          bgcolor: 'var(--blue)',
          textAlign: 'center',
        }}
      >
        <Diversity2Icon
          sx={{ color: 'white', mt: { xs: '7%', md: '10%' }, fontSize: '45px' }}
        />
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '16px', md: '24px' },
            fontWeight: 200,
            textAlign: 'center',
            mt: '20px',
            px: 4,
          }}
        >
          Subscribe to get the latest news and offers by Lovely Maldives
        </Typography>
        <Box>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter email adress"
            multiline
            className="input"
            // maxRows={10}
            sx={{
              bgcolor: 'white',
              mt: '20px',
              borderRadius: '10px',
              width: '60%',
              position: 'relative',
            }}
          />
          <SendIcon
            sx={{
              position: 'absolute',
              top: { xs: '72%', md: '65%' },
              right: '22%',
              color: 'var(--blue)',
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default page
