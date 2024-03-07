/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { useState, useEffect } from 'react'
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material'
import Image from 'next/image'
import SendIcon from '@mui/icons-material/Send'
import Diversity2Icon from '@mui/icons-material/Diversity2'
import BlogHeader from '@/components/BlogHeader'
import Footer from '@/components/Footer'

import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import blog from '../../../public/Images/landingTree.jpg'
import articleImage from '../../../public/Images/main.jpg'
import LatestBlog from '../latest-blog/page'
import PopularBlog from '../popular-blog/page'

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
      <BlogHeader />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          mt: '20px',
        }}
      >
        <BreadCrumb linkName2="Blogs" linkName="Home" path="/blog-articles" />
        <LatestBlog hide="none" />
        <PopularBlog hide="none" />
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
            sx={{ mt: { xs: '0', md: '40px' }, overflow: 'hidden' }}
          >
            {addSlice.map((article: any, index: number) => (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                key={index}
                sx={{ position: 'relative', mt: '60px', borderRadius: '30px' }}
              >
                <Image
                  src={article.image}
                  alt="article"
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
              className="buttonHover"
              sx={{
                bgcolor: 'var(--brown)',
                color: 'white',
                px: '50px',
                py: 2,
                mt: '60px',
              }}
              title="More articles"
            >
              MORE ARTICLES
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            mt: { xs: '60px', md: '120px' },
            width: { xs: '90%', md: '55%' },
            height: { xs: '250px', md: '350px' },
            mx: 'auto',
            borderRadius: '25px',
            position: 'relative',
            bgcolor: 'var(--blue)',
            textAlign: 'center',
          }}
        >
          <Diversity2Icon
            sx={{
              color: 'white',
              mt: { xs: '7%', md: '10%' },
              fontSize: '45px',
            }}
          />
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '16px', md: '24px' },
              fontWeight: 200,
              textAlign: 'center',
              mt: '20px',
              px: 4,
            }}
          >
            Subscribe to get the latest news and offers by Lovely Maldives
          </Typography>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter email adress"
              multiline
              className="input"
              // maxRows={10}
              sx={{
                bgcolor: 'white',
                mt: '20px',
                borderRadius: '10px',
                width: '60%',
                position: 'relative',
              }}
            />
            <SendIcon
              sx={{
                position: 'absolute',
                top: { xs: '70%', md: '71%' },
                right: '22%',
                color: 'var(--blue)',
              }}
            />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
