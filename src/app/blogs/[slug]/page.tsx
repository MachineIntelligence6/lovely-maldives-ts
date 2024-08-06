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
        if (data?.status === 200) {
          setBlog(data?.data)
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
    if (!id) return
    try {
      const res = await getRelatedBlogsRequest(id)
      const data = res?.data
      if (data?.status === 200) {
        setRelatedArticles(data?.data)
      }
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
              className="jodit-editor-text-wraper"
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
