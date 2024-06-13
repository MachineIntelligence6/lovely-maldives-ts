/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-danger-with-children */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { useEffect, useState, useTransition } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import DOMPurify from 'dompurify'

import dynamic from 'next/dynamic'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'

import FilterTray from '@/components/FilterTray'
import SocialSharer from '@/components/SocialSharer'
import {
  getHotelsRequest,
  getResortSectionRequest,
} from '@/utils/api-requests/addHotels.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { getResortFilterRequest } from '@/utils/api-requests/resortfilter.request'

const TopFiveLuxuryResorts = dynamic(
  () => import('@/components/TopFiveLuxuryResorts')
)
const ResortsGallery = dynamic(() => import('@/components/ResortsGallery'))
const Footer = dynamic(() => import('@/components/Footer'))

export const datas = [{}, {}, {}, {}, {}]

export default function ResortsPage() {
  const [isPending, startTransition] = useTransition()
  const [filters, setFilters] = useState([] as any)

  const [sections, setSections] = useState([] as any)
  const [editorText, setEditorText] = useState('')

  const getHotels = async (ids: any, type: string) => {
    if (ids?.length === 0) return
    try {
      if (ids?.[0].length > 0) {
        startTransition(async () => {
          const res = await getHotelsRequest(1, 500, ids)
          const data = res?.data
          console.log('data ', data)
          if (data?.status === 200) {
            setSections(data?.data?.resortSections)
          } else {
            console.log('response about maldives', res)
          }
        })
      }
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const getResortSection = () => {
    try {
      startTransition(async () => {
        const res = await getResortSectionRequest()
        const data = res?.data
        console.log('get resort section data is =>>> ', data)
        if (data?.status === 200) {
          setSections(data?.data?.resortSections)
          data?.data?.resortSections?.map((sec: any) => {
            if (sec?.type === 'text') {
              setEditorText(sec?.description)
            }
            if (sec?.type === 'images_gallery') {
              getHotels(sec?.ids, 'images_gallery')
            }
            if (sec?.type === 'images_slider') {
              getHotels(sec?.ids, 'images_slider')
            }
            // return null
          })
        } else {
          console.log('response about maldives', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const createMarkup = (htmlContent: any) => {
    return { __html: DOMPurify.sanitize(htmlContent) }
  }

  const getFilters = async () => {
    try {
      // startTransition(async () => {
      const res = await getResortFilterRequest()
      const data = res?.data
      console.log('data', data)
      if (data?.status === 200) {
        setFilters(data?.data)
      } else {
        // setAlertMsg({ type: 'error', message: data?.message })
        // setTimeout(() => {
        //   setAlertMsg({ type: '', message: '' })
        // }, 3000)
        console.log('data ', data)
      }
      // })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getResortSection()
    getFilters()
  }, [])

  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' } }}>
      <Header />
      {isPending && <CustomLoader />}
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
        <FilterTray filters={filters} />
      </Container>
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '0px', md: '120px' },
        }}
      >
        {sections?.map((sec: any, index: number) => {
          if (sec?.type === 'text') {
            return (
              <div
                className="quill-content"
                dangerouslySetInnerHTML={createMarkup(sec?.description)}
              />
            )
          }
          if (sec?.type === 'images_slider') {
            return (
              <Box key={`slider_${index}`}>
                <TopFiveLuxuryResorts
                  heading="TOP FIVE LUXURY RESORTS"
                  button="none"
                  iconShow="flex"
                  radius="20px"
                  bottomradius="0 0 20px  20px"
                  resorts={sec?.hotels}
                  isAdminSide={false}
                />
              </Box>
            )
          }
          if (sec?.type === 'images_gallery') {
            return <ResortsGallery resorts={sec?.hotels} />
          }

          return null
        })}

        {/* <Typography
          variant="h2"
          sx={{
            mt: { xs: '30px', md: '40px' },
            color: 'var(--white)',
            textAlign: 'center',
            fontSize: { xs: '22px', md: '30px' },
            fontWeight: 400,
          }}
        >
          ALL RESORTS
        </Typography> */}
        {/* <Box sx={{ my: { xs: '20px', md: '30px' } }}>
          <SocialSharer />
        </Box> */}
        {/* <Box
          sx={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: { xs: 'block', md: 'none' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '14px', md: '16px' },
              px: { xs: '20px', md: '0' },
            }}
          >
            There are over 150+ resorts in the Maldives. Here at Lovely
            Maldives, we are curating one of the nest resorts in the Maldives.
          </Typography>
        </Box> */}
        {/* <Box
          sx={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '14px', md: '16px' },
              px: { xs: '20px', md: '0' },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '14px', md: '22px' },
              px: { xs: '20px', md: '0' },
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est Century Gothic
          </Typography>
        </Box> */}
      </Container>
      <Footer />
    </Box>
  )
}
