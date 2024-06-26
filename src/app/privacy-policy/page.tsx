/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState, useTransition } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import { privacyPolicyData } from '@/components/PrivacyPolicy'
import MailBox from '@/components/MailBox'
import useApiStore from '@/stores/themeApiStore'
import { getPrivacyPolicyRequest } from '@/utils/api-requests/privacy-policy.request'
import CustomLoader from '@/admin-components/common/CustomLoader'

export default function PrivacyPolicyPage() {
  const [isPending, startTransition] = useTransition()
  const [policies, setPolicies] = useState([] as any)
  const [title, setTitle] = useState('')
  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getPrivacyPolicy = async () => {
    try {
      startTransition(async () => {
        const res = await getPrivacyPolicyRequest()
        const data = res?.data
        if (data?.status === 200) {
          setPolicies(data?.data?.policies)
          setTitle(data?.data?.title)
        } else {
          console.log('privacy policy else ', data)
        }
      })
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  useEffect(() => {
    getPrivacyPolicy()
    fetchData()
  }, [])
  return (
    <Box sx={{ pt: { xs: '0px', md: '180px' }, bgcolor: themeData?.bgColor }}>
      {isPending && <CustomLoader />}
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: { xs: '120px', md: '60px' },
        }}
      >
        <BreadCrumb />
      </Container>
      <Container
        sx={{
          mt: { xs: '60px', md: '60px' },
          maxWidth: '80%',
          px: '0 !important',
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '85% ',
          },
        }}
      >
        <Box sx={{ mt: 7, mb: 12 }}>
          {policies?.map((policy: any, index: number) => {
            return (
              <Accordion
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{
                  mt: '15px',
                  py: '10px',
                  px: '0 !important',
                  boxShadow: 'none',
                  border: '1px solid rgb(223, 223, 223)',
                  bgcolor: 'white',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography sx={{ px: 1 }}>{policy?.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ px: 1 }}>
                    <Box
                      sx={{
                        bgcolor: 'transparent',
                        '& *': {
                          bgcolor: 'transparent !important',
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: policy?.answer,
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Box>
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
