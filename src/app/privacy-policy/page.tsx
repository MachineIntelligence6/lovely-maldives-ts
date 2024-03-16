'use client'

import { Box, Container, Typography } from '@mui/material'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import DropdownButton from '@/components/DropdownButton'
import Markdown from '@/components/Markdown'
import privacy from '@/md/privacy.md'

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ pt: { xs: '0px', md: '190px' } }}>
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
        <DropdownButton />
      </Container>
      <Container
        sx={{
          mt: { xs: '60px', md: '100px' },
          maxWidth: '80%',
          px: 0,
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
            Privacy Policy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
