/* eslint-disable react/no-array-index-key */

import { Container, Box, Typography, Grid, Button } from '@mui/material'
import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import BoltIcon from '@mui/icons-material/Bolt'
import Link from 'next/link'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopFiveLuxuryResorts from '@/components/TopFiveLuxuryResorts'

import FilterTray from '@/components/FilterTray'
import SocialSharer from '@/components/SocialSharer'
import collectionImg from '../../../public/Images/collectionImg.jpg'

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
        <FilterTray />
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
            mt: { xs: '30px', md: '40px' },
            color: 'var(--white)',
            textAlign: 'center',
            fontSize: { xs: '22px', md: '30px' },
            fontWeight: 400,
          }}
        >
          ALL RESORTS
        </Typography>
        <Box sx={{ my: { xs: '20px', md: '30px' } }}>
          <SocialSharer />
        </Box>
        <Box
          sx={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: { xs: 'block', md: 'none' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '14px', md: '16px' },
              px: { xs: '20px', md: '0' },
            }}
          >
            There are over 150+ resorts in the Maldives. Here at Lovely
            Maldives, we are curating one of the nest resorts in the Maldives.
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '14px', md: '16px' },
              px: { xs: '20px', md: '0' },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '14px', md: '22px' },
              px: { xs: '20px', md: '0' },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est Century Gothic
          </Typography>
        </Box>
        <Box>
          <TopFiveLuxuryResorts
            heading="TOP FIVE LUXURY RESORTS"
            button="none"
            iconShow="flex"
            radius="20px"
            bottomradius="0 0 20px  20px"
          />
        </Box>
        <Box sx={{ my: { xs: '40px', md: '80px' } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '22px', md: '30px' },
              color: 'var(--white)',
              textAlign: 'center',
              mt: { xs: '60px', md: '120px' },
              textTransform: 'uppercase',
            }}
          >
            OTHER LOVELY RESORTS
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            sx={{ mt: { xs: '30px', md: '40px' } }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Box
                  sx={{
                    position: 'relative',
                  }}
                  key={item}
                >
                  <Box
                    component={Image}
                    src={collectionImg}
                    alt="Resort item"
                    sx={{
                      width: '100%',
                      height: { xs: '300px', md: '400px' },
                      objectFit: 'cover',
                      borderRadius: '20px',
                    }}
                  />
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '40%', md: '30%' },
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'absolute',
                      gap: 1,
                      color: 'white',
                      bottom: '0%',
                      left: '0',
                      fontSize: '12px',
                      fontWeight: '200',
                      zIndex: '99',
                      bgcolor: 'var(--darkBrown)',
                      borderRadius: '0 0 20px  20px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
                        mt: '24px',
                      }}
                    >
                      <Typography sx={{ px: 4, fontSize: '20px' }}>
                        One n Only Reethi Rah{' '}
                      </Typography>
                      <BoltIcon sx={{ display: `flex` }} />
                    </Box>
                    <Box sx={{ textAlign: 'left', fontSize: '10px', px: 4 }}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
          <Button
            component={Link}
            href="/all-resorts"
            sx={{
              bgcolor: 'var(--brown)',
              color: 'white',
              px: { xs: '12px', md: '16px' },
              py: { xs: '6px', md: '8px' },
              textAlign: 'center',
              fontSize: '18px',
              '&:hover': {
                backgroundColor: 'var(--blue) !important',
              },
            }}
            title="All hotels"
          >
            All Hotels
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
