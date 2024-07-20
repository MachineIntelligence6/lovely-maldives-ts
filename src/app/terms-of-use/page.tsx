/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState, useTransition } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import DropdownButton from '@/components/DropdownButton'
import Markdown from '@/components/Markdown'
import termsOfUse from '@/md/terms-of-use.md'
import useApiStore from '@/stores/themeApiStore'
import { getTermsRequest } from '@/utils/api-requests/term-os-use.request'

export default function TermsOfUsePage() {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [terms, setTerms] = useState('' as any)

  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getTermsofUse = async () => {
    try {
      startTransition(async () => {
        const res = await getTermsRequest()
        const data = res?.data
        if (data?.status === 200) {
          setTerms(data?.data)
        }
      })
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  useEffect(() => {
    getTermsofUse()
    fetchData()
  }, [])
  return (
    <Box sx={{ pt: { xs: '0px', md: '190px' }, bgcolor: themeData?.bgColor }}>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <BreadCrumb />
        <DropdownButton />
      </Container>
      <Container
        sx={{
          mt: { xs: '60px', md: '100px' },
          maxWidth: '80%',
          px: 0,
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
            {terms?.title}
          </Typography>
          <Box
            sx={{
              bgcolor: 'transparent',
              '& *': {
                bgcolor: 'transparent !important',
              },
            }}
            dangerouslySetInnerHTML={{
              __html: terms?.description,
            }}
          />
          {/* <Markdown>{termsOfUse}</Markdown> */}
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
