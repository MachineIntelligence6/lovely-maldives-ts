/* eslint-disable radix */

'use client'

import { Box, Link } from '@mui/material'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useMenuStore } from '@/providers/menu-store-provider'
import useCategoriesStore from '@/stores/blogCategoriesApiStore'

interface CategoriesProps {
  category: string
  id: string
}

export default function BlogHeader() {
  const constraintsRef = useRef(null)
  const isOpen = useMenuStore((state) => state.isOpen)
  const [headerData, setHeaderData] = useState('' as any)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  const { categories, error, loading, fetchData } = useCategoriesStore(
    (state: any) => ({
      categories: state.categories,
      error: state.error,
      loading: state.loading,
      fetchData: state.fetchData,
    })
  )

  useMotionValueEvent(scrollY, 'change', (latest: any) => {
    setIsScrolled(latest > 0)
  })

  useEffect(() => {
    fetchData()
    const data = JSON.parse(localStorage.getItem('headerData') as any)
    setHeaderData(data)
  }, [])
  return (
    <Box
      sx={{
        background: 'black',
        position: { xs: 'fixed', md: 'fixed' },
        top: {
          xs: '0',
          md: isScrolled
            ? `${parseInt(headerData?.otherHeight)}px`
            : `${parseInt(headerData?.heroHeight)}px`,
        },
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        width: '100%',
        zIndex: 995,
        transform: isOpen ? 'translateY(-30px)' : 'translateY(-78px)',
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'block',
        flexDirection: 'row',
        overflow: 'hidden',
        mt: {
          md: '0',
          xs: isScrolled ? `130px` : `168px`,
        },
        gap: { md: '18px', xs: '0' },
        borderTop: '1px solid lightgray',
      }}
    >
      {' '}
      <Box
        className="blogScroll"
        sx={{
          color: 'white',
          width: '100%',
          overflowX: 'auto',
          bgcolor: 'black',
          mt: {
            sm: isScrolled ? `15px` : 0,
            md: isScrolled ? `120px` : `140px`,
          },
        }}
      >
        <Box
          sx={{
            color: 'white',
            width: '100%',
            WebkitOverflowScrolling: 'touch',
            overflowX: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          component={motion.div}
          ref={constraintsRef}
        >
          <Box
            component={motion.div}
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.8}
            dragMomentum
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              maxWidth: '1920px',
              overflowX: 'scroll',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {categories?.map((category: CategoriesProps) => (
              <Link
                key={category.id}
                sx={{
                  color: 'white',
                  py: 2,
                  textDecoration: 'none',
                  maxWidth: '300px',
                  minWidth: '120px',
                  textAlign: 'center',
                }}
                href={`/blogs?category=${encodeURIComponent(category?.category?.replace(' ', '-')?.toLocaleLowerCase())}`}
              >
                {category?.category}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
