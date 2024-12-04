/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Container, Box, Typography } from '@mui/material'
import { useEffect, useState, useTransition } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import MailBox from '@/components/MailBox'
import useApiStore from '@/stores/themeApiStore'
import { getContactUsRequest } from '@/utils/api-requests/contactus.request'

function page() {
  const [isPending, startTransition] = useTransition()
  const [editorText, setEditorText] = useState('' as any)
  const [title, setTitle] = useState('')

  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getContactUsData = async () => {
    try {
      startTransition(async () => {
        const res = await getContactUsRequest()
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
    getContactUsData()
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Learn more contact us on this page" />
      </Head>
      <Box
        sx={{ mt: { md: '180px', xs: '100px' }, bgcolor: themeData?.bgColor }}
      >
        <Header />
        <Container sx={{ maxWidth: { xs: '100%', md: '90%' } }}>
          <BreadCrumb />
        </Container>
        <Container
          sx={{
            maxWidth: { xs: '100%', md: '80%' },
            px: { xs: '20px', md: '0' },
            margin: { xs: '0', md: 'auto' },
            '@media only screen and (min-width: 1441px)': {
              maxWidth: '1030px !important',
            },
            color: 'var(--white)',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '24px', md: '35px' },
              textAlign: 'center',
              mt: '60px',
            }}
          >
            {title ?? 'CONTACT US'}
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
        <ContactForm />
        <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
          <MailBox />
        </Box>
        <Footer />
      </Box>
    </>
  )
}

export default page
