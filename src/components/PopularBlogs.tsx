/* eslint-disable react/no-array-index-key */

'use client'

import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import BlogSlider from '@/components/BlogSlider'
import blog from '../../public/Images/landingTree.jpg'

export const popularBlogs = [
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-1',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-2',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-3',
  },
]
export default function PopularBlogs(props: any) {
  const { blogs } = props
  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' } }}>
      <Box>
        <Typography
          sx={{
            fontSize: '35px',
            textAlign: 'center',
            color: 'var(--white)',
            mt: '60px',
            textTransform: 'uppercase',
          }}
        >
          {blogs?.category}
        </Typography>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <BlogSlider />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mt: { xs: '30px', md: '40px' },
            gap: { xs: '10px', md: '20px' },
            mb: { xs: '30px', md: '0' },
            px: 2.5,
          }}
        >
          {blogs?.blogs.map((popularBlog: any, index: number) => (
            <Box
              key={index}
              component={Link}
              href={`/blogs/${popularBlog?.slug}`}
              sx={{
                width: { xs: 'calc(100%)', md: 'calc(33.3% - 14px)' },
                borderRadius: '20px',
                bgcolor: 'var(--brown)',
                boxSizing: 'border-box',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px .5px 4px 0px',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '20px 20px 0 0px',
                  height: '200px',
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={popularBlog?.coverImage}
                  alt="blog"
                  width={300}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  // left: { xs: '0', md: '240.5px' },
                  borderRadius: '20px 20px 0 0',
                }}
              />
              <Box
                sx={{
                  // mt: '20px',
                  color: 'white',
                  bgcolor: 'var(--brown)',
                  pb: '20px',
                  px: { xs: '20px', md: '20px' },
                  borderRadius: '0 0 20px 20px',
                }}
              >
                <Typography sx={{ fontSize: '20px', mt: '20px' }}>
                  {popularBlog.title}
                </Typography>
                {/* <Typography sx={{ fontSize: '24px', mt: '20px' }}>
                  {popularBlog.description}
                </Typography> */}
                <Typography sx={{ fontSize: '14px', mt: '20px' }}>
                  {popularBlog.date || '12 February, 2024'}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
