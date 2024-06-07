/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */

'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Close from '@mui/icons-material/Close'
import DragHandle from '@mui/icons-material/DragHandle'

import useMediaQuery from '@mui/system/useMediaQuery'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useMenuStore } from '@/providers/menu-store-provider'
import MobileNav from './MobileNav'
import SubNav from './SubNav'

// const profilePic = '/Images/logo.svg'
// const profilePicCol = '/Images/logo-colored.svg'
import profilePic from '../../public/Images/logo.svg'
import profilePicCol from '../../public/Images/logo-colored.svg'

function Header(props: any) {
  const { data } = props
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const isOpen = useMenuStore((state) => state.isOpen)
  const open = useMenuStore((state) => state.open)
  const close = useMenuStore((state) => state.close)
  const toggleMenu = useMenuStore((state) => state.toggleMenu)
  const { scrollY } = useScroll()
  const [headerData, setHeaderData] = useState(null as any)

  const menuItem = [
    { label: 'About Maldives', route: '/about-maldives' },
    { label: 'Hotels', route: '/resorts' },
    { label: 'About us', route: '/about-us' },
    { label: 'Blog', route: '/blogs' },
  ]

  const [isScrolled, setIsScrolled] = React.useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })
  const handleResize = () => {
    if (lessThanMd) {
      close()
    }
  }

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

  React.useEffect(() => {
    if (data?.id) {
      console.log('inner')
      setHeaderData(data)
    }
  }, [])
  console.log('header data is =>>> ', headerData)
  return (
    <Box component="header">
      <AppBar
        component="nav"
        className={isScrolled ? 'scrolled' : ''}
        sx={{
          boxShadow: isScrolled
            ? isOpen
              ? 'none'
              : '0 0 25px rgb(0 0 0 / 10%)'
            : 'none',
          width: '100%',
          background: isScrolled
            ? isOpen && lessThanMd
              ? data?.otherBgcolor || 'var(--brown)'
              : data?.heroBgcolor || 'white'
            : data?.otherBgcolor || 'var(--brown)',
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
            py: '12px',
          }}
        >
          <Box sx={{ visibility: { md: 'visible', xs: 'hidden' } }}>
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
                component={Image}
                src={isScrolled ? profilePicCol : profilePic}
                alt="Logo"
                width={95.6}
                height={60}
              />
            </Link>
          </Box>
          <Box>
            {lessThanMd ? (
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
            ) : (
              <Button
                title="Enquire"
                sx={{
                  color: 'white',
                  bgcolor: 'var(--brown)',
                  px: 2.4,
                  py: 1.2,
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
              >
                ENQUIRE
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {lessThanMd ? (
        <MobileNav menuItems={menuItem} />
      ) : (
        <SubNav menuItems={menuItem} />
      )}
    </Box>
  )
}

export default Header
