'use client'

import { MailOutline, WhatsApp } from '@mui/icons-material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import XIcon from '@mui/icons-material/X'
import LinkIcon from '@mui/icons-material/Link'
import { IconButton, Paper, Typography } from '@mui/material'

export default function ArticleSharer() {
  return (
    <Paper
      elevation={0}
      sx={{
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: { xs: '2px', md: '4px' },
        mb: 4,
        px: { xs: '30px', md: '0px' },
      }}
    >
      <Typography sx={{ mb: '2px', fontWeight: 600 }}>Share Article</Typography>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <XIcon sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <WhatsApp sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <MailOutline sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <FacebookOutlinedIcon sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
      <IconButton
        sx={{
          color: '#000',
          transition: 'ease opacity .3s',
          opacity: 0.8,
          ':hover': {
            background: 'none',
            opacity: 1,
          },
        }}
      >
        <LinkIcon sx={{ fontSize: { xs: '16px', md: '24px' } }} />
      </IconButton>
    </Paper>
  )
}
