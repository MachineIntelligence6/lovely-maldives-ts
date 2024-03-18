'use client'

import { Box, Link } from '@mui/material'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function BlogHeader() {
  const constraintsRef = useRef(null)

  return (
    <Box sx={{ mt: { xs: '100px', md: '0' } }}>
      <Box
        className="blogScroll"
        sx={{ color: 'white', width: '100%', overflowX: 'auto' }}
      >
        <Box
          // className="blogScroll"
        sx={{
          color: 'white',
          width: '100%',
          WebkitOverflowScrolling: 'touch',
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        component={motion.div}
        ref={constraintsRef}
      >
        <Box
          component={motion.div}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.8}
          dragMomentum
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '1920px',
            overflowX: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
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
