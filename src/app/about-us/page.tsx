/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Container, Box, Typography, Paper, Button } from '@mui/material'
import { useEffect, useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import About from '@/components/About'
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
    <Box sx={{ pt: { xs: '100px', md: '200px' }, bgcolor: themeData?.bgColor }}>
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
        {/* <Paper
          elevation={0}
          sx={{
            background: 'transparent',
            textAlign: 'center',
            px: { xs: '24px', md: '0px' },
          }}
        >
          {!readMore && (
            <Button
              sx={{
                mt: 5,
                color: 'var(--brown)',
                backgroundColor: 'transparent',
                fontWeight: 600,
                ':hover': {
                  backgroundColor: 'transparent',
                },
                fontSize: '1.4rem',
                mb: '30px',
              }}
              aria-label="More"
              variant="text"
              onClick={showExtraContent}
            >
              Read More
            </Button>
          )}
        </Paper>
        {readMore && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              width: '100%',
              position: 'relative',
              mb: { xs: '30px', md: '0' },
            }}
          >
            <Box sx={{ mt: { xs: '30px', md: '60px' }, color: 'var(--white)' }}>
              <Typography sx={{ mt: '30px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography sx={{ mt: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography sx={{ mt: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography sx={{ mt: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Box>
        )} */}
      </Container>
      <Footer />
    </Box>
  )
}

export default AboutUsPage
