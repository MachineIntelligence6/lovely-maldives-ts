'use client'

/* eslint-disable react/no-array-index-key */
import Link from 'next/link'
import Image from 'next/image'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { articles } from '@/app/blogs/page'

export default function ArticlesGallery(props: any) {
  const { blogs } = props
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: '2rem',
          mb: 4,
          color: '#666',
          fontWeight: 500,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        RELATED ARTICLES
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          mt: { xs: '30px', md: '40px' },
          gap: { xs: '10px', md: '20px' },
        }}
      >
        {blogs?.map((blogItem: any, index: number) => (
          <Box
            key={index}
            component={Link}
            href={`blogs/${encodeURIComponent(blogItem.title)}`}
            sx={{
              width: { xs: 'calc(100%)', md: 'calc(33.3% - 20px)' },
              borderRadius: '20px',
              bgcolor: 'var(--brown)',
              boxSizing: 'border-box',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px .5px 4px 0px',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            <Image
              src={blogItem?.coverImage}
              alt="blog"
              width={300}
              height={200}
              style={{
                width: '100%',
                borderRadius: '20px 20px 0 0px',
                height: '200px',
                objectFit: 'cover',
              }}
            />
            <Box
              sx={{
                width: { xs: '100%', md: '100%' },
                height: '200px',
                bgcolor: 'rgba(150,127,93,0.5)',
                position: 'absolute',
                top: 0,
                left: '0',
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
              <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                {blogItem?.title}
              </Typography>

              <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                {blogItem.date || '12 February, 2024'}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
