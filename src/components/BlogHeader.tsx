'use client'

import { Box, Link } from '@mui/material'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useMenuStore } from '@/providers/menu-store-provider'

export default function BlogHeader() {
  const constraintsRef = useRef(null)
  const isOpen = useMenuStore((state) => state.isOpen)

  return (
    <Box
      sx={{
        background: 'black',
        position: { xs: 'fixed', md: 'fixed' },
        top: { xs: '0', md: '168px' },
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        width: '100%',
        zIndex: 995,
        // opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0px)' : 'translateY(-78px)',
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'block',
        flexDirection: 'row',
        overflow: 'hidden',
        mt: { md: '0', xs: '168px' },
        gap: { md: '18px', xs: '0' },
        borderTop: '1px solid lightgray',
      }}
    >
      {' '}
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
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Blog Title
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Fade
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Pre-Opening
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Blog Title
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Fade
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Pre-Opening
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Blog Title
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Fade
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Pre-Opening
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Blog Title
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Fade
            </Link>
            <Link
              sx={{ color: 'white', py: 2, textDecoration: 'none' }}
              href="/"
            >
              Pre-Opening
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
