'use client'

import { Box, Container, Link, Typography } from '@mui/material'

// import Diversity2Icon from '@mui/icons-material/Diversity2'
import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded'
import Image from 'next/image'
import { styled } from '@mui/system'

const StyledImage = styled(Image)({
  padding: 1,
})

export default function Footer() {
  return (
    <Container
      sx={{
        maxWidth: '100% !important',
        px: { xs: '24px', md: '120px' },
        bgcolor: 'var(--brown)',
        color: 'white',
        mt: '60px',
      }}
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
          justifyContent: 'space-between',
          textAlign: { xs: 'center', md: 'left' },
          pt: '60px',
        }}
      >
        <StyledImage
          src="/Images/lovely-maldives-logo-white.png"
          height={31}
          width={40}
          alt="Logo Footer"
          sx={{
            display: { xs: 'block', md: 'none' },
            mx: 'auto',
          }}
        />
        <Box
          sx={{
            mt: { xs: '30px', md: '0px' },
            borderBottom: { xs: '1px solid white', md: 'none' },
            pb: 5,
          }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
              display: { xs: 'none', md: 'block' },
            }}
          >
            Links
          </Typography>

          <Link
            href="/about-maldives"
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'block',
              mt: '10px',
              fontSize: '16px',
            }}
          >
            About Maldives
          </Link>
          <Link
            href="/all-resorts"
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'block',
              mt: '10px',
              fontSize: '16px',
            }}
          >
            Hotels
          </Link>
          <Link
            href="/"
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'block',
              mt: '10px',
              fontSize: '16px',
            }}
          >
            About
          </Link>
          <Link
            href="/blogs"
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'block',
              mt: '10px',
              fontSize: '16px',
            }}
          >
            Blog
          </Link>
          <Link
            href="/faqs"
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'block',
              mt: '10px',
              fontSize: '16px',
            }}
          >
            FAQs
          </Link>
        </Box>

        <Box sx={{ mt: { xs: '30px', md: '0px' } }}>
          <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>
            Get in touch
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <EmailIcon
              sx={{ display: { xs: 'none', md: 'block' }, fontSize: '20px' }}
            />
            <Link
              href="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                px: '10px',
                fontSize: '16px',
              }}
            >
              Email
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <CallIcon
              sx={{ display: { xs: 'none', md: 'block' }, fontSize: '20px' }}
            />
            <Link
              href="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                px: '10px',
                fontSize: '16px',
              }}
            >
              Contact Number
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <WhatsAppIcon
              sx={{ display: { xs: 'none', md: 'block' }, fontSize: '20px' }}
            />
            <Link
              href="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                px: '10px',
                fontSize: '16px',
              }}
            >
              Whatsapp
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <ContactsRoundedIcon
              sx={{ display: { xs: 'none', md: 'block' }, fontSize: '20px' }}
            />
            <Link
              href="/contact-us"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                px: '10px',
                fontSize: '16px',
              }}
            >
              Contact us
            </Link>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: '30px', md: '0px' } }}>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
              display: { xs: 'none', md: 'block' },
            }}
          >
            Social Media
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <FacebookRoundedIcon style={{ fontSize: '20px' }} />
            <Link
              href="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                px: '10px',
                fontSize: '16px',
              }}
            >
              Messenger
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <XIcon
              sx={{ display: { xs: 'none', md: 'block' }, fontSize: '20px' }}
            />
            <Link
              href="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                px: '10px',
                fontSize: '16px',
              }}
            >
              Twitter
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <InstagramIcon
              sx={{ display: { xs: 'none', md: 'block' }, fontSize: '20px' }}
            />
            <Link
              href="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                px: '10px',
                fontSize: '16px',
              }}
            >
              Instagram
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'space-around',
            mt: '30px',
          }}
        >
          <FacebookRoundedIcon />
          <XIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: { xs: '30px', md: '60px' },
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            borderBottom: { xs: '1px solid white', md: 'none' },
          }}
        >
          <StyledImage
            src="/Images/lovely-maldives-logo-white.png"
            height={31}
            width={40}
            alt="Logo Footer"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Typography
            sx={{ px: { md: '50px' }, textAlign: 'center', mx: '30px' }}
          >
            {' '}
            &copy; 2024 Lovely Maldives. All rights reserved.
          </Typography>
        </Box>
        <Typography sx={{ textAlign: 'center', mt: { xs: '16px', md: '0' } }}>
          Privacy Policy | Terms of use
        </Typography>
      </Box>
    </Container>
  )
}
