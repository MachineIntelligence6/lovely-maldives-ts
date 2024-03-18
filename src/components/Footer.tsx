'use client'

import { Box, Container, Typography } from '@mui/material'

import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded'
import Image from 'next/image'
import { styled } from '@mui/system'
import Link from 'next/link'

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
          justifyContent: 'space-around',
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
              fontSize: '20px',
              fontWeight: '600',
              display: { xs: 'none', md: 'block' },
              mb: '28px',
            }}
          >
            Links
          </Typography>

          <Box
            component={Link}
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
          </Box>
          <Box
            component={Link}
            href="resorts"
            sx={{
              color: 'white',
              textDecoration: 'none',
              display: 'block',
              mt: '10px',
              fontSize: '16px',
            }}
          >
            Hotels
          </Box>
          <Box
            component={Link}
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
          </Box>
          <Box
            component={Link}
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
          </Box>
          <Box
            component={Link}
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
          </Box>
        </Box>

        <Box sx={{ mt: { xs: '30px', md: '0px' } }}>
          <Typography sx={{ fontSize: '20px', fontWeight: '600', mb: '28px' }}>
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
            <Box
              component={Link}
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
            </Box>
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
            <Box
              component={Link}
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
            </Box>
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
            <Box
              component={Link}
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
            </Box>
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
            <Box
              component={Link}
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
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: { xs: '30px', md: '0px' } }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '600',
              display: { xs: 'none', md: 'block' },
              mb: '28px',
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
            <Box
              component={Link}
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
            </Box>
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
            <Box
              component={Link}
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
            </Box>
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
            <Box
              component={Link}
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
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            mt: '30px',
            gap: '20px',
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
          justifyContent: 'space-around',
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
            pb: { xs: 2.5, md: 0 },
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
          <Typography sx={{ px: { md: '50px' }, textAlign: 'center' }}>
            {' '}
            &copy; 2024 Lovely Maldives. All rights reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component={Link}
            href="/terms-of-use"
            sx={{
              textAlign: 'center',
              textDecoration: 'none',
              mt: { xs: '16px', md: '0', color: 'white' },
            }}
          >
            Terms of use
          </Box>
          <Typography sx={{ mt: { xs: '16px', md: '0' } }}>|</Typography>
          <Box
            component={Link}
            href="/privacy-policy"
            sx={{
              textAlign: 'center',
              textDecoration: 'none',
              mt: { xs: '16px', md: '0', color: 'white' },
            }}
          >
            Privacy Policy
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
