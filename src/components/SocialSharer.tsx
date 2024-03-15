'use client'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export default function SocialSharer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '200px',
        mx: 'auto',
        color: 'black',
        // mt: '60px',
      }}
    >
      <Typography>Share:</Typography>
      <FacebookRoundedIcon
        sx={{
          fontSize: '18px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      />
      <TwitterIcon
        sx={{
          fontSize: '18px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      />
      <EmailIcon
        sx={{
          fontSize: '18px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      />
      <WhatsAppIcon
        sx={{
          fontSize: '18px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      />
    </Box>
  )
}
