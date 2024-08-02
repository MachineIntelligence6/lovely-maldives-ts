/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Container, Box, Typography } from '@mui/material'
import { useEffect, useRef, useState, useTransition } from 'react'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import FaqsAccordion from '@/components/Accordion'
import MailBox from '@/components/MailBox'
import useApiStore from '@/stores/themeApiStore'
import { getFaqRequest } from '@/utils/api-requests/faqs.request'
import CustomLoader from '@/admin-components/common/CustomLoader'

export default function Page() {
  const [isPending, startTransition] = useTransition()
  const refs = useRef<(HTMLDivElement | null)[]>([])

  const [faqs, setFaqs] = useState({} as any)
  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getFaqs = async () => {
    try {
      startTransition(async () => {
        const res = await getFaqRequest()
        const data = res?.data
        if (data?.status === 200) {
          setFaqs(data?.data)
        }
      })
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  const handleCategoryClick = (index: number) => {
    if (refs.current[index]) {
      const element = refs.current[index]
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - 100 // Adjust -50 to however many pixels before the actual view you need

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    getFaqs()
    fetchData()
  }, [])
  return (
    <Box sx={{ pt: { md: '180px', xs: '100px' }, bgcolor: themeData?.bgColor }}>
      {isPending && <CustomLoader />}
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
        <Box sx={{ mt: { xs: '40px', md: '60px' } }}>
          <Typography
            sx={{
              display: { xs: 'block', md: 'none' },
              fontSize: '20px',
              fontWeight: '600px',
              color: 'var(--white)',
              textAlign: 'center',
            }}
          >
            {faqs?.title}
          </Typography>
          <Box
            sx={{
              mt: { xs: '40px', md: '0' },
              bgcolor: 'transparent',
              '& *': {
                bgcolor: 'transparent !important',
              },
            }}
            dangerouslySetInnerHTML={{
              __html: faqs?.description,
            }}
          />
          <Box
            sx={{
              width: { xs: 'auto', md: '75%' },
              bgcolor: '#E5E4E2',
              color: 'black',
              py: 3,
              px: 2,
              borderRadius: '20px',
              mt: { xs: '40px', md: '60px' },
            }}
          >
            <Typography sx={{ fontWeight: 600, mt: 2 }}>Categories:</Typography>
            {faqs?.faqs?.map((faq: any, index: number) => (
              <Typography
                key={index}
                sx={{ mt: 2, cursor: 'pointer' }}
                onClick={() => handleCategoryClick(index)}
              >
                {faq?.category}
              </Typography>
            ))}
          </Box>
        </Box>
        <FaqsAccordion faqs={faqs?.faqs} refs={refs} />
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
