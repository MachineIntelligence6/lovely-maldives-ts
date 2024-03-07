'use client'

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material'
import Image from 'next/image'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import SendIcon from '@mui/icons-material/Send'
import Diversity2Icon from '@mui/icons-material/Diversity2'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import article from '../../../public/Images/main.jpg'
import blog from '../../../public/Images/landingTree.jpg'

export default function page() {
  return (
    <>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          mt: { xs: '120px', md: '60px' },
        }}
      >
        <BreadCrumb
          linkName="Home"
          linkName2="About Maldives"
          path="/about-maldives"
        />
        <Typography
          sx={{
            fontSize: { xs: '35px', md: '50px' },
            color: 'var(--white)',
            textAlign: 'center',
            mt: '60px',
          }}
        >
          ABOUT MALDIVES
        </Typography>
        <Box sx={{ width: '100%', textAlign: 'center', mt: '60px' }}>
          <Image
            src={blog}
            alt="blog"
            className="articleBlog"
            style={{
              height: '400px',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
          <Typography
            sx={{ pt: '40px', color: 'var(--white)', fontSize: '20px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Box>
        <Box sx={{ mt: '60px', color: 'var(--white)' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography sx={{ mt: '20px', display: { xs: 'none', md: 'block' } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography sx={{ mt: '40px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography sx={{ mt: '20px', display: { xs: 'none', md: 'block' } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box sx={{ width: '100%', textAlign: 'center', mt: '60px' }}>
          <Image
            src={article}
            alt="blog"
            className="articleImg"
            style={{
              height: '300px',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
          <Typography
            sx={{ mt: '40px', color: 'var(--white)', fontSize: '20px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Box>
        <Box sx={{ mt: '60px', color: 'var(--white)' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography sx={{ mt: '40px', fontWeight: 600 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </Typography>
          <Typography sx={{ mt: '40px', display: { xs: 'none', md: 'block' } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography sx={{ mt: '20px', display: { xs: 'none', md: 'block' } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            mx: 'auto',
            width: '300px',
            color: 'black',
            mt: '40px',
          }}
        >
          <Typography>Share Article:</Typography>
          <FacebookRoundedIcon />
          <TwitterIcon />
          <EmailIcon />
          <WhatsAppIcon />
        </Box>
        <Box sx={{ textAlign: 'center', mt: '60px' }}>
          <Button
            className="buttonHover"
            sx={{ bgcolor: 'var(--brown)', px: '30px', py: 2 }}
            title="Back to home"
          >
            <Link href="/" sx={{ color: 'white', textDecoration: 'none' }}>
              BACK TO HOME
            </Link>
          </Button>
        </Box>
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
            sx={{
              color: 'white',
              mt: { xs: '7%', md: '10%' },
              fontSize: '45px',
            }}
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
                top: { xs: '70%', md: '71%' },
                right: '22%',
                color: 'var(--blue)',
              }}
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
