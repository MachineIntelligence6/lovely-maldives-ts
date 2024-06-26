'use client'

import { Box, IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

const SearchModal = (props: any) => {
  const { open, handleSearchModelOpen } = props
  return (
    <Box
      sx={{
        position: 'fixed',
        top: open ? 0 : '15%',
        left: open ? 0 : '80%',
        right: open ? 0 : '20%',
        bottom: open ? 0 : '85%',
        bgcolor: 'white',
        transition: 'all .2s ease-in-out',
        zIndex: 99999,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '1rem', md: '2rem' },
            top: { xs: '1rem', md: '2rem' },
          }}
        >
          <CloseIcon
            sx={{
              fontSize: { xs: '25px', md: '40px' },
              color: 'var(--brown)',
              cursor: 'pointer',
            }}
            onClick={handleSearchModelOpen}
          />
        </Box>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 350,
            mt: 1,
            boxShadow: 'none',
            borderBottom: '1px solid #666',
            borderRadius: 0,
            bgcolor: 'transparent',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
            inputProps={{ 'aria-label': 'search here' }}
          />
          <IconButton
            type="button"
            sx={{ px: '10px' }}
            aria-label="search"
            onClick={handleSearchModelOpen}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  )
}

export default SearchModal
