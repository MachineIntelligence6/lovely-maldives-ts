/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useMediaQuery, AppBar, Toolbar } from '@mui/material'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useMenuStore } from '@/providers/menu-store-provider'
import NavItems from './NavItems'
import IconMenu from './IconMenu'

const profilePic = '/Images/logo-png.png'
const profilePicCol = '/Images/logo-colored.png'

function SubNav({ menuItems, isOpen }: any) {
  // const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
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
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        mt: { md: '0', xs: '85px' },
        gap: { md: '18px', xs: '0' },
        borderTop: '1px solid lightgray',
      }}
    >
      <NavItems items={menuItems} />
    </Box>
  )
}
/*
function MobileNav({ menuItems, isOpen }: any) {
  // const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
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
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        mt: { md: '0', xs: '90px' },
        gap: { md: '18px', xs: '0' },
        borderTop: '1px solid lightgray',
      }}
    >
      <NavItems items={menuItems} />
    </Box>
  )
}
*/

// function SubNav() {
//   return <Box>SubNav</Box>
// }

function MobileNav({ menuItems }: any) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { isOpen, open, close } = useMenuStore((state) => state)
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        bgcolor: 'red',
        position: 'fixed',
        top: '0',
        zIndex: 999,
        transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',

        background: 'white',
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        py: '20px',
        px: '100px',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        mt: { md: '0', xs: '90px' },
        gap: { md: '18px', xs: '0' },
        borderTop: '1px solid lightgray',
      }}
    >
      <NavItems items={menuItems} />
    </Box>
  )
}

function Header() {
  const lessThanMd = useMediaQuery((theme: any) => theme.breakpoints.down('md'))
  const { isOpen, toggleMenu } = useMenuStore((state) => state)

  const menuItem = [
    { label: 'About Maldives', route: '/' },
    { label: 'Hotels', route: '/resorts' },
    { label: 'About us', route: '/about-us' },
    { label: 'Blog', route: '/blogs' },
    { label: 'New Title', route: '/' },
  ]

  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    // const resizeWindow = window.innerWidth
    setIsScrolled(scrollTop > 0)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    if (lessThanMd) {
      toggleMenu()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isScrolled, lessThanMd, handleResize])

  useEffect(() => {
    if (!lessThanMd) {
      toggleMenu()
    }
  }, [lessThanMd])

  // const toggleMenu = () => {
  //   if(isOpen){
  //     open()
  //   }else{
  //     close()
  //   }
  // }

  return (
    <Box component="header">
      <AppBar
        className={isScrolled ? 'scrolled' : ''}
        sx={{
          justifyContent: 'center',
          boxShadow: isScrolled
            ? isOpen
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
              onClick={toggleMenu}
            >
              <IconMenu isVisible={isOpen} />
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
                onClick={toggleMenu}
              >
                <IconMenu isVisible={isOpen} />
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
      {lessThanMd ? (
        <MobileNav menuItems={menuItem} />
      ) : (
        <SubNav menuItems={menuItem} isOpen={isOpen} />
      )}
    </Box>
  )
}

export default Header
