/* eslint-disable react/no-array-index-key */

'use client'

import { Container, Box, Typography, Link, Button } from '@mui/material'
import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import DirectionsSubwayFilledOutlinedIcon from '@mui/icons-material/DirectionsSubwayFilledOutlined'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EventNoteIcon from '@mui/icons-material/EventNote'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import TranslateIcon from '@mui/icons-material/Translate'
import WifiIcon from '@mui/icons-material/Wifi'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import LightOutlinedIcon from '@mui/icons-material/LightOutlined'
import LightIcon from '@mui/icons-material/Light'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import IndividualSlider from '@/components/IndividualSlider'
import logo from '../../../public/Images/logo.png'
import Footer from '../../components/Footer'
import OurCollection from '../../components/OurCollection'

export const data = [
  {
    title: '30km from airport (20 minutes to reach the hotel)',
    icon: <DirectionsSubwayFilledOutlinedIcon />,
  },
  {
    title: 'Seaplane transfer and Speedboat transfer available',
    icon: <LocationOnIcon />,
  },
  {
    title:
      'Check-in time is 12:00pm and Check-out time is 14:00hours. (Early check-in Available)',
    icon: <EventNoteIcon />,
  },
  {
    title: 'Resort has English speaking and French Speaking staff.',
    icon: <TranslateIcon />,
  },
  {
    title:
      'Won best resort awards in South-East Asia 6 times, best Customer Care awards 3 times.',
    icon: <WorkspacePremiumIcon />,
  },
]
export const services = [
  {
    title: 'Internet Access:',
    detail: 'Complementary Wifi ',
    icon: <WifiIcon />,
  },
  {
    title: 'Activities Available:',
    detail: 'Billiards room, TT hall, candle light dinner, shing trip',
    icon: <NoteAltIcon />,
  },
  {
    title: 'Services at Room:',
    detail: 'Room Service, Hair Dryer, Iron, Steamer, Hot water, Bathtub',
    icon: <BedOutlinedIcon />,
  },
  {
    title: 'Dining Options',
    detail: 'Room Service, Hair Dryer, Iron, Steamer, Hot water, Bathtub',
    icon: <LightOutlinedIcon />,
  },
  {
    title: 'Other Services',
    detail: 'Spa, Souvenir Shop, Honeymoon Celebration',
    icon: <LightIcon />,
  },
]

export default function page() {
  return (
    <>
      <Header />
      <Container sx={{ color: 'var(--white)', mt: '60px' }}>
        <BreadCrumb
          linkName2="One and Only Reethi Rah"
          linkName="Resorts"
          path="/resorts"
        />
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
        <Box sx={{ width: { xs: '100%', md: '500px' }, mx: 'auto' }}>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 600, my: '40px', mx: '40px' }}
          >
            QUICK FACTS:
          </Typography>

          {data.map((iconDetail, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', mt: '15px' }}
            >
              {iconDetail.icon}
              <Typography sx={{ width: '200px', mx: 2 }}>
                {iconDetail.title}
              </Typography>
            </Box>
          ))}
          <hr style={{ marginTop: '20px' }} />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '500px' }, mx: 'auto' }}>
          <Typography
            sx={{ fontSize: '20px', fontWeight: 600, my: '40px', mx: '40px' }}
          >
            HOTEL AMINETIES:{' '}
          </Typography>

          {services.map((iconDetail, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'center', mt: '15px' }}
            >
              {iconDetail.icon}
              <Box>
                <Typography
                  sx={{
                    width: '200px',
                    mx: 2,
                    fontSize: '18px',
                    fontWeight: 600,
                  }}
                >
                  {iconDetail.title}
                </Typography>
                <Typography sx={{ width: '200px', mx: 2, mt: 1 }}>
                  {iconDetail.detail}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '300px',
            mx: 'auto',
            color: 'black',
            mt: '60px',
          }}
        >
          <Typography>Share:</Typography>
          <FacebookRoundedIcon />
          <TwitterIcon />
          <EmailIcon />
          <WhatsAppIcon />
        </Box>
        <OurCollection
          heading="OTHER RECOMMENDATIONS"
          button="none"
          iconShow="flex"
          radius="30px"
          bottomradius="0 0 30px  30px"
        />
      </Container>
      <Footer />
    </>
  )
}
