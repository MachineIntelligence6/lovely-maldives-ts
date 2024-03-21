/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { useState, useEffect } from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
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
    slug: 'seyta-opens-dhunthari-resort',
  },
  {
    image: articleImage,
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
  {
    image: articleImage,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-4',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-5',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-6',
  },
  {
    image: articleImage,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-7',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-8',
  },
]

export default function Page() {
  const [addSlice, setAddSlice] = useState<any>([] as any)
  const isOpen = useMenuStore((state) => state.isOpen)

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
          top: { xs: '0', md: '168px' },
          boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
          width: '100%',
          zIndex: 999,
          // opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0px)' : 'translateY(-140px)',
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
          // maxWidth: '80%',
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
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: { xs: '30px', md: '40px' },
              gap: { xs: '10px', md: '20px' },
            }}
          >
            {addSlice.map((blogItem: any, index: number) => (
              <Box
                key={index}
                component={Link}
                href={`blogs/${blogItem.slug}`}
                sx={{
                  width: { xs: 'calc(100%)', md: 'calc(33.3% - 20px)' },
                  borderRadius: { xs: 0, md: '20px' },
                  bgcolor: 'var(--brown)',
                  boxSizing: 'border-box',
                  boxShadow: 'rgba(0, 0, 0, 0.05) 0px .5px 4px 0px',
                  textDecoration: 'none',
                  position: 'relative',
                }}
              >
                <Box
                  component={Image}
                  src={blogItem.image}
                  alt="blog"
                  sx={{
                    width: '100%',
                    borderRadius: { xs: 0, md: '20px 20px 0 0px' },
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    width: '100%',
                    height: '200px',
                    bgcolor: 'rgba(150,127,93,0.5)',
                    position: 'absolute',
                    top: '0',
                    // left: { xs: '0', md: '240.5px' },
                    borderRadius: { xs: 0, md: '20px 20px 0 0' },
                  }}
                />
                <Box
                  sx={{
                    // mt: '20px',
                    color: 'white',
                    bgcolor: 'var(--brown)',
                    pb: '20px',
                    px: { xs: '20px', md: '20px' },
                    borderRadius: '0 0 20px 20px ',
                  }}
                >
                  <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                    {blogItem.title}
                  </Typography>

                  <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                    {blogItem.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
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
        <Box>
          <Typography
            sx={{
              fontSize: '35px',
              textAlign: 'center',
              color: 'var(--white)',
              mt: '60px',
            }}
          >
            More from Newsroom
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: { xs: '30px', md: '40px' },
            }}
          >
            {addSlice.map((blogItem: any, index: number) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '100%', md: '50%' },
                  borderBottom: '1px solid lightgray',
                  px: '0px',
                }}
              >
                <Box
                  component={Link}
                  href={`blogs/${blogItem.slug}`}
                  sx={{
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: '264px',
                      borderRadius: '20px',
                      height: { xs: '90px', md: '132px' },
                      objectFit: 'cover',
                      backgroundPosition: '100%',
                      backgroundSize: 'cover',
                      backgroundImage: `url(${blogItem.image.src})`,
                    }}
                  />
                  <Box
                    sx={{
                      width: { xs: '104px', md: '140px' },
                      height: { xs: '90px', md: '132px' },
                      bgcolor: 'rgba(150,127,93,0.5)',
                      position: 'absolute',
                      top: { xs: '43px', md: '10px' },
                      left: 0,
                      borderRadius: '20px',
                    }}
                  />
                  <Box
                    sx={{
                      mt: '20px',
                      color: 'var(--white)',
                      pb: '20px',
                      px: { xs: '20px', md: '20px' },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontSize: '16px', mt: '20px', fontWeight: 600 }}
                      >
                        {blogItem.title}
                      </Typography>

                      <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                        {blogItem.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
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
              title="View Archive"
              color="primary"
            >
              VIEW ARCHIVE
            </Button>
          </Box>
        </Box>
        <MailBox />
      </Container>
      <Footer />
    </Box>
  )
}
