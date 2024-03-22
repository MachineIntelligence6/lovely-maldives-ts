'use client'

import { Container, Box, Typography, Button, Link, Paper } from '@mui/material'
import Image from 'next/image'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { useState } from 'react'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import MailBox from '@/components/MailBox'
import article from '../../../public/Images/main.jpg'
import blog from '../../../public/Images/landingTree.jpg'

export default function Page() {
  const [readMore, setReadMore] = useState(false)

  const showExtraContent = () => {
    setReadMore(!readMore)
  }
  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' } }}>
      <Header />
      <Container sx={{ maxWidth: { xs: '90%', md: '90%' } }}>
        <BreadCrumb />
      </Container>
      <Container
        sx={{
          maxWidth: { xs: '90%', md: '80%' },
          px: 0,
          mx: { xs: '20px', md: 'auto' },
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '24px', md: '35px' },
            color: 'var(--white)',
            textAlign: 'center',
            mt: '60px',
          }}
        >
          ABOUT MALDIVES
        </Typography>
        <Box
          className="articleBlog"
          sx={{
            // width: '100%',
            textAlign: 'center',
            mt: '60px',
            position: 'relative',
            mx: 'auto',
          }}
        >
          <Image
            src={blog}
            alt="blog"
            className="articleBlog"
            style={{
              width: '100%',
              // height: '400px',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
          <Box
            className="articleBlog"
            sx={{
              width: '100%',
              // height: '400px',
              bgcolor: 'rgba(150,127,93,0.5)',
              position: 'absolute',
              top: '0',
              left: 0,
              borderRadius: '20px',
            }}
          />
        </Box>
        <Typography
          sx={{
            pt: '40px',
            color: 'var(--white)',
            fontSize: '20px',
            width: { xs: '100%', md: '450px' },
            ml: { xs: 'auto', md: '150px' },
            // mx: 'auto',
            textAlign: 'left',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Box sx={{ mt: { xs: '40px', md: '60px' }, color: 'var(--white)' }}>
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
        </Box>
        <Paper
          elevation={0}
          sx={{
            background: 'transparent',
            textAlign: 'center',
            px: { xs: '24px', md: '0px' },
          }}
        >
          {!readMore && (
            <Button
              sx={{
                mt: 5,
                color: 'var(--brown)',
                backgroundColor: 'transparent',
                fontWeight: 600,
                ':hover': {
                  backgroundColor: 'transparent',
                },
                fontSize: '1.4rem',
              }}
              aria-label="More"
              variant="text"
              onClick={showExtraContent}
            >
              More
            </Button>
          )}
        </Paper>
        {readMore && (
          <>
            <Box sx={{ mt: '60px', color: 'var(--white)' }}>
              <Typography sx={{ mt: '40px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography
                sx={{ mt: '20px', display: { xs: 'none', md: 'block' } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
            <Box
              className="articleImg"
              sx={{
                width: '100%',
                textAlign: 'center',
                mt: '60px',
                position: 'relative',
                mx: 'auto',
              }}
            >
              <Image
                src={article}
                alt="blog"
                className="articleImg"
                style={{
                  width: '100%',
                  // height: '300px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
              <Box
                className="articleImg"
                sx={{
                  width: '100%',
                  // height: '300px',
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  left: 0,
                  borderRadius: '20px',
                }}
              />
            </Box>
            <Typography
              sx={{
                mt: '40px',
                color: 'var(--white)',
                fontSize: '20px',
                width: { xs: '100%', md: '450px' },
                // ml: { xs: 'auto', md: '260px' },
                mx: 'auto',
                textAlign: 'left',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Box sx={{ mt: { xs: '40px', md: '60px' }, color: 'var(--white)' }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography sx={{ mt: '40px', fontWeight: 600 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </Typography>
              <Typography
                sx={{ mt: '40px', display: { xs: 'none', md: 'block' } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography
                sx={{ mt: '20px', display: { xs: 'none', md: 'block' } }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </>
        )}
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
            sx={{
              bgcolor: 'var(--brown)',
              px: '30px',
              py: 2,
              '&:hover': {
                backgroundColor: 'var(--blue) !important',
              },
            }}
            aria-label="Back to home"
            title="Back to home"
          >
            <Link href="/" sx={{ color: 'white', textDecoration: 'none' }}>
              BACK TO HOME
            </Link>
          </Button>
        </Box>
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
