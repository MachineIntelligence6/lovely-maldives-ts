/* eslint-disable react/no-array-index-key */

'use client'

import { Box, Container } from '@mui/material'
// import { useMenuStore } from '@/providers/menu-store-provider'
import LatestBlogs from '@/components/LatestBlogs'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import BlogHeader from '../../components/BlogHeader'

export default function LatestBlog() {
  // const { isOpen } = useMenuStore((state) => state)

  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' }, px: 0 }}>
      <Header />

      <BlogHeader />
      <Container
        sx={{
          // maxWidth: '80%',
          px: 0,
          margin: 'auto',
          mt: { xs: '180px', md: '280px' },
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
