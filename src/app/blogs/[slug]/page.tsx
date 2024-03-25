/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-array-index-key */

'use client'

import { MailOutline, WhatsApp } from '@mui/icons-material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import XIcon from '@mui/icons-material/X'
import LinkIcon from '@mui/icons-material/Link'
import { Grid, IconButton, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BlogHeader from '@/components/BlogHeader'
import { useMenuStore } from '@/providers/menu-store-provider'
import MailBox from '@/components/MailBox'
import articleImage from '../../../../public/Images/main.jpg'
import { articles } from '../page'

function ArticleSharer() {
  return (
    <Paper
      elevation={0}
      sx={{
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: { xs: '2px', md: '4px' },
        mb: 4,
        px: { xs: '30px', md: '0px' },
      }}
    >
      <Typography sx={{ mb: '2px', fontWeight: 600 }}>Share Article</Typography>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <XIcon sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <WhatsApp sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <MailOutline sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <FacebookOutlinedIcon sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <LinkIcon sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
    </Paper>
  )
}

export default function SingleBlogPage() {
  const isOpen = useMenuStore((state) => state.isOpen)

  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' } }}>
      <Header />
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
        <BlogHeader />
      </Box>
      <Container
        sx={{
          // maxWidth: '80%',
          // px: { xs: '0px', md: '120px' },
          mt: { xs: '180px', md: '100px' },
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                m: 0,
                mb: 4,
                color: '#666',
                fontWeight: '700',
                textTransform: 'capitalize',
                px: { xs: '30px', md: '0px' },
              }}
            >
              Seyta Opens Dhunthari Resort & Spa Long Heading Capacity here.
            </Typography>
            <ArticleSharer />
            <Box sx={{ position: 'relative' }}>
              <Box
                component={Image}
                src={articleImage}
                alt="Picture of the author"
                sx={{
                  maxHeight: '500px',
                  height: { xs: '300px', md: '500px' },
                  width: '100%',
                  maxWidth: '100%',
                  margin: '0 auto',
                  display: 'block',
                  borderRadius: { xs: '20px', md: '20px' },
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '300px', md: '500px' },
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: { xs: '20px', md: '20px' },
                }}
              />
            </Box>
            <Box sx={{ px: { xs: '30px', md: '0px' } }}>
              <Typography
                paragraph
                sx={{
                  fontSize: { xs: '12px', md: '1.125rem' },
                  mt: 2,
                  textAlign: 'left',
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: '1rem',
                  mt: 2,
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Consectetur voluptate aute duis enim culpa. Nostrud esse nulla
                nostrud proident voluptate veniam. Officia consectetur aliquip
                nostrud ipsum eiusmod aliquip. Mollit ut consectetur adipisicing
                culpa consequat mollit. Est voluptate tempor irure voluptate
                nisi. Aliqua nostrud dolor commodo laboris in sint ex culpa
                velit cupidatat aute est ea mollit.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: '1rem',
                  mt: 2,
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Consectetur voluptate aute duis enim culpa. Nostrud esse nulla
                nostrud proident voluptate veniam. Officia consectetur aliquip
                nostrud ipsum eiusmod aliquip. Mollit ut consectetur adipisicing
                culpa consequat mollit. Est voluptate tempor irure voluptate
                nisi. Aliqua nostrud dolor commodo laboris in sint ex culpa
                velit cupidatat aute est ea mollit.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: '1rem',
                  mt: 2,
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Consectetur voluptate aute duis enim culpa. Nostrud esse nulla
                nostrud proident voluptate veniam. Officia consectetur aliquip
                nostrud ipsum eiusmod aliquip. Mollit ut consectetur adipisicing
                culpa consequat mollit. Est voluptate tempor irure voluptate
                nisi. Aliqua nostrud dolor commodo laboris in sint ex culpa
                velit cupidatat aute est ea mollit.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: '1rem',
                  mt: 2,
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Consectetur voluptate aute duis enim culpa. Nostrud esse nulla
                nostrud proident voluptate veniam. Officia consectetur aliquip
                nostrud ipsum eiusmod aliquip. Mollit ut consectetur adipisicing
                culpa consequat mollit. Est voluptate tempor irure voluptate
                nisi. Aliqua nostrud dolor commodo laboris in sint ex culpa
                velit cupidatat aute est ea mollit.
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                maxHeight: { xs: '250px', md: '350px' },
                maxWidth: { xs: '100%', md: '70%' },
                mx: 'auto',
              }}
            >
              <Box
                component={Image}
                src={articleImage}
                alt="Picture of the author"
                sx={{
                  maxHeight: { xs: '250px', md: '350px' },
                  maxWidth: '100%',
                  margin: '0 auto',
                  display: 'block',
                  borderRadius: { xs: '20px', md: '20px' },
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '250px', md: '350px' },
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: '20px',
                }}
              />
            </Box>
            <Box sx={{ px: { xs: '30px', md: '0px' } }}>
              <Typography
                paragraph
                sx={{
                  fontSize: { xs: '12px', md: '1.125rem' },
                  mt: 2,
                  textAlign: 'left',
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: '1rem',
                  mt: 2,
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Consectetur voluptate aute duis enim culpa. Nostrud esse nulla
                nostrud proident voluptate veniam. Officia consectetur aliquip
                nostrud ipsum eiusmod aliquip. Mollit ut consectetur adipisicing
                culpa consequat mollit. Est voluptate tempor irure voluptate
                nisi. Aliqua nostrud dolor commodo laboris in sint ex culpa
                velit cupidatat aute est ea mollit.
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontSize: '1rem',
                  mt: 2,
                  mb: 5,
                  color: '#666',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  textTransform: 'capitalize',
                }}
              >
                Consectetur voluptate aute duis enim culpa. Nostrud esse nulla
                nostrud proident voluptate veniam. Officia consectetur aliquip
                nostrud ipsum eiusmod aliquip. Mollit ut consectetur adipisicing
                culpa consequat mollit. Est voluptate tempor irure voluptate
                nisi. Aliqua nostrud dolor commodo laboris in sint ex culpa
                velit cupidatat aute est ea mollit.
              </Typography>
            </Box>
            <Box
              sx={{
                px: { xs: 0, md: '20px' },
                margin: '0 auto',
                maxWidth: { xs: '100%', md: '70%' },
              }}
            >
              <ArticleSharer />
            </Box>
          </Grid>
        </Grid>
        <Container
          sx={{
            mt: '60px',
          }}
        >
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
              {articles.slice(0, 3).map((blogItem: any, index: number) => (
                <Box
                  key={index}
                  component={Link}
                  href={`blogs/${blogItem.slug}`}
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
                    src={blogItem.image}
                    alt="blog"
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
                      {blogItem.title}
                    </Typography>

                    <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                      {blogItem.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
