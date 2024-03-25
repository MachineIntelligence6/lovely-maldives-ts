/* eslint-disable react/no-array-index-key */

'use client'

import { Box, Container } from '@mui/material'
import PopularBlogs from '@/components/PopularBlogs'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import BlogHeader from '../../components/BlogHeader'

export default function PopularBlogPage() {
  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' } }}>
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
        <PopularBlogs />
      </Container>
      <Footer />
    </Box>
  )
}
