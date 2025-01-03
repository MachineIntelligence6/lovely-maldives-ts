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
import {
  getHotelsRequest,
  getResortSectionRequest,
} from '@/utils/api-requests/addHotels.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { getResortFilterRequest } from '@/utils/api-requests/resortfilter.request'
import useApiStore from '@/stores/themeApiStore'

const TopFiveLuxuryResorts = dynamic(
  () => import('@/components/TopFiveLuxuryResorts')
)
const ResortsGallery = dynamic(() => import('@/components/ResortsGallery'))
const Footer = dynamic(() => import('@/components/Footer'))

export const datas = [{}, {}, {}, {}, {}]

export default function ResortsPage() {
  const [isPending, startTransition] = useTransition()
  const [filters, setFilters] = useState([] as any)
  const [pages, setPages] = useState({
    page: 1,
    limit: 6,
    totalGalleryImages: 0,
  })
  const [isFullyLoaded, setIsFullyLoaded] = useState(false)
  const [resortsData, setResortsData] = useState([] as any)
  const [sections, setSections] = useState([] as any)
  const [editorText, setEditorText] = useState('')
  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getHotels = async (ids: any, type: string) => {
    if (ids?.length === 0) return
    try {
      if (ids?.[0].length > 0) {
        startTransition(async () => {
          const res = await getHotelsRequest(1, 500, ids)
          const data = res?.data
          if (data?.status === 200) {
            setSections(data?.data?.resortSections)
          }
        })
      }
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  const getResortSection = () => {
    try {
      startTransition(async () => {
        const res = await getResortSectionRequest(pages)
        const data = res?.data
        if (data?.status === 200) {
          setSections(data?.data)
          setPages({
            ...pages,
            totalGalleryImages: data?.totalGalleryImages,
          })
          data?.data?.map((sec: any) => {
            if (sec?.type === 'text') {
              setEditorText(sec?.description)
            }
            if (sec?.type === 'images_gallery') {
              setResortsData([...resortsData, ...sec.hotels])
            }
          })
        }
      })
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  const createMarkup = (htmlContent: any) => {
    return { __html: DOMPurify.sanitize(htmlContent) }
  }

  const getFilters = async () => {
    try {
      const res = await getResortFilterRequest()
      const data = res?.data
      if (data?.status === 200) {
        setFilters(data?.data)
      }
    } catch (err: any) {
      console.log('err ', err)
    }
  }

  const loadMore = () => {
    setPages({ ...pages, page: (pages.page + 1) as any })
  }

  useEffect(() => {
    getResortSection()
    getFilters()
  }, [pages?.page])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ pt: { xs: '120px', md: '190px' }, bgcolor: themeData?.bgColor }}>
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
          px: { xs: '30px', md: '120px' },
        }}
      >
        {sections?.map((sec: any, index: number) => {
          if (sec?.type === 'text') {
            return (
              <Box
                key={`text_${index}`}
                sx={{ maxWidth: '1000px !important', mx: 'auto' }}
              >
                <Box
                  className="quill-content jodit-editor-text-wraper"
                  sx={{
                    bgcolor: 'transparent',
                    '& *': {
                      bgcolor: 'transparent !important',
                    },
                  }}
                  dangerouslySetInnerHTML={createMarkup(sec?.description)}
                />
              </Box>
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
            return (
              <ResortsGallery
                key={`gallery_${index}`}
                resorts={resortsData}
                loadMore={loadMore}
                pages={pages}
                isFullyLoaded={isFullyLoaded}
              />
            )
          }

          return null
        })}
      </Container>
      <Footer />
    </Box>
  )
}
