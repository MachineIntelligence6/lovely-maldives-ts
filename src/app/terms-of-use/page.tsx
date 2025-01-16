/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState, useTransition } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import DropdownButton from '@/components/DropdownButton'
import useApiStore from '@/stores/themeApiStore'
import { getTermsRequest } from '@/utils/api-requests/term-os-use.request'
import CustomLoader from '@/admin-components/common/CustomLoader'

export default function TermsOfUsePage() {
  const [isPending, startTransition] = useTransition()
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
      {isPending && <CustomLoader />}
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '96px' },
          mt: { xs: "100px", md: "0px" },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 999
        }}
      >
        <BreadCrumb />
        <DropdownButton />
      </Container>
      <Container
        sx={{
          mt: { xs: '20px', md: '52px' },
          maxWidth: '80%',
          px: 0,
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >

        <Box sx={{ my: 3 }}>
          <Typography variant="h3" sx={{ textAlign: 'center', fontSize: { xs: "2rem", md: "3rem", pb: 3 } }}>
            {terms?.title}
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
              __html: terms?.description,
            }}
          />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
