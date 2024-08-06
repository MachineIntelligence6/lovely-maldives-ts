'use client'

/* eslint-disable radix */
import Box from '@mui/system/Box'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import { useMenuStore } from '@/providers/menu-store-provider'
import NavItems from './NavItems'
import SearchModal from './SearchModal'

export default function SubNav({ menuItems, isScrolled }: any) {
  const isOpen = useMenuStore((state) => state.isOpen)
  const [open, setOpen] = useState(false)

  const handleSearchModelOpen = () => setOpen(!open)
  return (
    <>
      <SearchModal open={open} handleSearchModelOpen={handleSearchModelOpen} />
      <Box
        component="nav"
        sx={{
          background: menuItems?.menusBgcolor || 'white',
          position: 'fixed',
          top: {
            xs: '0',
            md: isScrolled
              ? `${parseInt(menuItems?.otherHeight) + 23}px`
              : `${parseInt(menuItems?.heroHeight) + 24}px`,
          },
          borderBottom: '1px solid silver',
          py: '10px',
          width: '100%',
          px: '100px',
          zIndex: 997,
          opacity: isOpen ? 1 : 0,
          transform: isOpen
            ? isScrolled
              ? 'translateY(20%)'
              : 'translateY(0%)'
            : 'translateY(-100%)',
          transition: 'opacity 0.4s, transform 0.4s',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflow: 'hidden',
          mt: { md: isScrolled ? '-28px' : '0px', xs: '85px' },
          gap: { md: '1px', xs: '0' },
          borderTop: '1.5px solid lightgray',
          '@media only screen and (min-width: 1600px)': {
            borderTop: '1.5px solid lightgray',
            top: '91px',
          },
        }}
      >
        <NavItems items={menuItems?.menus} />
        <IconButton
          type="button"
          sx={{ p: '10px', mt: 1 }}
          aria-label="search"
          onClick={handleSearchModelOpen}
        >
          <SearchIcon sx={{ fontSize: '28px', color: 'var(--brown)' }} />
        </IconButton>
      </Box>
    </>
  )
}
