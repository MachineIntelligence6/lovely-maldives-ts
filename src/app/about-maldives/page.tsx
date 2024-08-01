/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Container, Box, Typography, Button } from '@mui/material'
import { useEffect, useState, useTransition } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import MailBox from '@/components/MailBox'
import { getAboutMaldivesRequest } from '@/utils/api-requests/about-maldives.request'
import useApiStore from '@/stores/themeApiStore'
import CustomLoader from '@/admin-components/common/CustomLoader'

export default function Page() {
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
        const res = await getAboutMaldivesRequest()
        const data = res?.data
        if (data?.status === 200) {
          setEditorText(data?.data?.description)
          setTitle(data?.data?.title)
        }
      })
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  useEffect(() => {
    getAboutMaldives()
    fetchData()
  }, [])
  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' }, bgcolor: themeData?.bgColor }}>
      <Header />
      {isPending && <CustomLoader />}
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
          sx={{
            bgcolor: 'transparent',
            '& *': {
              bgcolor: 'transparent !important',
            },
            '& img': {
              maxWidth: '100% !important',
              height: 'auto',
            },
          }}
          dangerouslySetInnerHTML={{
            __html: editorText,
          }}
        />

        <Box sx={{ textAlign: 'center', mt: '60px' }}>
          <Button
            sx={{
              bgcolor: 'var(--brown)',
              px: '30px',
              py: 2,
              '&:hover': {
                backgroundColor: 'var(--blue) !important',
              },
            }}
            aria-label="Back to home"
            title="Back to home"
          >
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
              BACK TO HOME
            </Link>
          </Button>
        </Box>
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
