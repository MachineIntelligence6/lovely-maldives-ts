'use client'

import { Container, Box, Typography, Paper, Button } from '@mui/material'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'

function AboutUsPage() {
  const [readMore, setReadMore] = useState(false)

  const showExtraContent = () => {
    setReadMore(!readMore)
  }
  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' } }}>
      <Header />
      <About />
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
                mb: '30px',
              }}
              aria-label="More"
              variant="text"
              onClick={showExtraContent}
            >
              Read More
            </Button>
          )}
        </Paper>
        {readMore && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              width: '100%',
              position: 'relative',
              mb: { xs: '30px', md: '0' },
            }}
          >
            <Box sx={{ mt: { xs: '30px', md: '60px' }, color: 'var(--white)' }}>
              <Typography sx={{ mt: '30px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography sx={{ mt: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography sx={{ mt: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography sx={{ mt: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
      <Footer />
    </Box>
  )
}

export default AboutUsPage
