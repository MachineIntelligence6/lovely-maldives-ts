/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Container, Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import FaqsAccordion from '@/components/Accordion'
import MailBox from '@/components/MailBox'
import useApiStore from '@/stores/themeApiStore'

export default function page() {
  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Box sx={{ pt: { md: '180px', xs: '100px' }, bgcolor: themeData?.bgColor }}>
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
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '20', md: '22px' },
              mt: { xs: '40px', md: '0' },
            }}
          >
            Our Frequently Asked Questions (FAQ) is tailor-made to assist
            tourists visiting to the Maldives and will be covering a wide range
            of questions by tourists regarding the tourist Visa, rules and
            regulations and several other areas.
          </Typography>
          <Typography
            sx={{ display: { xs: 'none', md: 'block' }, fontSize: '22px' }}
          >
            Our Frequently Asked Questions (FAQ) is tailor-made to assist
            tourists visiting to the Maldives and will be covering a wide range
            of questions by tourists regarding the tourist Visa, rules and
            regulations and several other areas. Our Frequently Asked Questions
            (FAQ) is tailor-made to assist tourists visiting to the Maldives and
            will be covering a wide range of questions by tourists regarding the
            tourist Visa, rules and regulations and several other areas.
          </Typography>
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
            <Typography sx={{ mt: 2 }}>Visa and Arrival</Typography>
            <Typography sx={{ mt: 2 }}>Legal Queries</Typography>
            <Typography sx={{ mt: 2 }}>General Questions</Typography>
            <Typography sx={{ mt: 2, mb: 4 }}>
              More Category Add from Beknd
            </Typography>
          </Box>
        </Box>
        <FaqsAccordion />
        {/* <Box
          sx={{
            mt: { xs: '60px', md: '120px' },
            width: { xs: '90%', md: '55%' },
            height: { xs: '250px', md: '350px' },
            mx: 'auto',
            borderRadius: '25px',
            position: 'relative',
            bgcolor: 'var(--blue)',
            textAlign: 'center',
          }}
        >
          <Diversity2Icon
            sx={{
              color: 'white',
              mt: { xs: '7%', md: '10%' },
              fontSize: '45px',
            }}
          />
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '16px', md: '24px' },
              fontWeight: 200,
              textAlign: 'center',
              mt: '20px',
              px: 4,
            }}
          >
            Subscribe to get the latest news and offers by Lovely Maldives
          </Typography>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter email adress"
              multiline
              className="input"
              // maxRows={10}
              sx={{
                bgcolor: 'white',
                mt: '20px',
                borderRadius: '10px',
                width: '60%',
                position: 'relative',
              }}
            />
            <SendIcon
              sx={{
                position: 'absolute',
                top: { xs: '70%', md: '71%' },
                right: '22%',
                color: 'var(--blue)',
              }}
            />
          </Box>
        </Box> */}
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
