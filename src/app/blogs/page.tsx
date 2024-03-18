/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { useState, useEffect } from 'react'
import { Container, Box, Typography, Grid, Button } from '@mui/material'
import Image from 'next/image'
import BlogHeader from '@/components/BlogHeader'
import Footer from '@/components/Footer'

import Header from '@/components/Header'
import { useMenuStore } from '@/providers/menu-store-provider'
import MailBox from '@/components/MailBox'
import LatestBlogs from '@/components/LatestBlogs'
import PopularBlogs from '@/components/PopularBlogs'
import blog from '../../../public/Images/landingTree.jpg'
import articleImage from '../../../public/Images/main.jpg'

export const articles: any[] = [
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
  },
  {
    image: articleImage,
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
    image: articleImage,
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
    image: articleImage,
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

export default function Page() {
  const [addSlice, setAddSlice] = useState<any>([] as any)
  const { isOpen } = useMenuStore((state) => state)

  useEffect(() => {
    const windowWidth = window.innerWidth

    if (windowWidth < 768) {
      const slicedArticles: any[] = articles.slice(0, 3)
      setAddSlice(slicedArticles as any[])
    } else {
      setAddSlice(articles as any[])
    }
  }, [])
  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' } }}>
      <Header />
      <Box
        sx={{
          background: 'black',
          position: { xs: 'unset', md: 'fixed' },
          top: { xs: '0', md: '172px' },
          boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
          width: '100%',
          zIndex: 999,
          // opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0px)' : 'translateY(-120px)',
          transition: 'opacity 0.4s, transform 0.4s',
          display: 'block',
          flexDirection: 'row',
          overflow: 'hidden',
          mt: { md: '0', xs: '115px' },
          gap: { md: '18px', xs: '0' },
          borderTop: '1px solid lightgray',
        }}
      >
        <BlogHeader />
      </Box>
      <Container
        sx={{
          maxWidth: '80%',
          px: 0,
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >
        <LatestBlogs />
        <PopularBlogs />
        <Box>
          <Typography
            sx={{
              fontSize: '35px',
              textAlign: 'center',
              color: 'var(--white)',
              mt: '60px',
            }}
          >
            ALL ARTICLES
          </Typography>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            spacing={5}
            sx={{ mt: { xs: '0', md: '40px' }, overflow: 'hidden' }}
          >
            {addSlice.map((article: any, index: number) => (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                key={index}
                sx={{ position: 'relative', borderRadius: '30px' }}
              >
                <Image
                  src={article.image}
                  alt="article"
                  // className="collectionImg"
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '30px',
                  }}
                />
                <Box
                  sx={{
                    width: { xs: '91%', md: '91.5%' },
                    height: '35%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'absolute',
                    color: 'white',
                    bottom: '0%',
                    left: '9%',
                    fontSize: '12px',
                    fontWeight: '200',
                    zIndex: '99',
                    bgcolor: 'var(--brown)',
                    borderRadius: '0 0 30px  30px',
                    mt: '20px',
                  }}
                >
                  <Typography sx={{ px: 4, fontSize: '14px' }}>
                    {article.date}
                  </Typography>
                  <Typography sx={{ px: 4, fontSize: '20px', mt: '20px' }}>
                    {article.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              sx={{
                px: '50px',
                py: 2,
                mt: '60px',
                backgroundColor: 'var(--brown)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'var(--blue) !important',
                },
              }}
              title="More articles"
              color="primary"
            >
              MORE ARTICLES
            </Button>
          </Box>
        </Box>
      </Container>
      <MailBox />
      <Footer />
    </Box>
  )
}
