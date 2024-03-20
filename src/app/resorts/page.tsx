import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import dynamic from 'next/dynamic'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'

import FilterTray from '@/components/FilterTray'
import SocialSharer from '@/components/SocialSharer'

const TopFiveLuxuryResorts = dynamic(
  () => import('@/components/TopFiveLuxuryResorts')
)
const ResortsGallery = dynamic(() => import('@/components/ResortsGallery'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function ResortsPage() {
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
        <FilterTray />
      </Container>
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '0px', md: '120px' },
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
        <ResortsGallery />
      </Container>
      <Footer />
    </Box>
  )
}
