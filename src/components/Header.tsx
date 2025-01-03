/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */

'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Close from '@mui/icons-material/Close'
import DragHandle from '@mui/icons-material/DragHandle'

import { useRouter, usePathname } from 'next/navigation'
import useMediaQuery from '@mui/system/useMediaQuery'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useMenuStore } from '@/providers/menu-store-provider'
import apiClient from '@/services/apiClient'
import CustomLoader from '@/admin-components/common/CustomLoader'
import MobileNav from './MobileNav'
import SubNav from './SubNav'
import SearchModal from './SearchModal'
import profilePic from '../../public/Images/logo.svg'
import profilePicCol from '../../public/Images/logo-colored.svg'

function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const isOpen = useMenuStore((state) => state.isOpen)
  const open = useMenuStore((state) => state.open)
  const close = useMenuStore((state) => state.close)
  const toggleMenu = useMenuStore((state) => state.toggleMenu)
  const { scrollY } = useScroll()
  const [localData, setLocalData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [openSearchModal, setOpenSearchModal] = useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isHeaderFetched, setIsHeaderFetched] = useState(false)

  const handleSearchModelOpen = () => setOpenSearchModal(!openSearchModal)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })

  const handleResize = () => {
    if (lessThanMd) {
      close()
    }
  }

  const getHeaderData = useCallback(async () => {
    if (isHeaderFetched) return // Check if header API has already been fetched
    try {
      setLoading(true)
      const res = await apiClient.get('/header')
      const data = res?.data
      setLoading(false)
      if (res?.status === 200) {
        setLocalData(data?.data)
        setIsHeaderFetched(true) // Set flag to true after fetching
      }
    } catch (error: any) {
      setLoading(false)
      console.log('error ', error)
    }
  }, [isHeaderFetched])

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [lessThanMd])

  React.useEffect(() => {
    if (isScrolled) {
      close()
    } else if (!lessThanMd) {
      open()
    } else {
      close()
    }
  }, [isScrolled, lessThanMd])

  // Add CSS classes instead of manipulating inline styles
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const { body } = document
      if (isOpen && lessThanMd) {
        body.classList.add('overflow-hidden')
      } else {
        body.classList.remove('overflow-hidden')
      }
    }
  }, [isOpen, lessThanMd])

  useEffect(() => {
    if (!localData) {
      getHeaderData()
    }
  }, [])

  return (
    <Box component="header">
      <SearchModal
        open={openSearchModal}
        handleSearchModelOpen={handleSearchModelOpen}
      />
      {loading && <CustomLoader />}
      <AppBar
        component="nav"
        className={isScrolled ? 'scrolled' : ''}
        sx={{
          boxShadow: 'none',
          borderBottom: isScrolled
            ? isOpen
              ? 'none'
              : '1px solid silver'
            : 'none',
          width: '100%',
          // height: ,
          background: isScrolled
            ? isOpen && lessThanMd
              ? localData?.heroBgcolor || 'var(--brown)'
              : localData?.otherBgcolor || 'white'
            : localData?.heroBgcolor || 'var(--brown)',
          transition: 'all ease .5s',
          zIndex: 998,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: isScrolled ? '0px' : '12px',
          }}
        >
          <Box
            sx={{
              display: { md: 'block', xs: isScrolled ? 'none' : 'hidden' },
            }}
          >
            <IconButton
              className="menuBtn"
              disableRipple
              sx={{
                height: '100%',
                width: '100%',
                visibility: isScrolled
                  ? { md: 'visible', xs: 'hidden' }
                  : 'hidden',
              }}
              title="Menu button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <Close
                  sx={{
                    color: isScrolled ? 'var(--brown)' : 'white',
                    fontSize: '46px',
                  }}
                />
              ) : (
                <DragHandle
                  sx={{
                    color: isScrolled ? 'var(--brown)' : 'white',
                    fontSize: '46px',
                  }}
                />
              )}
            </IconButton>
          </Box>
          <Box>
            <Link href="/">
              <Box
                sx={{
                  width: isScrolled
                    ? localData?.otherWidth
                    : localData?.heroWidth,
                  height: isScrolled
                    ? localData?.otherHeight
                    : localData?.heroHeight,
                  maxWidth: '120px',
                  maxHeight: '85px',
                  mt: '8px',
                }}
              >
                <Image
                  src={
                    isScrolled
                      ? localData?.otherLogo || profilePicCol
                      : localData?.heroLogo || profilePic
                  }
                  alt="hero logo"
                  width={
                    isScrolled ? localData?.otherWidth : localData?.heroWidth
                  }
                  height={
                    isScrolled ? localData?.otherHeight : localData?.heroHeight
                  }
                  style={{
                    width: isScrolled
                      ? localData?.otherWidth
                      : localData?.heroWidth,
                    height: isScrolled
                      ? localData?.otherHeight
                      : localData?.heroHeight,
                    maxWidth: '120px',
                    maxHeight: '85px',
                  }}
                />
              </Box>
            </Link>
          </Box>
          <Box>
            {lessThanMd ? (
              <>
                {isScrolled && (
                  <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={handleSearchModelOpen}
                  >
                    <SearchIcon
                      sx={{ fontSize: '28px', color: 'var(--brown)' }}
                    />
                  </IconButton>
                )}
                <Button
                  className="menuBtn"
                  disableRipple
                  sx={{
                    height: '25px',
                  }}
                  title="Menu button"
                  aria-label="Menu button"
                  onClick={toggleMenu}
                >
                  {isOpen ? (
                    <Close
                      sx={{
                        color: 'white',
                        fontSize: '46px',
                      }}
                    />
                  ) : (
                    <DragHandle
                      sx={{
                        color: isScrolled ? 'var(--brown)' : 'white',
                        fontSize: '46px',
                      }}
                    />
                  )}
                </Button>
              </>
            ) : (
              pathname === '/' && (
                <Button
                  title="Enquire"
                  sx={{
                    color: 'white',
                    bgcolor: 'var(--brown)',
                    px: 2.4,
                    py: 0.9,
                    visibility: isScrolled ? 'visible' : 'hidden',
                    opacity: isScrolled ? '1' : '0',
                    transition: isScrolled
                      ? 'opacity .3s linear'
                      : 'visibility 0s linear .3s, opacity .3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'var(--blue) !important',
                    },
                  }}
                  aria-label="Enquire"
                  onClick={() => router.push('/hotel-booking')}
                >
                  ENQUIRE
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {loading ? (
        ''
      ) : lessThanMd ? (
        <MobileNav menuItems={localData?.menus} />
      ) : (
        <SubNav menuItems={localData} isScrolled={isScrolled} />
      )}
    </Box>
  )
}

export default Header
