import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Avatar, Box, Stack, Toolbar } from '@mui/material'
import ProfileDropdown from './ProfileDropdown'

const TopBar = () => {
  return (
    <Box sx={{ width: '100%', float: 'right', height: '62px' }}>
      <AppBar
        position="relative"
        sx={{
          bgcolor: 'white',
          boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
          borderRadius: '6px',
        }}
      >
        <Toolbar sx={{ height: '62px' }}>
          <Stack
            direction="row"
            gap="1rem"
            alignItems="center"
            justifyContent={{
              xs: 'space-between',
              md: 'space-between',
              lg: 'end',
            }}
            sx={{ width: '100%' }}
          >
            <MenuIcon
              sx={{
                color: '#4B465C',
                fontSize: '25px',
                cursor: 'pointer',
                display: { xs: 'block', md: 'block', lg: 'none' },
              }}
              // onClick={() => dispatch(toggleHamburger(true))}
            />
            <Stack
              direction="row"
              gap="1rem"
              alignItems="center"
              justifyContent="end"
            >
              <DarkModeIcon
                sx={{
                  color: 'var(--brown)',
                  fontSize: '28px',
                  cursor: 'pointer',
                }}
              />
              <NotificationsNoneIcon
                sx={{
                  color: 'var(--brown)',
                  fontSize: '28px',
                  cursor: 'pointer',
                }}
              />
              {/* <Avatar
                alt="Remy Sharp"
                sx={{ width: '38px', height: '38px', cursor: 'pointer' }}
                src="/admin-images/img1.png"
              /> */}
              <ProfileDropdown />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopBar
