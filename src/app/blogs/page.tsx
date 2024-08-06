/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { useState, useEffect, useTransition, Suspense } from 'react'
import { Box } from '@mui/material'
import BlogHeader from '@/components/BlogHeader'
import Footer from '@/components/Footer'

import Header from '@/components/Header'
import CustomLoader from '@/admin-components/common/CustomLoader'
import useApiStore from '@/stores/themeApiStore'
import BlogList from '@/components/BlogList'

export default function Page() {
  const [isPending, startTransition] = useTransition()
  const [allBlogs, setAllBlogs] = useState([] as any)
  const [allArticles, setAllArticles] = useState([] as any)
  const [totalBlogs, setTotalBlogs] = useState(null as any)
  const [pages, setPages] = useState({ page: 1, limit: 3 })
  const [latestBlogs, setLatestBlogs] = useState({ category: '', blogs: [] })
  const [popularBlogs, setPopularBlogs] = useState({ category: '', blogs: [] })

  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' }, bgcolor: themeData?.bgColor }}>
      {isPending && <CustomLoader />}
      <Header />
      <BlogHeader />
      <Suspense fallback={<CustomLoader />}>
        <BlogList
          pages={pages}
          setPages={setPages}
          allArticles={allArticles}
          setAllArticles={setAllArticles}
          allBlogs={allBlogs}
          setAllBlogs={setAllBlogs}
          latestBlogs={latestBlogs}
          setLatestBlogs={setLatestBlogs}
          popularBlogs={popularBlogs}
          setPopularBlogs={setPopularBlogs}
          totalBlogs={totalBlogs}
          setTotalBlogs={setTotalBlogs}
        />
      </Suspense>
      <Footer />
    </Box>
  )
}
