'use client'

import { Box, Link } from '@mui/material'

export default function BlogHeader() {
  return (
    <Box sx={{ mt: { xs: '100px', md: '0' } }}>
      <Box
        className="blogScroll"
        sx={{ color: 'white', width: '100%', overflowX: 'auto' }}
      >
        <Box
          // className="blogScroll"
          sx={{
            bgcolor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '1920px',
            overflowX: 'auto',
          }}
        >
          <Link
            sx={{ color: 'white', py: 2, textDecoration: 'none' }}
            href="/blogs"
          >
            All Blogs
          </Link>
          <Link
            sx={{ color: 'white', py: 2, textDecoration: 'none' }}
            href="/latest-blog"
          >
            Latest Blog
          </Link>
          <Link
            sx={{ color: 'white', py: 2, textDecoration: 'none' }}
            href="/popular-blog"
          >
            Popular Blog
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Blog Title
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Fade
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Pre-Opening
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Blog Title
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Fade
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Pre-Opening
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Blog Title
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Fade
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Pre-Opening
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Blog Title
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Fade
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Pre-Opening
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
