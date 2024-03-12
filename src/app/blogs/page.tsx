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
import { useMenuStore } from '@/providers/menu-store-provider'
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
          position: 'fixed',
          top: { xs: '0', md: '160px' },
          boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
          // py: '20px',
          width: '100%',
          // px: '100px',
          zIndex: 999,
          // opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(160)' : 'translateY(-90%)',
          transition: 'opacity 0.4s, transform 0.4s',
          display: 'block',
          flexDirection: 'row',
          overflow: 'hidden',
          mt: { md: '0', xs: '260px' },
          gap: { md: '18px', xs: '0' },
          borderTop: '1px solid lightgray',
        }}
      >
        <BlogHeader />
      </Box>
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          mt: '120px',
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
                    width: { xs: '100%', md: '91.5%' },
                    height: '50%',
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
