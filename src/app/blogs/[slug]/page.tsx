/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-array-index-key */

'use client'

import { useEffect, useState, useTransition } from 'react'
import { Grid, Typography } from '@mui/material'
import Box from '@mui/system/Box'
import Container from '@mui/system/Container'
import { useParams } from 'next/navigation'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BlogHeader from '@/components/BlogHeader'
import MailBox from '@/components/MailBox'
import ArticlesGallery from '@/components/ArticlesGallery'
import CustomLoader from '@/admin-components/common/CustomLoader'
import {
  getRelatedBlogsRequest,
  getSingleBlogRequest,
} from '@/utils/api-requests/blogs.request'
import useApiStore from '@/stores/themeApiStore'

export default function SingleBlogPage() {
  // const isOpen = useMenuStore((state) => state.isOpen)
  const [blog, setBlog] = useState(null as any)
  const [relatedArticles, setRelatedArticles] = useState([] as any)
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const params = useParams()

  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getBlog = async () => {
    const slug = params?.slug
    try {
      startTransition(async () => {
        const res = await getSingleBlogRequest(slug)
        const data = res?.data
        console.log('blog: ', data)
        if (data?.status === 200) {
          setBlog(data?.data)
        } else {
          console.log('response a get  =>>> ', res)
        }
      })
    } catch (err: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', err)
      throw new Error(err)
    }
  }

  const getRelatedBlogArticles = async (id: string) => {
    console.log('blog?.id ', id)
    if (!id) return
    try {
      // startTransition(async () => {
      const res = await getRelatedBlogsRequest(id)
      const data = res?.data
      console.log('blog: ', data)
      if (data?.status === 200) {
        setRelatedArticles(data?.data)
      } else {
        console.log('response a get  =>>> ', res)
      }
      // })
    } catch (err: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', err)
      throw new Error(err)
    }
  }

  useEffect(() => {
    getBlog()
    fetchData()
  }, [])

  useEffect(() => {
    getRelatedBlogArticles(blog?.id)
  }, [blog?.id])

  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' }, bgcolor: themeData?.bgColor }}>
      {isPending && <CustomLoader />}
      <Header />
      <BlogHeader />
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
              {blog?.title}
            </Typography>
            <Box
              sx={{
                bgcolor: 'transparent',
                '& *': {
                  bgcolor: 'transparent !important',
                },
              }}
              dangerouslySetInnerHTML={{
                __html: blog?.description,
              }}
            />
            {/* <ArticleSharer /> */}
            {/* <Box sx={{ position: 'relative' }}>
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
                  width: { xs: '90%', md: 'auto' },
                  fontSize: { xs: '12px', md: '1.125rem' },
                  mt: 2,
                  textAlign: { xs: 'left', md: 'center' },
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
                  width: { xs: '90%', md: '45%' },
                  fontSize: { xs: '12px', md: '1.125rem' },
                  mt: 2,
                  textAlign: 'left',
                  mb: 5,
                  ml: { xs: 0, md: '175px' },
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
            </Box> */}
          </Grid>
        </Grid>
        <Container
          sx={{
            mt: '60px',
          }}
        >
          <ArticlesGallery blogs={relatedArticles} />
        </Container>
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
