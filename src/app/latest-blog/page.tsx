/* eslint-disable react/no-array-index-key */

'use client'

import { Box, Container } from '@mui/material'
import { useMenuStore } from '@/providers/menu-store-provider'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import BlogHeader from '../../components/BlogHeader'
import LatestBlogs from '@/components/LatestBlogs'

export default function LatestBlog() {
  const { isOpen } = useMenuStore((state) => state)

  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' }, px: 0 }}>
      <Header />
      <Box
        sx={{
          background: 'black',
          position: { xs: 'unset', md: 'fixed' },
          top: { xs: '0', md: '168px' },
          boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
          // py: '20px',
          width: '100%',
          // px: '100px',
          zIndex: 999,
          // opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0px)' : 'translateY(-140px)',
          transition: 'opacity 0.4s, transform 0.4s',
          display: 'block',
          flexDirection: 'row',
          overflow: 'hidden',
          mt: { md: '0', xs: '135px' },
          gap: { md: '18px', xs: '0' },
          borderTop: '1px solid lightgray',
        }}
      >
        <BlogHeader />
      </Box>
      <Container
        sx={{
          // maxWidth: '80%',
          px: 0,
          margin: 'auto',
          mt: '280px',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >
        <LatestBlogs />
      </Container>
      <Footer />
    </Box>
  )
}
