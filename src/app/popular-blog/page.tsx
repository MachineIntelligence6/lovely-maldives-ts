/* eslint-disable react/no-array-index-key */

'use client'

import { Box, Grid, Typography, Container } from '@mui/material'
import Image from 'next/image'
import BlogSlider from '@/components/BlogSlider'
import blog from '../../../public/Images/landingTree.jpg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import BlogHeader from '../../components/BlogHeader'

export const popular = [
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
  },
]
export default function PopularBlog({ hide }: { hide: string }) {
  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' } }}>
      {hide === 'none' ? (
        ''
      ) : (
        <>
          <Header />
          <BlogHeader />
        </>
      )}
      <Box>
        <Container>
          <Typography
            sx={{
              fontSize: '35px',
              textAlign: 'center',
              color: 'var(--white)',
              mt: '60px',
            }}
          >
            POPULAR
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <BlogSlider />
          </Box>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              mt: { xs: '0', md: '40px' },
              overflow: 'hidden',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {popular.map((item, index) => (
              <Grid
                item
                xs={4}
                sm={4}
                md={6}
                key={index}
                sx={{ position: 'relative', mt: '60px', borderRadius: '30px' }}
              >
                <Image
                  src={item.image}
                  alt="blog"
                  className="collectionImg"
                  style={{
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '30px',
                  }}
                />
                <Box
                  sx={{
                    width: { xs: '100%', md: '85%' },
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'absolute',
                    color: 'white',
                    bottom: '0%',
                    left: '0',
                    fontSize: '12px',
                    fontWeight: '200',
                    zIndex: '99',
                    bgcolor: 'var(--blue)',
                    borderRadius: '0 0 30px  30px',
                    mt: '20px',
                  }}
                >
                  <Typography sx={{ px: 4, fontSize: '14px' }}>
                    {item.date}
                  </Typography>
                  <Typography sx={{ px: 4, fontSize: '20px', mt: '20px' }}>
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {hide === 'none' ? '' : <Footer />}
    </Box>
  )
}
