/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Container, Box, Typography } from '@mui/material'
import { useEffect, useState, useTransition } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAboutUsRequest } from '@/utils/api-requests/aboutus-short.request'
import BreadCrumb from '@/components/BreadCrumb'
import useApiStore from '@/stores/themeApiStore'

function AboutUsPage() {
  const [isPending, startTransition] = useTransition()
  const [editorText, setEditorText] = useState('' as any)
  const [title, setTitle] = useState('')

  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getAboutMaldives = async () => {
    try {
      startTransition(async () => {
        const res = await getAboutUsRequest()
        const data = res?.data
        if (data?.status === 200) {
          setEditorText(data?.data?.description)
          setTitle(data?.data?.title)
        }
      })
    } catch (err: any) {
      console.log('err ', error)
    }
  }

  useEffect(() => {
    getAboutMaldives()
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Learn more about us on this page" />
      </Head>
      <Box
        sx={{ pt: { xs: '100px', md: '200px' }, bgcolor: themeData?.bgColor }}
      >
        <Header />
        {/* <About /> */}
        <Container sx={{ maxWidth: { xs: '100%', md: '90%' } }}>
          <BreadCrumb />
        </Container>
        <Container
          sx={{
            maxWidth: { xs: '90%', md: '80%' },
            px: 0,
            mx: { xs: '20px', md: 'auto' },
            '@media only screen and (min-width: 1441px)': {
              maxWidth: '1030px !important',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '24px', md: '35px' },
              color: 'var(--white)',
              textAlign: 'center',
              mt: '60px',
            }}
          >
            {title}
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
              __html: editorText,
            }}
          />
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default AboutUsPage
