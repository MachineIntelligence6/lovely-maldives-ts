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
        <Box
          sx={{
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '14px', md: '16px' },
              textAlign: 'center',
              px: { xs: '20px', md: '0' },
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quos
            quae tempore consequatur. Commodi labore corrupti harum omnis
            consequatur deserunt debitis ipsam excepturi quod repellendus nobis
            tempore, laudantium reprehenderit fuga laborum sed officia libero
            sunt assumenda? Reprehenderit cumque necessitatibus vel maiores
            dignissimos! Consectetur voluptatibus quae sapiente.
          </Typography>
        </Box>
        <TopFiveLuxuryResorts
          heading="TOP FIVE LUXURY RESORTS          "
          button="none"
          iconShow="flex"
          radius="30px"
          bottomradius="0 0 30px  30px"
        />

        <Box sx={{ my: { xs: '60px', md: '120px' } }}>
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
                  <Image
                    src={collectionImg}
                    alt="Resort item"
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '30px',
                    }}
                  />
                  <Box
                    sx={{
                      width: '100%',
                      height: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      position: 'absolute',
                      color: 'white',
                      bottom: '0%',
                      left: '0',
                      fontSize: '12px',
                      fontWeight: '200',
                      zIndex: '99',
                      bgcolor: 'var(--darkBrown)',
                      borderRadius: '0 0 30px  30px',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 'auto',
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
            className="buttonHover"
            component={Link}
            href="/all-resorts"
            sx={{
              bgcolor: 'var(--brown)',
              color: 'white',
              width: 'auto',
              px: '80px',
              py: { xs: 1, md: 2 },
              textAlign: 'center',
              fontSize: '24px',
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
