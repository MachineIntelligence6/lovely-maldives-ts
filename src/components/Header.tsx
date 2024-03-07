/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useMediaQuery, AppBar, Toolbar } from '@mui/material'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NavItems from './NavItems'
import IconMenu from './IconMenu'

const profilePic = '/Images/logo-png.png'
const profilePicCol = '/Images/logo-colored.png'

function SubNav({ menuItems, isOpen }: any) {
  return (
    <Box
      component="nav"
      sx={{
        background: 'white',
        position: 'fixed',
        top: { xs: '0', md: '91px' },
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        py: '20px',
        width: '100%',
        px: '100px',
        zIndex: 999,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.4s, transform 0.4s',
        height: { md: 'initial', xs: '100vh' },
        // visibility: { md: "visible", xs: "hidden" },
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        overflow: 'hidden',
        gap: '18px',
        borderTop: '1px solid lightgray',
      }}
    >
      <NavItems items={menuItems} />
    </Box>
  )
}

function Header() {
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))

  const menuItem = [
    { label: 'About Maldives', route: '/' },
    { label: 'Hotels', route: '/resorts' },
    { label: 'About us', route: '/about-us' },
    { label: 'Blog', route: '/blog' },
    { label: 'New Title', route: '/' },
  ]

  const [isScrolled, setIsScrolled] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    setIsScrolled(scrollTop > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!lessThanMd) {
      setOpenMenu(!isScrolled)
    }
  }, [isScrolled])

  const openNavMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <Box component="header">
      <AppBar
        className={isScrolled ? 'scrolled' : ''}
        sx={{
          justifyContent: 'center',
          boxShadow: isScrolled
            ? openMenu
              ? 'none'
              : '0 0 25px rgb(0 0 0 / 10%)'
            : 'none',
          width: '100%',
          background: isScrolled ? 'white' : 'var(--brown)',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between', // { md: "space-between", xs: "flex-start" },
            alignItems: 'center',
            py: '12px',
          }}
        >
          <Box sx={{ visibility: { md: 'visible', xs: 'hidden' } }}>
            <Button
              className="menuBtn"
              disableRipple
              sx={{
                height: '25px',
                mt: '20px',
              }}
              title="Menu button"
              onClick={openNavMenu}
            >
              <IconMenu isVisible={openMenu} />
            </Button>
          </Box>
          <Box>
            <Image
              src={isScrolled ? profilePicCol : profilePic}
              alt="Logo"
              width={100}
              height={60}
            />
          </Box>
          {/* <Box
            sx={{
              visibility: isScrolled
                ? { md: "visible", xs: "hidden" }
                : "hidden",
            }}
          ></Box> */}
          <Box>
            {lessThanMd ? (
              <Button
                className="menuBtn"
                disableRipple
                sx={{
                  height: '25px',
                }}
                title="Menu button"
                onClick={openNavMenu}
              >
                <IconMenu isVisible={openMenu} />
              </Button>
            ) : (
              <Button
                className="buttonHover"
                title="Enquire"
                sx={{
                  color: 'white',
                  bgcolor: 'var(--brown)',
                  px: 2.4,
                  py: 1.2,
                  // visibility: isScrolled
                  // ? { md: "visible", xs: "hidden" }
                  // : "hidden",
                  visibility: isScrolled ? 'visible' : 'hidden',
                  opacity: isScrolled ? '1' : '0',
                  transition: isScrolled
                    ? 'opacity .3s linear'
                    : 'visibility 0s linear .3s, opacity .3s ease-in-out',
                }}
              >
                ENQUIRE
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <SubNav menuItems={menuItem} isOpen={openMenu} />
    </Box>
  )
}

export default Header
